import React from 'react';
import Navbar from "./components/Navbar";
import HomeSection from './components/home';
import SkillsSection from './components/services';
import ServicesSection from './components/servicesEx';
import AboutMe from './components/about';
import MyFavoriteTools from './components/tools';
import Projects from './components/projects';
import PricingTable from './components/pricing';
import FAQSection from './components/faqs';
import Footer from './components/footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div id="home">
        <HomeSection />
      </div>
      <div id="services">
        <SkillsSection />
        <ServicesSection />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="pricing">
        <PricingTable />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;