import React from "react";

const Footer = () => {
  // Function to scroll to the top
  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-12"> {/* Increased height */}
      <div className="container mx-auto flex justify-between items-center">
        {/* MeldZee Logo */}
        <div className="text-4xl font-bold text-left"> {/* Increased font size */}
          <span className="text-blue-500">Meld</span>Zee
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Products</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="/software" className="hover:text-blue-500">Software</a>
          <a href="/npm-package" className="hover:text-blue-500">NPM Package</a>
        </div>

        {/* Contact Number */}
        <div className="text-lg">
          <p>Contact: 0719188465</p>
        </div>
      </div>

      {/* Go Up Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleGoUp}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Go Up
        </button>
      </div>
    </footer>
  );
};

export default Footer;
