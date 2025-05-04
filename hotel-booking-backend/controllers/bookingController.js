const Booking = require('../models/Booking');

// ✅ Create Booking
const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      user: req.user.id // ✅ Authenticated user from middleware
    });

    await newBooking.save();
    res.status(201).json({ msg: "✅ Booking successful", newBooking });

  } catch (error) {
    console.error("❌ Booking Save Error:", error.message);
    res.status(400).json({ msg: error.message });
  }
};

// ✅ Get All Bookings for a User
const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.userId;

    const bookings = await Booking.find({ user: userId }).populate("user", "name email");

    res.status(200).json({ msg: "📦 User bookings fetched", bookings });

  } catch (error) {
    console.error("❌ Fetch Booking Error:", error.message);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = {
  createBooking,
  getUserBookings
};
