import React, { useState } from "react";
import { TechIcon } from "./TechLogos";
import { Globe, Sparkles, RotateCw } from "lucide-react";

const innerOrbitSkills = ["Python", "FastAPI", "OpenCV", "NumPy"];
const middleOrbitSkills = ["React.js", "Tailwind CSS", "Node.js", "JavaScript"];
const outerOrbitSkills = ["ChatGPT", "Antigravity", "Figma", "Canva", "Premiere Pro", "Docker"];

export default function TechGlobe() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Info Left */}
      <div className="max-w-md space-y-3 z-10 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Globe className="w-3.5 h-3.5" />
          <span>3D Interactive Tech Globe</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Global Tech Ecosystem
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Interactive orbital technology sphere visualizing core capabilities across Artificial Intelligence, full-stack React & FastAPI architecture, design systems, and developer tools.
        </p>

        <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isPaused ? "" : "animate-spin"}`} />
            <span>{isPaused ? "Resume Orbit" : "Pause Orbit"}</span>
          </button>
          <span className="text-slate-500">• Hover to Inspect</span>
        </div>
      </div>

      {/* 3D Interactive Globe Canvas Container Right */}
      <div
        className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center z-10 my-4 md:my-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Pulsing Core Sphere */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center text-center p-3 shadow-[0_0_50px_rgba(59,130,246,0.6)] z-20 border border-white/20 animate-pulse">
          <Sparkles className="w-6 h-6 text-white mb-1 drop-shadow-md" />
          <span className="text-[10px] font-mono font-extrabold text-white tracking-wider uppercase">
            AI & FULL STACK
          </span>
        </div>

        {/* Inner Orbital Ring */}
        <div
          className={`absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-blue-500/30 border-dashed ${
            isPaused ? "" : "animate-spin"
          }`}
          style={{ animationDuration: "14s" }}
        >
          {innerOrbitSkills.map((skill, idx) => {
            const angle = (idx / innerOrbitSkills.length) * 2 * Math.PI;
            const x = Math.cos(angle) * 88;
            const y = Math.sin(angle) * 88;
            return (
              <div
                key={skill}
                className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-blue-500/40 text-[11px] font-bold text-blue-300 shadow-md backdrop-blur-md -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`
                }}
              >
                <TechIcon name={skill} className="w-3.5 h-3.5" />
                <span>{skill}</span>
              </div>
            );
          })}
        </div>

        {/* Middle Orbital Ring */}
        <div
          className={`absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-purple-500/25 ${
            isPaused ? "" : "animate-spin"
          }`}
          style={{ animationDuration: "22s", animationDirection: "reverse" }}
        >
          {middleOrbitSkills.map((skill, idx) => {
            const angle = (idx / middleOrbitSkills.length) * 2 * Math.PI + Math.PI / 4;
            const x = Math.cos(angle) * 115;
            const y = Math.sin(angle) * 115;
            return (
              <div
                key={skill}
                className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-purple-500/40 text-[11px] font-bold text-purple-300 shadow-md backdrop-blur-md -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`
                }}
              >
                <TechIcon name={skill} className="w-3.5 h-3.5" />
                <span>{skill}</span>
              </div>
            );
          })}
        </div>

        {/* Outer Orbital Ring */}
        <div
          className={`absolute w-68 h-68 sm:w-76 sm:h-76 rounded-full border border-sky-500/20 border-dotted ${
            isPaused ? "" : "animate-spin"
          }`}
          style={{ animationDuration: "30s" }}
        >
          {outerOrbitSkills.map((skill, idx) => {
            const angle = (idx / outerOrbitSkills.length) * 2 * Math.PI;
            const x = Math.cos(angle) * 140;
            const y = Math.sin(angle) * 140;
            return (
              <div
                key={skill}
                className="absolute flex items-center gap-1.5 px-2 py-1 rounded-xl bg-slate-900/90 border border-sky-500/30 text-[10px] font-bold text-slate-200 shadow-md backdrop-blur-md -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`
                }}
              >
                <TechIcon name={skill} className="w-3.5 h-3.5" />
                <span>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
