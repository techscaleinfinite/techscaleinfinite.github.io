import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 18000;

const PHASES = [
  { id: 'idle',      start: 0,    end: 1500 },
  { id: 'typing',    start: 1500, end: 4000 },
  { id: 'searching', start: 4000, end: 5500 },
  { id: 'results',   start: 5500, end: 8000 },
  { id: 'installing',start: 8000, end: 13500 },
  { id: 'deployed',  start: 13500,end: 17000 },
  { id: 'reset',     start: 17000,end: 18000 },
];

function getPhase(elapsed) {
  for (const p of PHASES) {
    if (elapsed >= p.start && elapsed < p.end) return p.id;
  }
  return 'idle';
}

const SEARCH_TEXT = 'Nextcloud';

const INSTALL_STEPS = [
  { label: 'Pulling image…', duration: 1500 },
  { label: 'Creating container…', duration: 1200 },
  { label: 'Configuring network…', duration: 1000 },
  { label: 'Starting services…', duration: 800 },
  { label: 'Running health checks…', duration: 1000 },
];

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

  const phase = getPhase(elapsed);

  const typingProgress = phase === 'typing'
    ? Math.min(1, (elapsed - 1500) / 2200)
    : phase === 'idle' ? 0 : 1;
  const visibleChars = Math.floor(typingProgress * SEARCH_TEXT.length);
  const searchValue = SEARCH_TEXT.slice(0, visibleChars);
  const showCursor = phase === 'typing' || phase === 'idle';

  const showSearching = phase === 'searching';
  const showResults = ['results', 'installing', 'deployed'].includes(phase);

  const installElapsed = phase === 'installing' ? elapsed - 8000 : phase === 'deployed' ? 5500 : 0;
  let totalStepTime = 0;
  let currentStep = -1;
  let stepProgress = 0;
  for (let i = 0; i < INSTALL_STEPS.length; i++) {
    if (installElapsed > totalStepTime) {
      const inStep = installElapsed - totalStepTime;
      currentStep = i;
      stepProgress = Math.min(1, inStep / INSTALL_STEPS[i].duration);
    }
    totalStepTime += INSTALL_STEPS[i].duration;
  }

  const overallProgress = phase === 'deployed' ? 100 : phase === 'installing'
    ? Math.min(99, Math.round((installElapsed / 5500) * 100))
    : 0;

  const showInstall = phase === 'installing';
  const showDeployed = phase === 'deployed';

  return (
    <div className={styles.wrapper}>
      <img
        src="/images/cloud-compute.jpg"
        alt="CloudFloat Create App interface"
        className={styles.baseImage}
        loading="lazy"
      />

      {/* Search overlay */}
      <div className={styles.searchOverlay}>
        <div className={styles.searchBar}>
          <svg className={styles.searchIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className={styles.searchText}>
            {searchValue}
            {showCursor && <span className={styles.cursor}>|</span>}
          </span>
          {showSearching && (
            <div className={styles.spinner} />
          )}
        </div>
      </div>

      {/* Results card */}
      <div className={`${styles.resultCard} ${showResults ? styles.resultVisible : ''}`}>
        <div className={styles.resultInner}>
          <div className={styles.resultIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#0082c9"/>
              <path d="M12 6.5a5.5 5.5 0 0 0-5.5 5.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5S15.04 6.5 12 6.5zm0 9.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="white"/>
              <circle cx="12" cy="12" r="1.5" fill="white"/>
            </svg>
          </div>
          <div className={styles.resultInfo}>
            <span className={styles.resultName}>Nextcloud</span>
            <span className={styles.resultDesc}>Self-hosted file sync, share and collaboration platform</span>
          </div>
          <div className={styles.resultMeta}>
            <span className={styles.metaTag}>Port 80</span>
            <span className={styles.metaTag}>200 mcpu</span>
            <span className={styles.metaTag}>384 MB</span>
          </div>
          {!showInstall && !showDeployed && (
            <button className={styles.installBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Install
            </button>
          )}
        </div>

        {/* Install progress */}
        {showInstall && (
          <div className={styles.installSection}>
            <div className={styles.progressWrap}>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${overallProgress}%` }} />
              </div>
              <span className={styles.progressPct}>{overallProgress}%</span>
            </div>
            <div className={styles.stepsList}>
              {INSTALL_STEPS.map((step, i) => (
                <div key={i} className={`${styles.stepItem} ${i < currentStep ? styles.stepDone : i === currentStep ? styles.stepActive : styles.stepPending}`}>
                  <div className={styles.stepDot}>
                    {i < currentStep ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : i === currentStep ? (
                      <div className={styles.stepSpinner} />
                    ) : null}
                  </div>
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deployed */}
        {showDeployed && (
          <div className={styles.deployedSection}>
            <div className={styles.deployedBanner}>
              <div className={styles.deployedCheck}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className={styles.deployedText}>
                <span className={styles.deployedTitle}>Deployed Successfully</span>
                <span className={styles.deployedUrl}>nextcloud.pods.fltt.fr</span>
              </div>
            </div>
            <div className={styles.deployedStats}>
              <div className={styles.dStat}>
                <span className={styles.dStatValue}>Running</span>
                <span className={styles.dStatLabel}>Status</span>
              </div>
              <div className={styles.dStat}>
                <span className={styles.dStatValue}>1/1</span>
                <span className={styles.dStatLabel}>Pods</span>
              </div>
              <div className={styles.dStat}>
                <span className={styles.dStatValue}>Healthy</span>
                <span className={styles.dStatLabel}>Health</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
