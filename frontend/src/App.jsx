import React, { useState } from "react";
import WelcomeSplash from "./components/WelcomeSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CurrentFocus from "./components/CurrentFocus";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Experiments from "./components/Experiments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import Toast from "./components/Toast";
import AnimatedSection from "./components/AnimatedSection";
import { useActiveSection } from "./hooks/useActiveSection";
import { useDarkMode } from "./hooks/useDarkMode";
import { AnimatePresence } from "framer-motion";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "certifications",
  "contact"
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, toggleDarkMode] = useDarkMode();

  // Reset scroll to top and clear URL hash on page refresh
  React.useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const activeSection = useActiveSection(sectionIds);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Welcome Intro Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <WelcomeSplash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Sticky Navigation & Main Content (Shown only after entering portfolio) */}
      {!showSplash && (
        <>
          <Navbar
            activeSection={activeSection}
            isDark={isDark}
            onToggleTheme={toggleDarkMode}
          />

          {/* Main Content Sections with Global Scroll Reveal Animations */}
          <main className="grow">
            <Hero key="hero-homepage-entrance" />
            
            <AnimatedSection>
              <About />
            </AnimatedSection>

            <AnimatedSection>
              <Skills />
            </AnimatedSection>

            <AnimatedSection>
              <Projects onOpenDetails={handleOpenProjectDetails} />
            </AnimatedSection>

            <AnimatedSection>
              <CurrentFocus />
            </AnimatedSection>

            <AnimatedSection>
              <Education />
            </AnimatedSection>

            <AnimatedSection>
              <Certifications />
            </AnimatedSection>

            <AnimatedSection>
              <Experiments />
            </AnimatedSection>

            <AnimatedSection>
              <Contact onShowToast={handleShowToast} />
            </AnimatedSection>
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}

      {/* Interactive Project Architecture & Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
