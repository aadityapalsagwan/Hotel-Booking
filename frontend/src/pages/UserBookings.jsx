// src/pages/AllBookings.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        console.error("Token or userId missing");
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/booking/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(res.data.bookings);
      } catch (err) {
        console.error("Error fetching bookings", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Hotel Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-3">
            <p><strong>Hotel:</strong> {booking.selectedHotel}</p>
            <p><strong>Check-in:</strong> {new Date(booking.checkInDate).toDateString()}</p>
            <p><strong>Check-out:</strong> {new Date(booking.checkOutDate).toDateString()}</p>
            <p><strong>Room Type:</strong> {booking.roomType}</p>
            <p><strong>Guests:</strong> {booking.guestCount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllBookings;
