"use client";
import React, { useEffect, useState } from 'react';
import TourLogic from '../commonJS/custom';
import Link from 'next/link';
import axios from 'axios';
interface Category {
    _id: string;
    slugURL: string;
    category: string;
  }
interface Event {
    _id: string;
    eventURL: string;
    eventName: string;
  }
const Navbar = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [events, setEvents] = useState<Event[]>([]);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get<Category[]>("http://localhost:5000/api/categories");
                setCategories(res.data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get<Event[]>("http://localhost:5000/api/events");
                setEvents(res.data);
            } catch (err) {
                console.error("Error fetching events:", err);
            }
        };
        fetchEvents();
    }, []);
    return (
        <>
            <TourLogic />
            <div className="header">
                <div className="topLinks">
                    <div className="container-xxl d-flex justify-content-between align-items-center">
                        <ul className="list-inline d-flex">
                            <li><Link href="#">
                                <i className="fa fa-envelope"></i>
                                <span>info@phillycitytours.com</span>
                            </Link></li>
                            <li><Link href="#">
                                <i className="fa fa-map-marker-alt"></i>
                                <span>Philadelphia, US</span>
                            </Link></li>
                        </ul>
                        <ul className="list-inline d-flex gap-1">
                            <li>Reviews</li>
                            <li className="d-flex gap-1">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star-half text-warning"></i>
                            </li>
                            <li><small>4.8 / 5 Based on 725 reviews</small></li>
                        </ul>
                        <ul className="list-inline d-flex header-social">
                            <li>EN</li>
                            <li>|</li>
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container-xxl">
                    <div className="mainHeader">
                        <div className="logo"><Link href="./">Philly City Tours</Link></div>
                        <nav className="navi d-flex align-items-center gap-3">
                            <ul className="list-inline d-none d-lg-flex">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li className="position-relative"><Link href="/philly-city-tours">Tours <i className="fa fa-chevron-down"></i></Link>
                                    <div className="dropdown">
                                        <ul className="list-inline">
                                            {categories.map((cat) => (
                                                <li key={cat._id}>
                                                    <Link href={`/tours/${cat.slugURL}`}>
                                                        {cat.category} <i className="fa fa-arrow-up-right-from-square"></i>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="position-relative"><Link href="/event-party-philly-city">Events <i className="fa fa-chevron-down"></i></Link>
                                    <div className="dropdown">
                                        <ul className="list-inline">
                                        {events.map((event) => (
                                            <li  key={event._id}><Link href={`/events/${event.eventURL}`}>{event.eventName}<i className="fa fa-arrow-up-right-from-square"></i></Link></li>
                                           ))}
                                            </ul>
                                    </div>
                                </li>
                                <li><Link href="/blogs">Blogs</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="cart-btnBox d-none d-lg-flex align-items-center gap-2">
                            <Link href="/cart" className="position-relative d-block"><span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">1</span><i className="fa fa-shopping-cart icon-circular"></i></Link>
                            <div className="readmore mt-0 w-auto">
                                <Link href="#" className="button">Get In Touch <i className="fa fa-paper-plane"></i></Link>
                            </div>

                            <button className="menuBtn d-flex d-lg-none"><span></span></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="menuMoreContainer">
            <div className="inner pr-md-5">
                <ul className="list-inline MenuList">
                    <li><Link href="<?= $base_url?>">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Tours</Link></li>
                    <li><Link href="#">Events</Link></li>
                    <li><Link href="#">Blogs</Link></li>
                    <li><Link href="#">Careers</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
                <div className="headSocial ">
                    <Link href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fab fa-facebook-f icon-circular"></i></Link>
                    <Link href="#" data-toggle="tooltip" data-placement="bottom" title="X Twitter"><i className="fab fa-x-twitter icon-circular"></i></Link>
                    <Link href="#" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><i className="fab fa-linkedin-in icon-circular"></i></Link>
                    <Link href="#" data-toggle="tooltip" data-placement="bottom" title="YouTube"><i className="fab fa-youtube icon-circular"></i></Link>
                </div>
            </div>
        </div>  */}
        </>
    )
}

export default Navbar
