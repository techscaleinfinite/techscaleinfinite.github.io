import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.css';

const TOTAL_CYCLE = 20000;

const STEP_LABELS = [
  'Add Account',
  'Account Info',
  'Credentials',
  'Submit',
  'Connected',
];

const FORM_FIELDS = [
  {
    text: 'scaleinfinite',
    rect: { top: '29.5%', left: '36%', width: '30.1%', height: '5.9%' },
  },
  {
    text: 'tech@scaleinfinite.fr',
    rect: { top: '42.4%', left: '36%', width: '30.1%', height: '5.9%' },
  },
  {
    text: '**********',
    rect: { top: '55.1%', left: '36%', width: '30.1%', height: '5.9%' },
  },
  {
    text: '**********',
    rect: { top: '67.9%', left: '36%', width: '30.1%', height: '5.9%' },
  },
];

const ADD_BTN = { top: '63%', left: '61%' };
const SUBMIT_BTN = { top: '81%', left: '64%' };

const STEPS = [
  { id: 'show-ma1',     start: 0,     end: 2500,  img: 0, stepIdx: 0 },
  { id: 'click-add',    start: 2500,  end: 4000,  img: 0, stepIdx: 0 },
  { id: 'transition-1', start: 4000,  end: 4500,  img: 1, stepIdx: 1 },
  { id: 'type-account', start: 4500,  end: 7000,  img: 1, stepIdx: 1, fieldIdx: 0 },
  { id: 'type-docker',  start: 7000,  end: 10000, img: 1, stepIdx: 2, fieldIdx: 1 },
  { id: 'type-pass',    start: 10000, end: 12000, img: 1, stepIdx: 2, fieldIdx: 2 },
  { id: 'type-confirm', start: 12000, end: 14000, img: 1, stepIdx: 2, fieldIdx: 3 },
  { id: 'click-submit', start: 14000, end: 15500, img: 1, stepIdx: 3 },
  { id: 'show-ma3',     start: 15500, end: 18500, img: 2, stepIdx: 4 },
  { id: 'pause',        start: 18500, end: 20000, img: 2, stepIdx: 4 },
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

  const getTypedChars = (fieldIdx) => {
    const field = FORM_FIELDS[fieldIdx];
    const typeStep = STEPS.find((s) => s.fieldIdx === fieldIdx);
    if (!typeStep || elapsed < typeStep.start) return 0;
    if (elapsed >= typeStep.end) return field.text.length;
    const progress = (elapsed - typeStep.start) / (typeStep.end - typeStep.start);
    return Math.floor(progress * field.text.length);
  };

  const isFieldVisible = (fieldIdx) => {
    const typeStep = STEPS.find((s) => s.fieldIdx === fieldIdx);
    return typeStep && elapsed >= typeStep.start && step.img === 1;
  };

  const showAddCursor = step.id === 'show-ma1' || step.id === 'click-add';
  const showSubmitCursor = step.id === 'click-submit';
  const isClick = step.id === 'click-add' || step.id === 'click-submit';
  const cursorPos = showAddCursor ? ADD_BTN : showSubmitCursor ? SUBMIT_BTN : null;

  return (
    <div className={styles.wrapper}>
      <img
        src="/images/ma1.jpg"
        alt="Docker Hub account management - no accounts found"
        className={styles.baseImage}
        style={{ opacity: step.img === 0 ? 1 : 0 }}
        loading="eager"
      />
      <img
        src="/images/ma2.jpg"
        alt="Docker Hub - add account form"
        className={`${styles.baseImage} ${styles.stackedImage}`}
        style={{ opacity: step.img === 1 ? 1 : 0 }}
        loading="eager"
      />
      <img
        src="/images/ma3.jpg"
        alt="Docker Hub account connected successfully"
        className={`${styles.baseImage} ${styles.stackedImage}`}
        style={{ opacity: step.img === 2 ? 1 : 0 }}
        loading="eager"
      />

      {step.img === 1 &&
        FORM_FIELDS.map((field, idx) => {
          if (!isFieldVisible(idx)) return null;
          const chars = getTypedChars(idx);
          const isActive = step.fieldIdx === idx;
          return (
            <div
              key={idx}
              className={`${styles.fieldCover} ${isActive ? styles.fieldActive : ''}`}
              style={field.rect}
            >
              <span className={styles.typedText}>
                {field.text.substring(0, chars)}
              </span>
              {isActive && <span className={styles.textCaret} />}
            </div>
          );
        })}

      {cursorPos && (
        <div
          className={styles.animCursor}
          style={{ top: cursorPos.top, left: cursorPos.left }}
          key={`cur-${step.id}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--dhv-accent, #6366f1)"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M5 3l14 8-6 2-3 7z" />
          </svg>
        </div>
      )}

      {isClick && cursorPos && (
        <div
          className={styles.clickRipple}
          style={{ top: cursorPos.top, left: cursorPos.left }}
          key={`rip-${step.id}`}
        />
      )}

      <div className={styles.stepProgress}>
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`${styles.stepDot} ${
              i < step.stepIdx
                ? styles.stepDone
                : i === step.stepIdx
                  ? styles.stepCurrent
                  : ''
            }`}
          >
            {i < step.stepIdx ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              >
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
