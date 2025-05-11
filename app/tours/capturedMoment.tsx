"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

interface GalleryImage {
  _id: string;
  imagePath: string;
  galleryAltText: string;
  tourId: {
    _id: string;
    slugURL: string;
  };
}

function Gallery({ slug }: { slug: string }) {
  // console.log("slug gallery", slug)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await axios.get<GalleryImage[]>("http://localhost:5000/api/gallery/gallery");
        const filteredImages = res.data.filter((img) => img.tourId.slugURL === slug);
        setGalleryImages(filteredImages);
      } catch (err) {
        console.error("Failed to fetch gallery images", err);
      }
    };
  
    if (slug) fetchGalleryImages();
  }, [slug]);
  

  return (
    <section className="tour_gallery_box">
      <div className="sec-title-container d-flex">
        <div className="sec-title mb-0">
          <h4 className="mb-0">Some of the Captured Moments</h4>
        </div>
        <div className="swiper-controls m-0">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        className="gallery-slider"
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        speed={2000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {galleryImages.map((img) => (
          <SwiperSlide key={img._id} className="sideImg">
            <div className="product-imgBox position-relative">
              <a
                href={`http://localhost:5000${img.imagePath}`}
                className="d-block"
                data-magnify="magnify"
                data-group="primg"
                data-caption={img.galleryAltText}
              >
                <img
                  src={`http://localhost:5000${img.imagePath}`}
                  className="rounded object-cover"
                  alt={img.galleryAltText || "Gallery Image"}
                  title={img.galleryAltText || "Gallery Image"}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
