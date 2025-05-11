"use client";
import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    
<>
    <footer className="footer-area overflow-hidden w-100">
        <div className="container-lg">
            <div className="foot-contact">
                <ul className="list-inline row">
                    <li className="col-md-4">
                        <a href="#">
                            <i className="fa fa-map-marker-alt"></i>
                            <p className="mb-0">
                                <span className="d-block">Address</span>
                                <small>Philadelphia, US</small>
                            </p>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="tel:+1-9292573451">
                            <i className="fa fa-phone-volume"></i>
                            <p className="mb-0">
                                <span className="d-block">Phone</span>
                                <small>+1-9292573451</small>
                            </p>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="mailto:info@phillycitytours.com">
                            <i className="fa fa-envelope-open-text"></i>
                            <p className="mb-0">
                                <span className="d-block">Email</span>
                                <small>info@phillycitytours.com</small>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-links">
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-12 foot-About">
                        <div className="insideBox pe-0 pe-lg-5">
                            <div className="footer-logo text-cursive text-secondary">Philly City Tours</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus soluta sunt facilis obcaecati. Exercitationem.</p>
                            <ul className="list-inline footerSocial">
                                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fab fa-facebook-f icon-circular"></i></a></li>
                                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fab fa-instagram icon-circular"></i></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=00" target="_blank" data-toggle="tooltip" data-placement="bottom" title="WhatsApp"><i className="fab fa-whatsapp icon-circular"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 foot-menu">
                        <div className="insideBox">
                            <span className="footer-title">Tours</span>
                            <ul className="list-inline">
                                <li><a href="#">Day Tour</a></li>
                                <li><a href="#">Night Tour</a></li>
                                <li><a href="#">4 Seater Private Tour</a></li>
                                <li><a href="#">7 Seater Private Tour</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 foot-menu">
                        <div className="insideBox">
                            <span className="footer-title">Events</span>
                            <ul className="list-inline">
                                <li><a href="#">Wedding Events</a></li>
                                <li><a href="#">Bachelorette Party</a></li>
                                <li><a href="#">Advertising Campaign</a></li>
                                <li><a href="#">Corporate Event</a></li>
                                <li><a href="#">Birthday Party</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 foot-menu">
                        <div className="insideBox">
                            <span className="footer-title">Navigation</span>
                            <ul className="list-inline">
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/blogs">Blogs</Link></li>
                                <li><Link href="/careers">Careers</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 foot-menu">
                        <div className="insideBox">
                            <span className="footer-title">Useful Links</span>
                            <ul className="list-inline">
                                <li><a href="#">Partnership With</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container-lg">
                <div className="copyrights">
                    <p className="mb-0">© Philly City Tours 2025</p>
                </div>
                <ul className="list-inline">
                    <li><img src="/images/icons/visa.svg" alt="" /></li>
                    <li><img src="/images/icons/mastercard.svg" alt="" /></li>
                    <li><img src="/images/icons/american_express.svg" alt="" /></li>
                    <li><img src="/images/icons/paypal.svg" alt="" /></li>
                    <li><img src="/images/icons/apple-pay.svg" alt="" /></li>
                    <li><img src="/images/icons/discover.svg" alt="" /></li>
                </ul>
            </div>
        </div>
    </footer>

    <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
    </div>
</>
  )
}

export default Footer