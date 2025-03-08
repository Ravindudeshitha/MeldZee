import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing up arrow icon

const Footer = () => {
  // Function to scroll to the top
  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-12 relative"> {/* Increased height */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        {/* MeldZee Logo */}
        <div className="text-4xl font-bold text-left">
          <span className="text-blue-500">Meld</span>Zee
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Products</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="/software" className="hover:text-blue-500">Software</a>
          <a href="/npm-package" className="hover:text-blue-500">NPM Package</a>
        </div>

        {/* Contact Number */}
        <div className="text-lg text-center sm:text-left">
          <p>Contact: 0719188465</p>
        </div>
      </div>

      {/* Go Up Button */}
      <div className="absolute -top-12 right-6 flex justify-center">
        <button
          onClick={handleGoUp}
          className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition flex items-center justify-center"
        >
          <FaArrowUp size={20} /> {/* Using the up arrow icon */}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
