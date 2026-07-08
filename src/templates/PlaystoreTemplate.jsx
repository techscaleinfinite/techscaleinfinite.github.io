import React, { useRef, useEffect, useState, useMemo } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  Star, Download, ArrowDownToLine, Bookmark, Search, X, ArrowRight,
  BrainCircuit, Code2, Workflow, Clapperboard, Briefcase, Globe,
  Activity, Database, MessageCircle, Server, HardDrive, ShieldCheck,
} from 'lucide-react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import Cookies from 'js-cookie';
import HeaderSection from '../components/Playstore/HeaderSection';

const buildInstallUrl = ({
  title,
  port,
  argument = 3256,
  env = {
    env_key_1: 'env_value_1',
    env_key_2: 'env_value_2',
    env_key_3: 'env_value_3',
  },
  work_dir = {
    work_key_1: 'work_value_1',
    work_key_2: 'work_value_2',
    work_key_3: 'work_value_3',
  },
}) => {
  return `https://pods.fltt.fr/create-app?install-app=${encodeURIComponent(title)}&port=${encodeURIComponent(port)}&argument=${argument}&env=${encodeURIComponent(JSON.stringify(env))}&work_dir=${encodeURIComponent(JSON.stringify(work_dir))}`;
};

const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&[a-zA-Z]+;/g, ' ').replace(/\s+/g, ' ').trim();
};

const formatCount = (count) => {
  if (!count) return '0';
  if (count >= 1_000_000) return `${Math.floor(count / 1_000_000)}M`;
  if (count >= 1_000) return `${Math.floor(count / 1_000)}K`;
  return String(count);
};

const AppItem = ({ image, title, category, slug, rating, pull_count, port, description, onWishlistChange, onRequireCookieConsent }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(Cookies.get('wishlist') || '[]');
    setIsWishlisted(wishlist.some((item) => item.slug === slug));
  }, [slug]);

  const handleWishlistToggle = () => {
    const accepted = Cookies.get('cookieConsent');
    if (!accepted) {
      onRequireCookieConsent({ image, title, category, slug, rating, pull_count });
      return;
    }
    toggleWishlist();
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(Cookies.get('wishlist') || '[]');
    const exists = wishlist.some((item) => item.slug === slug);
    let updatedWishlist;
    if (exists) {
      updatedWishlist = wishlist.filter((item) => item.slug !== slug);
    } else {
      updatedWishlist = [...wishlist, { image, title, category, slug, rating, pull_count }];
    }
    Cookies.set('wishlist', JSON.stringify(updatedWishlist), { expires: 7 });
    setIsWishlisted(!exists);
    if (onWishlistChange) onWishlistChange(updatedWishlist);
  };

  const shortDesc = useMemo(() => stripHtml(description).slice(0, 120), [description]);

  return (
    <div className="ps-app-card">
      <button className="ps-app-bookmark" onClick={handleWishlistToggle}>
        <Bookmark
          size={18}
          fill={isWishlisted ? '#ef4444' : 'none'}
          color={isWishlisted ? '#ef4444' : 'var(--si-text-tertiary)'}
        />
      </button>

      <a href={`/playstore/${category.toLowerCase()}/${slug}`} className="ps-app-image-link">
        <div className="ps-app-image-wrap">
          <img src={image} alt={title} className="ps-app-image" />
        </div>
      </a>

      <div className="ps-app-body">
        <h3 className="ps-app-title">{title}</h3>
        {shortDesc && <p className="ps-app-desc">{shortDesc}</p>}
        <a href={`/playstore/${category.toLowerCase()}`} className="ps-app-category-badge">
          {category}
        </a>
      </div>

      <div className="ps-app-footer">
        <div className="ps-app-stat">
          <Star size={14} color="#f59e0b" fill="#f59e0b" />
          <span>{rating}</span>
        </div>

        <a
          href={buildInstallUrl({ title, port })}
          target="_blank"
          rel="noopener noreferrer"
          className="ps-app-install"
        >
          <Download size={13} />
          Install
        </a>

        <div className="ps-app-stat">
          <ArrowDownToLine size={14} color="var(--si-text-tertiary)" />
          <span>{formatCount(pull_count)}</span>
        </div>
      </div>
    </div>
  );
};

const PrivacyPopup = ({ onAccept, onDecline }) => (
  <div className="ps-privacy-overlay">
    <div className="ps-privacy-modal">
      <div className="ps-privacy-icon">🍪</div>
      <h3 className="ps-privacy-title">Cookie Consent</h3>
      <p className="ps-privacy-desc">
        We hate using cookies, but to protect your privacy and for your convenience,
        we need to store your wish list locally on your computer as cookies.
      </p>
      <div className="ps-privacy-actions">
        <button onClick={onAccept} className="ps-privacy-accept">Accept</button>
        <button onClick={onDecline} className="ps-privacy-decline">Decline</button>
      </div>
    </div>
  </div>
);

