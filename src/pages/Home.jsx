import { usePageMeta } from "../lib/seo";
import Hero from "../sections/Hero";
import ExpertiseMarquee from "../sections/ExpertiseMarquee";
import Intro from "../sections/Intro";
import SelectedWork from "../sections/SelectedWork";
import Expertise from "../sections/Expertise";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import TechnologySection from "../sections/TechnologySection";
import ResumeSection from "../sections/ResumeSection";
import SocialSection from "../sections/SocialSection";
import LogicorexSection from "../sections/LogicorexSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  usePageMeta({ path: "/" });

  return (
    <>
      <Hero />
      <ExpertiseMarquee />
      <Intro />
      <AboutSection />
      <Expertise />
      <SelectedWork />
      <TechnologySection />
      <ExperienceSection />
      <LogicorexSection />
      <ResumeSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
