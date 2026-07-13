import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {
  Share2, CloudDownload, Download, Star, Bookmark,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

const FallbackImg = ({ src, alt, className, fallbackClassName }) => {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div className={fallbackClassName || 'ps-json-initial'}>
        {(alt || '?').charAt(0).toUpperCase()}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

const resolveCategoryImageSrc = (src) => {
  if (!src) return '';
  try {
    const url = new URL(src);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch (e) {
    return src;
  }
};

const argument = 3256;

const AppTemplate = ({ group, categoryname, slug, children }) => {
  const [popupIndex, setPopupIndex] = useState(null);
  const [apps, setApps] = useState([]);
  const [similarApps, setSimilarapps] = useState([]);
  const [category, setCategory] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('URL Copied');
    } catch (err) {
      toast.error('Failed to copy URL');
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    const parsedImages = JSON.parse(apps[0]?.images || '[]');
    setPopupIndex((prev) => (prev + 1) % parsedImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const parsedImages = JSON.parse(apps[0]?.images || '[]');
    setPopupIndex((prev) => (prev - 1 + parsedImages.length) % parsedImages.length);
  };

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: (file) => `/sql-wasm.wasm`,
      });

      const response = await fetch('/apps.sqlite');
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));
      const result = db.exec(
        `SELECT * FROM apps WHERE slug='${slug.replace(/'/g, "''")}'`
      );

      const loadedApps = result[0].values.map((row) => ({
        image: row[5],
        images: row[12],
        port: row[13],
        description: row[4],
        slug: row[3],
        title: row[2],
        desc: row[1],
        rating: row[7],
        category: row[1],
        user: row[6],
        pull_count: row[8],
      }));

      const similar_response = await fetch('/apps.sqlite');
      const similar_buffer = await similar_response.arrayBuffer();
      const similar_db = new SQL.Database(new Uint8Array(similar_buffer));
      const similar_result = similar_db.exec(
        `SELECT * FROM apps WHERE slug!='${slug.replace(/'/g, "''")}' and category='${loadedApps[0]['category']}' limit 0,3`
      );

      const loadedsimilarApps = similar_result[0].values.map((row) => ({
        logo: row[5],
        slug: row[3],
        name: row[2],
        desc: row[1],
        rating: row[7],
        category: row[1],
        publisher: row[6],
        pull_count: row[8],
      }));

      const catRes = await fetch('/category.sqlite');
      const catBuffer = await catRes.arrayBuffer();
      const catDB = new SQL.Database(new Uint8Array(catBuffer));
      const catResult = catDB.exec(
        'SELECT * FROM category order by sort_order desc limit 0, 5'
      );
      const categories = catResult[0].values.map((row) => ({
        id: row[0],
        name: row[1],
        catslug: row[2],
        image: row[3],
      }));

      setApps(loadedApps);
      setSimilarapps(loadedsimilarApps);
      setCategory(categories);

      const wishlist = JSON.parse(Cookies.get('wishlist') || '[]');
      setIsWishlisted(wishlist.some((item) => item.slug === slug));
    })();
  }, []);

  const handleWishlist = () => {
    const currentApp = {
      logo: apps[0]?.image,
      slug: apps[0]?.slug,
      name: apps[0]?.title,
      category: apps[0]?.category,
      rating: apps[0]?.rating,
      pull_count: apps[0]?.pull_count,
    };

    let wishlist = JSON.parse(Cookies.get('wishlist') || '[]');

    if (isWishlisted) {
      wishlist = wishlist.filter((item) => item.slug !== currentApp.slug);
      toast.info('Removed from Wishlist');
    } else {
      wishlist.push(currentApp);
      toast.success('Added to Wishlist');
    }

    Cookies.set('wishlist', JSON.stringify(wishlist), { expires: 30 });
    setIsWishlisted(!isWishlisted);
  };

  const parsedImages = JSON.parse(apps[0]?.images || '[]');
  const config = {
    env_key_1: 'env_value_1',
    env_key_2: 'env_value_2',
    env_key_3: 'env_value_3',
  };
  const working_dir = {
    work_key_1: 'work_value_1',
    work_key_2: 'work_value_2',
    work_key_3: 'work_value_3',
  };

  const appTitle = apps[0]?.title || slug;
  const appDesc = stripHtml(apps[0]?.description || '').slice(0, 160);
  const appImage = apps[0]?.image || '';
  const appUrl = `https://scaleinfinite.fr/playstore/${categoryname}/${slug}`;

  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&[a-zA-Z]+;/g, ' ').replace(/\s+/g, ' ').trim();
  }

  return (
    <>
      <Head>
        <title>{`${appTitle} — Deploy on ScaleInfinite | ${categoryname}`}</title>
        <meta name="description" content={`Deploy ${appTitle} instantly on ScaleInfinite. ${appDesc}`} />
        <link rel="canonical" href={appUrl} />
        <meta property="og:title" content={`${appTitle} — One-Click Deploy on ScaleInfinite`} />
        <meta property="og:description" content={`Deploy ${appTitle} in seconds. ${appDesc}`} />
        <meta property="og:url" content={appUrl} />
        {appImage && <meta property="og:image" content={appImage} />}
        <meta name="twitter:title" content={`${appTitle} on ScaleInfinite`} />
        <meta name="twitter:description" content={`Deploy ${appTitle} instantly with one click. Managed cloud hosting.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": appTitle,
            "applicationCategory": categoryname,
            "operatingSystem": "Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "aggregateRating": apps[0]?.rating ? {
              "@type": "AggregateRating",
              "ratingValue": apps[0].rating,
              "bestRating": "5",
              "ratingCount": Math.max(1, Math.floor((apps[0]?.pull_count || 0) / 1000))
            } : undefined,
            "url": appUrl,
            "image": appImage
          })}
        </script>
      </Head>

      {children}
      <ToastContainer position="bottom-center" autoClose={1500} />

      {/* App Hero */}
      <div className="ps-container">
        <div className="ps-app-hero">
          <div className="ps-app-hero-image">
            <FallbackImg src={apps[0]?.image} alt={`${appTitle} logo`} fallbackClassName="ps-json-initial ps-hero-initial" />
          </div>

          <div className="ps-app-hero-content">
            <h1 className="ps-app-hero-title">{apps[0]?.title}</h1>

            <a
              href={`/playstore/${apps[0]?.category.toLowerCase()}/`}
              className="ps-app-hero-category"
            >
              {apps[0]?.category}
            </a>

            <div className="ps-app-hero-stats">
              <div className="ps-stat-badge">
                <span className="ps-stat-value">{apps[0]?.rating}</span>
                <Star size={16} color="#f59e0b" fill="#f59e0b" />
              </div>
              <div className="ps-stat-badge">
                <span className="ps-stat-value">
                  {Math.floor(apps[0]?.pull_count / 1_000_000)}M
                </span>
                <CloudDownload size={16} color="var(--ifm-color-primary)" />
              </div>
            </div>

            <div className="ps-app-hero-actions">
              <a
                href={`https://pods.fltt.fr/create-app?install-app=${apps[0]?.title}&port=${apps[0]?.port}&argument=${argument}&env=${encodeURIComponent(JSON.stringify(config))}&work_dir=${encodeURIComponent(JSON.stringify(working_dir))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-btn-primary"
              >
                <Download size={16} />
                Install
              </a>

              <button onClick={handleShare} className="ps-btn-outline">
                <Share2 size={16} />
                Share
              </button>

              <button
                onClick={handleWishlist}
                className={`ps-btn-outline ${isWishlisted ? 'ps-btn-wishlisted' : ''}`}
              >
                <Bookmark
                  size={16}
                  fill={isWishlisted ? '#ef4444' : 'none'}
                  color={isWishlisted ? '#ef4444' : 'currentColor'}
                />
                {isWishlisted ? 'Remove Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="ps-container">
        <div className="ps-two-col">
          <div className="ps-main-col">
            {/* Image Carousel */}
            {parsedImages.length > 0 && (
              <div className="ps-image-carousel">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={12}
                  navigation
                  loop
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                  }}
                >
                  {parsedImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`${appTitle} screenshot ${index + 1}`}
                        className="ps-carousel-image"
                        onClick={() => setPopupIndex(index)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            {/* Lightbox Popup */}
            {popupIndex !== null && (
              <div className="ps-lightbox" onClick={() => setPopupIndex(null)}>
                <button onClick={showPrev} className="ps-lightbox-arrow ps-lightbox-prev">
                  ‹
                </button>
                <img
                  src={parsedImages[popupIndex]}
                  alt={`${appTitle} full size screenshot ${popupIndex + 1}`}
                  className="ps-lightbox-image"
                  onClick={(e) => e.stopPropagation()}
                />
                <button onClick={showNext} className="ps-lightbox-arrow ps-lightbox-next">
                  ›
                </button>
              </div>
            )}

            {/* Description */}
            <div className="ps-description">
              <div dangerouslySetInnerHTML={{ __html: apps[0]?.description }} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="ps-sidebar">
            <div className="ps-sidebar-sticky">
              <h3 className="ps-sidebar-title">Similar Apps</h3>
              {similarApps.map((app, idx) => (
                <a
                  key={idx}
                  href={`/playstore/${app.category.toLowerCase()}/${app.slug}`}
                  className="ps-sidebar-item"
                >
                  <FallbackImg src={app.logo} alt={app.name} className="ps-sidebar-image" fallbackClassName="ps-json-initial ps-sidebar-initial" />
                  <div className="ps-sidebar-item-info">
                    <span className="ps-sidebar-name">{app.name}</span>
                    <span className="ps-sidebar-publisher">{app.publisher}</span>
                    {app.rating && (
                      <span className="ps-sidebar-rating">
                        {app.rating} <Star size={11} color="#f59e0b" fill="#f59e0b" />
                      </span>
                    )}
                  </div>
                </a>
              ))}
              <div className="ps-sidebar-link-wrap">
                <a href={`../${categoryname}`} className="ps-sidebar-link">
                  More Apps →
                </a>
              </div>

              <h3 className="ps-sidebar-title" style={{ marginTop: '1.5rem' }}>
                App Category
              </h3>
              {category.map((cat, idx) => (
                <a
                  key={idx}
                  href={`/playstore/${cat.catslug}`}
                  className="ps-sidebar-item"
                >
                  <FallbackImg
                    src={resolveCategoryImageSrc(cat.image)}
                    alt={cat.name}
                    className="ps-sidebar-image"
                    fallbackClassName="ps-json-initial ps-sidebar-initial"
                  />
                  <span className="ps-sidebar-name">{cat.name}</span>
                </a>
              ))}
              <div className="ps-sidebar-link-wrap">
                <a href="/playstore" className="ps-sidebar-link">
                  More Category →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTemplate;
