import React, { useState } from "react";
import { TechIcon } from "./TechLogos";
import { motion, AnimatePresence } from "framer-motion";

const row1Skills = [
  "Python",
  "React.js",
  "FastAPI",
  "OpenCV",
  "NumPy",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "SQL",
  "Vite",
  "HTML",
  "CSS"
];

const row2Skills = [
  "DeepSeek",
  "Replit",
  "Bolt",
  "ElevenLabs",
  "Runway",
  "Hugging Face",
  "ChatGPT",
  "Antigravity",
  "Claude",
  "Gemini",
  "GitHub Copilot",
  "Perplexity",
  "Cursor",
  "VS Code",
  "Vercel",
  "Figma",
  "Affinity",
  "Canva",
  "Premiere Pro",
  "Docker",
  "Git",
  "GitHub",
  "Postman",
  "Prompt Engineering"
];

const doubleRow1 = [...row1Skills, ...row1Skills];
const doubleRow2 = [...row2Skills, ...row2Skills];

export default function FlowingLogos() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div
      className="relative pt-4 pb-2 mb-8"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
      }}
    >
      {/* Row 1: Flowing Icons Left (Gradient to Gradient Stream) */}
      <div className="pt-8 pb-3 mb-1">
        <div className="flex items-center gap-7 sm:gap-10 w-max animate-marquee">
          {doubleRow1.map((skill, idx) => {
            const isHovered = hoveredSkill === `r1-${skill}-${idx}`;
            return (
              <motion.div
                key={`r1-${skill}-${idx}`}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 15) * 0.04, ease: "easeOut" }}
                onMouseEnter={() => setHoveredSkill(`r1-${skill}-${idx}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group p-1 transition-transform duration-200 cursor-pointer shrink-0"
                style={{
                  transform: isHovered ? "scale(1.22) translateY(-4px)" : "scale(1) translateY(0)"
                }}
              >
                <TechIcon name={skill} className="w-7 h-7 sm:w-8.5 sm:h-8.5 shrink-0 transition-transform duration-200 drop-shadow-xs" />

                {/* Instant High-Contrast Floating Tooltip on Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 text-[11px] font-extrabold font-mono shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>{skill}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Flowing Icons Right (Gradient to Gradient Stream) */}
      <div className="pt-8 pb-3">
        <div className="flex items-center gap-7 sm:gap-10 w-max animate-marquee-reverse">
          {doubleRow2.map((skill, idx) => {
            const isHovered = hoveredSkill === `r2-${skill}-${idx}`;
            return (
              <motion.div
                key={`r2-${skill}-${idx}`}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 24) * 0.04, ease: "easeOut" }}
                onMouseEnter={() => setHoveredSkill(`r2-${skill}-${idx}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group p-1 transition-transform duration-200 cursor-pointer shrink-0"
                style={{
                  transform: isHovered ? "scale(1.22) translateY(-4px)" : "scale(1) translateY(0)"
                }}
              >
                <TechIcon name={skill} className="w-7 h-7 sm:w-8.5 sm:h-8.5 shrink-0 transition-transform duration-200 drop-shadow-xs" />

                {/* Instant High-Contrast Floating Tooltip on Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 text-[11px] font-extrabold font-mono shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{skill}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Live Hover Status Bar Indicator */}
      <div className="h-6 mt-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Hovering: {hoveredSkill.split("-")[1]}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
