import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 20000;

const TABS = ['Details', 'Logs', 'Terminals', 'Events', 'YAML'];

const IMAGES = [
  '/images/sp1.jpg?v=2',
  '/images/sp2.jpg?v=2',
  '/images/sp3.jpg?v=2',
  '/images/sp4.jpg?v=3',
  '/images/sp5.jpg?v=3',
];

const STEPS = [
  { id: 'details',        start: 0,     end: 3000,  img: IMAGES[0], tabIndex: 0 },
  { id: 'click-logs',     start: 3000,  end: 4500,  img: IMAGES[0], tabIndex: 1 },
  { id: 'logs',           start: 4500,  end: 7000,  img: IMAGES[1], tabIndex: 1 },
  { id: 'click-terminals',start: 7000,  end: 8500,  img: IMAGES[1], tabIndex: 2 },
  { id: 'terminals',      start: 8500,  end: 11000, img: IMAGES[2], tabIndex: 2 },
  { id: 'click-events',   start: 11000, end: 12500, img: IMAGES[2], tabIndex: 3 },
  { id: 'events',         start: 12500, end: 15000, img: IMAGES[3], tabIndex: 3 },
  { id: 'click-yaml',     start: 15000, end: 16500, img: IMAGES[3], tabIndex: 4 },
  { id: 'yaml',           start: 16500, end: 19000, img: IMAGES[4], tabIndex: 4 },
  { id: 'reset',          start: 19000, end: 20000, img: IMAGES[4], tabIndex: 4 },
];

const TAB_POSITIONS = {
  1: { top: '20.5%', left: '40%' },
  2: { top: '20.5%', left: '51%' },
  3: { top: '20.5%', left: '63%' },
  4: { top: '20.5%', left: '74%' },
};

function getStep(elapsed) {
  for (const s of STEPS) {
    if (elapsed >= s.start && elapsed < s.end) return s;
  }
  return STEPS[0];
}

const ServerOverviewVisual = () => {
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
  const isClickStep = step.id.startsWith('click-');
  const cursorPos = isClickStep ? TAB_POSITIONS[step.tabIndex] : null;

  const activeTabIndex = (() => {
    if (['details', 'click-logs'].includes(step.id)) return 0;
    if (['logs', 'click-terminals'].includes(step.id)) return 1;
    if (['terminals', 'click-events'].includes(step.id)) return 2;
    if (['events', 'click-yaml'].includes(step.id)) return 3;
    return 4;
  })();

  return (
    <div className={styles.wrapper}>
      {IMAGES.map(src => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}

      {IMAGES.map(src => (
        <img
          key={src}
          src={src}
          alt="Server overview dashboard"
          className={`${styles.baseImage} ${src === step.img ? styles.baseImageActive : ''}`}
          loading="eager"
        />
      ))}

      {isClickStep && cursorPos && (
        <div className={styles.animCursor} style={{ top: cursorPos.top, left: cursorPos.left }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--cfv-accent, #6366f1)" stroke="white" strokeWidth="1.5">
            <path d="M5 3l14 8-6 2-3 7z" />
          </svg>
        </div>
      )}

      {isClickStep && cursorPos && (
        <div className={styles.clickRipple} style={{ top: cursorPos.top, left: cursorPos.left }} />
      )}

      <div className={styles.tabHighlight}>
        {TABS.map((tab, i) => (
          <div
            key={tab}
            className={`${styles.tabDot} ${i < activeTabIndex ? styles.tabDone : i === activeTabIndex ? styles.tabCurrent : ''}`}
          >
            {i < activeTabIndex ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <span>{i + 1}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerOverviewVisual;
