"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../utils/axiosInstnace";
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
  
  type FormState = {
    tourId: string;
    blockDate: string;
    blockTime: string;
    adultPassengers: number;
    kidPassengers: number;
  };
const BookingTours = () => {
    const [form, setForm] = useState<FormState>({
        tourId: "",
        blockDate: "",
        blockTime: "",
        adultPassengers: 2,
        kidPassengers: 0,
      });
    
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);
      const [tours, setTours] = useState<Tour[]>([]);
      const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
      const [blockedTimes, setBlockedTimes] = useState<BlockedTime[]>([]);
      const [disabledTimes, setDisabledTimes] = useState<string[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
  
  const timeSlots = ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];

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
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (!date) return;

    const isBlocked = blockedDates?.some(
      (bd) =>
        new Date(bd.blockDate).toDateString() === date.toDateString() &&
        bd.isActive
    );

    if (isBlocked) {
      alert("This tour date is blocked. Please choose another date.");
      setForm((prev) => ({ ...prev, blockDate: "" }));
      setDisabledTimes([]);
      return;
    }

    setForm((prev) => ({
      ...prev,
      blockDate: date.toISOString().split("T")[0],
    }));

    const disabled = blockedTimes
      ?.filter(
        (bt) =>
          new Date(bt.blockDate).toDateString() === date.toDateString() &&
          bt.isActive
      )
      .map((bt) => bt.blockTime);

    setDisabledTimes(disabled || []);
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/bookings/book-tour", form);
      const bookingDetails = {
        tourId: form.tourId,
        tourName: tours.find(t => t._id === form.tourId)?.selectedCategory?.category || "Tour",
        blockDate: form.blockDate,
        blockTime: form.blockTime,
        adultPassengers: form.adultPassengers,
        kidPassengers: form.kidPassengers,
        price: 69 * form.adultPassengers + 49 * form.kidPassengers,
      };

      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

      setForm({
        tourId: "",
        blockDate: "",
        blockTime: "",
        adultPassengers: 2,
        kidPassengers: 0,
      });
      setSelectedDate(null);
      setDisabledTimes([]);
         // Navigate to cart page
         window.location.href = "/cart";
    } catch (err) {
        if(err instanceof Error){
            setError(err.message);
        }
        else {
            setError("An unknown error occurred.");
          } }
  };

  return (
    <div className="col-xl-4 col-md-5 stickyBar">
      <div className="inner rounded bg-light">
        <div className="sec-title mb-2">
          <h4 className="fw-bold text-primary mb-0">Book This Tour</h4>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Tour Selection */}
            <div className="form-group mb-1">
              <select
                className="form-control"
                value={form.tourId}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, tourId: e.target.value }))
                }
              >
                <option value="">Select Tour</option>
                {tours.map((tour) => (
                  <option key={tour._id} value={tour._id}>
                    {tour.selectedCategory?.category || "Unnamed Tour"}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Picker */}
            <div className="form-group mb-1">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Select a date"
                className="form-control"
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                inline
              />
            </div>

            {/* Time Slots */}
            <div className="form-group bg-white p-3 rounded mb-1">
              <label className="text-primary fw-bold mb-2">Time</label>
              <div className="btn-group w-100" role="group">
                {timeSlots.map((time, index) => (
                  <React.Fragment key={time}>
                    <input
                      type="radio"
                      id={`radio${index}`}
                      className="btn-check"
                      name="booktime"
                      value={time}
                      checked={form.blockTime === time}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          blockTime: e.target.value,
                        }))
                      }
                      disabled={disabledTimes.includes(time)}
                    />
                    <label
                      className={`btn btn-outline-third ${
                        disabledTimes.includes(time) ? "disabled" : ""
                      }`}
                      htmlFor={`radio${index}`}
                    >
                      {time}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Passenger Counts */}
            <div className="form-group bg-white p-3 rounded mb-1">
              <div className="input-group mb-1">
                <label className="input-group-text col-2 bg-white text-primary fw-bold">
                  Adult
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.adultPassengers}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      adultPassengers: parseInt(e.target.value) || 1,
                    }))
                  }
                  className="form-control"
                />
              </div>
              <div className="input-group mb-1">
                <label className="input-group-text col-2 bg-white text-primary fw-bold">
                  Kids
                </label>
                <input
                  type="number"
                  min="0"
                  value={form.kidPassengers}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      kidPassengers: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary w-100" onClick={handleSubmit}>
                Book Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingTours;
