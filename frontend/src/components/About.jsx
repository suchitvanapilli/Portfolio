import React, { useState } from "react";
import { Sparkles, Layers, Target, BookOpen, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "story", label: "My Journey", icon: BookOpen },
  { id: "philosophy", label: "Engineering Philosophy", icon: Target },
  { id: "blueprint", label: "Technical Blueprint", icon: Layers }
];

const storyParagraphs = [
  "3rd year B.Tech AI & ML student specializing in full-stack web applications, computer vision systems, and modern UI/UX design.",
  "I am a 3rd-year B.Tech Artificial Intelligence & Machine Learning student at Sri Sivani College of Engineering. I specialize in building practical, high-throughput software systems that bridge client-side user interfaces with server-side AI logic.",
  "My core technical focus combines high-speed FastAPI asynchronous Python backends, real-time biometric verification using OpenCV and NumPy, and reactive frontend single-page web applications built with React and Tailwind CSS.",
  "From face recognition employee attendance portals to disease surveillance health platforms and complete UI/UX mobile designs, I focus on clean architecture, modular code separation, and reliable user experiences."
];

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50/60 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Title with Scroll-Reveal Animation */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Identity & Focus</span>
          </motion.div>

          {/* Heading → slides/fades upward */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About Me
          </motion.h2>

          {/* Underline → expands from left to right */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-12 h-1 bg-blue-600 rounded-full mt-3 origin-left"
          />
        </div>

        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Subheadline & Story Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeTab === "story" && (
                <div key="story" className="space-y-4">
                  {/* Paragraphs → appear sequentially with staggered scroll-reveal */}
                  {storyParagraphs.map((para, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + idx * 0.12,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className={
                        idx === 0
                          ? "text-slate-800 dark:text-slate-100 text-lg sm:text-xl font-bold leading-relaxed mb-6"
                          : "text-slate-600 dark:text-slate-300 text-base leading-relaxed"
                      }
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              )}

              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      Practical Execution
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Code should solve tangible problems with measurable throughput, clear logic, and responsive user feedback.
                    </p>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Modular Architecture
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Cleanly separating client views, API routing, computer vision vectors, and persistent ORM data models.
                    </p>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      Continuous Problem Solving
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Daily Python algorithmic practice covering data structures (trees, heaps, sorting algorithms) and technical challenges.
                    </p>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      Thoughtful UI & UX
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Designing intuitive user flows, accessible form validation, and modern glassmorphic layouts.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "blueprint" && (
                <motion.div
                  key="blueprint"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs space-y-2.5 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-300"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                    <span>// Engineering Workflow Execution</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400">1. Requirements & System Scope Specification</p>
                  <p className="text-blue-600 dark:text-blue-300 font-medium">2. Single-Page UI Architecture: React 18 + Tailwind CSS</p>
                  <p className="text-indigo-600 dark:text-indigo-300 font-medium">3. Asynchronous Server APIs: FastAPI + Pydantic + JWT</p>
                  <p className="text-sky-600 dark:text-sky-300 font-medium">4. Computer Vision Pipeline: OpenCV Frame Detection & NumPy Vectors</p>
                  <p className="text-emerald-600 dark:text-emerald-300 font-medium">5. Data Persistence & Audit Exports: SQLAlchemy ORM & Relational DBs</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Operational Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center"
                >
                  <p className="text-base font-extrabold text-blue-600 dark:text-blue-400 font-mono">3rd Year</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">B.Tech AIML</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.48 }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center"
                >
                  <p className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">&lt; 1s</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Vision Matching</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.56 }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center"
                >
                  <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">Frontend</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">React + Tailwind</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.64 }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center"
                >
                  <p className="text-base font-extrabold text-purple-600 dark:text-purple-400 font-mono">UI / UX</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Figma & Prototypes</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Switcher & Developer Profile Box */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Interactive Tab Switcher Box with Header-Matching Blue Box Animation */}
            <div className="flex bg-slate-100/80 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 w-full justify-between">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isCurrent
                        ? "text-blue-600 dark:text-blue-400 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 bg-blue-50/90 dark:bg-blue-950/70 rounded-lg border border-blue-200/80 dark:border-blue-800/80 shadow-2xs -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Ultra-Minimal Developer Snapshot Card */}
            <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 card-shadow card-shadow-hover relative overflow-hidden flex flex-col justify-between transition-colors duration-300">
              <div>
                {/* Header: Name & Role */}
                <div className="pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    DEVELOPER PROFILE
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    SUCHIT VANAPILLI
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                    AI/ML, Full-Stack & UI/UX Designer
                  </p>
                </div>

                {/* Core Focus Specifics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Education</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">B.Tech AI & ML • 3rd Year</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Focus</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Full-Stack Development • AI/ML</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Backend</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Python • FastAPI • REST APIs</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Frontend</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">React.js • Tailwind CSS</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400">Design</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">UI/UX Design • Figma • Canva</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Building intelligent, responsive software systems that connect modern interfaces with backend services and machine learning.
                </p>
              </div>

              {/* Action Buttons: Download Resume & View Resume */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href="/Suchit_Vanapilli_Resume.pdf"
                  download="Suchit_Vanapilli_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-2xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="/Suchit_Vanapilli_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
