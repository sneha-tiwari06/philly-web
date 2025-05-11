"use client";
import React from "react";

function DetailsTour() {
  return (
    <section className="tour_details_box">
      <div className="row gap-row">
        <div className="col-lg-6">
          <h5>Price &amp; Duration</h5>
          <ul>
            <li>
              <b>$69</b> per person (2 Hours)
            </li>
            <li>
              <b>$49</b> for children under 12
            </li>
          </ul>
          <br />
          <h5>Meeting Point/End Location</h5>
          <ul>
            <li>50 N 12th Street, United States</li>
            <li>
              <a
                href="https://maps.app.goo.gl/J9Zz8K41LT8xz4GEA"
                target="_blank"
              >
                Open in Google Map
              </a>
            </li>
          </ul>
          <br />
          <h5>Max Group Size</h5>
          <ul>
            <li>7 passengers per car</li>
            <li>A total of 22 passengers per time slot</li>
          </ul>
          <br />
          <h5>Type of Tours</h5>
          <p>
            Private Tours (Day &amp; Night)
            <br />
            Group Tours (Day &amp; Night)
          </p>
          <br />
          <h5>Ages</h5>
          <p>Suitable for all ages</p>
          <br />
          <h5>What to Expect</h5>
          <p>
            Guided Tour, classNameic/Modle-T car, seeing all the National Mall,
            Including all the Memorials.
          </p>
        </div>
        <div className="col-lg-6">
          <h5>What’s Include</h5>
          <ul>
            <li>
              <b>Guided Tour of Key Monuments and Memorials</b>
              <br />
              <a href="#itinerary">(Check the Itinerary for full details)</a>
            </li>
            <li>
              <b>Stops for Photo Opportunities</b>
              <br />
              Various stops at key landmarks for photo opportunities and brief
              exploration.
            </li>
            <li>
              <b>Narrated Tour</b>
              <br />
              An expert guide providing historical context and interesting facts
              about the monuments and surrounding areas.
            </li>
            <li>
              <b>Transportation</b>
              <br />
              Electric Model-T Car Transportation to all listed stops, with the
              option for private or group tours depending on the package.
            </li>
            <li>
              <b>
                Water or Light Refreshments (optional, depending on tour
                operator)
              </b>
              <br />
              Bottled water during hot summer days.
            </li>
          </ul>
          <br />
          <h5>What’s Not Included</h5>
          <ul>
            <li>Tips and gratuities</li>
            <li>Food and beverages</li>
            <li>Hotel pickup and drop-off for group tours</li>
          </ul>
          <br />
          <h5>Events</h5>
          <ul>
            <li>
              <a
                href="/events/wedding-events-in-philly-city"
                target="_blank"
              >
                Wedding Events
              </a>
            </li>
            <li>
              <a
                href="/events/bachelorette-party-in-philly-city"
                target="_blank"
              >
                Bachelorette Party
              </a>
            </li>
            <li>
              <a
                href="/events/advertising-campaign-in-philly-city"
                target="_blank"
              >
                Advertising Campaign
              </a>
            </li>
            <li>
              <a
                href="/events/corporate-event-in-philly-city"
                target="_blank"
              >
                Corporate Event
              </a>
            </li>
            <li>
              <a
                href="/events/birthday-party-in-philly-city"
                target="_blank"
              >
                Birthday Party
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary-light p-3 rounded mt-4">
        <h6 className="text-secondary">Important Notes.</h6>
        <ul>
          <li>Please arrive at least 5 minutes before the tour starts</li>
          <li>
            As all our cars are classNameic models with weight limitations, we
            kindly ask guests who may require additional accommodations to
            contact us prior to booking. This will allow us to ensure a
            comfortable and enjoyable experience by tailoring our services to
            meet your specific needs.
          </li>
          <li>
            Cancellations are permitted up to 24 hours before the scheduled tour
            for your convenience.
          </li>
          <li>
            For private tours, we provide hotel pickup and drop-off for an
            additional $50 per car, covering locations form hotels located in downtown, city center or 1.5 miles from the downtown to ensuring a seamless experience. 
          </li>
          <li>
            We are committed to offering a Lowest Price Guarantee to ensure you
            receive the best value.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DetailsTour;
