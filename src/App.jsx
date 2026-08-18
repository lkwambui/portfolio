import { Routes, Route } from "react-router-dom";
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
import Process from "./pages/Process";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Lab from "./pages/Lab";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/ui-ux" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/services" element={<Services />} />
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
      <Footer />
    </div>
  );
}

export default App;