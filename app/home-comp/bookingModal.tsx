"use client";

import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../utils/axiosInstnace";

type BookingModalProps = {
  selectedCategory: string;
};

type Tour = {
  _id: string;
  selectedCategory?: {
    category: string;
  };
};

type BlockedDate = {
  blockDate: string;
  isActive: boolean;
};

type BlockedTime = {
  blockDate: string;
  blockTime: string;
  isActive: boolean;
};

const BookingModal: React.FC<BookingModalProps> = ({ selectedCategory }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const timeSlots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [adultPassengers, setAdultPassengers] = useState<number>(2);
  const [kidPassengers, setKidPassengers] = useState<number>(0);
  const [tourId, setTourId] = useState<string>("");

  const [tours, setTours] = useState<Tour[]>([]);
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [blockedTimes, setBlockedTimes] = useState<BlockedTime[]>([]);
  const [disabledTimes, setDisabledTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [toursRes, blockDatesRes, blockTimesRes] = await Promise.all([
          axiosInstance.get("/tours"),
          axiosInstance.get("/block-date"),
          axiosInstance.get("/block-time"),
        ]);
        setTours(toursRes.data.data);
        setBlockedDates(blockDatesRes.data);
        setBlockedTimes(blockTimesRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const bookingModal = modalRef.current;
    const handleShow = (event: any) => {
      const button = event.relatedTarget;
      const tourType = button?.getAttribute("data-bs-type") || "Booking";

      const modalTitle = bookingModal?.querySelector(".modal-title");
      if (modalTitle) {
        modalTitle.textContent = tourType;
      }
    };

    bookingModal?.addEventListener("show.bs.modal", handleShow);
    return () => bookingModal?.removeEventListener("show.bs.modal", handleShow);
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (!date) return;

    const isBlocked = blockedDates.some(
      (bd) =>
        new Date(bd.blockDate).toDateString() === date.toDateString() &&
        bd.isActive
    );

    if (isBlocked) {
      alert("This tour date is blocked. Please choose another date.");
      setDisabledTimes([]);
      return;
    }

    const disabled = blockedTimes
      .filter(
        (bt) =>
          new Date(bt.blockDate).toDateString() === date.toDateString() &&
          bt.isActive
      )
      .map((bt) => bt.blockTime);

    setDisabledTimes(disabled || []);
  };

  const handleSubmit = async () => {
    if (!tourId || !selectedDate || !selectedTime) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = {
      tourId,
      blockDate: selectedDate.toISOString().split("T")[0],
      blockTime: selectedTime,
      adultPassengers,
      kidPassengers,
    };

    try {
      await axiosInstance.post("/bookings/book-tour", formData);

      const bookingDetails = {
        tourId: tourId,
        tourName:
          tours.find((t) => t._id === tourId)?.selectedCategory?.category ||
          "Tour",
        blockDate: formData.blockDate,
        blockTime: formData.blockTime,
        adultPassengers,
        kidPassengers,
        price: 69 * adultPassengers + 49 * kidPassengers,
      };

      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      window.location.href = "/cart";
    } catch (err) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div
      className="modal fade"
      id="bookingModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title">Day Tour</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="bookingForm">
              <div className="row">
                <div className="col-lg-6">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Select a date"
                    className="form-control"
                    dateFormat="MMMM d, yyyy"
                    inline
                    minDate={new Date()}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="text-primary fw-bold mb-2">Tour</label>
                    <select
                      className="form-control"
                      value={tourId}
                      onChange={(e) => setTourId(e.target.value)}
                    >
                      <option value="">Select Tour</option>
                      {tours.map((tour) => (
                        <option key={tour._id} value={tour._id}>
                          {tour.selectedCategory?.category || "Unnamed Tour"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label className="text-primary fw-bold mb-2">Time</label>
                    <div
                      id="booktime-buttons"
                      className="btn-group w-100"
                      role="group"
                    >
                      {timeSlots.map((time, index) => (
                        <React.Fragment key={index}>
                          <input
                            type="radio"
                            id={`radio${index + 1}`}
                            className="btn-check"
                            name="booktime"
                            value={time}
                            checked={selectedTime === time}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            disabled={disabledTimes.includes(time)}
                          />
                          <label
                            className={`btn btn-outline-${
                              disabledTimes.includes(time)
                                ? "secondary"
                                : "third"
                            }`}
                            htmlFor={`radio${index + 1}`}
                          >
                            {time}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="form-group mb-2">
                    <div className="input-group mb-2">
                      <label className="input-group-text col-2 bg-white text-primary fw-bold">
                        Adult
                      </label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        value={adultPassengers}
                        onChange={(e) =>
                          setAdultPassengers(Number(e.target.value))
                        }
                      />
                      <span className="input-group-text col-3 bg-white fw-bold">
                        ${69 * adultPassengers}
                      </span>
                    </div>

                    <div className="input-group mb-2">
                      <label className="input-group-text col-2 bg-white text-primary fw-bold">
                        Kids
                      </label>
                      <input
                        type="number"
                        min={0}
                        className="form-control"
                        value={kidPassengers}
                        onChange={(e) =>
                          setKidPassengers(Number(e.target.value))
                        }
                      />
                      <span className="input-group-text col-3 bg-white fw-bold">
                        ${49 * kidPassengers}
                      </span>
                    </div>

                    <div className="input-group">
                      <label className="input-group-text col bg-light fw-bold">
                        Total
                      </label>
                      <span className="input-group-text col-3 bg-light fw-bold">
                        ${69 * adultPassengers + 49 * kidPassengers}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="readmore mt-3">
                    <button className="button w-100" onClick={handleSubmit}>
                      Book Now <i className="fa fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default BookingModal;
