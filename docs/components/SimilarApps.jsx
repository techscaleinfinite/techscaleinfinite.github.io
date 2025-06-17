import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import products from '../data/products'

const SimilarApps = ({ products }) => {
  const filtered = products.filter(p => p.category === 'Web Service')

  return (
    <section className="new-arrivals-section position-relative">
      <div className="container">
         <div className="swiper-button-prev custom-swiper-button" >
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next custom-swiper-button" >
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
                <div className="product-thumb">
                  <div className="product-inner">
                    <div className="product-image">
                      <a href="#">
                        <img
                          src={product.img}
                          alt={product.name}
                          title={product.name}
                        />
                      </a>
                    </div>
                    <div className="product-caption">
                      <div className="product-meta d-flex flex-column align-items-center">
                        <p className="product-price mb-2">
                          <span className="price-new">{product.name}</span>
                        </p>
                        <div className="product-manufacturer mb-1">
                          <a href="#">{product.category}</a>
                        </div>
                        <div className="product-ratings">
                          <ul className="rating d-flex justify-content-center list-unstyled mb-0">
                            {[...Array(5)].map((_, i) => (
                              <li key={i}>
                                <i
                                  className={`ion ion-md-star-outline${
                                    i >= Math.round(product.rating) ? ' disabled' : ''
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
  )
}

export default SimilarApps