const CATEGORY_ICONS = {
  'BrainCircuit': BrainCircuit,
  'Code2': Code2,
  'Workflow': Workflow,
  'Clapperboard': Clapperboard,
  'Briefcase': Briefcase,
  'Globe': Globe,
  'Activity': Activity,
  'Database': Database,
  'MessageCircle': MessageCircle,
  'Server': Server,
  'HardDrive': HardDrive,
  'ShieldCheck': ShieldCheck,
};

const CATEGORY_COLORS = {
  'ai-ml': '#8b5cf6',
  'dev-tools': '#3b82f6',
  'automation': '#f97316',
  'media': '#ec4899',
  'office': '#10b981',
  'cms': '#6366f1',
  'monitoring': '#ef4444',
  'databases': '#0ea5e9',
  'chat': '#14b8a6',
  'web-proxy': '#84cc16',
  'storage': '#a855f7',
  'security': '#e11d48',
};

const EXCLUDED_CATEGORIES = new Set([
  'polls', 'calender', 'cloud-services', 'office suites and notes',
  'cms', 'dashboards', 'database', 'document management', 'feed reader',
  'file transfer', 'finance', 'game', 'ide', 'lifestyle',
  'media and entertainment', 'photo and videos', 'social media', 'status',
  'other tools', 'video surveillance', 'wikis', 'custom docker image', 'to do',
]);

