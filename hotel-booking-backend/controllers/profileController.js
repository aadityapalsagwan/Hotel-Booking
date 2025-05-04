const Booking = require('../models/Booking'); // path sahi hona chahiye
const User = require('../models/User'); // agar zarurat ho

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // token ke through mila

    // 1. Fetch user info
    const user = await User.findById(userId).select("-password");

    // 2. Fetch booking info for the user
    const booking = await Booking.findOne({ user: userId });

    // 3. Return response
    res.json({
      user,
      booking,
    });

  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUserProfile };
