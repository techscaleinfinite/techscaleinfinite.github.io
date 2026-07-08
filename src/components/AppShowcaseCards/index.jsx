import React from 'react';
import styles from './styles.module.css';

const row1 = [
  { name: 'WordPress', category: 'CMS', rating: 4.8, downloads: '12M', color: '#2196F3', icon: '🌐' },
  { name: 'Grafana', category: 'Analytics', rating: 4.7, downloads: '8M', color: '#f59e0b', icon: '📊' },
  { name: 'MongoDB', category: 'Database', rating: 4.9, downloads: '15M', color: '#10b981', icon: '🗄️' },
  { name: 'Nextcloud', category: 'Storage', rating: 4.5, downloads: '6M', color: '#0082c9', icon: '☁️' },
  { name: 'Jenkins', category: 'DevOps', rating: 4.4, downloads: '9M', color: '#d33833', icon: '🔧' },
  { name: 'Mattermost', category: 'Chat', rating: 4.3, downloads: '3M', color: '#1e88e5', icon: '💬' },
];

const row2 = [
  { name: 'Redis', category: 'Database', rating: 4.8, downloads: '18M', color: '#ef4444', icon: '⚡' },
  { name: 'GitLab', category: 'DevOps', rating: 4.6, downloads: '5M', color: '#e24329', icon: '🦊' },
  { name: 'Nginx', category: 'Web Server', rating: 4.7, downloads: '22M', color: '#009639', icon: '🚀' },
  { name: 'RabbitMQ', category: 'Messaging', rating: 4.5, downloads: '4M', color: '#ff6600', icon: '🐰' },
  { name: 'Prometheus', category: 'Monitoring', rating: 4.6, downloads: '7M', color: '#e6522c', icon: '🔥' },
  { name: 'MinIO', category: 'Storage', rating: 4.4, downloads: '5M', color: '#c72c48', icon: '📦' },
];

const row3 = [
  { name: 'PostgreSQL', category: 'Database', rating: 4.9, downloads: '20M', color: '#336791', icon: '🐘' },
  { name: 'Keycloak', category: 'Auth', rating: 4.5, downloads: '6M', color: '#4a9ae1', icon: '🔐' },
  { name: 'Elasticsearch', category: 'Search', rating: 4.7, downloads: '14M', color: '#f9b110', icon: '🔍' },
  { name: 'Traefik', category: 'Proxy', rating: 4.6, downloads: '11M', color: '#24a1c1', icon: '🔀' },
  { name: 'MariaDB', category: 'Database', rating: 4.8, downloads: '16M', color: '#003545', icon: '🐬' },
  { name: 'Vault', category: 'Security', rating: 4.5, downloads: '8M', color: '#000', icon: '🛡️' },
];

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Card = ({ app }) => (
  <div className={styles.card} style={{ '--accent': app.color }}>
    <div className={styles.cardTop}>
      <div className={styles.cardIcon} style={{ background: `${app.color}14`, color: app.color }}>
        <span className={styles.cardEmoji}>{app.icon}</span>
      </div>
      <div className={styles.installBtn}>Install</div>
    </div>
    <div className={styles.cardBody}>
      <h4 className={styles.cardName}>{app.name}</h4>
      <span className={styles.cardCategory}>{app.category}</span>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.cardRating}>
        <StarIcon />
        {app.rating}
      </span>
      <span className={styles.cardDownloads}>
        <DownloadIcon />
        {app.downloads}
      </span>
    </div>
  </div>
);

const MarqueeRow = ({ apps, reverse, speed }) => (
  <div className={styles.marqueeTrack}>
    <div
      className={`${styles.marqueeSlide} ${reverse ? styles.marqueeReverse : ''}`}
      style={{ '--speed': `${speed}s` }}
    >
      {[...apps, ...apps].map((app, i) => (
        <Card key={i} app={app} />
      ))}
    </div>
  </div>
);

const AppShowcaseCards = () => (
  <div className={styles.marqueeWrap}>
    <MarqueeRow apps={row1} speed={38} />
    <MarqueeRow apps={row2} reverse speed={42} />
  </div>
);

export default AppShowcaseCards;
