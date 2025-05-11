"use client";
import React from 'react';

function WhyPC() {
  return (
    <section className="tour_why_box">
    <div className="sec-title">
        <h4 className="mb-0">Why Philly City Tours?</h4>
    </div>
    <div className="row g-3">
        <div className="col-xl-6 whyusBox">
            <div className="inner shadow-sm position-relative overflow-hidden bg-image text-white" style={{backgroundImage: "url(/images/why-dc/eco-friendly-ride.webp)"}}>
                <h5 className="text-white">Eco-Friendly Ride</h5>
                <p className="mb-0">With vintage electric carts, travel in all comfort and style. An eco-smart way of touring D.C. while decreasing your carbon footprint.</p>
            </div>
        </div>
        <div className="col-xl-6 whyusBox">
            <div className="inner shadow-sm position-relative overflow-hidden bg-image text-white" style={{backgroundImage: "url(/images/why-dc/engaging-and-informative.webp)"}}>
                <h5 className="text-white">Engaging and Informative</h5>
                <p className="mb-0">Our expert guides provide an engaging experience. Giving you a deep understanding of the history and significance of each landmark.</p>
            </div>
        </div>
        <div className="col-xl-6 whyusBox">
            <div className="inner shadow-sm position-relative overflow-hidden bg-image text-white" style={{backgroundImage:"url(/images/why-dc/customizable-to-your-needs.webp)"}}>
                <h5 className="text-white">Customizable to Your Needs</h5>
                <p className="mb-0">You can even get the experience of custom tours for your private Washington DC tour or small group day tour.</p>
            </div>
        </div>
        <div className="col-xl-6 whyusBox">
            <div className="inner shadow-sm position-relative overflow-hidden bg-image text-white" style={{backgroundImage: "url(/images/why-dc/convenient-pricing.webp)"}}>
                <h5 className="text-white">Convenient Pricing</h5>
                <p className="mb-0">With tours starting at just $69 for adults and $59 for children. Our Philly City Tours offer great value for an unforgettable experience.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default WhyPC