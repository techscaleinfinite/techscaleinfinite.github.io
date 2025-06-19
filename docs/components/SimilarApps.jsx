import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const SimilarApps = ({ products }) => {
  const filtered = products.filter(p => p.category === 'Web Service')
  const [activeIndex, setActiveIndex] = useState(null)

  const showImage = (index) => {
    setActiveIndex(index)
  }

  const closePopup = () => {
    setActiveIndex(null)
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length)
  }

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }

  // Optional: keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return
      if (e.key === 'Escape') closePopup()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex])

  return (
    <>
      <section className="new-arrivals-section position-relative">
        <div className="container">
          <div className="swiper-button-prev custom-swiper-button">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="swiper-button-next custom-swiper-button">
            <i className="fa fa-angle-right"></i>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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
            grabCursor={true}
          >
            {filtered.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-layout d-flex justify-content-center">
                  <div
                    className="product-thumb"
                    style={{ cursor: 'pointer' }}
                    onClick={() => showImage(index)}
                  >
                    <div className="product-inner">
                      <div className="product-image">
                        <img
                          src={product.img}
                          alt={product.name}
                          title={product.name}
                          style={{ height: '200px', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="product-caption text-center">
                        <strong>{product.name}</strong>
                        <p>{product.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ POPUP MODAL */}
    {activeIndex !== null && (
  <div
    className="popup-overlay"
    onClick={closePopup}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}
  >
    {/* Left Arrow */}
    <button
  onClick={(e) => {
    e.stopPropagation()
    showPrev()
  }}
  style={{
    position: 'fixed',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: '#000',
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10000,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  ‹
</button>

    {/* Image */}
    <div
      className="popup-inner"
      onClick={(e) => e.stopPropagation()}
      style={{ position: 'relative' }}
    >
      <img
        src={filtered[activeIndex].img}
        alt="popup"
        style={{
          maxHeight: '90vh',
          maxWidth: '90vw',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
        }}
      />
    </div>

    {/* Right Arrow */}
    <button
  onClick={(e) => {
    e.stopPropagation()
    showNext()
  }}
  style={{
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: '#000',
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10000,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  ›
</button>
  </div>
)}
    </>
  )
}

export default SimilarApps
