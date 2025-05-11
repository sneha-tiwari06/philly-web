"use client";
import React from 'react'

function AboutUs() {
  return (
    <section className="w-100 position-relative overflow-hidden padding pb-0 bg-light section-overview">
        <div className="container-lg">
            <div className="row g-4 justify-content-around">
                <div className="col-lg-5 overview-imgBox">
                    <div className="img-fluid position-relative h-100"><img src="./images/slide1.jpg" className="h-100" alt="" /></div>
                </div>
                <div className="col-lg-6 overview-">
                    <div className="inner ps-lg-5">
                        <div className="sec-title">
                            <span className="h6 sec-title__tagline">about philly city tours</span>
                            <h2 className="h1 mb-0">Discover <span className="text-third">Philadelphia</span> with our guide</h2>
                        </div>
                        <p>Explore the heart of American history and culture with Philly City Tours. Whether you're visiting for the first time or rediscovering your hometown, our local guides are ready to show you iconic landmarks, hidden gems, and fascinating stories that make Philadelphia unforgettable.</p>
                        <p>Join us for a smooth, fun, and informative ride through the city—perfect for solo travelers, couples, and families. With over 20 years of local experience, we promise a tour that’s both authentic and enjoyable.</p>
                        <ul className="list-inline list-unstyled">
                            <li className="d-flex align-items-center gap-2"><i className="fa fa-check icon-circular sm"></i><span>20 Years of Experience</span></li>
                            <li className="d-flex align-items-center gap-2"><i className="fa fa-check icon-circular sm"></i><span>Friendly and Knowledgeable Local Guides</span></li>
                        </ul>
                        <div className="phone-call mb-4">
                            <i className="fa fa-phone-volume"></i>
                            <div className="text">
                                <p className="mb-0">For information</p>
                                <a href="tel:+19292573451">929 257 3451</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs