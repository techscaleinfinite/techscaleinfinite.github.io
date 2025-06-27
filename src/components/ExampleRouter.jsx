import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useLocation } from '@docusaurus/router';
import initSqlJs from 'sql.js/dist/sql-wasm.js';
import CategoryTemplate from '../templates/CategoryTemplate';
import AppTemplate from '../templates/AppTemplate';
import PlaystoreTemplate from '../templates/PlaystoreTemplate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./style.css"

const images = [
 '../../img/dyy.jpg',
 '../../img/dty.jpg',
 '../../img/ewd.jpg',
 '../../img/ed36.jpg',
 '../../img/ffee3.jpg'
];

const similarApps = [
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
];
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

export default function ExampleRouter() {
  const location = useLocation();

  const slug = location.pathname.split('/').filter(Boolean)[2]; // playstore/:slug
  const fullPath = location.pathname.replace(/^\/example\/?/, '');
  const segments = location.pathname.split('/').filter(Boolean); // removes "example"


   const [popupIndex, setPopupIndex] = useState(null);

  const showNext = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev - 1 + images.length) % images.length);
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



  const renderTemplate = () => {
     if (segments.length === 2) {
      return <CategoryTemplate slug={segments[1]} />;
    } else if (segments.length === 3) {
      return <AppTemplate group={segments[0]} category={segments[1]} slug={segments[2]} />;
    } else if (segments.length === 1) {
      return <PlaystoreTemplate   category={segments[1]} slug={segments[2]} />;
    } else {
      return <div>404 - No matching template for this path</div>;
    }
  };

  return (
    <Layout title="" description="">
      <div style={{ padding: '2rem' }}>
        {renderTemplate()}
      </div>
    </Layout>
  );
}
