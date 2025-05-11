"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import axiosInstance, { BASE_IMAGE_URL } from "../utils/axiosInstnace";

interface Event {
  _id: string,
  eventName: string,
  eventURL: string,
  eventDesc: string,
  attached_document: string,
}

const EventSlider = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/events");
        setEvents(response.data);
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
    fetchEvents();
  }, []);

  return (
    <section className="w-100 position-relative overflow-hidden padding section-tours">
      <div className="container-lg">
        <div className="sec-title-container d-flex">
          <div className="sec-title mb-0">
            <span className="h6 sec-title__tagline">popular events</span>
            <h2 className="h1 mb-0">
              Featured <span className="text-third">Events</span>
            </h2>
          </div>
          <div className="swiper-controls m-0">
            <div className="swiper-button-prev lg"></div>
            <div className="swiper-button-next lg"></div>
          </div>
        </div>

        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500 }}
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
          >
            {events.map((event, index) => (
              <SwiperSlide key={index} className="package-card">
                <div className="package-card__inner">
                  <div className="package-card__img">
                    <Link href={`/events/${event.eventURL}`}>
                      <img src={`${BASE_IMAGE_URL}${event.attached_document}`} alt={event.eventName} />
                    </Link>
                  </div>
                  <div className="package-card__content">
                    <h3 className="package-card__title">
                      <Link href={`/events/${event.eventURL}`}>{event.eventName}</Link>
                    </h3>
                    <p className="text-truncate_two-lines">
                    {(event.eventDesc).toString().replace(/<[^>]+>/g, '').slice(0, 100)}...
                    </p>
                    <div className="package-card__content__btn">
                      <div className="viewmore w-auto mt-0">
                      <Link href={`/events/${event.eventURL}`} className="button">
                          View Detail <i className="fa fa-angles-right icon-circular sm"></i>
                        </Link>
                      </div>
                      <div className="readmore w-auto mt-0">
                        <a
                          href="#eventModal"
                          data-bs-toggle="modal"
                          data-bs-type={event.eventName}
                          className="button button-sm stroke"
                        >
                          Get Quote <i className="fa fa-envelope"></i>
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
  );
};

export default EventSlider;
