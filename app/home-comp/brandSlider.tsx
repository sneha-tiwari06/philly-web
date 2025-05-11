"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const BrandSlider = () => {
  const brands = [
    {
      name: "Kayak",
      logo: "./images/partners/logo-kayak.webp"
    },
    {
      name: "Sofitel",
      logo: "./images/partners/logo-sofitel.webp"
    },
    {
      name: "Hotel Washington",
      logo: "./images/partners/logo-hotel-washington.webp"
    },
    {
      name: "Get Your Guide",
      logo: "./images/partners/logo-get-your-guide.webp"
    },
    {
      name: "AWG",
      logo: "./images/partners/logo-awg.webp"
    },
    {
      name: "Tripadvisor",
      logo: "./images/partners/logo-tripadvisor.webp"
    },
    {
      name: "Viator",
      logo: "./images/partners/logo-viator.webp"
    },
  ];

  return (
    <section className="w-100 padding position-relative overflow-hidden bg-light section-partners">
      <div className="container-lg">
        <div className="small-title__with_line">
          <span className="d-inline-block h4 mb-0">Brands Trust Us</span>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          allowTouchMove={false}
          breakpoints={{
            1300: {
              slidesPerView: 7,
            },
          }}
          className="brand-slider"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="brandLogo">
              <div className="img-fluid">
                <img src={brand.logo} alt={brand.name} className="w-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute-element" data-position="right">
        <img src="./images/icons/golf-cart.svg" alt="Philly City Tour" />
      </div>
    </section>
  );
};

export default BrandSlider;
