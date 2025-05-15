"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe, PaymentRequest } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RKlYvREuPgKkz0ez3BX9Gr5qiqQ6pczNcP66fLfCQJtObw7lfqsPZ7bluVHijvzP9JkCp6mXnI9yrnkSiKqgTca004hDXv2f4"
);

const Cart = () => {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("bookingDetails");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("bookingDetails");
    setBooking(null);
  };

  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (!stripe) return; // Ensure stripe is initialized
    console.log(1);
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total",
        amount: 500, // $19.99
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    console.log(2, pr);

    pr.canMakePayment()
      .then((result) => {
        console.log(3);
        console.log("canMakePayment result:", result);
        if (result) {
          console.log(4);
          setCanMakePayment(true);
          setPaymentRequest(pr);
        }
        console.log(5);
      })
      .catch((error) => {
        console.error("Error in canMakePayment:", error);
      });
    console.log(6);

    pr.on("paymentmethod", async (event) => {
      try {
        console.log(7);

        const res = await fetch(
          "https://api.phillycitytours.com/api/payment/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment_method: event.paymentMethod.id,
              amount: 500,
            }),
          }
        );
        console.log(8);

        const data = await res.json();
        console.log("data", data);

        if (data.error) {
          event.complete("fail");
          console.error("Payment failed:", data.error);
        } else {
          event.complete("success");
          const confirmResult = await stripe.confirmCardPayment(
            data.clientSecret,
            {
              payment_method: event.paymentMethod.id,
            }
          );

          if (confirmResult.error) {
            console.error("Payment confirmation failed:", confirmResult.error);
          } else {
            console.log("Payment successful!");
          }
        }
      } catch (error) {
        event.complete("fail");
        console.error("Error processing payment:", error);
      }
    });
  }, [stripe]);
  const amount = booking ? Number(booking.price) : 0;
  const fixedFee = 0.30;
  const percentFee = 0.035;
  const processingFee = ((amount + fixedFee) / (1 - percentFee)) - amount;
  const totalWithFee = amount + processingFee;

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
              <li className="breadcrumb-item active">Your Shopping Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="w-100 position-relative overflow-hidden padding section-cart">
        <div className="container-lg">
          <div className="row g-3">
            <div className="col-lg-9 orderCard">
              <div className="card">
                <div className="card-body">
                  {booking ? (
                    <div className="row g-4">
                      <div className="col-sm-8 orderedProduct">
                        <div className="img-fluid">
                          <img
                            src="https://www.dcmonumentstour.com/uploads/tours/acb85e856ef9aa0fa9140dc78c69aa29.jpg"
                            alt={booking.tourName}
                          />
                        </div>
                        <div className="orderedProductDetail wishlistDetail">
                          <p className="mb-0">
                            <Link href="#">{booking.tourName}</Link>
                          </p>
                          <p>
                            <small>
                              Booking Date: {booking.blockDate?.slice(0, 10)} |
                              {booking.blockTime}
                            </small>
                          </p>
                          <ul className="list-inline mb-1">
                            {booking?.isPrivateTour ? (
                              <>
                                <li className="list-inline-item">
                                  {booking.totalCars} Car{booking.totalCars > 1 ? "s" : ""}
                                </li>
                              </>
                            ) : (
                              <>
                                <li className="list-inline-item">
                                  {booking.adultPassengers + booking.kidPassengers} Total Members
                                </li>
                                <li className="list-inline-item">
                                  {booking.adultPassengers} Adults
                                </li>
                                <li className="list-inline-item">
                                  {booking.kidPassengers} Kids
                                </li>
                              </>
                            )}
                          </ul>

                          <div className="orderedBoxButton mt-3">
                            <button
                              className="button stroke deletecart"
                              onClick={handleDelete}
                            >
                              <i className="fa fa-trash text-secondary"></i>{" "}
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 cartBox-price text-sm-end">
                        <div className="proBox-price">
                          <div className="fw-bolder h3 mb-0 text-secondary">
                            ${booking.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 cart-basket">
              <div className="card bg-secondary-light shadow-sm mb-3">
                <div className="card-body cartprice">
                  <div className="couponBox">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Enter coupon code"
                    />
                    <button type="button" className="button button-sm">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div className="card bg-secondary-light shadow-sm">
                <div className="card-body cartprice">
                  <p>
                    Sub-total{" "}
                    <strong className="basket-value">
                      ${booking ? booking.price : 0}
                    </strong>
                  </p>
                  <p>
                    Discount
                    <strong className="basket-value">
                      $<span id="coup_disc">0</span>
                    </strong>
                  </p>
                  <p>
                    Processing Fee
                    <strong className="basket-value">
                      ${processingFee.toFixed(2)}
                    </strong>
                  </p>
                  <h6 className="fw-bolder">
                    Total Cost{" "}
                    <span className="basket-total-value" id="totalcost">
                      $<span id="total_cost">{totalWithFee.toFixed(2)}</span>
                    </span>
                  </h6>
                  {canMakePayment && paymentRequest && (
                    <div className="readmore mb-3">
                      <PaymentRequestButtonElement
                        options={{
                          paymentRequest,
                          style: {
                            paymentRequestButton: {
                              type: "default",
                              theme: "light",
                              height: "44px",
                            },
                          },
                        }}
                      />
                      <div className="text-center small mt-2">
                        Apple Pay or Link by Stripe
                      </div>
                    </div>
                  )}
                  <div
                    className="readmore "
                    id="apple-pay-info"
                    style={{ display: "block" }}
                  >
                    <div className="alert alert-primary small" role="alert">
                      <i className="fa fa-circle-info text-primary"></i> Booking
                      confirmation will be sent to the email linked to your
                      Apple Pay profile.
                    </div>
                    <div className="text-center"> -- OR -- </div>
                  </div>
                  <div className="readmore">
                    <Link href="/checkout" className="button w-100">
                      Confirm Booking
                    </Link>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

function StripeProvider({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
const Page = () => {
  return (
    <>
      <StripeProvider>
        <Cart />
      </StripeProvider>
    </>
  );
};

export default Page;
