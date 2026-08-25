import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Github, Linkedin, WhatsApp } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSnapshot from "./ProfileSnapshot";
import portraitImg from "../assets/suchit-portrait.jpg";

const roles = [
  "AI & ML Student",
  "Full-Stack Developer",
  "UI/UX Designer",
  "Prompt Engineer",
  "Graphic Designer"
];

export default function Hero() {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 96;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >


      {/* Dynamic ambient glowing light orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zinc-400/10 dark:bg-zinc-800/20 rounded-full blur-3xl pointer-events-none animate-pulse -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zinc-500/10 dark:bg-zinc-800/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text, Dynamic Role Switcher & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Sequence 2: Dynamic Animated Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 flex items-center justify-between px-4 py-2 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs w-full max-w-[280px]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                </span>
                <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">ROLE</span>
              </div>

              <div className="h-4 overflow-hidden relative w-36 font-mono text-blue-600 dark:text-blue-400 font-extrabold text-right text-xs">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[currentRoleIdx]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 top-0 block truncate"
                  >
                    {roles[currentRoleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Sequence 3: Name — "SUCHIT VANAPILLI" with Clean Masked Upward Reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight"
              >
                SUCHIT VANAPILLI
              </motion.h1>
            </div>

            {/* Sequence 4: Main Role — "AI/ML, Full-Stack & UI/UX Designer" */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent mb-4"
            >
              AI/ML, Full-Stack & UI/UX Designer
            </motion.h2>

            {/* Sequence 5: Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Building intelligent, practical web applications using modern full-stack technologies and AI/ML.
            </motion.p>

            {/* Sequence 6: CTA Buttons with subtle scale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/80 dark:hover:bg-slate-800 active:bg-slate-200 border border-slate-200/80 dark:border-slate-800 rounded-xl transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
            </motion.div>

            {/* Sequence 7: Social / Contact Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Srikakulam, AP, India</span>
              </div>

              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://github.com/suchitvanapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/suchit-v-473164320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/919494710751?text=Hi%20Suchit%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                >
                  <WhatsApp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:suchitvanapilli25@gmail.com"
                  className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sequence 8 & 9 Profile Image & Single Glow Expansion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="w-full max-w-[320px] sm:max-w-[350px]">
              <div className="relative w-full group">
                {/* Sequence 9: Glow expands gently ONCE during entrance and settles to normal glow */}
                <motion.div
                  initial={{ opacity: 0.3, scale: 0.96 }}
                  animate={{ opacity: [0.3, 0.85, 0.7], scale: [0.96, 1.03, 1] }}
                  transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 blur-md group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />

                {/* Architectural backdrop cards */}
                <div className="absolute -inset-1 rounded-3xl bg-slate-900/40 dark:bg-slate-800/40 rotate-1 -z-10" />

                {/* Compact Image Container with aspect-[4/5] */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/90 dark:border-slate-800 shadow-xl p-1 bg-gradient-to-b from-blue-500/20 via-slate-900 to-slate-950">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full">
                    <img
                      src={portraitImg}
                      alt="Suchit Vanapilli — AI & ML Student and Full-Stack Developer"
                      width="350"
                      height="437"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      style={{ objectPosition: "center 32%" }}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Metric Snapshot Cards positioned cleanly at bottom of Hero */}
        <div className="mt-8 md:mt-12">
          <ProfileSnapshot />
        </div>
      </div>
    </section>
  );
}
