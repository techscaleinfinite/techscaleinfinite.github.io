import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './infraStory.module.css';

function AutopilotVisual() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  const pods = [
    { name: 'web-app', status: 'Running', cpu: 34 + (tick % 4) * 5, mem: 52 + (tick % 3) * 4 },
    { name: 'api-svc', status: 'Running', cpu: 61 + (tick % 3) * 7, mem: 45 + (tick % 4) * 6 },
    { name: 'worker', status: 'Scaling', cpu: 78 + (tick % 2) * 8, mem: 68 + (tick % 3) * 5 },
    { name: 'db-proxy', status: 'Running', cpu: 22 + (tick % 5) * 3, mem: 38 + (tick % 4) * 4 },
  ];

  const nodes = [
    { id: 'node-1', load: 42 + (tick % 3) * 8 },
    { id: 'node-2', load: 67 + (tick % 4) * 5 },
    { id: 'node-3', load: 28 + (tick % 5) * 6 },
  ];

  const events = [
    'Auto-scaled worker: 2 → 4 replicas',
    'Health check passed: all pods healthy',
    'Certificate renewed: *.app.cloud',
    'Resource optimized: freed 1.2 GiB',
    'Rolling update: api-svc v2.4.1',
    'Node pool balanced across 3 zones',
  ];
  const currentEvent = events[tick % events.length];

  return (
    <div className={styles.autopilotWrap}>
      {/* Glow orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={styles.autopilotDash}>
        {/* Header bar */}
        <div className={styles.dashHeader}>
          <div className={styles.dashHeaderLeft}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/>
            </svg>
            <span className={styles.dashTitle}>Autopilot</span>
          </div>
          <div className={styles.dashStatus}>
            <span className={styles.statusDot} />
            Active
          </div>
        </div>

        {/* Nodes row */}
        <div className={styles.nodesRow}>
          {nodes.map((n, i) => {
            const load = Math.min(n.load, 95);
            return (
              <div key={i} className={styles.nodeCard}>
                <div className={styles.nodeHeader}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                  <span>{n.id}</span>
                </div>
                <div className={styles.nodeBar}>
                  <div className={styles.nodeBarFill} style={{ width: `${load}%`, background: load > 75 ? 'var(--ap-warn)' : 'var(--ap-accent)' }} />
                </div>
                <span className={styles.nodePercent}>{load}%</span>
              </div>
            );
          })}
        </div>

        {/* Pods table */}
        <div className={styles.podsSection}>
          <div className={styles.podsHeader}>
            <span>Pod</span><span>Status</span><span>CPU</span><span>Mem</span>
          </div>
          {pods.map((p, i) => (
            <div key={i} className={styles.podRow}>
              <span className={styles.podName}>{p.name}</span>
              <span className={`${styles.podStatus} ${p.status === 'Scaling' ? styles.podScaling : styles.podRunning}`}>
                {p.status === 'Scaling' && <span className={styles.scalingPulse} />}
                {p.status}
              </span>
              <span className={styles.podMetric}>
                <span className={styles.metricBar}><span className={styles.metricFill} style={{ width: `${Math.min(p.cpu, 95)}%` }} /></span>
                {Math.min(p.cpu, 95)}%
              </span>
              <span className={styles.podMetric}>
                <span className={styles.metricBar}><span className={styles.metricFillMem} style={{ width: `${Math.min(p.mem, 95)}%` }} /></span>
                {Math.min(p.mem, 95)}%
              </span>
            </div>
          ))}
        </div>

        {/* Event ticker */}
        <div className={styles.eventTicker}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span className={styles.eventText} key={tick}>{currentEvent}</span>
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
