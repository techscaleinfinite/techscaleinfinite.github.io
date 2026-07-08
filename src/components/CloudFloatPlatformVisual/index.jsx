import React from 'react';
import styles from './styles.module.css';

const services = [
  { name: 'MongoDB', icon: '🗄️', status: 'running', uptime: '99.9%', region: 'EU-West' },
  { name: 'WordPress', icon: '🌐', status: 'running', uptime: '99.8%', region: 'US-East' },
  { name: 'Redis Cache', icon: '⚡', status: 'running', uptime: '100%', region: 'EU-West' },
  { name: 'Grafana', icon: '📊', status: 'deploying', uptime: '—', region: 'AP-South' },
];

const CloudFloatPlatformVisual = () => (
  <div className={styles.visual}>
    {/* Top bar mimicking a dashboard nav */}
    <div className={styles.topBar}>
      <div className={styles.topLeft}>
        <div className={styles.logoMark}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
        <span className={styles.topTitle}>CloudFloat</span>
        <span className={styles.topTab + ' ' + styles.topTabActive}>Dashboard</span>
        <span className={styles.topTab}>Apps</span>
        <span className={styles.topTab}>Logs</span>
      </div>
      <div className={styles.topRight}>
        <span className={styles.envPill}>Production</span>
      </div>
    </div>

    {/* Quick-stat tiles */}
    <div className={styles.tiles}>
      <div className={styles.tile}>
        <span className={styles.tileValue}>12</span>
        <span className={styles.tileLabel}>Services</span>
        <div className={styles.tileSpark}>
          <svg viewBox="0 0 60 20" className={styles.sparkSvg}>
            <polyline
              fill="none" stroke="var(--ifm-color-primary, #4f46e5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              points="0,14 8,12 16,15 24,8 32,10 40,4 48,7 56,3 60,5"
              className={styles.sparkLine}
            />
          </svg>
        </div>
      </div>
      <div className={styles.tile}>
        <span className={styles.tileValue}>99.9%</span>
        <span className={styles.tileLabel}>Uptime</span>
        <div className={styles.tileSpark}>
          <svg viewBox="0 0 60 20" className={styles.sparkSvg}>
            <polyline
              fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              points="0,10 10,9 20,10 30,9 40,10 50,9 60,10"
              className={styles.sparkLine}
            />
          </svg>
        </div>
      </div>
      <div className={styles.tile}>
        <span className={styles.tileValue}>1.1ms</span>
        <span className={styles.tileLabel}>Latency</span>
        <div className={styles.tileSpark}>
          <svg viewBox="0 0 60 20" className={styles.sparkSvg}>
            <polyline
              fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              points="0,12 8,8 16,14 24,6 32,11 40,9 48,13 56,7 60,10"
              className={styles.sparkLine}
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Service list */}
    <div className={styles.serviceList}>
      <div className={styles.serviceHead}>
        <span className={styles.shWide}>Service</span>
        <span className={styles.sh}>Status</span>
        <span className={styles.sh}>Uptime</span>
        <span className={styles.sh}>Region</span>
        <span className={styles.shAction}></span>
      </div>
      {services.map((s, i) => (
        <div key={s.name} className={styles.serviceRow} style={{ animationDelay: `${i * 0.08}s` }}>
          <span className={styles.srName}>
            <span className={styles.srIcon}>{s.icon}</span>
            {s.name}
          </span>
          <span className={styles.sr}>
            {s.status === 'running' ? (
              <span className={styles.statusRunning}><span className={styles.dotGreen} />Running</span>
            ) : (
              <span className={styles.statusDeploying}><span className={styles.dotAmber} />Deploying</span>
            )}
          </span>
          <span className={styles.sr}>{s.uptime}</span>
          <span className={styles.sr + ' ' + styles.srRegion}>{s.region}</span>
          <span className={styles.srAction}>
            <span className={styles.actionBtn}>Manage</span>
          </span>
        </div>
      ))}
    </div>

    {/* Deploy activity bar */}
    <div className={styles.deployBar}>
      <div className={styles.deployLeft}>
        <div className={styles.deploySpinner} />
        <span className={styles.deployText}>Deploying <strong>Grafana</strong> to AP-South...</span>
      </div>
      <div className={styles.deployProgress}>
        <div className={styles.deployFill} />
      </div>
    </div>
  </div>
);

export default CloudFloatPlatformVisual;
