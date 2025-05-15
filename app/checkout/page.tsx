"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CountryOptions from "../countryList/countries";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const Checkout = () => {
  const [booking, setBooking] = useState<any>(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    countryname: "",
    state: "",
    streetadd: "",
    town: "",
    zip: "",
    mobile: "",
    uemail: "",
    makedeafult: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("bookingDetails");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    const isChecked = type === 'checkbox' || type === 'radio'
      ? (e.target as HTMLInputElement).checked
      : undefined;

    // Now use isChecked safely
    const newValue = type === 'checkbox' || type === 'radio' ? isChecked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));
  };


  const handleConfirmBooking = async () => {
    try {
      const payment = {
        total_price: 71.81,
        sub_total: 69,
        credit_card_processing_fee: 2.81,
        coupon_applied: "None",
        transaction_id: Math.random().toString(36).substring(2, 15),
        payment_method: "card",
        card_detail: "1234", // dummy last 4 digits
        payment_status: true,
      };

      const order = {
        tour_name: booking?.tourName || '',
        adults: booking?.adultPassengers || 0,
        kids: booking?.kidPassengers || 0,
        number_of_cars: booking?.totalCars || 0,
        order_status: true,
        created: new Date(),
      };


      const res = await axios.post(`${API_BASE_URL}/complete-booking/confirm-booking`, {
        user: formData,
        payment,
        order,
      });

      if (res.data.success) {
        alert("Booking Confirmed!");
        // Optionally reset form
        setFormData({
          firstname: "",
          lastname: "",
          companyname: "",
          countryname: "",
          state: "",
          streetadd: "",
          town: "",
          zip: "",
          mobile: "",
          uemail: "",
          makedeafult: false,
        });
      } else {
        alert("Booking Failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while confirming booking.");
    }
  };

  return (
    <main>
      <div className="w-100 emptyBox"></div>
      <div className="w-100 breadcrumb-wrapper bg-primary">
        <div className="container-lg">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Billing Details</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="w-100 position-relative overflow-hidden padding section-cart">
        <div className="container-lg">
          <form method="POST" encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
            <div className="row g-4">
              <div className="col-lg-9  formContainer">
                <div className="inner p-4 bg-secondary-light rounded newaddress">
                  <div className="row">
                    {/* Firstname */}
                    <div className="col-sm-6 form-group">
                      <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    {/* Lastname */}
                    <div className="col-sm-6 form-group">
                      <label htmlFor="lastname">Last Name<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="col-sm-4 form-group">
                      <label htmlFor="companyname">Company Name (Optional)</label>
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="E.g. Capgemini"
                      />
                    </div>

                    {/* Country */}
                    <div className="col-sm-4 form-group">
                      <label htmlFor="countryname">Country<span className="text-danger">*</span></label>
                      <select
                        name="countryname"
                        id="countryname"
                        value={formData.countryname}
                        onChange={handleChange}
                        className="form-control form-select shadow-sm"
                      >
                        <CountryOptions />
                      </select>
                    </div>

                    {/* State */}
                    <div className="col-sm-4 form-group">
                      <label htmlFor="state">State<span className="text-danger">*</span></label>
                      <select
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-control form-select shadow-sm"
                      >
                        <option value="">Choose state</option>
                      </select>
                    </div>

                    {/* Street */}
                    <div className="col-sm-12 form-group">
                      <label htmlFor="streetadd">Street Address<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="streetadd"
                        name="streetadd"
                        value={formData.streetadd}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    {/* Town & Zip */}
                    <div className="col-sm-6 form-group">
                      <label htmlFor="town">Town/City<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="town"
                        name="town"
                        value={formData.town}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    <div className="col-sm-6 form-group">
                      <label htmlFor="zip">Zip Code<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                        placeholder="6 digits [0-9] PIN code"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="col-sm-6 form-group">
                      <label htmlFor="mobile">Mobile Number<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-sm-6 form-group">
                      <label htmlFor="uemail">Email ID<span className="text-danger">*</span></label>
                      <input
                        type="email"
                        id="uemail"
                        name="uemail"
                        value={formData.uemail}
                        onChange={handleChange}
                        className="form-control shadow-sm"
                      />
                    </div>

                    {/* Default Checkbox (hidden) */}
                    <div className="col-sm-6 form-group d-none">
                      <div className="custom-control custom-checkbox custom-control-inline">
                        <input
                          type="checkbox"
                          id="makedeafult"
                          name="makedeafult"
                          checked={formData.makedeafult}
                          onChange={handleChange}
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" htmlFor="makedeafult">Make this my default address</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="col-lg-3 col-md-5 cart-basket">
                <div className="card bg-secondary-light shadow-sm">
                  <div className="card-body cartprice">
                    <p>Sub-total <strong className="basket-value">$<span>69</span></strong></p>
                    <p>Discount <strong className="basket-value">$<span>0.00</span></strong></p>
                    <p>Credit Card Fee <strong className="basket-value">$<span>2.81</span></strong></p>
                    <h6 className="fw-bolder">Total Cost <span className="basket-total-value">$<span>71.81</span></span></h6>
                    <div className="text-center">-- OR --</div>
                    <div className="readmore">
                      <button type="button" onClick={handleConfirmBooking} className="button w-100">
                        Confirm Booking
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
