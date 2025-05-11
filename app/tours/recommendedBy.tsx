"use client";
import React from 'react';

function RecommendedBy() {
  return (
    <section className="tour_testimonial_box">
    <div className="sec-title">
        <h4 className="mb-0">Recommended By</h4>
    </div>
    <div className="row g-3">
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-kayak.webp" className="h-100 object-contain" alt="Kayak" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-sofitel.webp" className="h-100 object-contain" alt="Sofitel Hotel" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-hotel-washington.webp" className="h-100 object-contain" alt="Hotel Washington" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-get-your-guide.webp" className="h-100 object-contain" alt="Get Your Guide" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-awg.webp" className="h-100 object-contain" alt="Attraction World Group" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-tripadvisor.webp" className="h-100 object-contain" alt="Trip Advisor" />
            </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 partnersBox">
            <div className="inside d-block h-100 p-3 bg-white rounded shadow-sm">
                <img src="/images/partners/logo-viator.webp" className="h-100 object-contain" alt="Viator" />
            </div>
        </div>
    </div>
</section>
  )
}

export default RecommendedBy