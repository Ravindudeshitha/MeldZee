import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate and useLocation
import logo from './assets/awe.png';

const Navigation = () => {
  const location = useLocation(); // Get current location
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const target = document.querySelector(`#${sectionId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to the home page if not already there
    }
    scrollToSection("home"); // Scroll to the "home" section
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img
            src={logo}
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={handleHomeClick} // Added click event to logo
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/"); // Navigate to the home page if not already there
              }
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Products
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <a
            href="https://blog.meldzee.com/"
            className="hover:text-blue-500 ml-auto" 
            target="_blank" 
          >
            Blog
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-2">
          <a
            href="#home"
            className="py-2"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/"); // Navigate to the home page if not already there
              }
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Products
          </a>
          <a
            href="#contact"
            className="py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <a
            href="https://blog.meldzee.com/"
            className="py-2" 
            target="_blank" 
          >
            Blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
