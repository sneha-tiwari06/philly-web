"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function RelatedTours() {
  return (
    <section className="w-100 position-relative overflow-hidden padding section-tours">
      <div className="container-lg">
        <div className="sec-title-container d-flex">
          <div className="sec-title mb-0">
            <span className="h6 sec-title__tagline">related tours</span>
            <h2 className="h1 mb-0">
              You'll Also <span className="text-third">Like</span>
            </h2>
          </div>
          <div className="swiper-controls m-0">
            <div className="swiper-button-prev lg"></div>
            <div className="swiper-button-next lg"></div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
          }}
          className="package-slider"
        >
          {[
            {
              img: '/images/day-tour.jpg',
              title: 'Philly City Day Tour',
            },
            {
              img: '/images/Independence-Hall-at-night-in-Philadelphia.webp',
              title: 'Philly City Night Tour',
            },
            {
              img: '/images/4seater-tour.avif',
              title: '4 Seater Private Tour',
            },
            {
              img: '/images/7seater-tour.jpg',
              title: '7 Seater Private Tour',
            },
          ].map((tour, index) => (
            <SwiperSlide key={index} className="package-card">
              <div className="package-card__inner">
                <div className="package-card__img">
                  <a href="#">
                    <img src={tour.img} alt={tour.title} />
                  </a>
                </div>
                <div className="package-card__content">
                  <div className="package-card__price">$69.00</div>
                  <h3 className="package-card__title">
                    <a href="#">{tour.title}</a>
                  </h3>
                  <ul className="list-inline d-flex package-card__meta">
                    <li>
                      <i className="fa fa-map-marker-alt"></i> Philadelphia
                    </li>
                    <li>
                      <i className="fa fa-hourglass-start"></i> 2 Hours
                    </li>
                  </ul>
                  <div className="package-card__content__btn">
                    <div className="viewmore w-auto mt-0">
                      <a href="#" className="button">
                        View Detail{' '}
                        <i className="fa fa-angles-right icon-circular sm"></i>
                      </a>
                    </div>
                    <div className="readmore w-auto mt-0">
                      <a href="#" className="button button-sm stroke">
                        Book Now <i className="fa fa-shopping-cart"></i>
                      </a>
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
}

export default RelatedTours;
