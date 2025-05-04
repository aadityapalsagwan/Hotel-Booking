const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createBooking, getUserBookings } = require("../controllers/bookingController");

// ✅ Create a booking (Protected route)
router.post("/", authMiddleware, createBooking);

// ✅ Get all bookings for a user (Protected route)
router.get("/user/:userId", authMiddleware, getUserBookings);

module.exports = router;
