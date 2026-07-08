import React from 'react';
import styles from './styles.module.css';

const nodes = [
  { id: 'master', label: 'Control Plane', status: 'healthy', cpu: 24, mem: 67, pods: 12 },
  { id: 'w1', label: 'Worker-01', status: 'healthy', cpu: 58, mem: 72, pods: 38 },
  { id: 'w2', label: 'Worker-02', status: 'healthy', cpu: 41, mem: 55, pods: 27 },
  { id: 'w3', label: 'Worker-03', status: 'warning', cpu: 82, mem: 89, pods: 45 },
];

const statusColor = (s) => (s === 'healthy' ? '#10b981' : '#f59e0b');

const MiniBar = ({ pct, color }) => (
  <div className={styles.miniBar}>
    <div className={styles.miniBarFill} style={{ width: `${pct}%`, background: color }} />
  </div>
);

const KubeClusterDashboard = () => (
  <div className={styles.dashboard}>
    {/* Header */}
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerDot} />
        <span className={styles.headerTitle}>Kubernetes Cluster</span>
        <span className={styles.headerBadge}>Production</span>
      </div>
      <div className={styles.headerRight}>
        <span className={styles.headerMeta}>4 Nodes</span>
        <span className={styles.headerSep}>·</span>
        <span className={styles.headerMeta}>122 Pods</span>
        <span className={styles.headerSep}>·</span>
        <span className={styles.headerStatus}>
          <span className={styles.statusDotGreen} />
          Healthy
        </span>
      </div>
    </div>

    {/* Cluster topology */}
    <div className={styles.topology}>
      <svg className={styles.topologySvg} viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet">
        {/* Animated connection paths from master to workers */}
        {[1, 2, 3].map((i) => {
          const x2 = 100 + (i - 1) * 200;
          return (
            <g key={i}>
              <path
                d={`M 300 20 Q ${300 + (x2 - 300) / 2} 55 ${x2} 90`}
                fill="none"
                stroke="var(--si-border-color, #e2e8f0)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <circle r="3" fill="var(--ifm-color-primary, #4f46e5)" opacity="0.8">
                <animateMotion
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M 300 20 Q ${300 + (x2 - 300) / 2} 55 ${x2} 90`}
                />
              </circle>
            </g>
          );
        })}
        {/* Master node */}
        <g>
          <rect x="260" y="4" width="80" height="30" rx="8" fill="var(--ifm-color-primary, #4f46e5)" opacity="0.12" stroke="var(--ifm-color-primary, #4f46e5)" strokeWidth="1" />
          <text x="300" y="24" textAnchor="middle" fill="var(--ifm-color-primary, #4f46e5)" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Control Plane</text>
        </g>
        {/* Worker nodes */}
        {['Worker-01', 'Worker-02', 'Worker-03'].map((label, i) => {
          const cx = 100 + i * 200;
          const col = i === 2 ? '#f59e0b' : '#10b981';
          return (
            <g key={label}>
              <rect x={cx - 40} y="80" width="80" height="28" rx="7" fill={`${col}15`} stroke={col} strokeWidth="1" />
              <circle cx={cx - 28} cy="94" r="3.5" fill={col}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
              </circle>
              <text x={cx + 4} y="98" textAnchor="middle" fill="var(--si-text-primary, #0f172a)" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif">{label}</text>
            </g>
          );
        })}
      </svg>
    </div>

    {/* Node metrics table */}
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <span className={styles.thNode}>Node</span>
        <span className={styles.thMeta}>Status</span>
        <span className={styles.thMeta}>CPU</span>
        <span className={styles.thMeta}>Memory</span>
        <span className={styles.thMeta}>Pods</span>
      </div>
      {nodes.map((n) => (
        <div key={n.id} className={styles.tableRow}>
          <span className={styles.tdNode}>
            <span className={styles.nodeDot} style={{ background: statusColor(n.status) }} />
            {n.label}
          </span>
          <span className={styles.tdMeta}>
            <span className={styles.statusPill} style={{ color: statusColor(n.status), background: `${statusColor(n.status)}18` }}>
              {n.status}
            </span>
          </span>
          <span className={styles.tdMeta}>
            <MiniBar pct={n.cpu} color={n.cpu > 75 ? '#f59e0b' : 'var(--ifm-color-primary, #4f46e5)'} />
            <span className={styles.pct}>{n.cpu}%</span>
          </span>
          <span className={styles.tdMeta}>
            <MiniBar pct={n.mem} color={n.mem > 80 ? '#ef4444' : '#10b981'} />
            <span className={styles.pct}>{n.mem}%</span>
          </span>
          <span className={styles.tdMeta}>{n.pods}</span>
        </div>
      ))}
    </div>

    {/* Bottom stats bar */}
    <div className={styles.bottomBar}>
      <div className={styles.bottomStat}>
        <span className={styles.bottomStatValue}>99.97%</span>
        <span className={styles.bottomStatLabel}>Uptime</span>
      </div>
      <div className={styles.bottomStat}>
        <span className={styles.bottomStatValue}>1.2ms</span>
        <span className={styles.bottomStatLabel}>Latency</span>
      </div>
      <div className={styles.bottomStat}>
        <span className={styles.bottomStatValue}>v1.29</span>
        <span className={styles.bottomStatLabel}>K8s Version</span>
      </div>
      <div className={styles.bottomStat}>
        <div className={styles.flowDots}>
          <span className={styles.flowDot} style={{ animationDelay: '0s' }} />
          <span className={styles.flowDot} style={{ animationDelay: '0.2s' }} />
          <span className={styles.flowDot} style={{ animationDelay: '0.4s' }} />
        </div>
        <span className={styles.bottomStatLabel}>Data Flow</span>
      </div>
    </div>
  </div>
);

export default KubeClusterDashboard;
