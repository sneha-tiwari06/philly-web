"use client";
import React, { useEffect, useState } from 'react';

interface Testimonial {
  _id: string;
  title: string;
  description: string;
  author: string;
  category: {
    _id: string;
    category: string;
  };
}

const slugify = (str: string) =>
  str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");

const TestimonialDetail = ({ categoryId }: { categoryId?: string }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        
        const data = await res.json();
        // console.log(data, "testi")
        const filtered = categoryId
          ? data.filter(
              (testimonial: Testimonial) =>
                slugify(testimonial.category?.category || '') === categoryId
            )
          : data;

        setTestimonials(filtered);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, [categoryId]);

  return (
    <section className="tour_testimonial_box">
      <div className="swiper testim-slider">
        <div className="sec-title-container d-flex">
          <div className="sec-title mb-0">
            <h4 className="mb-0">What Our Guests Are Saying</h4>
          </div>
          <div className="swiper-controls m-0">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <div className="swiper-wrapper">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div className="swiper-slide testimBox" key={testimonial._id}>
                <div className="inner">
                  <div className="quotation-mark"><span>❞</span></div>
                  <div className="testim-text scroller">
                    <p className="mb-0"></p>
                    <p>{testimonial.description}</p>
                    <p></p>
                  </div>
                  <h6 className="mb-0 testim-name">{testimonial.author}</h6>
                </div>
              </div>
            ))
          ) : (
            <p>Loading testimonials...</p>
          )}
        </div>
      </div>

      <div className="ratingContainer mt-4 pt-4 border-top">
        <div className="row gap-row">
          <div className="col-4 ratingBox">
            <div className="inside">
              <div className="img-fluid">
                <img src="/images/google.jpg" alt="Washington DC Monuments Google Reviews" />
              </div>
            </div>
          </div>
          <div className="col-4 ratingBox">
            <div className="inside">
              <div className="img-fluid">
                <img src="/images/facebook.jpg" alt="Washington DC Monuments Facebook Reviews" />
              </div>
            </div>
          </div>
          <div className="col-4 ratingBox">
            <div className="inside">
              <div className="img-fluid">
                <img src="/images/tripadvisor.jpg" alt="Washington DC Monuments Tripadvisor Reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialDetail;
