import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

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

const AppTemplate = ({ group, categoryname, slug, children }) => {

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('URL Copied');
    } catch (err) {
      toast.error('Failed to copy URL');
    }
  };

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
        image: row[5],
        images: row[12],
        description: row[4],
        slug: row[3],
        title: row[2],
        desc: row[1],
        rating: row[7],
        category:row[1],
        user:row[6],
        pull_count:row[8]
      }));

       const similar_response = await fetch('/apps.sqlite');
      const similar_buffer = await similar_response.arrayBuffer();
      const similar_db = new SQL.Database(new Uint8Array(similar_buffer));
      
      //const result = db.exec("SELECT * FROM apps where slug='linuxserver-heimdall'");
      const similar_result = similar_db.exec(`SELECT * FROM apps WHERE slug!='${slug.replace(/'/g, "''")}' and category='${loadedApps[0]['category']}'  limit 0,3`);



      // Convert result[0] to array of objects
      const loadedsimilarApps = similar_result[0].values.map(row => ({
        logo: row[5],
        slug: row[3],
        name: row[2],
        desc: row[1],
        rating: row[7],
        category:row[1],
        publisher:row[6],
        pull_count:row[8]
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
const parsedImages = JSON.parse(apps[0]?.images || '[]');

  return (    
    <>    
      {children}
      <ToastContainer position="bottom-center" autoClose={1500} />
    
      <div
        className="wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '2rem',
         
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
      <div style={{alignItems:'center', justifyContent: 'center', display:'grid', padding:'5px'}}
      >
        <strong style={{fontSize:'1.5rem'}}>{apps[0]?.rating} ★</strong>
        {/* <p style={{ color: '#555', margin: 0 }}>196K reviews</p> */}
      </div>
      <div>
  <strong
    style={{
      backgroundColor: 'rgba(191,191,451,0.5)',
      color: '#333',
      padding: '0.3rem 0.6rem',
      borderRadius: '999px',
      fontSize: '0.9rem',
      display: 'inline-block',
    }}
  >
    {apps[0]?.pull_count}+
  </strong>
  <p style={{ color: '#555', margin: 0, marginTop: '4px' }}>Downloads</p>
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
          padding: '6px 4rem',
          borderRadius: '0.5rem',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        Install
      </a>
      <button
      onClick={handleShare}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: '1px solid var(--ifm-button-bg)',
        color: 'var(--ifm-button-bg)',
        padding: '0.4rem 0.75rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 500,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ifm-button-bg)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'none';
        e.currentTarget.style.color = 'var(--ifm-button-bg)';
      }}
    >
      <ShareIcon style={{ width: '20px', height: '20px', marginRight: '4px' }} />
      Share
    </button>
     
      <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: '1px solid var(--ifm-button-bg)', // border color
        color: 'var(--ifm-button-bg)',             // text/icon color
        padding: '0.4rem 0.75rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 500,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ifm-button-bg)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'none';
        e.currentTarget.style.color = 'var(--ifm-button-bg)';
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
          // padding: '2rem',
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
                        {parsedImages.map((src, index) => (
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
                src={parsedImages[popupIndex]}
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
                                 <div dangerouslySetInnerHTML={{ __html: apps[0]?.description }} />
                          </div>
                        
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
                          <div style={{ fontWeight: 'bold' }}><a href={`/playstore/${app.category.toLowerCase()}/${app.slug}`}>{app.name}</a></div>
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
                    <a href={`/playstore/${app.catslug}`} className="d-flex align-items-center text-decoration-none text-dark w-100 ">
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
                    <a href='/playstore' >More Catagory</a>
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
