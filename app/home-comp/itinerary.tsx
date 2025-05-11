"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ItinerarySlider = () => {
  return (
    <section className="w-100 position-relative overflow-hidden padding section-itinerary">
      <div className="container-lg">
      <div className="sec-title-container d-flex">
            <div className="sec-title mb-0">
              <span className="h6 sec-title__tagline">most popular</span>
              <h2 className="h1 mb-0">
                Popular <span className="text-third">Itineraries</span>
              </h2>
            </div>
            <div className="swiper-controls m-0">
              <div className="swiper-button-prev lg"></div>
              <div className="swiper-button-next lg"></div>
            </div>
          </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 2500,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1360: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
         

          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/philly-hall.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/philly-love.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/tal-philly.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/philly-love.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/Philadelphia_city_hall.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/tal-philly.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="itinerary-card">
              <a href="#" className="inner">
                <div className="itinerary-card__img">
                  <img
                    src="./images/itineraries/Philadelphia_city_hall.jpg"
                    className="h-100 object-cover"
                    alt="City Hall"
                  />
                </div>
                <div className="itinerary-card__content">
                  <h5 className="itinerary-card__title mb-0">City Hall</h5>
                  <div className="viewmore w-auto mt-0">
                    <span className="button">
                      <i className="fa fa-angles-right icon-circular sm"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ItinerarySlider;
