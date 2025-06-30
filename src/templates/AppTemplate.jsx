import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import initSqlJs from 'sql.js/dist/sql-wasm.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./style.css"

const images = [
 'img/dyy.jpg',
 'img/dty.jpg',
 'img/ewd.jpg',
 'img/ed36.jpg',
 'img/ffee3.jpg'
];

/*const similarApps = [
  {
    logo: '/img/swdww.jpg',
    name: 'PulseLife ex 360 medics',
    publisher: 'Pulselife',
    rating: 4.4,
  },
  {
    logo: '/img/oo8u.png',
    name: 'Herbs Info',
    publisher: 'Manish Singh Tomar',
    rating: 4.6,
  },
];*/
const categoryApps = [
  {
    logo: '/img/swdww.jpg',
    name: 'Operating System',   
  },
  {
    logo: '/img/oo8u.png',
    name: 'Web Services',  
  },
   {
    logo: '/img/swdww.jpg',
    name: 'CMS',   
  },
  {
    logo: '/img/oo8u.png',
    name: 'DataBase',  
  },
];

const AppTemplate = ({ group, categoryname, slug }) => {
  const [popupIndex, setPopupIndex] = useState(null);

  const showNext = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const [apps, setApps] = useState([]);
  const [similarApps, setSimilarapps] = useState([]);
  const [category, setCategory] = useState([]);


useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: file => `/sql-wasm.wasm`,
      });

      const response = await fetch('/apps.sqlite');
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));
      
      //const result = db.exec("SELECT * FROM apps where slug='linuxserver-heimdall'");
      const result = db.exec(`SELECT * FROM apps WHERE slug='${slug.replace(/'/g, "''")}'`);



      // Convert result[0] to array of objects
      const loadedApps = result[0].values.map(row => ({
        image: row[4],
        slug: row[3],
        title: row[2],
        desc: row[1],
        rating: row[6],
        category:row[1],
        user:row[5],
        pull_count:row[7]
      }));

       const similar_response = await fetch('/apps.sqlite');
      const similar_buffer = await similar_response.arrayBuffer();
      const similar_db = new SQL.Database(new Uint8Array(similar_buffer));
      
      //const result = db.exec("SELECT * FROM apps where slug='linuxserver-heimdall'");
      const similar_result = similar_db.exec(`SELECT * FROM apps WHERE slug!='${slug.replace(/'/g, "''")}' and category='${loadedApps[0]['category']}'  limit 0,3`);



      // Convert result[0] to array of objects
      const loadedsimilarApps = similar_result[0].values.map(row => ({
        logo: row[4],
        slug: row[3],
        name: row[2],
        desc: row[1],
        rating: row[6],
        category:row[1],
        publisher:row[5],
        pull_count:row[7]
      }));

         // Load category.sqlite
    const catRes = await fetch('/category.sqlite');
    const catBuffer = await catRes.arrayBuffer();
    const catDB = new SQL.Database(new Uint8Array(catBuffer));

    const catResult = catDB.exec(`SELECT * FROM category order by sort_order desc limit 0, 5`);
    const categories = catResult[0].values.map(row => ({
      id: row[0],
      name: row[1],
      catslug: row[2],
      image: row[3],
    }));

      setApps(loadedApps);
      setSimilarapps(loadedsimilarApps);
      setCategory(categories);

       })();
       }, []);

  return (
    <>
      <div
        className="wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '2rem',
          margin: '2rem 3rem',
        }}
      >
          {/* Logo First - shows on top in mobile */}
  <div className="withings-logo" style={{ textAlign: 'center' }}>
    <img
      src={apps[0]?.image}
      alt="Withings Logo"
      style={{
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    />
  </div>

  {/* Content Second */}
  <div className="withings-content" style={{ width: '100%' }}>
    <h1 style={{ fontSize: '2.5rem', fontWeight: '400', textAlign: 'left', textTransform: 'capitalize' }}>
      {apps[0]?.title}
    </h1>
    <p style={{ color: '#1a73e8', fontWeight: 500, margin: 0 }}>{apps[0]?.user}</p>
    <p style={{ color: '#555', marginTop: 4 }}>In-app purchases</p>

    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', margin: '1rem 0' }}>
      <div>
        <strong>{apps[0]?.rating}★</strong>
        <p style={{ color: '#555', margin: 0 }}>196K reviews</p>
      </div>
      <div>
        <strong>{apps[0]?.pull_count}+</strong>
        <p style={{ color: '#555', margin: 0 }}>Downloads</p>
      </div>
      <div>
        <strong>3+</strong>
        <p style={{ color: '#555', margin: 0 }}>Rated for 3+</p>
      </div>
    </div>

    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      <a href={`https://cloud.fltt.fr/index.php/apps/cloudfloat/create-app?install-app=${apps[0]?.title}`}
        style={{
          backgroundColor: 'var(--ifm-button-bg)',
          color: '#fff',
          padding: '0 4rem',
          borderRadius: '0.5rem',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        Install
      </a>
      <button
        style={{
          display: 'flex',
          background: 'none',
          border: 'none',
          color: 'var(--ifm-button-bg)',
          cursor: 'pointer',
          fontWeight: 500,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShareIcon style={{ width: '20px', height: '20px', marginRight: '4px' }} />
        Share
      </button>
      <button
        style={{
          display: 'flex',
          background: 'none',
          border: 'none',
          color: 'var(--ifm-button-bg)',
          cursor: 'pointer',
          fontWeight: 500,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HeartIcon style={{ width: '20px', height: '20px', marginRight: '4px' }} />
        Add to wishlist
      </button>
    </div>
  </div>
 {/* Responsive styling */}
  <style>
    {`
      @media (min-width: 768px) {
        .withings-wrapper {
          flex-direction: row;
          align-items: flex-start;
        }

        .withings-logo {
          order: 2;
          width: 40%;
          text-align: right;
        }

        .withings-content {
          order: 1;
          width: 60%;          
        }
      }
    `}
  </style>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '2rem',
          gap: '2rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: '70%' }}>
          
        </div>
     
         <div className="container py-4">
              <div className="row">
                {/* 70% Column */}
                      <div className="col-md-9 mb-4">
                      <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={3} navigation loop>
                        {images.map((src, index) => (
                      <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`Slide ${index}`}
                        style={{  borderRadius: '12px', cursor: 'pointer', width:'250px', height:'auto'}}
                        onClick={() => setPopupIndex(index)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
          

          {popupIndex !== null && (
            <div
              onClick={() => setPopupIndex(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.85)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}
            >
              <button onClick={showPrev} style={popupArrowStyle('left')}>&lsaquo;</button>
              <img
                src={images[popupIndex]}
                alt="Popup"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  borderRadius: '12px',
                  boxShadow: '0 0 40px rgba(255,255,255,0.2)',
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={showNext} style={popupArrowStyle('right')}>&rsaquo;</button>
            </div>
          )}
                    <div className='row pt-5'>
                            <h3 className='description-page-heading'>What is Baikal?</h3>
                            <p>
                              Imagine a web interface that's not just user-friendly but genuinely intuitive. Baïkal offers exactly that. Managing users, address books, and calendars becomes a breeze. It's like having a personal assistant that understands your every command. Baïkal doesn't believe in boundaries. It's your bridge to a synchronized digital life. Access your contacts and calendars from every device you own. No more hassles with compatibility issues – it's all about harmonious connectivity.
                            </p>
                          </div>
                          <h3>Exposed Ports</h3>
                          <table><thead><tr><th>Port Type</th><th>Port Number</th><th>Description</th></tr></thead><tbody><tr><td>Http</td><td>80</td><td>Exposes port 80 for the Baikal app. Users can access the Baikal application through this port.</td></tr><tr><td>Tcp</td><td>-</td><td>-</td></tr></tbody></table>
                          <h3>Working Directories</h3>
                          <table><thead><tr><th>Path Mapping</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>-</td></tr></tbody></table>
                          <h3>Installation</h3>
                          <table><thead><tr><th>Description</th><th>Decription</th></tr></thead><tbody><tr><td>Docker Image</td><td><a href="https://hub.docker.com/r/ckulka/baikal" target="_blank" rel="noopener noreferrer">baikal</a> 👈(click me,for the dockerhub image)</td></tr><tr><td>Application name</td><td>Eg: baikal(you can put any name)</td></tr><tr><td>Resource Allocation</td><td>0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)</td></tr><tr><td><code>Protocol</code></td><td></td></tr><tr><td>Http:</td><td>80</td></tr><tr><td>Tcp:</td><td></td></tr><tr><td>Advanced</td><td>Install with Default</td></tr></tbody></table>
                         
                </div>
                

                {/* 30% Column */}
                <div className="col-md-3">           
                  {/* Similar app list */}
                 <h3 className='custom-h3'>Similar apps</h3>
                 <div style={{paddingBottom: '3rem'}}>           
                    {similarApps.map((app, idx) => (
                      <div
                        key={idx}
                        style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
                      >
                        <img
                          src={app.logo}
                          alt={app.name}
                          style={{ width: '48px', height: '48px', borderRadius: '12px', marginRight: '1rem' }}
                        />
                        <div>
                          <div style={{ fontWeight: 'bold' }}>{app.name}</div>
                          <div style={{ fontSize: '0.9rem', color: '#555' }}>{app.publisher}</div>
                          {app.rating && (
                            <div style={{ fontSize: '0.9rem', color: '#777' }}>{app.rating} ★</div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div style={{fontSize:'0.8rem', alignItem:'center', justifyContent:'right',display:'flex' }}>
                    <a href={`../${categoryname}`} >More Apps</a>
                    </div>
                    </div>
                    <h3 className="mb-4 custom-h3">App Category</h3>
                    <div className='mb-2'>
                    {category.map((app, idx) => (
                <div 
                    key={idx}
                    className="category-hover d-flex align-items-center mb-3"
                >
                    <a href="#" className="d-flex align-items-center text-decoration-none text-dark w-100 ">
                    <img
                        src={app.image}
                        alt={app.name}
                        style={{ width: '48px', height: '48px', borderRadius: '12px', marginRight: '1rem' }}
                    />
                    <div>
                        <div className='category-title' >{app.name}</div>
                       
                    </div>
                    </a>
                </div>
                ))}

                    </div>
                    <div style={{fontSize:'0.8rem', alignItem:'center', justifyContent:'right',display:'flex' }}>
                    <a href='/example' >More Catagory</a>
                    </div>
                </div>
              </div>
            </div>
      </div>
      <style>
  {`
    @media (max-width: 768px) {
      .custom-flex {
        flex-direction: column !important;
      }
      .custom-left, .custom-right {
        max-width: 100% !important;
      }
    }
  `}
</style>
    </>
  );
};

const popupArrowStyle = (side) => ({
  position: 'fixed',
  top: '50%',
  [side]: '20px',
  transform: 'translateY(-50%)',
  fontSize: '2.5rem',
  backgroundColor: '#111',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  textAlign: 'center',
  lineHeight: '38px',
  cursor: 'pointer',
  zIndex: 10000,
});

export default AppTemplate;
