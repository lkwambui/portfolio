import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faBehance,
  faGithub,
  faLinkedin,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-green text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 px-6 sm:px-12 lg:px-24">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl text-custom-yellow font-bold mb-4">Lucy Kamau</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            A Designer and Developer Based in Kenya. 
            I'm an experienced Designer & Developer with 4+ years in the field,
            collaborating with various companies and startups.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/lkwambui"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 text-white rounded-full transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://dribbble.com/l_w_k"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 text-white rounded-full transition"
            >
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a
              href="https://www.behance.net/lucykamau1"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 text-white rounded-full transition"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="https://www.figma.com/@cdd15157_f0db_4"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 text-white rounded-full transition"
            >
              <FontAwesomeIcon icon={faFigma} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucy-kamau-87bb75209/"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 text-white rounded-full transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
          <div className="flex-1">
            <h4 className="text-lg text-custom-yellow font-semibold mb-4">Navigation</h4>
            <ul className="list-none space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-yellow-500 transition">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-500 transition">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500 transition">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition">Pricing</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-yellow-500 transition">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h4 className="text-lg text-custom-yellow font-semibold mb-4">Contact</h4>
            <ul className="list-none space-y-2 text-gray-300">
              <li>
                <a href="tel:+254799656267" className="hover:text-yellow-500 transition">+254799656267</a>
              </li>
              <li>
                <a href="https://lucykamau.netlify.app/" className="hover:text-yellow-500 transition">https://lucykamau.netlify.app/</a>
              </li>
              <li>
                <a href="mailto:lucykamau949@gmail.com" className="hover:text-yellow-500 transition">lucykamau949@gmail.com</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition">Wote, Makueni</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition">Kenya</a>
              </li>
            </ul>
          </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; 2024 Lucy Kamau. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
