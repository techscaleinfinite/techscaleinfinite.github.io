import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 24000;
const MOUNT_PATH = 'S3 Browser/Jellyfin/media/';

const STEPS = [
  { id: 'pv1',       start: 0,     end: 4000,  img: '/images/pv1.jpg' },
  { id: 'click-pv',  start: 4000,  end: 5500,  img: '/images/pv1.jpg' },
  { id: 'pv2',       start: 5500,  end: 8000,  img: '/images/pv2.jpg' },
  { id: 'click-s3',  start: 8000,  end: 9500,  img: '/images/pv2.jpg' },
  { id: 'pv3',       start: 9500,  end: 12000, img: '/images/pv3.jpg' },
  { id: 'click-choose', start: 12000, end: 13500, img: '/images/pv3.jpg' },
  { id: 'pv4',       start: 13500, end: 15000, img: '/images/pv4.jpg' },
  { id: 'typing',    start: 15000, end: 19000, img: '/images/pv4.jpg' },
  { id: 'click-install', start: 19000, end: 20500, img: '/images/pv4.jpg' },
  { id: 'done',      start: 20500, end: 23000, img: '/images/pv4.jpg' },
  { id: 'reset',     start: 23000, end: 24000, img: '/images/pv4.jpg' },
];

function getStep(elapsed) {
  for (const s of STEPS) {
    if (elapsed >= s.start && elapsed < s.end) return s;
  }
  return STEPS[0];
}

const S3StorageVisual = () => {
  const [elapsed, setElapsed] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const tick = useCallback(() => {
    if (!startRef.current) startRef.current = performance.now();
    const now = performance.now();
    setElapsed((now - startRef.current) % TOTAL_CYCLE);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const step = getStep(elapsed);
  const stepId = step.id;

  const typingProgress = stepId === 'typing'
    ? Math.min(1, (elapsed - 15000) / 3500) : 0;
  const typedChars = ['typing', 'click-install', 'done'].includes(stepId)
    ? MOUNT_PATH.length
    : stepId === 'typing' ? Math.floor(typingProgress * MOUNT_PATH.length) : 0;
  const mountText = MOUNT_PATH.slice(0, typedChars);

  const showCursor = (stepId === 'click-pv' || stepId === 'click-s3' ||
    stepId === 'click-choose' || stepId === 'click-install');
  const showRipple = showCursor;
  const showDone = stepId === 'done';

  const cursorPos = {
    'click-pv':    { top: '46.8%', left: '36.2%' },
    'click-s3':    { top: '38%',  left: '43%' },
    'click-choose':{ top: '70.5%', left: '60%' },
    'click-install':{ top: '90%', left: '68%' },
  }[stepId] || { top: '50%', left: '50%' };

  const prevImg = useRef(step.img);
  const transitioning = step.img !== prevImg.current;
  if (step.img !== prevImg.current) prevImg.current = step.img;

  return (
    <div className={styles.wrapper}>
      {/* Preload all images */}
      <link rel="preload" as="image" href="/images/pv1.jpg" />
      <link rel="preload" as="image" href="/images/pv2.jpg" />
      <link rel="preload" as="image" href="/images/pv3.jpg" />
      <link rel="preload" as="image" href="/images/pv4.jpg" />

      {/* Base images — crossfade by stacking */}
      {['/images/pv1.jpg', '/images/pv2.jpg', '/images/pv3.jpg', '/images/pv4.jpg'].map(src => (
        <img
          key={src}
          src={src}
          alt="Persistent Volume setup"
          className={`${styles.baseImage} ${src === step.img ? styles.baseImageActive : ''}`}
          loading="eager"
        />
      ))}

      {/* Animated cursor */}
      {showCursor && (
        <div className={styles.animCursor} style={{ top: cursorPos.top, left: cursorPos.left }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cfv-accent, #6366f1)" stroke="white" strokeWidth="1.5">
            <path d="M5 3l14 8-6 2-3 7z" />
          </svg>
        </div>
      )}

      {/* Click ripple */}
      {showRipple && (
        <div className={styles.clickRipple} style={{ top: cursorPos.top, left: cursorPos.left }} />
      )}

      {/* Mount path typing overlay - positioned over the Mount Path input in pv4 */}
      {(stepId === 'typing' || stepId === 'click-install' || stepId === 'done') && (
        <div className={styles.mountOverlay}>
          <span className={styles.mountText}>
            {stepId === 'typing' ? MOUNT_PATH.slice(0, Math.floor(typingProgress * MOUNT_PATH.length)) : MOUNT_PATH}
            {stepId === 'typing' && <span className={styles.typeCursor}>|</span>}
          </span>
        </div>
      )}

      {/* Success overlay */}
      {showDone && (
        <div className={styles.successOverlay}>
          <div className={styles.successBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Installing Jellyfin...</span>
          </div>
        </div>
      )}

      {/* Step indicator */}
      <div className={styles.stepIndicator}>
        {['Persistent Volume', 'S3 Browser', 'Choose Folder', 'Mount Path', 'Install'].map((label, i) => {
          const stepIndex = (() => {
            if (['pv1', 'click-pv'].includes(stepId)) return 0;
            if (['pv2', 'click-s3'].includes(stepId)) return 1;
            if (['pv3', 'click-choose'].includes(stepId)) return 2;
            if (['pv4', 'typing'].includes(stepId)) return 3;
            if (['click-install', 'done', 'reset'].includes(stepId)) return 4;
            return 0;
          })();
          return (
            <div key={label} className={`${styles.stepDot} ${i < stepIndex ? styles.stepDone : i === stepIndex ? styles.stepCurrent : ''}`}>
              {i < stepIndex ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              ) : (
                <span>{i + 1}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default S3StorageVisual;
