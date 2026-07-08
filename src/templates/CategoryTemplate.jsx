import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Star, Download, BrainCircuit } from 'lucide-react';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import './style.css';

const FallbackImg = ({ src, alt, className, fallbackColor, fallbackClassName }) => {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    const color = fallbackColor || 'var(--ifm-color-primary)';
    return (
      <div
        className={fallbackClassName || 'ps-json-initial'}
        style={{ color, background: `${color}12` }}
      >
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

const buildInstallUrl = ({ title, port }) => {
  const env = { env_key_1: 'env_value_1', env_key_2: 'env_value_2', env_key_3: 'env_value_3' };
  const work_dir = { work_key_1: 'work_value_1', work_key_2: 'work_value_2', work_key_3: 'work_value_3' };
  return `https://pods.fltt.fr/create-app?install-app=${encodeURIComponent(title)}&port=${encodeURIComponent(port)}&argument=3256&env=${encodeURIComponent(JSON.stringify(env))}&work_dir=${encodeURIComponent(JSON.stringify(work_dir))}`;
};

export default function CategoryTemplate({ categoryname, slug }) {
  const [apps, setApps] = useState([]);
  const [category, setCategory] = useState([]);
  const [isJsonCategory, setIsJsonCategory] = useState(false);

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: (file) => `/sql-wasm.wasm`,
      });

      const catRes = await fetch('/category.sqlite');
      const catBuffer = await catRes.arrayBuffer();
      const catDB = new SQL.Database(new Uint8Array(catBuffer));
      const catResult = catDB.exec(
        `SELECT * FROM category WHERE name!='${slug.replace(/'/g, "''")}' order by sort_order desc`
      );
      const categories = catResult[0].values.map((row) => ({
        id: row[0],
        name: row[1],
        catslug: row[2],
        image: row[3],
      }));

      try {
        const jsonRes = await fetch('/appCategories.json');
        const appCategories = await jsonRes.json();
        const jsonCat = appCategories.find((c) => c.id === slug);
        if (jsonCat) {
          const jsonApps = jsonCat.images.map((app) => ({
            image: app.logo || '',
            slug: app.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase(),
            title: app.display,
            desc: app.description || '',
            rating: 5,
            category: jsonCat.id,
            categoryLabel: jsonCat.label,
            user: app.name,
            pull_count: 0,
            port: app.port,
            hasLogo: !!app.logo,
          }));
          setApps(jsonApps);
          setCategory(categories);
          setIsJsonCategory(true);
          return;
        }
      } catch (e) { /* fallback to sqlite */ }

      const response = await fetch('/apps.sqlite');
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));
      const result = db.exec(
        `SELECT * FROM apps WHERE category='${slug.replace(/'/g, "''")}'`
      );

      if (result.length > 0) {
        const loadedApps = result[0].values.map((row) => ({
          image: row[5],
          slug: row[3],
          title: row[2],
          desc: row[1],
          rating: row[7],
          category: row[1],
          user: row[6],
          pull_count: row[8],
        }));
        setApps(loadedApps);
      }

      setCategory(categories);
    })();
  }, []);

  const pageTitle = isJsonCategory && apps.length > 0 ? (apps[0].categoryLabel || slug) : slug;

  const catUrl = `https://scaleinfinite.fr/playstore/${slug}`;

  return (
    <>
      <Head>
        <title>{`${pageTitle} Applications — Deploy on ScaleInfinite`}</title>
        <meta name="description" content={`Browse and deploy ${pageTitle} applications on ScaleInfinite. ${apps.length} application${apps.length !== 1 ? 's' : ''} available for one-click cloud deployment.`} />
        <link rel="canonical" href={catUrl} />
        <meta property="og:title" content={`${pageTitle} Applications — ScaleInfinite Playstore`} />
        <meta property="og:description" content={`Deploy ${pageTitle} applications in seconds. Browse ${apps.length} apps available on ScaleInfinite.`} />
        <meta property="og:url" content={catUrl} />
        <meta property="og:image" content="https://scaleinfinite.fr/img/picture-removebg-preview.png" />
        <meta name="twitter:title" content={`${pageTitle} Apps — ScaleInfinite`} />
        <meta name="twitter:description" content={`${apps.length} ${pageTitle} applications ready to deploy on ScaleInfinite.`} />
      </Head>

      <div className="ps-container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        {/* Page Header */}
        <div className="ps-page-header">
          <h1 className="ps-page-title">
            {isJsonCategory && <BrainCircuit size={24} style={{ color: '#8b5cf6', marginRight: 8, verticalAlign: 'middle' }} />}
            {pageTitle}
          </h1>
          <span className="ps-page-count">
            {apps.length} application{apps.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="ps-two-col">
          {/* Main Content */}
          <div className="ps-main-col">
            {apps.length === 0 ? (
              <div className="ps-loading">
                <p>Loading applications...</p>
              </div>
            ) : isJsonCategory ? (
              <div className="ps-cat-grid">
                {apps.map((app, idx) => (
                  <div key={idx} className="ps-cat-card ps-cat-card-json">
                    <div className="ps-cat-card-image-wrap">
                      <FallbackImg
                        src={app.image}
                        alt={`${app.title} — deploy on ScaleInfinite`}
                        className="ps-cat-card-image"
                        fallbackClassName="ps-json-initial ps-cat-card-initial"
                      />
                    </div>
                    <div className="ps-cat-card-title">{app.title}</div>
                    <p className="ps-cat-card-desc">{app.desc}</p>
                    <a
                      href={buildInstallUrl({ title: app.user, port: app.port })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ps-app-install"
                    >
                      <Download size={13} />
                      Install
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ps-cat-grid">
                {apps.map((app, idx) => (
                  <a
                    key={idx}
                    href={`/playstore/${app.category.toLowerCase()}/${app.slug}`}
                    className="ps-cat-card"
                  >
                    <FallbackImg
                      src={app.image}
                      alt={app.title}
                      className="ps-cat-card-image"
                      fallbackClassName="ps-json-initial ps-cat-card-initial"
                    />
                    <div className="ps-cat-card-title">{app.title}</div>
                    <div className="ps-cat-card-rating">
                      {app.rating}
                      <Star size={12} color="#f59e0b" fill="#f59e0b" />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="ps-sidebar">
            <div className="ps-sidebar-sticky">
              <h3 className="ps-sidebar-title">Other Categories</h3>
              {category.map((cat, idx) => (
                <a
                  key={idx}
                  href={`/playstore/${cat.catslug}`}
                  className="ps-sidebar-item"
                >
                  <img
                    src={cat.image}
                    alt={`${cat.name} application category`}
                    className="ps-sidebar-image"
                  />
                  <span className="ps-sidebar-name">{cat.name}</span>
                </a>
              ))}
              <div className="ps-sidebar-link-wrap">
                <a href="/playstore" className="ps-sidebar-link">
                  View all categories →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
