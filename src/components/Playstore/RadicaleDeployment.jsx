import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const images = [
  '/img/dwd3.jpg',
  '/img/jjh4.jpg',
  '/img/sder.jpg',
  '/img/swd.jpg',
  '/img/vsvs.jpg',
]

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = (e) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const closePopup = () => setActiveIndex(null)

  return (
    <div style={{ position: 'relative', padding: '2rem' }}>
      {/* Swiper Arrows */}
      <div className="swiper-button-prev" style={arrowStyle('left')} />
      <div className="swiper-button-next" style={arrowStyle('right')} />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        style={{ padding: '1rem 3rem' }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Image ${index}`}
              style={{
                maxWidth: '100%',
                cursor: 'pointer',
                borderRadius: '8px',
              }}
              onClick={() => setActiveIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Modal */}
      {activeIndex !== null && (
        <div
          onClick={closePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            padding: '1rem',
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={showPrev}
            style={{
              position: 'fixed',
              top: '50%',
              left: '2vw',
              transform: 'translateY(-50%)',
              fontSize: '2.5rem',
              color: '#fff',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10001,
            }}
          >
            ‹
          </button>

          {/* Popup Image */}
          <img
            src={images[activeIndex]}
            alt="popup"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: '85vh',
              maxWidth: '90vw',
              borderRadius: '10px',
              boxShadow: '0 0 30px rgba(255,255,255,0.2)',
            }}
          />

          {/* Right Arrow */}
          <button
            onClick={showNext}
            style={{
              position: 'fixed',
              top: '50%',
              right: '2vw',
              transform: 'translateY(-50%)',
              fontSize: '2.5rem',
              color: '#fff',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10001,
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

// Carousel Arrows
const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '-20px',
  transform: 'translateY(-50%)',
  fontSize: '2rem',
  color: '#000',
  cursor: 'pointer',
  zIndex: 5,
  background: 'transparent',
  border: 'none',
})

export default ImageGallery
