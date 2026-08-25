import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, offset = 180) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Force 'home' when user is near the top of the page
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // The furthest section whose top has scrolled past the header offset threshold
          if (rect.top <= offset) {
            currentSection = sectionIds[i];
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
