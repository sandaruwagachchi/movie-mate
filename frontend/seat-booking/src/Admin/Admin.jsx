import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const SeatBooking = ({ movieId }) => {
  const rows = 12;
  const cols = 8;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [soldSeats, setSoldSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedTime, setSelectedTime] = useState("Morning");

  useEffect(() => {
    fetchBookedSeats();
  }, [movieId, selectedDate, selectedTime]);

  const fetchBookedSeats = () => {
    if (!movieId || !selectedDate || !selectedTime) return;

    axios
      .get(`http://localhost:8083/api/bookings/${movieId}/${selectedDate}/${selectedTime}`) 
      .then((response) => {
        const bookedSeats = response.data.map((booking) => booking.seatNumber);
        setSoldSeats(bookedSeats);
      })
      .catch((error) => console.error("Error fetching seat data:", error));
  };

  const toggleSeat = (seatNumber) => {
    if (soldSeats.includes(seatNumber)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatNumber) ? prev.filter((s) => s !== seatNumber) : [...prev, seatNumber]
    );
  };

  const bookSeats = () => {
    if (!selectedDate) {
      alert("Please select a date!");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const bookingData = selectedSeats.map((seat) => ({
      movieId: movieId,
      seatNumber: seat,
      date: selectedDate,
      time: selectedTime,
      status: "BOOKED",
      userId: "U001", 
    }));

    axios
      .post("http://localhost:8083/api/bookings/book", bookingData)
      .then(() => {
        alert("Seats booked successfully!");
        setSelectedSeats([]);
        fetchBookedSeats();
      })
      .catch((error) => {
        alert("Booking failed!");
        console.error("Booking error:", error);
      });
  };

  return (
    <div className="booking-container">
      <h2>View Booking</h2>
      <div className="selectBox">
        <div>
          <label>
            Select Date:
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            DayTime:
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="Morning">(9.30-11.30 AM)</option>
              <option value="Afternoon">(4.30-6.30 PM)</option>
            </select>
          </label>
        </div>
      </div>

      <div className="screen"> 🎬 SCREEN</div>
      <div className="seats-grid">
        {Array.from({ length: rows * cols }, (_, i) => {
          const seatNumber = i + 1;
          return (
            <div
              key={seatNumber}
              className={`seat ${soldSeats.includes(seatNumber) ? "sold" : ""} ${
                selectedSeats.includes(seatNumber) ? "selected" : ""
              }`}
              onClick={() => toggleSeat(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <div className="seat-legend">
        <span className="available">⬜ Available</span>
        <span className="unavailable">🟥 Unavailable</span>
      </div>
      <button className="book-button" onClick={bookSeats}>
        Cancel
      </button>
    </div>
  );
};

export default SeatBooking;