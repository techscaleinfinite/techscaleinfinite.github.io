import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 24000;
const TYPING_FIELDS = [
  { text: 'media',   top: '64%',   left: '37.2%', width: '12%',  height: '5.4%' },
  { text: '/media',  top: '64%',   left: '51.5%', width: '12.3%', height: '5.4%' },
  { text: 'config',  top: '70.3%', left: '37.2%', width: '12%',  height: '5.4%' },
  { text: '/config', top: '70.3%', left: '51.5%', width: '12.3%', height: '5.4%' },
];
const TYPING_START = 15000;
const FIELD_DURATION = 1000;

const STEPS = [
  { id: 'pv1',       start: 0,     end: 4000,  img: '/images/pv1.jpg' },
  { id: 'click-pv',  start: 4000,  end: 5500,  img: '/images/pv1.jpg' },
  { id: 'pv2',       start: 5500,  end: 8000,  img: '/images/pv2.jpg' },
  { id: 'click-s3',  start: 8000,  end: 9500,  img: '/images/pv2.jpg' },
  { id: 'pv3',       start: 9500,  end: 12000, img: '/images/pv3.jpg' },
  { id: 'click-choose', start: 12000, end: 13500, img: '/images/pv3.jpg' },
  { id: 'pv4',       start: 13500, end: 15000, img: '/images/pv4.jpg?v=2' },
  { id: 'typing',    start: 15000, end: 19000, img: '/images/pv4.jpg?v=2' },
  { id: 'click-install', start: 19000, end: 20500, img: '/images/pv4.jpg?v=2' },
  { id: 'done',      start: 20500, end: 23000, img: '/images/pv4.jpg?v=2' },
  { id: 'reset',     start: 23000, end: 24000, img: '/images/pv4.jpg?v=2' },
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
      <link rel="preload" as="image" href="/images/pv4.jpg?v=2" />

      {/* Base images — crossfade by stacking */}
      {['/images/pv1.jpg', '/images/pv2.jpg', '/images/pv3.jpg', '/images/pv4.jpg?v=2'].map(src => (
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

      {/* Volume mount field typing overlays */}
      {(stepId === 'typing' || stepId === 'click-install' || stepId === 'done') &&
        TYPING_FIELDS.map((field, i) => {
          const fieldStart = TYPING_START + i * FIELD_DURATION;
          const typingTime = FIELD_DURATION * 0.75;
          let text, showTypeCursor;

          if (['click-install', 'done'].includes(stepId)) {
            text = field.text;
            showTypeCursor = false;
          } else if (elapsed < fieldStart) {
            return null;
          } else if (elapsed >= fieldStart + typingTime) {
            text = field.text;
            showTypeCursor = elapsed < fieldStart + FIELD_DURATION;
          } else {
            const progress = (elapsed - fieldStart) / typingTime;
            text = field.text.slice(0, Math.max(0, Math.floor(progress * field.text.length)));
            showTypeCursor = true;
          }

          return (
            <div
              key={i}
              className={`${styles.fieldOverlay} ${showTypeCursor ? styles.fieldFocused : ''}`}
              style={{ top: field.top, left: field.left, width: field.width, height: field.height }}
            >
              <span className={styles.fieldText}>
                {text}
                {showTypeCursor && <span className={styles.typeCursor}>|</span>}
              </span>
            </div>
          );
        })
      }

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
