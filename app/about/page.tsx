import React from "react";
import BrandSlider from "../home-comp/brandSlider";
import Link from "next/link";

const About = () => {
  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">About</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 position-relative overflow-hidden padding section-about">
          <div className="container-lg">
            <div className="row g-4 justify-content-around">
              <div className="col-lg-5 overview-imgBox">
                <div className="img-fluid position-relative h-100">
                  <img src="/images/slide1.jpg" className="h-100" alt="" />
                </div>
              </div>
              <div className="col-lg-6 overview-">
                <div className="inner ps-lg-5">
                  <div className="sec-title">
                    <span className="h6 sec-title__tagline">about philly city tours</span>
                    <h2 className="h1 mb-0">Who <span className="text-third">we</span> are?</h2>
                  </div>
                  <p>Philly City Tours is a local tour operator passionate about the rich history and culture of Philadelphia. We’re here to share our deep connection to the city with visitors from all over, offering memorable and engaging Philadelphia sightseeing experiences designed for relaxed and informal tourism.</p>
                  <p>We follow all local legal guidelines and carry updated insurance, ensuring your safety and compliance with tourism standards at all times.</p>
                  <p>Our fleet includes a range of vehicles—from stylish vintage cars to spacious rides for groups of 4 to 7 people—so you can explore the city just the way you like. Whether you're drawn to iconic spots like Independence Hall or hidden corners of South Philly, our Philadelphia guided tours offer something for everyone.</p>
                  <p>Book your Philly tour in a classic ride and make unforgettable memories!</p>
                  <div className="readmore">
                      <Link href="/philly-city-tours" className="button">Book Now <i className="fa fa-hand-pointer"></i></Link>
                  </div>
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
        <BrandSlider />
        <section className="w-100 position-relative overflow-hidden padding section-partner">
          <div className="container-lg">
            <div className="row g-4">
              <div className="col-lg-7 overview-">
                <div className="inner pe-lg-5">
                  <div className="sec-title">
                    <span className="h6 sec-title__tagline">at philly city tours</span>
                    <h2 className="h1 mb-0">Your trusted local tour <span className="text-third">partner in Philadelphia</span></h2>
                  </div>
                  <p>Looking to explore Philadelphia with a perfect blend of history, charm, and vibrant local culture? Philly City Tours offers the ideal guided experiences—crafted just for you! Whether you're a fan of historic landmarks or hidden neighborhood gems, our Philadelphia tour packages bring you the best of this iconic city at very affordable rates.</p>
                  <p>From the Liberty Bell to the cobbled streets of Old City, and everything in between, our Philadelphia sightseeing tours are designed to match your curiosity and pace. Whether you want to explore in the daylight or see the city lit up at night, Philly City Tours has got you covered.</p>
                  <p>We’re committed to delivering unforgettable experiences that go beyond just visiting places—we help you feel the spirit of Philadelphia tourism. So, get ready to dive into Philly’s rich culture, flavors, and stories. Book your next adventure with Philly City Tours, your go-to name for guided tours in Philadelphia.</p>
                </div>
              </div>
              <div className="col-lg-5 overview-imgBox">
                <div className="img-fluid position-relative h-100">
                    <video
                      src="/videos/overview-video.mp4"
                      playsInline
                      muted
                      loop
                      autoPlay
                      className="h-100 object-cover shadow-sm"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
