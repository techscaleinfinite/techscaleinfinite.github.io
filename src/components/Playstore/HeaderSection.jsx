import React, { useState, useEffect, useRef } from 'react';
import {
  Search, X, Sparkles, ChevronDown,
  Brain, Database, Cloud, Shield, BarChart3, Code, Globe, Terminal,
  Zap, Monitor, Users, Layout, Wrench, HardDrive, Mail, GitBranch,
  Heart, Boxes, Film, FileText, Lock, MessageSquare, Server,
} from 'lucide-react';
import './cardStyle.css';

const HERO_CATEGORIES = [
  { name: 'AI & ML', slug: 'ai-ml', icon: Brain, color: '#8b5cf6' },
  { name: 'Developer Tools', slug: 'dev-tools', icon: Code, color: '#3b82f6' },
  { name: 'Automation & Low-Code', slug: 'automation', icon: Zap, color: '#f97316' },
  { name: 'Media & Streaming', slug: 'media', icon: Film, color: '#ec4899' },
  { name: 'Productivity & Office', slug: 'office', icon: FileText, color: '#10b981' },
  { name: 'CMS & Website', slug: 'cms', icon: Layout, color: '#6366f1' },
  { name: 'Monitoring & Observability', slug: 'monitoring', icon: Monitor, color: '#ef4444' },
  { name: 'Databases & Cache', slug: 'databases', icon: Database, color: '#0ea5e9' },
  { name: 'Communication & Chat', slug: 'chat', icon: MessageSquare, color: '#14b8a6' },
  { name: 'Web Servers & Proxies', slug: 'web-proxy', icon: Server, color: '#84cc16' },
  { name: 'Files & Storage', slug: 'storage', icon: HardDrive, color: '#a855f7' },
  { name: 'Security & Identity', slug: 'security', icon: Lock, color: '#e11d48' },
];

const getCategoryIcon = (name, index) => {
  const lower = name.toLowerCase();
  const mapping = [
    [['ai', 'machine', 'intelligence', 'ml', 'neural'], Brain],
    [['database', 'db', 'sql', 'postgres', 'mysql', 'mongo', 'redis'], Database],
    [['devops', 'deploy', 'ci', 'cd', 'pipeline', 'cloud'], Cloud],
    [['cms', 'content', 'wordpress', 'blog', 'publishing'], Layout],
    [['monitor', 'observ', 'metric', 'grafana', 'log'], Monitor],
    [['secur', 'auth', 'firewall', 'ssl', 'vault'], Shield],
    [['analytic', 'bi', 'data', 'dashboard', 'report'], BarChart3],
    [['collab', 'team', 'chat', 'communication', 'project'], Users],
    [['dev', 'code', 'ide', 'program', 'build'], Code],
    [['web', 'http', 'server', 'nginx', 'apache', 'proxy'], Globe],
    [['tool', 'util', 'misc'], Wrench],
    [['storage', 'file', 'backup', 'disk', 's3'], HardDrive],
    [['mail', 'email', 'smtp', 'inbox'], Mail],
    [['git', 'version', 'scm'], GitBranch],
    [['automation', 'workflow', 'queue', 'cron'], Zap],
    [['open', 'source', 'foss', 'libre', 'oss'], Heart],
    [['terminal', 'shell', 'cli', 'ssh'], Terminal],
    [['container', 'docker', 'kube', 'orchestr'], Boxes],
  ];

  for (const [keywords, Icon] of mapping) {
    if (keywords.some((kw) => lower.includes(kw))) return Icon;
  }

  const fallbacks = [Boxes, Database, Cloud, Shield, BarChart3, Code, Globe, Terminal, Zap, Monitor, Users, Layout];
  return fallbacks[index % fallbacks.length];
};

const COLORS = [
  '#6366f1', '#10b981', '#f59e0b', '#ef4444', '#a855f7',
  '#0ea5e9', '#ec4899', '#14b8a6', '#f97316', '#8b5cf6',
  '#06b6d4', '#84cc16', '#e11d48', '#0891b2', '#7c3aed',
  '#d946ef', '#059669', '#dc2626',
];

const HeaderSection = ({
  searchTerm = '',
  setSearchTerm,
  categories = [],
  categoryCounts = {},
}) => {
  const scrollToCategory = (slug) => {
    const el = document.getElementById(`ps-cat-${slug}`);
    if (el) {
      const navbarHeight =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ifm-navbar-height')) || 72;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="ps-hero">
      <div className="ps-hero-grid-pattern" />

      <div className="ps-hero-content">
        <div className="ps-hero-badge">
          <Sparkles size={14} />
          <span>Application Marketplace</span>
        </div>

        <h1 className="ps-hero-title">
          Discover & Deploy
          <br />
          <span className="ps-hero-title-gradient">Your Next Application</span>
        </h1>

        <div className="ps-hero-cat-grid">
          {HERO_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.slug}
                className="ps-hero-cat-chip"
                onClick={() => scrollToCategory(cat.slug)}
                style={{
                  '--chip-color': cat.color,
                  '--chip-bg': `${cat.color}10`,
                  '--chip-border': `${cat.color}30`,
                  animationDelay: `${0.3 + i * 0.04}s`,
                }}
              >
                <span className="ps-hero-cat-chip-icon">
                  <Icon size={16} />
                </span>
                {cat.name}
              </button>
            );
          })}
        </div>


        {categories.length > 0 && (
          <div className="ps-hero-categories">
            <h3 className="ps-hero-categories-title">Explore Categories</h3>
          </div>
        )}

        <div className="ps-hero-scroll-indicator">
          <span>
            Scroll to explore
            <ChevronDown size={16} />
          </span>
        </div>
      </div>

      {categories.length > 0 && (
        <div className="ps-hero-marquee">
          <div className="ps-hero-marquee-track">
            <div className="ps-hero-marquee-slide">
              {[...categories, ...categories].map((cat, i) => {
                const Icon = getCategoryIcon(cat.name, i % categories.length);
                const color = COLORS[i % COLORS.length];
                const count = categoryCounts[cat.slug.toLowerCase()] || 0;

                return (
                  <a
                    key={i}
                    href={`/playstore/${cat.slug.toLowerCase()}`}
                    className="ps-hero-cat-card"
                    style={{
                      '--cat-color': color,
                      '--cat-bg': `${color}10`,
                      '--cat-border': `${color}25`,
                      '--cat-icon-bg': `${color}18`,
                    }}
                  >
                    <div className="ps-hero-cat-icon">
                      <Icon size={22} />
                    </div>
                    <span className="ps-hero-cat-name">{cat.name}</span>
                    {count > 0 && <span className="ps-hero-cat-count">{count} apps</span>}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeaderSection;
