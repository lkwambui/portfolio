import React from "react";
import photo from "../assets/home/home_1.jpg";

function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-6 sm:px-8 lg:px-20"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-xs sm:text-sm  tracking-wider text-gray-600 mb-2">
          Hello There!
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
          I'm <span className="text-yellow-500">LUCY KAMAU</span>, <br />
          A Designer and Developer Based in Kenya.
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-6">
          I'm an experienced Designer & Developer with 4+ years in the field,
          collaborating with various companies and startups.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <a
            href="https://github.com/lkwambui" target="_blank" rel="noreferrer"
            className="bg-custom-green hover:bg-custom-yellow text-white px-6 py-3 rounded-full font-semibold transition"
          >
            View My Portfolio
          </a>
          <a
            href="mailto:lucykamau949@gmail.com" target="_blank" rel="noreferrer"
            className="bg-white border-2 border-custom-yellow hover:border-custom-green text-custom-yellow hover:text-custom-green px-6 py-3 rounded-full font-semibold transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={photo}
            alt="work station"
            className="rounded-full border-4 border-yellow-500 shadow-lg w-3/4 sm:w-[300px] lg:w-[400px] xl:w-[450px] mx-auto"
          />
          {/* Badges */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-yellow-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm shadow">
            Designer and Developer
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-custom-green text-white px-4 py-2 rounded-full text-xs sm:text-sm shadow">
            Hire Me
          </div>
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm shadow">
            Frontend Development
          </div>
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-purple-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm shadow">
            Web Development & Design 
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
 