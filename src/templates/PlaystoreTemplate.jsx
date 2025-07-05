import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { BookmarkIcon, StarIcon, ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/24/solid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/ionicons.min.css';
import './css/font-awesome.min.css';
import { FaStar } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import Cookies from 'js-cookie';


const AppItem = ({ image, title, category, slug }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Load wishlist from cookies on component mount
  useEffect(() => {
    const wishlist = JSON.parse(Cookies.get('wishlist') || '[]');
    const found = wishlist.find(item => item.slug === slug);
    setIsWishlisted(!!found);
  }, [slug]);

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(Cookies.get('wishlist') || '[]');
    const exists = wishlist.some(item => item.slug === slug);

    let updatedWishlist;
    if (exists) {
      updatedWishlist = wishlist.filter(item => item.slug !== slug);
    } else {
      updatedWishlist = [...wishlist, { image, title, category, slug }];
    }

    Cookies.set('wishlist', JSON.stringify(updatedWishlist), { expires: 7 });
    setIsWishlisted(!exists);
  };
   {isWishlisted ? (
            <SolidBookmarkIcon
               style={{
                  width: '2rem',
                  height: '2.5rem',
                  color: 'var(--ifm-color-primary-title-dark)',
               }}
            />
            ) : (
            <OutlineBookmarkIcon
               style={{
                  width: '2rem',
                  height: '2.5rem',
                  color: 'var(--ifm-color-primary-title-dark)',
               }}
            />
            )}

  // ✅ RETURN your JSX here
  return (  
    <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box mb-4 no-border">     
      <div  className="feature-content d-flex flex-column align-items-center text-center h-100 position-relative"
        style={{  border: '1px solid var(--ifm-color-primary-title-dark)',  borderRadius: '10px', paddingBottom: '2.5rem',  }} >
         <button style={{position: 'absolute', top: '-10px', right: '5px', background: 'none', border: 'none', cursor: 'pointer',    padding: 0,   zIndex: '99', }}
            onClick={handleWishlistToggle} >
               {isWishlisted ? (
                  <SolidBookmarkIcon
                     style={{
                     width: '2rem',
                     height: '2.5rem',
                     color: 'var(--ifm-color-title-darker)',
                     }}
                  />
                  ) : (
                     <OutlineBookmarkIcon
                        style={{
                        width: '2rem',
                        height: '2.5rem',
                        color: 'var(--ifm-color-title-darker)',
                        }}
                     />
                  )}
            </button>
               <a href={`/playstore/${category}`} className="text-decoration-none">
                  <img  src={image}     className="img-fluid mb-3"    alt={title}  style={{ maxHeight: '150px', objectFit: 'contain' }}  />
               </a>
               <div className="px-2">
                  <h2 className="cloud-title">{title}</h2>
                  <p className="cloud-title">
                        <strong>
                        <a href={`/playstore/${category}`} className="text-decoration-none">
                           {category}
                        </a>
                        </strong>
                     </p>
            </div>
               <div style={{ position: 'absolute', bottom: '8px', left: '10px', display: 'flex', alignItems: 'center',  fontSize: '1.2rem', fontWeight: '500',
                        color: 'var(--ifm-color-primary-title-dark)',  }} >
                     49
                     <StarIcon style={{  width: '1.3rem', height: '1.3rem', color:'red' }} />
               </div>

                  <div  style={{ position: 'absolute',  bottom: '8px',  right: '10px',   display: 'flex',  alignItems: 'center',  fontSize: '1rem',  fontWeight: 500,
                        color: 'var(--ifm-color-primary-title-dark)',   }} >
                     <span style={{ marginRight: '4px' }}>26 M</span>
                     <ArrowDownTrayIcon style={{ width: '20px', height: '20px', marginRight: '4px', color: 'red'  }} />
                  </div>
            </div>
         </div>
     
      );
};
const PlaystoreTemplate = () => {
const [apps, setApps] = useState([]);
const [category, setCategory] = useState([]);
const [populaapps, setPopularapps] = useState([]);
const prevRef = useRef(null);
const nextRef = useRef(null);
useEffect(() => {
(async () => {
const SQL = await initSqlJs({
locateFile: file => `/sql-wasm.wasm`,
});
// Load category.sqlite
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
// Convert result[0] to array of objects
const loadedApps = result[0].values.map(row => ({
image: row[5],
slug: row[3],
title: row[2],
desc: row[1],
rating: row[6],
category:row[1],
}));
const appresponse = await fetch('/apps.sqlite');
const appbuffer = await appresponse.arrayBuffer();
const app_db = new SQL.Database(new Uint8Array(appbuffer));
const app_result = app_db.exec("SELECT * FROM apps order by sort_order desc limit 0,12");
// Convert result[0] to array of objects
const loadedPouplarApps = app_result[0].values.map(row => ({
image: row[5],
slug: row[3],
title: row[2],
desc: row[1],
rating: row[6],
category:row[1],
}));
setApps(loadedApps);
setCategory(categories);
setPopularapps(loadedPouplarApps);
})();
}, []);
// const products = [
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
// name: 'Amazon',
// category: 'Web services',
// rating: 4,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/bitnami_mariadb.webp',
// name: 'MariaDB',
// category: 'Database',
// rating: 4.3,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/fluentd.webp',
// name: 'Fluentd',
// category: 'OpenSource',
// rating: 4.9,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/circleci_postgres.webp',
// name: 'Circleci',
// category: 'Database',
// rating: 4.2,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/almalinux.webp',
// name: 'Almalinux',
// category: 'Operating System',
// rating: 4.5,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
// name: 'Amazon',
// category: 'Webservice',
// rating: 4.5,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
// name: 'Amazon',
// category: 'Web services',
// rating: 4,
// },
// {
// img: 'https://cdn.scaleinfinite.fr/app-images-webp/bitnami_mariadb.webp',
// name: 'MariaDB',
// category: 'Database',
// rating: 4.3,
// },
// ];
return (
<>
{/* Header Section */}
<section className="primary-slider-section mb-0 position-relative">
   <Swiper
   modules={[Navigation, Pagination]}
   navigation={{
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
   }}
   pagination={{ clickable: true }}
   spaceBetween={5}
   slidesPerView={1}
   loop={true}
   className="slider-type-1"
   >
   <SwiperSlide>
      <div className="slide-inner image-placeholder"  style={{ background: 'var(--ifm-card-background)' }}>
      <div className="">
         <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 p-5">
               <div className="slide-content layer-animation-1">
                  <h1 className="main-title" style={{ fontWeight: 700, color: '#3e4d76' }}>
                  <span className="cloud-title">Self-Driving Cloud Applications</span>
                  </h1>
                  <p className="subtitle">
                     Smarter, faster, and always-on — the future of autonomous cloud computing.
                  </p>
               </div>
            </div>
            {/* Image Section */}
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
               <img
               src={require('./images/slider/slider1.png').default}
               className="img-fluid"
               alt="Slider Image" 
               style={{width:'500px', height:'auto'}}
               />
            </div>
         </div>
      </div>
      </div>
   </SwiperSlide>
   </Swiper>
</section>
{/* HeaderSection close  */}

<div className="container py-5">
   <div className="row align-items-center justify-content-between mb-4">
    {/* Left - Radio Buttons */}
    <div className="col-md-6 d-flex gap-4" >
      <div className="form-check" >
        <input  className="form-check-input"  type="radio"  name="appFilter"  id="recommendedApps"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="recommendedApps"style={{ color: 'var(--ifm-color-primary-font-dark)' }}>
          Recommended Apps
        </label>
      </div>
      <div className="form-check">
        <input   className="form-check-input"   type="radio"   name="appFilter"  id="wishlistApps" />
        <label className="form-check-label" htmlFor="wishlistApps" style={{ color: 'var(--ifm-color-primary-font-dark)' }}>
          Wishlist
        </label>
      </div>
    </div>

    {/* Right - Search Box */}
    <div className="col-md-4 text-end">
      <input type="text" className="form-control"  placeholder="Search apps..."   style={{color: 'var(--ifm-color-primary-font-dark)', background:'none' , borderRadius:'10px'}} 
      />
    </div>
  </div>
   <div className="row">
      {populaapps.slice(0, 4).map((app, idx) => 
      <AppItem key={idx} {...app} />
      )}
   </div>
   <div className="row">
      {populaapps.slice(4, 8).map((app, idx) => <AppItem key={idx + 4} {...app} />)}
   </div>
   <div className="row">
      {populaapps.slice(8, 12).map((app, idx) => <AppItem key={idx + 8} {...app} />)}
   </div>
</div>
{category.map((cat, index) => {
// 🔍 Filter products for this category
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
      {/* Custom Arrows - outside Swiper */}
      <div className="swiper-button-prev custom-swiper-button"  ref={prevRef}>
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
         paddingBottom: '2rem', // make room for bottom icons
         }}
         className="product-layout d-flex justify-content-center flex-column align-items-center text-center h-100 position-relative">
         <div className="product-thumb">
            <div className="product-inner">
               {/* Bookmark Icon Top Right */}
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
               onClick={() => handleBookmark(app)}
               >
               <BookmarkIcon
               style={{ width: '2rem', height: '2.5rem', color: 'var(--ifm-color-primary-title-dark)' }}
               />
               </button>
               <div className="product-image">
                  <a href={`/playstore/${product.category.toLowerCase()}/${product.slug}`}>
                  <img
                     src={product.image}
                     alt={product.name}
                     title={product.name}
                     />
                  </a>
               </div>
               <div className="product-caption">
                  <div className="product-meta d-flex flex-column align-items-center">
                     <p className="product-price mb-2">
                        <span className="price-new">{product.title}</span>
                     </p>
                     <div className="product-manufacturer mb-1">
                        <a href={`/playstore/${product.category}`}>{product.category}</a>
                     </div>
                  </div>
               </div>
            </div>
            {/* Bottom Left StarIcon */}
            <div
            style={{
            position: 'absolute',
            bottom: '8px',
            left: '10px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '1rem',
            fontWeight: 500,
            color:' var(--ifm-color-primary-title-dark)'
            }}
            >
            49
           <StarIcon style={{  width: '1.3rem', height: '1.3rem', color:'red' }} />
         </div>
         {/* Bottom Right ArrowDownTrayIcon */}
         <div
         style={{
         position: 'absolute',
         bottom: '8px',
         right: '10px',
         display: 'flex',
         alignItems: 'center',
         fontSize: '1rem',
         fontWeight: 500,
         color:' var(--ifm-color-primary-title-dark)'
         }}
         >
         <span style={{ marginRight: '4px' }}>26 M</span>
         <ArrowDownTrayIcon style={{ width: '1.2rem', height: '1.2rem', color: 'red' }} />
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