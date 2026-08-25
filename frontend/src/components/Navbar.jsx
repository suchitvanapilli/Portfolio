import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

import LogoMark from "./LogoMark";

export default function Navbar({ activeSection, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedSection, setClickedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Temporary override for smooth scroll duration (800ms)
  useEffect(() => {
    if (clickedSection) {
      const timer = setTimeout(() => {
        setClickedSection(null);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [clickedSection]);

  const currentActive = clickedSection || activeSection || "home";

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setClickedSection(link.id);
    setMobileMenuOpen(false);
    const target = document.querySelector(link.href);
    if (target) {
      const topOffset = 96;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs py-3.5"
          : "bg-white/80 dark:bg-black/70 backdrop-blur-xs py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* Brand Logo (Left) */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, navLinks[0])}
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 cursor-pointer"
          aria-label="Suchit Vanapilli - Home"
        >
          <LogoMark className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            SUCHIT VANAPILLI<span className="text-blue-600">.</span>
          </span>
        </a>

        {/* Desktop Navigation (Centered in Header with Smooth Sliding Blue Box Animation) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 absolute left-1/2 -translate-x-1/2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentActive === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors relative cursor-pointer ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavbarBox"
                    className="absolute inset-0 bg-blue-50/90 dark:bg-blue-950/70 rounded-lg border border-blue-200/80 dark:border-blue-800/80 shadow-2xs -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavbarLine"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Theme Switcher (Right) */}
        <div className="hidden lg:flex items-center">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Actions (Theme Toggle + Hamburger Button) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentActive === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
