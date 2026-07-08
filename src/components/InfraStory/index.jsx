import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './infraStory.module.css';

const TOTAL_CYCLE = 18000;

const PHASES = [
  { id: 'monitoring', start: 0,     end: 4000 },
  { id: 'detecting',  start: 4000,  end: 7000 },
  { id: 'responding', start: 7000,  end: 10500 },
  { id: 'resolved',   start: 10500, end: 14500 },
  { id: 'summary',    start: 14500, end: 18000 },
];

function getPhase(elapsed) {
  for (const p of PHASES) {
    if (elapsed >= p.start && elapsed < p.end) return p.id;
  }
  return 'monitoring';
}

const HEALTH = { monitoring: 98, detecting: 72, responding: 85, resolved: 99, summary: 99 };

const SERVICES = {
  monitoring: [
    { name: 'web-app', cpu: 32, mem: 45, status: 'healthy' },
    { name: 'api-svc', cpu: 28, mem: 38, status: 'healthy' },
    { name: 'worker',  cpu: 41, mem: 52, status: 'healthy' },
  ],
  detecting: [
    { name: 'web-app', cpu: 48, mem: 55, status: 'healthy' },
    { name: 'api-svc', cpu: 92, mem: 78, status: 'critical' },
    { name: 'worker',  cpu: 68, mem: 88, status: 'warning' },
  ],
  responding: [
    { name: 'web-app', cpu: 38, mem: 48, status: 'healthy' },
    { name: 'api-svc', cpu: 58, mem: 52, status: 'scaling' },
    { name: 'worker',  cpu: 50, mem: 62, status: 'optimizing' },
  ],
  resolved: [
    { name: 'web-app', cpu: 30, mem: 42, status: 'healthy' },
    { name: 'api-svc', cpu: 34, mem: 40, status: 'healthy' },
    { name: 'worker',  cpu: 36, mem: 44, status: 'healthy' },
  ],
  summary: [
    { name: 'web-app', cpu: 28, mem: 40, status: 'healthy' },
    { name: 'api-svc', cpu: 30, mem: 36, status: 'healthy' },
    { name: 'worker',  cpu: 34, mem: 42, status: 'healthy' },
  ],
};

const ACTIONS = {
  monitoring: [
    { type: 'scan',  text: 'Scanning services...' },
    { type: 'check', text: 'All systems nominal' },
    { type: 'check', text: '0 active alerts' },
  ],
  detecting: [
    { type: 'warn',  text: 'High CPU: api-svc (92%)' },
    { type: 'warn',  text: 'Memory pressure: worker' },
    { type: 'spin',  text: 'Analyzing root cause...' },
  ],
  responding: [
    { type: 'action', text: 'Scaling api-svc: 1 → 3' },
    { type: 'action', text: 'Optimizing worker memory' },
    { type: 'action', text: 'Rebalancing load...' },
  ],
  resolved: [
    { type: 'done', text: 'api-svc scaled successfully' },
    { type: 'done', text: 'Memory optimized' },
    { type: 'done', text: 'Load balanced' },
  ],
  summary: [
    { type: 'star', text: 'Uptime: 99.99%' },
    { type: 'star', text: 'Response time: −34%' },
    { type: 'star', text: 'Zero downtime' },
  ],
};

const EVENTS = {
  monitoring: 'AI monitoring all services — no issues detected',
  detecting:  'Alert: Performance degradation detected in api-svc',
  responding: 'Auto-scaling api-svc replicas: 1 → 3',
  resolved:   'All services optimized — health restored to 99%',
  summary:    'Performance improved 34% — zero downtime achieved',
};

const PHASE_LABELS = {
  monitoring: 'Monitoring',
  detecting:  'Issue Detected',
  responding: 'Auto-Fixing',
  resolved:   'Resolved',
  summary:    'Optimized',
};

const CIRC = 2 * Math.PI * 40;

function ActionIcon({ type }) {
  if (type === 'scan') return <div className={styles.iconScan} />;
  if (type === 'spin') return <div className={styles.iconSpin} />;
  if (type === 'action') return <div className={styles.iconAction} />;
  if (type === 'check') return (
    <div className={styles.iconCheck}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
  );
  if (type === 'warn') return (
    <div className={styles.iconWarn}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></svg>
    </div>
  );
  if (type === 'done') return (
    <div className={styles.iconDone}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
  );
  if (type === 'star') return (
    <div className={styles.iconStar}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    </div>
  );
  return null;
}

function StatusBadge({ status }) {
  const cls = styles[`status_${status}`] || styles.status_healthy;
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <span className={`${styles.statusBadge} ${cls}`}>
      <span className={styles.statusBadgeDot} />
      {label}
    </span>
  );
}

