"use client";
import React from 'react';

function SpecialOffer() {
  return (
    <section className="w-100 position-relative overflow-hidden padding bg-image section-offers" style={{ backgroundImage: "url('./images/philadelphia-night-view.jpg')", backgroundAttachment: "fixed", }}
>
    <div className="container-lg">
        <div className="sec-title mx-auto text-center">
            <span className="h6 sec-title__tagline">special offers</span>
            <h2 className="h1 mb-0 text-white">Offers To <span className="text-secondary">Inspire You</span></h2>
        </div>
        <div className="row g-4">
            <div className="col-md-6 offerBox offerBox__left">
                <div className="inner bg-third">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6 offer-text">
                            <div className="offer-text__inside">
                                <div className="sec-title text-white mb-0">
                                    <span className="h6 sec-title__tagline text-white">Special Offer</span>
                                    <h4 className="fw-bold mb-0">Explore All Tours Of Philly City With Us</h4>
                                </div>
                                <div className="readmore"><a href="#" className="button button-sm inverse">Book Now <i className="fa fa-angles-right"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 offer-thumb"><img src="./images/offer-1-1.webp" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 offerBox offerBox__right">
                <div className="inner bg-secondary">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6 offer-thumb"><img src="./images/offer-1-2.webp" alt="" /></div>
                        <div className="col-md-6 offer-text">
                            <div className="offer-text__inside">
                                <div className="sec-title text-white mb-0">
                                    <span className="h6 sec-title__tagline text-white">Get 15% Offer</span>
                                    <h4 className="fw-bold mb-0">Exclusive Discounts For First 50 Bookings</h4>
                                </div>
                                <div className="readmore"><a href="#" className="button button-sm bg-third">Book Now <i className="fa fa-angles-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SpecialOffer