const PlaystoreTemplate = () => {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState([]);
  const [wishlistApps, setWishlistApps] = useState(JSON.parse(Cookies.get('wishlist') || '[]'));
  const [apps, setApps] = useState([]);
  const [category, setCategory] = useState([]);
  const [populaapps, setPopularapps] = useState([]);
  const [jsonCategories, setJsonCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('recommended');
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [pendingBookmark, setPendingBookmark] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({ locateFile: (file) => `/sql-wasm.wasm` });

      const catRes = await fetch('/category.sqlite');
      const catBuffer = await catRes.arrayBuffer();
      const catDB = new SQL.Database(new Uint8Array(catBuffer));
      const catResult = catDB.exec('SELECT * FROM category order by sort_order desc');
      const categories = catResult[0].values.map((row) => ({
        id: row[0],
        name: row[1],
        slug: row[2],
      }));

      const response = await fetch('/apps.sqlite');
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));
      const result = db.exec('SELECT * FROM apps');

      const loadedApps = result[0].values.map((row) => ({
        image: row[5],
        slug: row[3],
        title: row[2],
        desc: row[1],
        description: row[4],
        rating: row[7],
        pull_count: row[8],
        category: row[1],
        port: row[13] !== null && row[13] !== undefined ? String(row[13]) : null,
      }));

      const appResult = db.exec('SELECT * FROM apps order by sort_order desc limit 0,12');
      const loadedPouplarApps = appResult[0].values.map((row) => ({
        image: row[5],
        slug: row[3],
        title: row[2],
        desc: row[1],
        description: row[4],
        rating: row[7],
        pull_count: row[8],
        category: row[1],
        port: row[13] !== null && row[13] !== undefined ? String(row[13]) : null,
      }));

      setApps(loadedApps);
      setCategory(categories.filter(
        (cat) => !EXCLUDED_CATEGORIES.has(cat.name.toLowerCase())
      ));
      setPopularapps(loadedPouplarApps);

      try {
        const catResponse = await fetch('/appCategories.json');
        const appCategories = await catResponse.json();
        setJsonCategories(appCategories);
      } catch (e) { /* appCategories.json not available */ }
    })();
  }, []);

  const handleBookmark = (product) => {
    const accepted = Cookies.get('cookieConsent');
    if (!accepted) {
      setPendingBookmark(product);
      setShowPrivacyPopup(true);
      return;
    }
    toggleBookmark(product);
  };

  const toggleBookmark = (product) => {
    const existing = Cookies.get('wishlist');
    let wishlist = existing ? JSON.parse(existing) : [];

    const isBookmarked = wishlist.find((item) => item.slug === product.slug);
    if (isBookmarked) {
      wishlist = wishlist.filter((item) => item.slug !== product.slug);
    } else {
      wishlist.push({
        image: product.image,
        title: product.title,
        category: product.category,
        slug: product.slug,
        rating: product.rating,
        pull_count: product.pull_count,
        port: product.port,
      });
    }

    Cookies.set('wishlist', JSON.stringify(wishlist), { expires: 7 });
    setWishlistApps(wishlist);
    setBookmarkedSlugs(wishlist.map((item) => item.slug));
  };

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowPrivacyPopup(false);
    if (pendingBookmark) {
      toggleBookmark(pendingBookmark);
      setPendingBookmark(null);
    }
  };

  const handleDeclineCookies = () => {
    setShowPrivacyPopup(false);
    setPendingBookmark(null);
  };

  const categoryCounts = useMemo(() => {
    const counts = {};
    apps.forEach((app) => {
      const cat = (app.category || '').toLowerCase();
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [apps]);

  const baseList = searchTerm.trim()
    ? apps
    : selectedFilter === 'recommended'
    ? populaapps
    : wishlistApps;

  const filteredApps = baseList.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeaderSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={category}
        categoryCounts={categoryCounts}
      />

      {showPrivacyPopup && (
        <PrivacyPopup onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
      )}

      <div className="ps-container">
        {/* Filter + Search */}
        <div className="ps-filter-bar">
          <div className="ps-filter-pills">
            <button
              onClick={() => setSelectedFilter('recommended')}
              className={`ps-pill ${selectedFilter === 'recommended' ? 'ps-pill-active' : ''}`}
            >
              Recommended
            </button>
            <button
              onClick={() => setSelectedFilter('wishlist')}
              className={`ps-pill ${selectedFilter === 'wishlist' ? 'ps-pill-active' : ''}`}
            >
              <Bookmark size={14} />
              Wishlist
            </button>
          </div>

          <div className="ps-search-wrap">
            <Search size={16} className="ps-search-icon" />
            <input
              type="text"
              placeholder="Search apps..."
              className="ps-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="ps-search-clear" onClick={() => setSearchTerm('')}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* App Grid */}
        <div className={`ps-app-grid ${filteredApps.length > 12 ? 'ps-app-grid-scroll' : ''}`}>
          {filteredApps.length > 0 ? (
            filteredApps.map((app, idx) => (
              <AppItem
                key={idx}
                {...app}
                onWishlistChange={setWishlistApps}
                onRequireCookieConsent={handleBookmark}
              />
            ))
          ) : (
            <div className="ps-empty-state">
              <Search size={48} strokeWidth={1} />
              <p className="ps-empty-title">
                {selectedFilter === 'wishlist' ? 'Your wishlist is empty' : 'No apps found'}
              </p>
              <p className="ps-empty-subtitle">
                {selectedFilter === 'wishlist'
                  ? 'Bookmark apps to add them to your wishlist'
                  : 'Try a different search term'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* JSON Category Sections */}
      {jsonCategories.map((cat) => {
        const CatIcon = CATEGORY_ICONS[cat.icon] || BrainCircuit;
        const catColor = CATEGORY_COLORS[cat.id] || '#6366f1';
        return (
          <section key={cat.id} id={`ps-cat-${cat.id}`} className="ps-category-section ps-json-section">
            <div className="ps-container">
              <div className="ps-category-header">
                <div className="ps-json-title-wrap">
                  <CatIcon size={22} style={{ color: catColor }} />
                  <h2 className="ps-category-title">{cat.label}</h2>
                </div>
                <a href={`/playstore/${cat.id}`} className="ps-category-viewall">
                  View All <ArrowRight size={14} />
                </a>
              </div>

              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                speed={600}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                grabCursor={true}
              >
                {cat.images.map((app, idx) => {
                  const appSlug = app.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
                  return (
                    <SwiperSlide key={idx}>
                      <div className="ps-app-card ps-app-card-slider">
                        <button
                          className="ps-app-bookmark"
                          onClick={() => handleBookmark({
                            image: app.logo || '',
                            title: app.display,
                            category: cat.id,
                            slug: appSlug,
                            rating: 5,
                            pull_count: 0,
                            port: app.port,
                          })}
                        >
                          <Bookmark
                            size={18}
                            fill={bookmarkedSlugs.includes(appSlug) ? '#ef4444' : 'none'}
                            color={bookmarkedSlugs.includes(appSlug) ? '#ef4444' : 'var(--si-text-tertiary)'}
                          />
                        </button>

                        <div className="ps-app-image-link">
                          <div className="ps-app-image-wrap">
                            {app.logo ? (
                              <img src={app.logo} alt={app.display} className="ps-app-image" />
                            ) : (
                              <div className="ps-json-initial" style={{ color: catColor, background: `${catColor}12` }}>
                                {app.display.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="ps-app-body">
                          <h3 className="ps-app-title">{app.display}</h3>
                          {app.description && <p className="ps-app-desc">{app.description}</p>}
                          <span
                            className="ps-app-category-badge"
                            style={{ background: `${catColor}14`, color: catColor, borderColor: `${catColor}30` }}
                          >
                            {cat.label}
                          </span>
                        </div>

                        <div className="ps-app-footer">
                          <div className="ps-app-stat">
                            <CatIcon size={14} style={{ color: catColor }} />
                            <span>{app.display}</span>
                          </div>

                          <a
                            href={buildInstallUrl({ title: app.name, port: app.port })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ps-app-install"
                          >
                            <Download size={13} />
                            Install
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default PlaystoreTemplate;