function AutopilotVisual() {
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

  const phase = getPhase(elapsed);
  const health = HEALTH[phase];
  const services = SERVICES[phase];
  const actions = ACTIONS[phase];
  const event = EVENTS[phase];
  const phaseLabel = PHASE_LABELS[phase];

  const healthOffset = CIRC * (1 - health / 100);
  const healthColor = health >= 90 ? 'var(--ap-green)' : health >= 75 ? 'var(--ap-warn)' : '#ef4444';
  const isAlert = phase === 'detecting';
  const isFixing = phase === 'responding';

  return (
    <div className={styles.autopilotWrap}>
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={styles.autopilotDash}>
        {/* Scan line during monitoring */}
        {phase === 'monitoring' && <div className={styles.scanLine} />}

        {/* Header */}
        <div className={styles.dashHeader}>
          <div className={styles.dashHeaderLeft}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
            </svg>
            <span className={styles.dashTitle}>AI Autopilot</span>
          </div>
          <div className={`${styles.phaseLabel} ${styles[`phase_${phase}`]}`}>
            <span className={styles.phaseDot} />
            {phaseLabel}
          </div>
        </div>

        {/* Health + AI Actions */}
        <div className={styles.topRow}>
          <div className={styles.healthPanel}>
            <svg className={styles.healthRing} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--ap-bar-track)" strokeWidth="6" />
              <circle
                cx="50" cy="50" r="40" fill="none"
                stroke={healthColor}
                strokeWidth="6"
                strokeDasharray={CIRC}
                strokeDashoffset={healthOffset}
                strokeLinecap="round"
                className={styles.healthArc}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="47" textAnchor="middle" dominantBaseline="central" className={styles.healthValue}>{health}%</text>
              <text x="50" y="62" textAnchor="middle" className={styles.healthCaption}>Health</text>
            </svg>
          </div>

          <div className={styles.actionsPanel}>
            <div className={styles.actionsTitle}>AI Actions</div>
            {actions.map((a, i) => (
              <div key={`${phase}-${i}`} className={styles.actionRow}>
                <ActionIcon type={a.type} />
                <span className={styles.actionText}>{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services table */}
        <div className={styles.svcSection}>
          <div className={styles.svcHeaderRow}>
            <span>Service</span><span>Status</span><span>CPU</span><span>Memory</span>
          </div>
          {services.map((svc, i) => {
            const cpuHigh = svc.cpu > 80;
            const memHigh = svc.mem > 80;
            return (
              <div key={i} className={`${styles.svcRow} ${svc.status !== 'healthy' ? styles.svcRowHighlight : ''}`}>
                <span className={styles.svcName}>{svc.name}</span>
                <StatusBadge status={svc.status} />
                <span className={styles.svcMetric}>
                  <span className={styles.svcBar}>
                    <span className={styles.svcBarFill} style={{ width: `${svc.cpu}%`, background: cpuHigh ? 'var(--ap-warn)' : 'var(--ap-accent)' }} />
                  </span>
                  <span className={cpuHigh ? styles.svcValWarn : ''}>{svc.cpu}%</span>
                </span>
                <span className={styles.svcMetric}>
                  <span className={styles.svcBar}>
                    <span className={styles.svcBarFillMem} style={{ width: `${svc.mem}%`, background: memHigh ? '#ef4444' : 'var(--ap-mem)' }} />
                  </span>
                  <span className={memHigh ? styles.svcValCrit : ''}>{svc.mem}%</span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Event ticker */}
        <div className={`${styles.eventTicker} ${isAlert ? styles.eventTickerWarn : isFixing ? styles.eventTickerAction : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span className={styles.eventText} key={phase}>{event}</span>
        </div>
      </div>
    </div>
  );
}

export default function InfraStorySection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' });

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <motion.div
          ref={headerRef}
          className={styles.headerWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>Why ScaleInfinite</span>
          <h2 className={styles.heading}>
            Managed Kubernetes Service with Intelligent Autopilot
          </h2>
        </motion.div>
      </div>

      <motion.div
        ref={contentRef}
        className={styles.storyGrid}
        initial={{ opacity: 0, y: 30 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={styles.scrollCol}>
          <div className={`${styles.stageContent} ${styles.stageActive}`}>
            <p className={styles.stageDesc}>
              ScaleInfinite simplifies Kubernetes operations with an Intelligent Autopilot that automates deployment, scaling, monitoring, and lifecycle management. Focus on building your applications while ScaleInfinite securely, efficiently, and reliably handles the complexity of your cloud infrastructure.
            </p>
          </div>
        </div>
        <div className={styles.vizCol}>
          <AutopilotVisual />
        </div>
      </motion.div>
    </section>
  );
}
