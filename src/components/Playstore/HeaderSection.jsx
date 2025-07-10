import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import SliderImage1 from './images/slider/slider1.png'; 

const HeaderSection = () => {
  return (
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
          <div
            className="slide-inner image-placeholder"
            style={{ background: 'var(--ifm-card-background)' }}
          >
            <div className="">
              <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-lg-6 p-5">
                  <div className="slide-content layer-animation-1">
                    <h1
                      className="main-title"
                      style={{ fontWeight: 700, color: '#3e4d76' }}
                    >
                      <span className="cloud-title">
                        Self-Driving Cloud Applications
                      </span>
                    </h1>
                    <p className="subtitle">
                      Smarter, faster, and always-on — the future of autonomous
                      cloud computing.
                    </p>
                  </div>
                </div>
                {/* Image Section */}
                <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                  <img
                   src="/images/slider/slider1.png"
                    className="img-fluid"
                    alt="Slider"
                    style={{ width: '500px', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeaderSection;
