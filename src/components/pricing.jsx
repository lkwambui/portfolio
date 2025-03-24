import React from "react";

const PricingTable = () => {
  const designFeatures = [
    "User Research & Discovery",
    "Wireframing & Prototyping",
    "User Flow & Interaction Design",
    "Usability Testing",
    "Development Handoff",
    "Concept & Planning",
    "Visual Design",
    "Responsive Design",
    "Typography & Color Selection",
    "Graphics & Media Optimization",
  ];

  const developmentFeatures = [
    "Project Setup",
    "Component-Based Development",
    "State Management",
    "API Integration",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Security & Best Practices",
    "Testing & Debugging",
    "Deployment & Maintenance",
  ];

  const consultationFeatures = [
    "Requirement Analysis",
    "Technology Guidance",
    "UX Strategy",
    "Design & Development Planning",
    "Performance & Security Audits",
    "Bug Fixes & Updates",
    "UI/UX Enhancements",
    "Training & Documentation",
    "Technical Assistance",
    "Long-Term Maintenance",
  ];

  const whatsappLink = "https://wa.me/254799656264?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20your%20services.";

  return (
    <section className="bg-gray-50 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg text-yellow-500">Pricing Table</h2>
        <h1 className="text-3xl font-semibold mb-6 text-custom-green">
          My <span className="italic text-yellow-400">Pricing Model</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Design Plan */}
        <div className="bg-custom-green p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold">UI/UX Design & Web Design</h3>
          <p className="text-yellow-400 text-3xl mt-2">
            <span className="text-sm">Services</span>
          </p>
          <ul className="mt-4 space-y-2 text-left">
            {designFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-yellow-400">✔</span> {feature}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            GET A QUOTATION
          </a>
        </div>
        {/* Development Plan */}
        <div className="bg-custom-yellow p-6 rounded-lg text-center text-custom-green">
          <h3 className="text-2xl font-semibold">Front-End Development</h3>
          <p className="text-3xl mt-2">
            <span className="text-sm">Services</span>
          </p>
          <ul className="mt-4 space-y-2 text-left">
            {developmentFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-900">✔</span> {feature}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-green-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            GET A QUOTATION
          </a>
        </div>
        {/* Consultation Plan */}
        <div className="bg-custom-green p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold">Consultation & Support</h3>
          <p className="text-yellow-400 text-3xl mt-2">
            <span className="text-sm">Services</span>
          </p>
          <ul className="mt-4 space-y-2 text-left">
            {consultationFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-yellow-400">✔</span> {feature}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            GET A QUOTATION
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.linkedin.com/in/lucy-kamau-87bb75209/"
          target="_blank"
          rel="noreferrer"
          className="bg-custom-yellow text-green-900 px-6 py-2 rounded-lg font-semibold flex items-center justify-center mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          View My Portfolio <span className="ml-2">▶</span>
        </a>
      </div>
    </section>
  );
};

export default PricingTable;