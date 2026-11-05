import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageTransition from "./components/layout/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Work";
import ProjectDetail from "./pages/WorkDetail";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Process from "./pages/Process";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Lab from "./pages/Lab";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";

function App() {
  const { pathname } = useLocation();
  const isStandalone = pathname === "/card";

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-line focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
          >
            Skip to content
          </a>
          <ScrollToTop />
          {!isStandalone && <Navbar />}
          <PageTransition>
            <main id="main-content" className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<Card />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/ui-ux" element={<Design />} />
                <Route path="/development" element={<Development />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/process" element={<Process />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </PageTransition>
          {!isStandalone && <Footer />}
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;