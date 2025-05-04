import { Link, useNavigate } from "react-router-dom";
import { FaHotel, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
    // Logout logic here
    navigate("/");
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="#" className="flex items-center gap-2 text-2xl font-bold">
        <FaHotel className="text-yellow-400" /> HotelBooking
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/home" onClick={handleLinkClick} className="hover:text-yellow-400">Home</Link>
        <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-400">About</Link>
        <Link to="/contact" onClick={handleLinkClick} className="hover:text-yellow-400">Contact</Link>
        <Link to="/allbooking" onClick={handleLinkClick} className="hover:text-yellow-400">Booking</Link>

        {/* Profile */}
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-yellow-400 hover:text-yellow-300 text-3xl focus:outline-none">
            <FaUserCircle />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-50">
              <Link to="/profile" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger - Mobile */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex justify-between items-center border-b border-white">
          <FaUserCircle className="text-yellow-400 text-3xl" />
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <Link to="/home" onClick={handleLinkClick} className="hover:text-yellow-400">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-yellow-400">About</Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-yellow-400">Contact</Link>
          <Link to="/allbooking" onClick={handleLinkClick} className="hover:text-yellow-400">Booking</Link>
          <Link to="/profile" onClick={handleLinkClick} className="hover:text-yellow-400">Profile</Link>
          <button onClick={handleLogout} className="text-left hover:text-yellow-400">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
