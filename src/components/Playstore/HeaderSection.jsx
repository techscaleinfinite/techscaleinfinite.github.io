// HeaderSection.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import PlayCard from './PlayCard'

const HeaderSection = () => {
  const cardData = [
    {
      promoImage: 'images/headersection/nextcloud.jpg',
      logo: 'images/headersection/nextcloud.jpg',
      title: 'Nextcloud',
      rating: 'A suite of client-server software ',
      category: 'Opensource'
    },
    {
      promoImage: 'images/headersection/pdf.jpg',
      logo: 'images/headersection/pdf-logo.png',
      title: 'PDF Reader',
      rating: 'Software -  Portable Document Format',
      category: 'Tools'
    },
    {
      promoImage: 'images/headersection/wp.jpg',
      logo: 'images/headersection/wordpress-logo.png',
      title: 'WordPress',
      rating: 'Open-Source Content Management System',
      category: 'CMS'
    },
      {
      promoImage: 'images/headersection/nextcloud.jpg',
      logo: 'images/headersection/nextcloud.jpg',
      title: 'Nextcloud',
      rating: 'A suite of client-server software ',
      category: 'Opensource'
    },
    {
      promoImage: 'images/headersection/pdf.jpg',
      logo: 'images/headersection/pdf-logo.png',
      title: 'PDF Reader',
      rating: 'Software -  Portable Document Format',
      category: 'Tools'
    },
    {
      promoImage: 'images/headersection/wp.jpg',
      logo: 'images/headersection/wordpress-logo.png',
      title: 'WordPress',
      rating: 'Open-Source Content Management System',
      category: 'CMS'
    },
    // Add more cards if needed
  ]

  return (
    <div className=" py-4">
      {/* <div className="swiper-nav">
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </div> */}
      <div className="swiper-wrapper-hover">
      <Swiper
        modules={[Navigation]}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        spaceBetween={20}
        slidesPerView={2.2}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          576: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.2 }
        }}
        style={{ padding: '0 10px' }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <PlayCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev  custom-nav hs-nav-button"  style={{  left: '-20px',  top: '40%'}}></div>
        <div className="swiper-button-next  custom-nav hs-nav-button" style={{  right: '-20px',  top: '40%'}}></div>
      </div>
    </div>
  )
}

export default HeaderSection
