import React from "react";
import photo from "../assets/aboutme/aboutme_2.jpg";

function AboutMe() {
  return (
    <section className="bg-custom-green text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500 rounded-full overflow-hidden">
            <img
              src={photo}
              alt="Lucy Kamau"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center gap-2">
            {[
              "UX/UI Design",
              "Mobile App Design",
              "Website Design",
              "Front-End Development",
              "Web Development",
              "Wireframe Design",
              "Dashboard",
            ].map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-lg text-sm font-medium bg-${
                  index % 2 === 0 ? "yellow-500" : "custom-green"
                } text-${index % 2 === 0 ? "gray-900" : "white-500"} shadow`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            - About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Who is <span className="text-yellow-500">Lucy Kamau?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
          I'm a passionate UI/UX Designer and Frontend Developer dedicated to crafting seamless,
          user-centric digital experiences. With expertise in React, JavaScript, Tailwind CSS,HTML,
          and Figma, I design and build intuitive interfaces that blend aesthetics with functionality.
          I thrive on solving design challenges, optimizing user flows, and bringing creative visions
          to life through clean, responsive code.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-6">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-gray-400">Industries Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4+</p>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="/Lucy_Kamau_CV.pdf"
              download="Lucy_Kamau_CV.pdf"
              className="inline-flex items-center bg-yellow-500 text-custom-green py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Download CV
              <span className="ml-2 text-xl font-bold">→</span>
            </a>
          </div>
          <p className="text-yellow-500 font-handwriting text-lg mt-4">
                Lucy Kamau
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
