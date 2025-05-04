import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Token not found. Please login again.");
          return;
        }

        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("✅ Full profile response:", res.data);

        setUserData(res.data.user || null);
        setBookingData(res.data.booking || null);

      } catch (error) {
        const errMsg = error.response?.data?.message || error.message;
        setError(errMsg);
        console.error("❌ Error fetching profile:", errMsg);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        <p className="text-red-500">Error loading profile: {error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">My Profile</h1>

      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        {/* Personal Details */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Personal Information</h2>
          <div className="space-y-3">
            <p><span className="font-semibold">Name:</span> {userData.name}</p>
            <p><span className="font-semibold">Email:</span> {userData.email}</p>
          </div>
        </div>

        {/* Booking Details */}
        {/* <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Booking Information</h2>
          {bookingData ? (
            <div className="space-y-3">
              <p><span className="font-semibold">Hotel Booked:</span> {bookingData.selectedHotel}</p>
              <p><span className="font-semibold">Room Type:</span> {bookingData.roomType}</p>
              <p><span className="font-semibold">Check-In Date:</span> {bookingData.checkInDate}</p>
              <p><span className="font-semibold">Check-Out Date:</span> {bookingData.checkOutDate}</p>
              <p><span className="font-semibold">Guests:</span> {bookingData.guestCount}</p>
            </div>
          ) : (
            <p>No booking data found.</p>
          )}
        </div> */}

        {/* Debugging Display */}
        {/* <div className="md:col-span-2 mt-8">
          <h3 className="text-xl font-semibold">Debugging Booking Data:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">{JSON.stringify(bookingData, null, 2)}</pre>
        </div> */}
      </div>
    </section>
  );
};

export default Profile;
