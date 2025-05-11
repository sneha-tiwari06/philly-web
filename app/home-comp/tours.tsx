"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BookingModal from "./bookingModal";
import { useEffect, useState } from "react";
import axiosInstance, { BASE_IMAGE_URL } from "../utils/axiosInstnace";
import Link from "next/link";
interface Tours {
  _id: string;
  slugURL: string;
  category: string;
  attached_document: string;
}
const PackageSlider = () => {
   const [tours, setTours] = useState<Tours[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchTours = async () => {
        try {
          const response = await axiosInstance.get("/categories");
          setTours(response.data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } finally {
          setLoading(false);
        }
      };
      fetchTours();
    }, []);
  
  return (
    <>
    <section className="w-100 position-relative overflow-hidden padding section-tours">
      <div className="container-lg">
        <div className="sec-title-container d-flex">
          <div className="sec-title mb-0">
            <span className="h6 sec-title__tagline">Popular Tours</span>
            <h2 className="h1 mb-0">
              Featured <span className="text-third">Packages</span>
            </h2>
          </div>
          <div className="swiper-controls m-0">
            <div className="swiper-button-prev lg"></div>
            <div className="swiper-button-next lg"></div>
          </div>
        </div>
        {loading ? (
          <p>Loading Tours...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          {tours.map((tour, index) => (
            <SwiperSlide key={index} className="package-card">
              <div className="package-card__inner">
                <div className="package-card__img">
                <Link href={`/tours/${tour.slugURL}`}>
                <img
                      src={`${BASE_IMAGE_URL}${tour.attached_document}`}
                      alt={tour.category}
                      />
                  </Link>
                </div>
                <div className="package-card__content">
                  <div className="package-card__price">$69.0</div>
                  <h3 className="package-card__title">
                  <Link href={`/tours/${tour.slugURL}`}>{tour.category}</Link>
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
                    <Link href={`/tours/${tour.slugURL}`} className="button">
                        View Detail{" "}
                        <i className="fa fa-angles-right icon-circular sm"></i>
                      </Link>
                    </div>
                    <div className="readmore w-auto mt-0">
                      <a href="#bookingModal" data-bs-toggle="modal" data-bs-type={tour.category} className="button button-sm stroke">
                        Book Now <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         )}
      </div>
    </section>
      <BookingModal selectedCategory="category" />
      </>
  );
};

export default PackageSlider;
