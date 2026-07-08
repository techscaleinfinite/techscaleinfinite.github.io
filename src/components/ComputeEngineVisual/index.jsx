import React from 'react';
import styles from './styles.module.css';

const ComputeEngineVisual = () => (
  <div className={styles.visual}>
    {/* Header */}
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
          </svg>
        </div>
        <span className={styles.headerTitle}>Compute Engine</span>
      </div>
      <span className={styles.headerBadge}>Auto-Scaling</span>
    </div>

    {/* Server rack visualization */}
    <div className={styles.rack}>
      {[
        { id: 'Node A', cores: 8, used: 5, mem: '16 GB', load: 62, color: 'var(--ifm-color-primary, #4f46e5)' },
        { id: 'Node B', cores: 8, used: 6, mem: '32 GB', load: 75, color: '#10b981' },
        { id: 'Node C', cores: 4, used: 3, mem: '8 GB', load: 45, color: '#f59e0b' },
      ].map((node, ni) => (
        <div key={node.id} className={styles.rackNode} style={{ animationDelay: `${ni * 0.1}s` }}>
          <div className={styles.nodeHead}>
            <span className={styles.nodeIndicator} style={{ background: node.color }} />
            <span className={styles.nodeId}>{node.id}</span>
            <span className={styles.nodeChip}>{node.mem}</span>
          </div>
          <div className={styles.coreGrid}>
            {Array.from({ length: node.cores }).map((_, ci) => (
              <span
                key={ci}
                className={`${styles.coreBlock} ${ci < node.used ? styles.coreActive : ''}`}
                style={{
                  '--core-color': node.color,
                  animationDelay: `${ni * 0.15 + ci * 0.06}s`,
                }}
              />
            ))}
          </div>
          <div className={styles.nodeLoad}>
            <div className={styles.loadTrack}>
              <div
                className={styles.loadFill}
                style={{ '--load-w': `${node.load}%`, '--load-color': node.color }}
              />
            </div>
            <span className={styles.loadPct} style={{ color: node.color }}>{node.load}%</span>
          </div>
        </div>
      ))}
    </div>

    {/* Live scaling diagram */}
    <div className={styles.scaleDiagram}>
      <svg className={styles.scaleSvg} viewBox="0 0 400 90" preserveAspectRatio="xMidYMid meet">
        {/* Traffic source */}
        <rect x="4" y="28" width="70" height="34" rx="8" fill="var(--ifm-color-primary-alert-background-color, #eef2ff)" stroke="var(--ifm-color-primary, #4f46e5)" strokeWidth="1" />
        <text x="39" y="42" textAnchor="middle" fill="var(--ifm-color-primary, #4f46e5)" fontSize="7.5" fontWeight="700" fontFamily="Inter, sans-serif">Incoming</text>
        <text x="39" y="53" textAnchor="middle" fill="var(--ifm-color-primary, #4f46e5)" fontSize="7" fontWeight="500" fontFamily="Inter, sans-serif">Traffic</text>

        {/* Arrow to load balancer */}
        <line x1="78" y1="45" x2="128" y2="45" stroke="var(--si-border-color, #e2e8f0)" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle r="3" fill="var(--ifm-color-primary, #4f46e5)" opacity="0.8">
          <animateMotion dur="1.6s" repeatCount="indefinite" path="M 78 45 L 128 45" />
        </circle>

        {/* Load balancer */}
        <rect x="132" y="25" width="65" height="40" rx="8" fill="var(--si-bg-secondary, #f8fafc)" stroke="var(--si-border-color, #e2e8f0)" strokeWidth="1" />
        <text x="164.5" y="41" textAnchor="middle" fill="var(--si-text-primary, #0f172a)" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">Load</text>
        <text x="164.5" y="52" textAnchor="middle" fill="var(--si-text-primary, #0f172a)" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">Balancer</text>

        {/* Fan-out arrows to instances */}
        {[18, 45, 72].map((ty, i) => (
          <g key={i}>
            <path d={`M 200 45 Q 225 ${ty} 260 ${ty}`} fill="none" stroke="var(--si-border-color, #e2e8f0)" strokeWidth="1.2" strokeDasharray="4 3" />
            <circle r="2.5" fill="#10b981" opacity="0.8">
              <animateMotion dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" path={`M 200 45 Q 225 ${ty} 260 ${ty}`} />
            </circle>
          </g>
        ))}

        {/* App instances */}
        {[
          { y: 6, label: 'Instance 1', color: '#10b981' },
          { y: 33, label: 'Instance 2', color: '#10b981' },
          { y: 60, label: 'Instance 3', color: '#f59e0b' },
        ].map((inst, i) => (
          <g key={inst.label}>
            <rect x="264" y={inst.y} width="72" height="24" rx="6" fill={`${inst.color}12`} stroke={inst.color} strokeWidth="1" />
            <circle cx="276" cy={inst.y + 12} r="3" fill={inst.color}>
              {i === 2 && <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />}
            </circle>
            <text x="302" y={inst.y + 15} textAnchor="middle" fill="var(--si-text-primary, #0f172a)" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">{inst.label}</text>
          </g>
        ))}

        {/* Scale-up indicator on Instance 3 */}
        <text x="348" y="77" fill="#f59e0b" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif" opacity="0.9">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          ↑ scaling
        </text>
      </svg>
    </div>

    {/* Bottom resource summary */}
    <div className={styles.bottomRow}>
      <div className={styles.bottomCard}>
        <span className={styles.bottomValue}>20</span>
        <span className={styles.bottomLabel}>vCPUs</span>
      </div>
      <div className={styles.bottomCard}>
        <span className={styles.bottomValue}>56 GB</span>
        <span className={styles.bottomLabel}>RAM</span>
      </div>
      <div className={styles.bottomCard}>
        <span className={styles.bottomValue}>3</span>
        <span className={styles.bottomLabel}>Nodes</span>
      </div>
      <div className={styles.bottomCard}>
        <div className={styles.uptimeDots}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.uptimeDot} style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <span className={styles.bottomLabel}>Uptime 30d</span>
      </div>
    </div>
  </div>
);

export default ComputeEngineVisual;
