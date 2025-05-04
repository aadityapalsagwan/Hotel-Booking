import { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [formData, setFormData] = useState({
    selectedHotel: "",
    guestName: "",
    mobileNumber: "",
    governmentId: "",
    idNumber: "",
    guestCount: 1,
    roomType: "Single",
    checkInDate: "",
    checkOutDate: ""
  });

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // <-- New state for popup
  const [error, setError] = useState(""); // <-- State for error handling

  const hotelsInIndia = [
    "The Khyber Himalayan Resort, Gulmarg",
    "Vivanta Dal View, Srinagar",
    "The Lalit Grand Palace, Srinagar",
    "Taj Palace, New Delhi",
    "The Imperial, New Delhi",
    "Hyatt Regency, Chandigarh",
    "JW Marriott, Chandigarh",
    "Taj Lake Palace, Udaipur",
    "The Leela Palace, Jaipur",
    "Rambagh Palace, Jaipur",
    "Jehan Numa Palace, Bhopal",
    "Taj Mahal Palace, Mumbai",
    "The Oberoi, Mumbai",
    "Park Hyatt Resort, Goa",
    "Taj Exotica Resort, Goa",
    "The Oberoi Grand, Kolkata",
    "Mayfair Lagoon, Bhubaneswar",
    "Radisson Blu, Guwahati",
    "Taj Fisherman's Cove Resort, Chennai",
    "ITC Grand Chola, Chennai",
    "The Leela Palace, Bengaluru",
    "The Zuri Kumarakom, Kerala",
    "Taj Bekal Resort, Kerala",
    "Sparsa Resort, Kanyakumari",
    "Hotel Seaview, Kanyakumari"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    console.log("Sending formData:", formData);
  
    // Check if roomType is valid
    const validRoomTypes = ['Single', 'Double'];
    if (!validRoomTypes.includes(formData.roomType)) {
      setError("Invalid room type selected.");
      return;
    }
  
    // Check if the check-out date is after the check-in date
    if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate)) {
      alert("Check-out date must be after check-in date!");
      return;
    }
    const token = localStorage.getItem("token"); // <-- Get token if login is used
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/booking`, formData,{
        selectedHotel: formData.selectedHotel,
        guestName: formData.guestName,
        mobileNumber: formData.mobileNumber,
        governmentId: formData.governmentId,
        idNumber: formData.idNumber,
        roomType: formData.roomType,
        guestCount: Number(formData.guestCount),
        checkInDate: formData.checkInDate,
        checkOutDate: formData.checkOutDate,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.status === 201) {
        setIsBookingConfirmed(true);
      }
    } catch (err) {
      setError("An error occurred while processing your booking.");
      console.log("Full Axios Error:", err);
      if (err.response) {
        console.log("Error Response Data:", err.response.data);
        console.log("Error Response Status:", err.response.status);
        console.log("Error Response Headers:", err.response.headers);
      }
    }
  };
  



  const closeModal = () => {
    setIsBookingConfirmed(false);
    setFormData({
      selectedHotel: "",
      guestName: "",
      mobileNumber: "",
      governmentId: "",
      idNumber: "",
      guestCount: 1,
      roomType: "Single",
      checkInDate: "",
      checkOutDate: ""
    }); // Reset form if needed
    setError(""); // Reset error message
  };

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Hotel Booking</h1>

      <form onSubmit={handleBooking} className="space-y-6 bg-white p-8 rounded shadow-lg">

        {/* Hotel Selection */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Select Hotel</label>
          <select
            name="selectedHotel"
            value={formData.selectedHotel}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">-- Choose a Hotel --</option>
            {hotelsInIndia.map((hotel, index) => (
              <option key={index} value={hotel}>
                {hotel}
              </option>
            ))}
          </select>
        </div>

        {/* Guest Name */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            placeholder="Enter guest full name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Government ID Type */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Government ID Type</label>
          <select
            name="governmentId"
            value={formData.governmentId}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">-- Select ID Type --</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Driving License">Driving License</option>
          </select>
        </div>

        {/* Government ID Number */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">ID Number</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            placeholder="Enter ID number"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="Single">Single Person</option>
            <option value="Double">Double Person</option>
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Number of Guests</label>
          <input
            type="number"
            name="guestCount"
            min="1"
            max="10"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Check-In Date</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block mb-2 font-semibold text-blue-900">Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 py-3 rounded hover:bg-yellow-300 transition-all duration-300 font-semibold"
        >
          Confirm Booking
        </button>

      </form>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-center mt-4">{error}</div>
      )}

      {/* Booking Confirmation Popup */}
      {isBookingConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
            <p className="text-blue-900">
              Your booking at <strong>{formData.selectedHotel}</strong> for <strong>{formData.guestName}</strong> has been confirmed.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-2 rounded font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
