// import EventModal from "./events/[slug]/eventModal";
import AboutUs from "./home-comp/aboutHome";
import BookingHome from "./home-comp/booking-home";
import BrandSlider from "./home-comp/brandSlider";
import ItinerarySlider from "./home-comp/itinerary";
import SpecialOffer from "./home-comp/offer";
import EventSlider from "./home-comp/popularEvents";
import PackageSlider from "./home-comp/tours";

export default function Home() {
  return (
    <>     
     <div className="section-hero position-relative w-100">
          <div className="swiper hero-slider h-100">
              <div className="swiper-wrapper h-100">
                  <div className="swiper-slide hero-slide h-100">
                      <picture>
                          <source media="(min-width: )" srcSet="" />
                          <img src="./images/slide2.webp" className="h-100 object-cover" alt="" />
                      </picture>
                      <div className="hero-text-wrapper">
                          <div className="container-lg">
                              <div className="row">
                                  <div className="col-md-10 offset-md-1">
                                      <h4 className="tl-header-banner-sub-title">With vintage luxury cart</h4>
                                      <h1 className="tl-header-banner-title">Explore The Philly City with <span>phillycitytours</span></h1>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <BookingHome />
      </div>
      <PackageSlider />
      <AboutUs />
      <BrandSlider />
      <EventSlider />
      <SpecialOffer />
      <ItinerarySlider />
      {/* <EventModal /> */}
    </>
  );
}
