
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/ionicons.min.css';
import './css/font-awesome.min.css';
import { FaStar } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import initSqlJs from 'sql.js/dist/sql-wasm.js';

const AppItem = ({ image, title, desc, rating,category,slug}) => (
 <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box mb-0">
  <a href={`example/${category.toLowerCase()}/${slug}`}>
    <div className="feature-content text-center">
      <div className="d-flex justify-content-center">
        <img src={image} className="img-fluid mb-3" alt={title} style={{ maxWidth: '120px' }} />
      </div>

      <div className="text-center px-3">
        <h2 className="cloud-title">{title}</h2>
        <p className="cloud-title">
          <a href={`example/${category}`}>{desc}</a>
        </p>

        <div className="d-flex justify-content-center align-items-center">
          <strong className="me-2">{rating}</strong>
          <span className="d-flex" style={{ color: 'rgb(250, 206, 27)' }}>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </span>
        </div>
      </div>
    </div>
  </a>
</div>

);

const PlaystoreLandingPage = () => {
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
  /*const apps = [
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/wordpress.webp', title: 'Wordpress 2', desc: 'Open source', rating: '4.3' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/amazonlinux.webp', title: 'Amazon Linux', desc: 'Operating system', rating: '4.7' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/caddy.webp', title: 'Caddy', desc: 'Open source', rating: '4.5' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/couchdb.webp', title: 'CoachDB', desc: 'Data Base', rating: '4.6' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/groovy.webp', title: 'Groovy', desc: 'Programming Language', rating: '4.3' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/erlang.webp', title: 'ERLang', desc: 'Programming Language', rating: '4.7' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/grafana_grafana.webp', title: 'Grafana', desc: 'Data Visualization Platform', rating: '4.5' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/bitnami_postgresql.webp', title: 'Bitnami', desc: 'Deployment Platform', rating: '4.6' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/mediawiki.webp', title: 'Mediawiki', desc: 'Open source', rating: '4.5' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/mono.webp', title: 'Mono', desc: 'Operating system', rating: '4.0' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/ros.webp', title: 'Ros', desc: 'Operating System', rating: '4.5' },
    { image: 'https://cdn.scaleinfinite.fr/app-images-webp/photon.webp', title: 'Photon', desc: 'Opensource', rating: '4.6' },
  ];*/
const products = [
  {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
    name: 'Amazon',
    category: 'Web services',
    rating: 4,
  },
   {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/bitnami_mariadb.webp',
    name: 'MariaDB',
    category: 'Database',
    rating: 4.3,
  },
     {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/fluentd.webp',
    name: 'Fluentd',
    category: 'OpenSource',
    rating: 4.9,
  },
     {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/circleci_postgres.webp',
    name: 'Circleci',
    category: 'Database',
    rating: 4.2,
  },

     {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/almalinux.webp',
    name: 'Almalinux',
    category: 'Operating System',
    rating: 4.5,
  },
     {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
    name: 'Amazon',
    category: 'Webservice',
    rating: 4.5,
  },
   {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/amazon_aws-cli.webp',
    name: 'Amazon',
    category: 'Web services',
    rating: 4,
  },
   {
    img: 'https://cdn.scaleinfinite.fr/app-images-webp/bitnami_mariadb.webp',
    name: 'MariaDB',
    category: 'Database',
    rating: 4.3,
  },

];
  return (
     <Layout title="Playstore" description="Explore top-rated open-source and commercial apps">
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
      <div className="row">
        {populaapps.slice(0, 4).map((app, idx) => <AppItem key={idx} {...app} />)}
      </div>
      <hr style={{ opacity: 0.5 }} />
      <div className="row">
        {populaapps.slice(4, 8).map((app, idx) => <AppItem key={idx + 4} {...app} />)}
      </div>
      <hr style={{ color: 'var(--ifm-color-primary-title-dark)' }} />
      <div className="row">
        {populaapps.slice(8, 12).map((app, idx) => <AppItem key={idx + 8} {...app} />)}
      </div>
    </div>
    <>
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
            <div className="swiper-button-prev custom-swiper-button" ref={prevRef}>
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="swiper-button-next custom-swiper-button" ref={nextRef} >
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
                1200: { slidesPerView: 5 },
              }}
              centeredSlides={false}
              grabCursor={true}
            >
              {filteredProducts.map((product, pIndex) => (
                <SwiperSlide key={pIndex}>
                  <div className="product-layout d-flex justify-content-center">
                    <div className="product-thumb">
                      <div className="product-inner">
                        <div className="product-image">
                          <a href={`example/${product.category.toLowerCase()}/${product.slug}`}>
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
                              <a href={`example/${product.category}`}>{product.category}</a>
                            </div>
                            <div className="product-ratings">
                              <ul className="rating d-flex justify-content-center list-unstyled mb-0">
                                {[...Array(5)].map((_, i) => (
                                  <li key={i}>
                                    <i
                                      className={`ion ion-md-star-outline${
                                        i >= product.rating ? ' disabled' : ''
                                      }`}
                                    ></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
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
       </Layout>
  );
};

export default PlaystoreLandingPage;
