import React from "react";
import image1 from "../assets/projects/partylounges.png";
import image2 from "../assets/projects/Jantanet.png";
import image3 from "../assets/projects/mygiftharbor.png";
import image4 from "../assets/projects/walkingshadowpoetry.png";

const projects = [
  {
    id: 1,
    title: "Premium Event rentals & Full-Service Event Planning & management.",
    image: image1,
    tags: ["UI/UX Design", "Prototyping", "Wireframe"],
    link: "https://partylounges.com",
  },
  {
    id: 2,
    title: "A casual jobs application site",
    image: image2,
    tags: ["UI/UX Design", "Front-End Development", "Web Design"],
    link: "https://jantanet.com", 
  },
  {
    id: 3,
    title: "CMS Based Website Design",
    image: image3,
    tags: ["UI/UX Design", "Dashboard", "Wireframe"],
    link: "https://mygiftharbor.com", 
  },
  {
    id: 4,
    title: "Poetry Based Website Design",
    image: image4,
    tags: ["UI/UX Design", "Web Design", "Responsive"],
    link: "https://www.walkingshadowpoetry.com", 
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">
          My Latest <span className="text-yellow-500 italic">Projects</span>
        </h2>
        {/* Responsive Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white shadow-lg rounded-xl p-4 transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-md font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <a
            href="https://www.linkedin.com/in/lucy-kamau-87bb75209/"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-700"
          >
            View My Portfolio <span>&#9658;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;