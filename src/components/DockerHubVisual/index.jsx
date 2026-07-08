import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 18000;

const STEP_LABELS = [
  'Docker Hub Account',
  'Add Account',
  'Repositories',
  'Select App',
  'Install',
];

const REGIONS = {
  selector:  { top: '14.5%', left: '32%',  width: '40%',  height: '8%' },
  addBtn:    { top: '14.5%', left: '73%',  width: '9%',   height: '8%' },
  repoGrid:  { top: '27%',   left: '20%',  width: '62%',  height: '50%' },
  card:      { top: '27%',   left: '20%',  width: '22%',  height: '24%' },
  installBtn:{ top: '44%',   left: '27%',  width: '10%',  height: '6%' },
};

const CURSOR_POS = {
  selector:  { top: '18%',  left: '52%' },
  addBtn:    { top: '18%',  left: '77%' },
  repoGrid:  { top: '45%',  left: '50%' },
  card:      { top: '38%',  left: '30%' },
  installBtn:{ top: '47%',  left: '32%' },
};

const TOOLTIP_POS = {
  selector:  { top: '10%',  left: '52%' },
  addBtn:    { top: '10%',  left: '77%' },
  repoGrid:  { top: '23%',  left: '50%' },
  card:      { top: '23%',  left: '30%' },
  installBtn:{ top: '39%',  left: '32%' },
};

const STEPS = [
  { id: 'focus-selector',   start: 0,     end: 3200,  region: 'selector',   stepIdx: 0 },
  { id: 'click-add',        start: 3200,  end: 6200,  region: 'addBtn',     stepIdx: 1 },
  { id: 'show-repos',       start: 6200,  end: 9500,  region: 'repoGrid',   stepIdx: 2 },
  { id: 'hover-card',       start: 9500,  end: 12800, region: 'card',       stepIdx: 3 },
  { id: 'click-install',    start: 12800, end: 16000, region: 'installBtn', stepIdx: 4 },
  { id: 'pause',            start: 16000, end: 18000, region: null,         stepIdx: 4 },
];

function getStep(elapsed) {
  for (const s of STEPS) {
    if (elapsed >= s.start && elapsed < s.end) return s;
  }
  return STEPS[0];
}

const DockerHubVisual = () => {
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
  const isPause = step.id === 'pause';
  const region = step.region ? REGIONS[step.region] : null;
  const cursor = step.region ? CURSOR_POS[step.region] : null;
  const tooltip = step.region ? TOOLTIP_POS[step.region] : null;
  const isClick = step.id.startsWith('click-');

  return (
    <div className={styles.wrapper}>
      <img
        src="/images/myaccount.jpg"
        alt="Docker Hub account management dashboard"
        className={styles.baseImage}
        loading="eager"
      />

      {region && (
        <div
          className={`${styles.spotlight} ${styles.spotlightActive}`}
          style={region}
          key={step.id}
        >
          <div className={styles.spotlightGlow} />
        </div>
      )}

      {cursor && (
        <div
          className={styles.animCursor}
          style={{ top: cursor.top, left: cursor.left }}
          key={`cur-${step.id}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--dhv-accent, #6366f1)" stroke="white" strokeWidth="1.5">
            <path d="M5 3l14 8-6 2-3 7z" />
          </svg>
        </div>
      )}

      {isClick && cursor && (
        <div
          className={styles.clickRipple}
          style={{ top: cursor.top, left: cursor.left }}
          key={`rip-${step.id}`}
        />
      )}

      {tooltip && (
        <div
          className={`${styles.tooltip} ${!isPause ? styles.tooltipVisible : ''}`}
          style={{ top: tooltip.top, left: tooltip.left }}
        >
          {STEP_LABELS[step.stepIdx]}
        </div>
      )}

      <div className={styles.stepProgress}>
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`${styles.stepDot} ${
              i < step.stepIdx ? styles.stepDone
              : i === step.stepIdx ? styles.stepCurrent
              : ''
            }`}
          >
            {i < step.stepIdx ? (
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

export default DockerHubVisual;
