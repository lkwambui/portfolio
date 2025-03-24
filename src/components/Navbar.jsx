import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-green text-white py-4 px-8 flex flex-col sm:flex-row justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-custom-yellow text-custom-green rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
            LK
          </div>
          <span className="text-xl font-semibold hidden sm:inline">
            Lucy Kamau.
          </span>
        </div>
        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-custom-yellow focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-sm ${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex sm:items-center`}
      >
        <li>
          <a
            href="#home"
            className="text-custom-yellow font-semibold hover:text-yellow-500"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-500">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-yellow-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faqs" className="hover:text-yellow-500">
            FAQs
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      <a
        href="https://wa.me/254799656264"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-custom-green py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition mt-4 sm:mt-0"
      >
        Contact Me
      </a>
    </nav>
  );
}

export default Navbar;