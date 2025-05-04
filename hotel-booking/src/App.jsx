import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Booking from "./pages/Booking";
import UserBookings from "./pages/UserBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaHotel } from "react-icons/fa";  // <-- yeh bhi import

const App = () => {
  const location = useLocation();
  
  // In paths par Navbar/Footer nahi dikhani
  const hideNavbarFooter = location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      
      {hideNavbarFooter ? (
        // Sirf Logo show karo signin/signup par
        <div className="bg-blue-900 text-white px-6 py-4 flex justify-center items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <FaHotel className="text-yellow-400" /> HotelBooking
          </Link>
        </div>
      ) : (
        // Baaki pages pe pura Navbar dikhana
        <Navbar />
      )}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allbooking" element={<UserBookings />} />
          {/* Add more routes as needed */} 
        </Routes>
      </main>

      {/* Footer sirf jab navbar dikhe tab dikhao */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
