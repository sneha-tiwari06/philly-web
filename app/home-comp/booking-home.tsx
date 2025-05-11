"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstnace";
import { useRouter } from 'next/router';

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

function BookingForm() {

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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const date = new Date(value);
    if (isNaN(date.getTime())) return;

    setSelectedDate(date);

    const isBlocked = blockedDates.some(
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

    setForm((prev) => ({ ...prev, blockDate: value }));

    const disabled = blockedTimes
      .filter(
        (bt) =>
          new Date(bt.blockDate).toDateString() === date.toDateString() &&
          bt.isActive
      )
      .map((bt) => bt.blockTime);

    setDisabledTimes(disabled || []);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

      // Reset form state
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
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="container-lg">
        <div className="tour-inner">
          <form onSubmit={handleSubmit}>
            <div className="row g-0">
              <div className="col-sm-10">
                <div className="row g-0">
                  {/* Tour Select */}
                  <div className="col form-floating">
                    <select
                      className="form-control"
                      value={form.tourId}
                      onChange={(e) => setForm({ ...form, tourId: e.target.value })}
                      required
                    >
                      <option value="">Select Tour</option>
                      {tours.map((tour) => (
                        <option key={tour._id} value={tour._id}>
                          {tour.selectedCategory?.category || "Unnamed Tour"}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="tour">Tour</label>
                  </div>

                  {/* Date Select */}
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      min={new Date().toISOString().split("T")[0]}
                      value={form.blockDate}
                      onChange={handleDateChange}
                      required
                    />
                    <label htmlFor="bookdate">Date</label>
                  </div>

                  {/* Time Select */}
                  <div className="col form-floating">
                    <select
                      className="form-control form-select"
                      value={form.blockTime}
                      onChange={(e) => setForm({ ...form, blockTime: e.target.value })}
                      required
                    >
                      <option value="">Choose time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} disabled={disabledTimes.includes(time)}>
                          {time} {disabledTimes.includes(time) ? "(Unavailable)" : ""}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="booktime">Time</label>
                  </div>

                  {/* Adult */}
                  <div className="col form-floating">
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      value={form.adultPassengers}
                      onChange={(e) =>
                        setForm({ ...form, adultPassengers: parseInt(e.target.value) || 0 })
                      }
                    />
                    <label htmlFor="adult">Adult ($69/ea.)</label>
                  </div>

                  {/* Kid */}
                  <div className="col form-floating">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      value={form.kidPassengers}
                      onChange={(e) =>
                        setForm({ ...form, kidPassengers: parseInt(e.target.value) || 0 })
                      }
                    />
                    <label htmlFor="kids">
                      Kids (12 years and<br /> under - $49/ea.)
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="col-sm-2">
                <div className="readmore h-100 mt-0">
                  <button
                    type="submit"
                    className="button rounded-0 w-100 h-100 bg-third"
                    disabled={
                      !form.tourId ||
                      !form.blockDate ||
                      !form.blockTime ||
                      form.adultPassengers < 1
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {loading && <p>Loading tours...</p>}
              {error && <p className="text-danger">Error: {error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
