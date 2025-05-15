"use client";
import React, { useEffect, useState } from 'react';
import BookingTours from '../booking-form';
import DetailsTour from '../some-details';
import ItineraryToursDetails from '../itineraryTours';
import WhyPC from '../whyPCTours';
import TestimonialDetail from '../testimonialsDetailPage';
import RecommendedBy from '../recommendedBy';
import Faqs from '../faqs';
import Gallery from '../capturedMoment';
import RelatedTours from '../relatedTours';
import { useParams } from 'next/navigation';

function TourDetails() {
    const params = useParams();
    const slug = params?.slug as string;
  

    return (
        <main>
            <div className="w-100 emptyBox"></div>
            <div className="w-100 breadcrumb-wrapper bg-primary">
                <div className="container-lg">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="./philly-city-tours.php">Tours</a> </li>
                            <li className="breadcrumb-item active">
                                {slug
                                    .split("-")
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")}
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>
            <div className="w-100 pt-5">
                <div className="container-lg">
                    <div className="row gap-row flex-row-reverse">
                        <BookingTours />
                        <div className="col-xl-8 col-md-7 tour_details_wrapper">
                            <div className="sec-title-container d-flex">
                                <div className="sec-title mb-0">
                                    <h1 className="h1 mb-0">Philly City <span className="text-third">{slug
                                    .split("-")
                                    .filter(word => word.toLowerCase() !== "phillycity") 
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")}</span></h1>
                                </div>
                                <div className="shareBtn">
                                    <div className="sharethis-inline-share-buttons"></div>
                                </div>
                            </div>
                            <DetailsTour />
                            <ItineraryToursDetails />
                            <section className="tour_meeting_box">
                                <div className="sec-title">
                                    <h4 className="mb-0">Is there public parking near the meeting point?</h4>
                                </div>
                                <p>Yes, there are several public parking options available near the meeting point, including the following:</p>
                                <ul className="list">
                                    <li><a href="https://maps.app.goo.gl/2VxwEeQHecuRHnQP8" target='_blank'>SP+ Parking</a></li>
                                    <li><a href="https://maps.app.goo.gl/iwJWastpCUFSmiLg6" target='_blank'>Parkway Parking - 12th & Filbert</a></li>
                                    <li><a href="https://maps.app.goo.gl/8xiLdEbv2NQepoUT7" target='_blank'>Park America - 1301 Market Lot</a></li>
                                </ul>
                            </section>
                            <section className="tour_overview_box">
                                <h5>Witness Philly Like Never Before - With Philly City Day Tours;</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga voluptatibus recusandae et porro, esse unde eum, excepturi voluptas quis iste, ipsum earum harum quibusdam. Sint ipsa aspernatur in voluptate odio ab doloremque illo, voluptas earum voluptatibus inventore eaque aliquam molestiae iste quae. Optio explicabo fuga deserunt soluta ipsum ducimus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga voluptatibus recusandae et porro, esse unde eum, excepturi voluptas quis iste, ipsum earum harum quibusdam. Sint ipsa aspernatur in voluptate odio ab doloremque illo, voluptas earum voluptatibus inventore eaque aliquam molestiae iste quae. Optio explicabo fuga deserunt soluta ipsum ducimus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga voluptatibus recusandae et porro, esse unde eum, excepturi voluptas quis iste, ipsum earum harum quibusdam. Sint ipsa aspernatur in voluptate odio ab doloremque illo, voluptas earum voluptatibus inventore eaque aliquam molestiae iste quae. Optio explicabo fuga deserunt soluta ipsum ducimus.</p>
                            </section>
                            <WhyPC />
                            <TestimonialDetail categoryId={slug} />
                            <RecommendedBy />
                            <Faqs categoryId={slug} />

                            <Gallery slug={slug}/>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedTours />
        </main>
    )
}

export default TourDetails