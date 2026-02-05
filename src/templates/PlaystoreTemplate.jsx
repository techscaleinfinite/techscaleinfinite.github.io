import React, { useRef, useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BookmarkIcon, StarIcon, ArrowDownTrayIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/24/solid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/ionicons.min.css';
import './css/font-awesome.min.css';
import { FaStar } from 'react-icons/fa';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import Cookies from 'js-cookie';
import HeaderSection from '../components/Playstore/HeaderSection';

// const STATIC_APP_NAME = "nginx";
// const STATIC_PORT = 8080;
// const ARGUMENT = 3256;

// const CONFIG = {
//   env_key_1: "env_value_1",
//   env_key_2: "env_value_2",
// };

// const WORKING_DIR = {
//   work_key_1: "work_value_1",
// };
const buildInstallUrl = ({
  title,
  port,
  argument = 3256,
 env = {
  env_key_1: "env_value_1",
  env_key_2: "env_value_2",
  env_key_3: "env_value_3"
},
work_dir = {
  work_key_1: "work_value_1",
  work_key_2: "work_value_2",
  work_key_3: "work_value_3"
}
}) => {
  return `https://pprod.fltt.fr/index.php/apps/cloudfloat/create-app
?install-app=${encodeURIComponent(title)}
&port=${encodeURIComponent(port)}
&argument=${argument}
&env=${encodeURIComponent(JSON.stringify(env))}
&work_dir=${encodeURIComponent(JSON.stringify(work_dir))} `;
};


// =======================
// App Card Component
// =======================
const AppItem = ({ image, title, category, slug, rating, pull_count, port, onWishlistChange, onRequireCookieConsent }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(Cookies.get("wishlist") || "[]");
    const found = wishlist.find((item) => item.slug === slug);
    setIsWishlisted(!!found);
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
    const wishlist = JSON.parse(Cookies.get("wishlist") || "[]");
    const exists = wishlist.some((item) => item.slug === slug);

    let updatedWishlist;
    if (exists) {
      updatedWishlist = wishlist.filter((item) => item.slug !== slug);
    } else {
      updatedWishlist = [...wishlist, { image, title, category, slug, rating, pull_count }];
    }

    Cookies.set("wishlist", JSON.stringify(updatedWishlist), { expires: 7 });
    setIsWishlisted(!exists);

    if (onWishlistChange) {
      onWishlistChange(updatedWishlist);
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box mb-4 no-border d-flex justify-content-center align-items-center">
      <div
        className="feature-content d-flex flex-column align-items-center text-center h-100 position-relative"
        style={{
          border: "1px solid var(--ifm-color-primary-title-dark)",
          borderRadius: "10px",
          paddingBottom: "2.5rem",
          width: '220px',
        }}
      >
        {/* Wishlist button */}
        <button
          style={{
            position: "absolute",
            top: "-10px",
            right: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            zIndex: "99",
          }}
          onClick={handleWishlistToggle}
        >
          {isWishlisted ? (
            <SolidBookmarkIcon style={{ width: "2rem", height: "2.5rem", color: "rgb(245, 81, 81)" }} />
          ) : (
            <OutlineBookmarkIcon style={{ width: "2rem", height: "2.5rem", color: "rgb(245, 81, 81)" }} />
          )}
        </button>

        <a href={`/playstore/${category.toLowerCase()}/${slug}`} className="text-decoration-none">
          <img
            src={image}
            className="img-fluid mb-3"
            alt={title}
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
        </a>

        <div className="px-2">
          <h2 className="cloud-title text-center">
            {title.length > 15 ? title.slice(0, 10) + '...' : title}
          </h2>
          <p className="cloud-title" style={{ lineHeight: "1rem", padding: "10px 0px" }}>
            <strong>
              <a href={`/playstore/${category}`} className="text-decoration-none">
                {category}
              </a>
            </strong>
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            borderTop: "1px solid var(--ifm-button-bg)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ifm-button-bg)",
            }}>
              {rating}
              <StarIcon style={{ width: "15px", height: "15px", color: "red", marginLeft: "4px" }} />
            </strong>
          </div>

          <a
            href={buildInstallUrl({            
             title,
             port,
              // port,
              // argument,
              // env,
              // work_dir,
            })}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--ifm-button-bg)",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.3s ease",
              fontSize: "0.9rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ifm-button-bg)")}
          >
            <span style={{ margin: "0 4px" }}>Install</span>
            <ArrowDownTrayIcon style={{ width: "15px", height: "15px", marginRight: "4px", color: "red" }} />
          </a>

          <div style={{ display: "flex", alignItems: "center", fontSize: '0.9rem', color: "var(--ifm-button-bg)" }}>
            <span>{Math.floor(pull_count / 1_000_000)}</span>
            <span style={{ margin: "0 4px" }}>M</span>
            <CloudArrowDownIcon style={{ width: "15px", height: "15px", color: "red" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// =======================
// Privacy Popup
// =======================
const PrivacyPopup = ({ onAccept, onDecline }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        textAlign: 'center',
      }}
    >
      <p>
        We hate using cookies, but to protect your privacy and for your convenience,
        we need to store your wish list locally on your computer as cookies.
      </p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-success" onClick={onAccept}>Accept</button>
        <button className="btn btn-secondary" onClick={onDecline}>Decline</button>
      </div>
    </div>
  </div>
);

// =======================
// Main Playstore Template
// =======================
const PlaystoreTemplate = () => {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState([]);
  const [wishlistApps, setWishlistApps] = useState(JSON.parse(Cookies.get('wishlist') || '[]'));
  const [apps, setApps] = useState([]);
  const [category, setCategory] = useState([]);
  const [populaapps, setPopularapps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('recommended');
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [pendingBookmark, setPendingBookmark] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ======================
  // Fetch apps & categories
  // ======================
  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({ locateFile: file => `/sql-wasm.wasm` });

      const catRes = await fetch('/category.sqlite');
      const catBuffer = await catRes.arrayBuffer();
      const catDB = new SQL.Database(new Uint8Array(catBuffer));
      const catResult = catDB.exec("SELECT * FROM category order by sort_order desc");
      const categories = catResult[0].values.map(row => ({
        id: row[0],
        name: row[1],
        slug: row[2],
      }));

      const response = await fetch('/apps.sqlite');
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));
      const result = db.exec("SELECT * FROM apps");

      const loadedApps = result[0].values.map(row => ({
        image: row[5],
        slug: row[3],
        title: row[2],
        desc: row[1],
        rating: row[7],
        pull_count: row[8],
        category: row[1],       
        port: row[13] !== null && row[13] !== undefined ? String(row[13]) : null,
      }));

      const appResult = db.exec("SELECT * FROM apps order by sort_order desc limit 0,12");
      const loadedPouplarApps = appResult[0].values.map(row => ({
        image: row[5],
        slug: row[3],
        title: row[2],
        desc: row[1],
        rating: row[7],
        pull_count: row[8],
        category: row[1],
        port: row[13] !== null && row[13] !== undefined ? String(row[13]) : null,
      }));

      setApps(loadedApps);
      setCategory(categories);
      setPopularapps(loadedPouplarApps);
    })();
  }, []);

  // ======================
  // Handle bookmarks (category apps)
  // ======================
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

  // ======================
  // Filtered apps
  // ======================
  const baseList = searchTerm.trim()
    ? apps
    : selectedFilter === 'recommended'
    ? populaapps
    : wishlistApps;

  const filteredApps = baseList.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeaderSection />

      {/* Privacy Popup */}
      {showPrivacyPopup && (
        <PrivacyPopup onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
      )}

      <div className="container py-5">
        {/* Filter + Search */}
        <div className="row align-items-center justify-content-between mb-4" style={{ backgroundColor: 'var(--ifm-wishlist-background)', padding: '10px', borderRadius: '8px' }}>
          <div className="col-md-6 d-flex gap-4">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="appFilter" id="recommendedApps"
                value="recommended"
                checked={selectedFilter === 'recommended'}
                onChange={(e) => setSelectedFilter(e.target.value)}
              />
              <label className="form-check-label" htmlFor="recommendedApps" style={{ color: 'var(--ifm-color-primary-font-dark)' }}>
                Recommended Apps
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="appFilter" id="wishlistApps"
                value="wishlist"
                checked={selectedFilter === 'wishlist'}
                onChange={(e) => setSelectedFilter(e.target.value)} />
              <label className="form-check-label" htmlFor="wishlistApps" style={{ color: 'var(--ifm-color-primary-font-dark)' }}>
                Wishlist
              </label>
            </div>
          </div>

          <div className="col-md-4 text-end position-relative">
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search apps..."
              style={{
                color: 'var(--ifm-color-primary-font-dark)',
                background: 'none',
                borderRadius: '10px',
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="btn btn-sm position-absolute"
                style={{
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'gray',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* App Grid */}
        <div
          className="row"
          style={filteredApps.length > 12 ? { maxHeight: '900px', overflowY: 'auto' } : {}}
        >
          {filteredApps.map((app, idx) => (
            <AppItem
              key={idx}
              {...app}
              onWishlistChange={setWishlistApps}
              onRequireCookieConsent={handleBookmark}
            />
          ))}
        </div>
      </div>

      {/* Category Slider Sections */}
      {category.map((cat, index) => {
        const filteredProducts = apps.filter(app => app.category.toLowerCase() === cat.slug.toLowerCase());
        return (
          <section key={index} className="new-arrivals-section position-relative">
            <div className="container">
              <div className="row mb-0 mt-2">
                <div className="col-12">
                  <div className="section-title text-start">
                    <h2>{cat.name}</h2>
                  </div>
                </div>
              </div>

              <div className="swiper-button-prev custom-swiper-button" ref={prevRef}>
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="swiper-button-next custom-swiper-button" ref={nextRef}>
                <i className="fa fa-angle-right"></i>
              </div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                speed={1000}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 4 },
                }}
                centeredSlides={false}
                grabCursor={true}
              >
                {filteredProducts.map((product, pIndex) => (
                  <SwiperSlide key={pIndex}>
                    <div
                      style={{
                        border: '1px solid var(--ifm-color-primary-title-dark)',
                        borderRadius: '10px',
                        paddingBottom: '2rem',
                        width: '220px',
                        height: 'auto',
                        marginBottom: '0.3rem',
                      }}
                      className="product-layout d-flex justify-content-center flex-column align-items-center text-center h-100 position-relative mx-auto"
                    >
                      {/* Bookmark */}
                      <button
                        style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '5px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          zIndex: '99',
                        }}
                        onClick={() => handleBookmark(product)}
                      >
                        {bookmarkedSlugs.includes(product.slug) ? (
                          <SolidBookmarkIcon style={{ width: '2rem', height: '2.5rem', color: 'rgb(245, 81, 81)' }} />
                        ) : (
                          <BookmarkIcon style={{ width: '2rem', height: '2.5rem', color: 'var(--ifm-color-primary-title-dark)' }} />
                        )}
                      </button>

                      <div className="product-image">
                        <a href={`/playstore/${product.category.toLowerCase()}/${product.slug}`}>
                          <img src={product.image} alt={product.title} title={product.title} style={{ maxHeight: '150px', objectFit: 'contain' }} />
                        </a>
                      </div>

                    <div className="product-caption">
                        <div className="product-meta d-flex flex-column align-items-center">
                          <p className="product-price mb-2">
                            <span className="cloud-title text-center" style={{ fontSize: "18px" }}>
                              {product.title.length > 20 ? product.title.slice(0, 10) + '...' : product.title}
                            </span>
                          </p>
                          <div className="product-manufacturer mb-4">
                            <Link to={`/playstore/${product.category.toLowerCase()}`}>
                              <span style={{textTransform: "capitalize", fontSize: "20px", color:"#160e85"}}>
                                {product.category}
                              </span>
                            </Link>
                          </div>

                          {/* Rating, Install, Pull Count */}
                          <div style={{
                            position: "absolute",
                            bottom: "0px",
                            left: "0px",
                            right: "0px",
                            borderTop: "1px solid var(--ifm-button-bg)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 12px",
                          }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <strong style={{
                                fontSize: "0.8rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--ifm-button-bg)",
                              }}>
                                {product.rating}
                                <StarIcon style={{ width: "15px", height: "15px", color: "red", marginLeft: "4px" }} />
                              </strong>
                            </div>

                            <a
                                 href={buildInstallUrl({            
                                    title: product.title,
                                    port: product.port,                              
                                  })}
                                   target="_blank"
                                 rel="noopener noreferrer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                color: "var(--ifm-button-bg)",
                                fontWeight: 500,
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                                fontSize: "0.9rem",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ifm-button-bg)")}
                            >
                              <span style={{ margin: "0 4px" }}>Install</span>
                              <ArrowDownTrayIcon style={{ width: "15px", height: "15px", marginRight: "4px", color: "red" }} />
                            </a>

                            <div style={{ display: "flex", alignItems: "center", fontSize: '0.9rem', color: "var(--ifm-button-bg)" }}>
                              <span>{Math.floor(product.pull_count / 1_000_000)}</span>
                              <span style={{ margin: "0 4px" }}>M</span>
                              <CloudArrowDownIcon style={{ width: "15px", height: "15px", color: "red" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default PlaystoreTemplate;
