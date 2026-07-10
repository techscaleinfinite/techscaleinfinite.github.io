import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 20000;

const PHASES = [
  { id: 'idle',       start: 0,     end: 1200 },
  { id: 'typing',     start: 1200,  end: 3800 },
  { id: 'searching',  start: 3800,  end: 4500 },
  { id: 'results',    start: 4500,  end: 6500 },
  { id: 'popup',      start: 6500,  end: 10000 },
  { id: 'deployed',   start: 10000, end: 13500 },
  { id: 'appPage',    start: 13500, end: 18000 },
  { id: 'reset',      start: 18000, end: 20000 },
];

function getPhase(elapsed) {
  for (const p of PHASES) {
    if (elapsed >= p.start && elapsed < p.end) return p.id;
  }
  return 'idle';
}

const SEARCH_TEXT = 'jellyfin';

export default function CloudFloatVisual() {
  const [elapsed, setElapsed] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const tick = useCallback(() => {
    if (!startRef.current) startRef.current = performance.now();
    const now = performance.now();
    const e = (now - startRef.current) % TOTAL_CYCLE;
    setElapsed(e);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  useEffect(() => {
    ['/images/jellyfin.jpg', '/images/install-popup.jpg', '/images/myaccount.jpg?v=2', '/images/jellyfin-page.jpg'].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const phase = getPhase(elapsed);

  const typingProgress = phase === 'typing'
    ? Math.min(1, (elapsed - 1200) / 2300)
    : phase === 'idle' ? 0 : 1;
  const visibleChars = Math.floor(typingProgress * SEARCH_TEXT.length);
  const searchValue = SEARCH_TEXT.slice(0, visibleChars);
  const showCursor = phase === 'typing' || phase === 'idle';
  const showSearching = phase === 'searching';

  const isScreen0 = ['idle', 'typing', 'searching'].includes(phase);
  const isScreen1 = phase === 'results';
  const isScreen2 = phase === 'popup';
  const isScreen3 = phase === 'deployed';
  const isScreen4 = phase === 'appPage';
  const isReset = phase === 'reset';

  const showInstallClick = phase === 'results' && (elapsed - 4500) > 1400;
  const showPopupInstallClick = phase === 'popup' && (elapsed - 6500) > 2800;
  const showUrlClick = phase === 'deployed' && (elapsed - 10000) > 2500;

  const steps = ['Search', 'Discover', 'Install', 'Deploy', 'Launch'];
  let activeStep = 0;
  if (phase === 'results') activeStep = 1;
  if (phase === 'popup') activeStep = 2;
  if (phase === 'deployed') activeStep = 3;
  if (phase === 'appPage') activeStep = 4;

  return (
    <div className={styles.wrapper}>
      {/* Screen 0: Create App — in flow, sets container height */}
      <div className={styles.screenBase} style={{ opacity: isScreen0 || isReset ? 1 : 0 }}>
        <img
          src="/images/cloud-compute.jpg"
          alt="Create App – Docker Hub search"
          className={styles.baseImage}
        />
        {isScreen0 && (
          <div className={styles.searchTextOverlay}>
            <span className={styles.typedText}>
              {searchValue}
              {showCursor && <span className={styles.cursor}>|</span>}
            </span>
            {showSearching && <div className={styles.searchSpinner} />}
          </div>
        )}
      </div>

      {/* Screen 1: Jellyfin search result */}
      <div className={styles.screenOverlay} style={{ opacity: isScreen1 ? 1 : 0 }}>
        <img src="/images/jellyfin.jpg" alt="Jellyfin search result" className={styles.overlayImage} />
        {showInstallClick && (
          <div className={`${styles.clickRipple} ${styles.installClickPos}`} />
        )}
      </div>

      {/* Screen 2: Install popup */}
      <div className={styles.screenOverlay} style={{ opacity: isScreen2 ? 1 : 0 }}>
        <img src="/images/install-popup.jpg" alt="Jellyfin install configuration" className={styles.overlayImage} />
        {showPopupInstallClick && (
          <div className={`${styles.clickRipple} ${styles.popupInstallClickPos}`} />
        )}
      </div>

      {/* Screen 3: My Apps (deployed) */}
      <div className={styles.screenOverlay} style={{ opacity: isScreen3 ? 1 : 0 }}>
        <img src="/images/myaccount.jpg?v=2" alt="My Apps – deployed" className={styles.overlayImage} />
        {isScreen3 && <div className={styles.urlHighlight} />}
        {showUrlClick && (
          <div className={`${styles.clickRipple} ${styles.urlClickPos}`} />
        )}
      </div>

      {/* Screen 4: Jellyfin running */}
      <div className={styles.screenOverlay} style={{ opacity: isScreen4 ? 1 : 0 }}>
        <img src="/images/jellyfin-page.jpg" alt="Jellyfin application running" className={styles.overlayImage} />
      </div>

      {/* Workflow step indicator */}
      <div className={styles.stepIndicator}>
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            {i > 0 && (
              <div className={`${styles.stepLine} ${i <= activeStep ? styles.stepLineDone : ''}`} />
            )}
            <div className={`${styles.stepChip} ${i === activeStep ? styles.stepChipActive : i < activeStep ? styles.stepChipDone : ''}`}>
              <div className={styles.stepDot}>
                {i < activeStep ? (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : i === activeStep ? (
                  <div className={styles.stepPulse} />
                ) : null}
              </div>
              <span className={styles.stepLabel}>{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
