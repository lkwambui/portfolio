import { usePageMeta } from "../lib/seo";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import SelectedWork from "../sections/SelectedWork";
import Expertise from "../sections/Expertise";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import LogicorexSection from "../sections/LogicorexSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  usePageMeta({ path: "/" });

  return (
    <>
      <Hero />
      <Intro />
      <SelectedWork />
      <Expertise />
      <AboutSection />
      <ExperienceSection />
      <LogicorexSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
