"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import EventModal from '../events/[slug]/eventModal';
import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../utils/config';
interface Event {
    _id: string,
    eventName: string,
    eventURL: string,
    eventDesc: string,
    attached_document: string,
}

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/events`);
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
        <>
            <main>
                <div className="w-100 emptyBox"></div>
                <div className="w-100 breadcrumb-wrapper bg-primary">
                    <div className="container-lg">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">Events</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <section className="w-100 position-relative overflow-hidden padding pt-5 section-tours">
                    <div className="container-lg">
                        <div className="sec-title">
                            <span className="h6 sec-title__tagline">popular events</span>
                            <h2 className="h1 mb-0">Featured <span className="text-third">Events</span></h2>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-danger">Error: {error}</p>}

                        <div className="row g-4">
                            {events.map((event) => (
                                <div className="col-lg-4 col-sm-6 package-card" key={event._id}>
                                    <div className="package-card__inner">
                                        <div className="package-card__img"><Link href={`/events/${event.eventURL}`}><img src={`${IMAGE_BASE_URL}${event.attached_document}`} alt={event.eventName} /></Link></div>
                                        <div className="package-card__content">
                                            <h3 className="package-card__title"><Link href={`/events/${event.eventURL}`}>{event.eventName}</Link></h3>
                                            <p className="text-truncate_two-lines">
                                                {(event.eventDesc).toString().replace(/<[^>]+>/g, '').slice(0, 100)}...
                                            </p>
                                            <div className="package-card__content__btn">
                                                <div className="viewmore w-auto mt-0"><Link href={`/events/${event.eventURL}`} className="button">View Detail <i className="fa fa-angles-right icon-circular sm"></i></Link></div>
                                                <div className="readmore w-auto mt-0"><Link href="#eventModal" data-bs-toggle="modal" data-bs-type="Wedding Event" className="button button-sm stroke">Get Quote <i className="fa fa-shopping-cart"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <EventModal />
        </>
    )
}

export default Events
