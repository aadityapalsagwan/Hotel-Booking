import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center h-[300px] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-5xl font-bold text-white relative z-10">About Us</h1>
      </div>

      {/* Company Info */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Welcome to HotelBooking</h2>
        <p className="text-gray-700 text-lg leading-7 mb-6">
          At <strong>HotelBooking</strong>, we aim to revolutionize the way you travel and stay. With handpicked
          luxury hotels and budget stays across India and the world, we ensure your experience is seamless from
          search to check-out.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Mission</h3>
        <p className="text-gray-700 mb-6">
          To provide the most user-friendly hotel booking platform that caters to travelers of all kinds —
          solo adventurers, romantic couples, families, and business professionals.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Vision</h3>
        <p className="text-gray-700 mb-6">
          To become the most trusted and widely-used hotel booking brand worldwide, offering unmatched deals,
          security, and customer service.
        </p>

        {/* Why Choose Us */}
        <h3 className="text-2xl font-semibold text-blue-800 mb-5">Why Choose HotelBooking?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-yellow-600">Curated Hotels</h4>
            <p>Only the best, verified hotels with genuine customer reviews.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-yellow-600">Seamless Booking</h4>
            <p>Easy interface and secure payments with instant confirmation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-yellow-600">Best Price Guarantee</h4>
            <p>Get the most competitive deals, discounts, and special offers.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-yellow-600">24/7 Support</h4>
            <p>Customer support that's always available — before, during, and after your stay.</p>
          </div>
        </div>

        {/* Developer Credit */}
        {/* Developer Credit */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-right">
          <p className="text-gray-600 text-base mb-2">
            Made with <span className="text-red-500">💙</span> by{" "}
            <strong className="text-blue-800">Aaditya Pal</strong>
          </p>
          <p className="text-sm text-gray-500 mb-3">
            <a
              href="https://aadityapalsagwan-portfolio.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline transition duration-200"
              style={{ textDecoration: "none" }}
            >
              Visit My Portfolio
            </a>
          </p>
          <div className="flex-end space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/aadityapalsagwan"
              target="_blank"
              className="text-blue-700 hover:underline hover:text-blue-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aadityapalsagwan"
              target="_blank"
              className="text-gray-800 hover:underline hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://x.com/adityapalsagwan"
              target="_blank"
              className="text-blue-500 hover:underline hover:text-blue-700 transition"
            >
              Twitter
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
