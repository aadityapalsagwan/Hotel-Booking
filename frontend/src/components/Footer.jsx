import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">HotelBooking</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Book luxury hotels, budget stays, and vacation rentals all in one place. Trusted by millions globally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/home" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contacts Us</a></li>
            {/* <li><a href="#" className="hover:text-white transition">Offers</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">Email :- adipal9857@gmail.com</p>
          <p className="text-sm text-gray-400">Phone :- +91 9105880014</p>
          <p className="text-sm text-gray-400">Address :- Muzaffarnagar , UP , India</p>
        </div>

        {/* Social Media with Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="https://facebook.com/aadityapalsagwan" className="hover:text-white transition" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com/aadityapalsagwan" className="hover:text-white transition" target="_blank"><FaInstagram /></a>
            <a href="https://x.com/adityapalsagwan" className="hover:text-white transition" target="_blank"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/aadityapalsagwan" className="hover:text-white transition" target="_blank"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 HotelBooking. All rights reserved. | Terms & Conditions | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
