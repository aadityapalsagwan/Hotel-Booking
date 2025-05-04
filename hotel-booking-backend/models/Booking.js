const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    selectedHotel: { type: String, required: true },
    guestName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    governmentId: { type: String, required: true },
    idNumber: { type: String, required: true },
    roomType: {
      type: String,
      enum: ["Single", "Double"], // ✅ Corrected here
      required: true
    },
    guestCount: { type: Number, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
