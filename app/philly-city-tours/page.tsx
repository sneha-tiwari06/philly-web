"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BookingModal from "../home-comp/bookingModal";
import axios from "axios";
import { API_BASE_URL, IMAGE_BASE_URL } from "../utils/config";

interface Tours {
  _id: string;
  slugURL: string;
  category: string;
  attached_document: string;
  
}

const Tours = () => {
  const [tours, setTours] = useState<Tours[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        setTours(response.data);
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
    fetchTours();
  }, []);

  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Philly City Tours</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="w-100 position-relative overflow-hidden padding pt-5 section-tours">
          <div className="container-lg">
            <div className="sec-title">
              <span className="h6 sec-title__tagline">Philly City Tours</span>
              <h2 className="h1 mb-0">You'll Also <span className="text-third">Like</span></h2>
            </div>

            {loading ? (
              <p>Loading Tours...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <div className="row g-4">
                {tours.map((tour, index) => (
                  <div key={index} className="col-lg-4 col-sm-6 package-card">
                    <div className="package-card__inner">
                      <div className="package-card__img">
                        <Link href={`/tours/${tour.slugURL}`}>
                          <img
                            src={`${IMAGE_BASE_URL}${tour.attached_document}`}
                            alt={tour.category}
                          />
                        </Link>
                      </div>
                      <div className="package-card__content">
                        <div className="package-card__price">$69.00</div>
                        <h3 className="package-card__title">
                          <a href="#">{tour.category}</a>
                        </h3>
                        <ul className="list-inline d-flex package-card__meta">
                          <li><i className="fa fa-map-marker-alt"></i> Philadelphia</li>
                          <li><i className="fa fa-hourglass-start"></i> 2 Hours</li>
                        </ul>
                        <div className="package-card__content__btn">
                          <div className="viewmore w-auto mt-0">
                            <Link href={`/tours/${tour.slugURL}`} className="button">
                              View Detail <i className="fa fa-angles-right icon-circular sm"></i>
                            </Link>
                          </div>
                          <div className="readmore w-auto mt-0">
                          <a href="#bookingModal" data-bs-toggle="modal" data-bs-type={tour.category} className="button button-sm stroke" onClick={() => setSelectedCategory(tour.category)}>
                        Book Now <i className="fa fa-shopping-cart"></i>
                      </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <BookingModal selectedCategory={selectedCategory}/>
    </>
  );
};

export default Tours;
