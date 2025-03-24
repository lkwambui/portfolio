import React, { useState } from 'react';

function MyFavoriteTools() {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { name: "Figma", icon: "figma", percentage: "98%", description: "Figma is a vector graphics editor and prototyping tool that is primarily web-based, with features similar to Sketch and Adobe XD." },
    { name: "Gimp", icon: "gimp", percentage: "92%", description: "Gimp is a free and open-source raster graphics editor used for image retouching and editing, free-form drawing, and more specialized tasks." },
    { name: "HTML", icon: "html", percentage: "90%", description: "HTML is the standard markup language for documents designed to be displayed in a web browser." },
    { name: "CSS", icon: "css", percentage: "85%", description: "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML." },
    { name: "JS", icon: "js", percentage: "90%", description: "JavaScript is a programming language that conforms to the ECMAScript specification and is used to create dynamic web content." },
    { name: "React", icon: "react", percentage: "95%", description: "React is a JavaScript library for building user interfaces or UI components, maintained by Facebook and a community of individual developers and companies." }
  ];

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My Favorite Tools</h2>
      <p className="text-lg mb-8 text-center text-custom-yellow">Exploring the Tools Behind My work</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`rounded-full bg-gray-100 p-4 hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-in-out ${
              selectedTool === tool ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleToolClick(tool)}
          >
            <div className="flex items-center justify-center">
              <img
                src={`/icons/${tool.icon}.svg`}
                alt={tool.name}
                className="w-12 h-12"
              />
            </div>
            <p className="text-center mt-2">{tool.percentage}</p>
            <p className="text-center text-xs mt-1">{tool.name}</p>
          </div>
        ))}
      </div>

      {selectedTool && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2 text-center">{selectedTool.name}</h3>
          <p className="text-center">{selectedTool.description}</p>
        </div>
      )}
    </div>
  );
}

export default MyFavoriteTools;