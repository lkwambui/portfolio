import React from "react";
import photo1 from "../assets/services/ui-ux.png";
import photo2 from "../assets/services/app-design.png";
import photo3 from "../assets/services/web-design.png";
import photo4 from "../assets/services/frontend.jpg";
function ServicesSection() {
  return (
    <section className="py-8 px-4 sm:py-12 sm:px-8 lg:px-16">
      <div className="text-center">
        <p className="text-sm text-yellow-500 font-bold uppercase">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          <span className="text-yellow-500">Services</span> I Provide
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <img
              src={photo1} // Replace with the actual icon path
                alt="UI/UX Design Icon"
                className="w-16 h-16"
                />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                UI/UX Design
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...
                </p>
                <div className="text-center mt-4">
                <a
                href="https://www.linkedin.com/in/lucy-kamau-87bb75209/" target="_blank" rel="noreferrer"
                className="text-yellow-500 font-semibold text-sm flex items-center justify-center gap-1"
                >
                Learn more <span>→</span>
                </a>
                </div>
              </div>
              {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
              <img
                src={photo2}
                alt="Application Design Icon"
                className="w-16 h-16"
              />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              Application Design
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...
              </p>
              <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/lucy-kamau-87bb75209/" target="_blank" rel="noreferrer"
                className="text-yellow-500 font-semibold text-sm flex items-center justify-center gap-1"
              >
                Learn more <span>→</span>
              </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
              <img
                src={photo3}
                alt="Website Design Icon"
                className="w-16 h-16"
              />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              Website Design & Development
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...
              </p>
              <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/lucy-kamau-87bb75209/" target="_blank" rel="noreferrer"
                className="text-yellow-500 font-semibold text-sm flex items-center justify-center gap-1"
              >
                Learn more <span>→</span>
              </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
              <img
                src={photo4}
                alt="Consultation Icon"
                className="w-16 h-16"
              />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              Front-End Development
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...
              </p>
              <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/lucy-kamau-87bb75209/" target="_blank" rel="noreferrer"
                className="text-yellow-500 font-semibold text-sm flex items-center justify-center gap-1"
              >
                Learn more <span>→</span>
              </a>
              </div>
            </div>
        
      </div>
      <div className="text-center mt-10">
        <a
          href="https://www.linkedin.com/in/lucy-kamau-87bb75209/"
          className="inline-flex items-center bg-custom-green text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition"
        >
          View All Services
          <span className="ml-2 text-lg font-bold">→</span>
        </a>
      </div>
    </section>
  );
}

export default ServicesSection;
