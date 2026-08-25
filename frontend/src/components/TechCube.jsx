import React, { useState } from "react";
import { TechIcon } from "./TechLogos";
import { Sparkles, Box, RotateCw } from "lucide-react";

const cubeFaces = [
  {
    id: "front",
    label: "AI & BACKEND",
    accent: "border-blue-500/40 bg-blue-950/80 text-blue-300 shadow-blue-500/20",
    skills: ["Python", "FastAPI", "OpenCV"],
    transform: "translateZ(110px)"
  },
  {
    id: "back",
    label: "FRONTEND UI",
    accent: "border-sky-500/40 bg-sky-950/80 text-sky-300 shadow-sky-500/20",
    skills: ["React.js", "Tailwind CSS", "JavaScript"],
    transform: "rotateY(180deg) translateZ(110px)"
  },
  {
    id: "right",
    label: "AGENTIC AI",
    accent: "border-purple-500/40 bg-purple-950/80 text-purple-300 shadow-purple-500/20",
    skills: ["ChatGPT", "Antigravity", "Prompt Eng."],
    transform: "rotateY(90deg) translateZ(110px)"
  },
  {
    id: "left",
    label: "FRONTEND UI",
    accent: "border-emerald-500/40 bg-emerald-950/80 text-emerald-300 shadow-emerald-500/20",
    skills: ["Node.js", "Express.js", "MongoDB"],
    transform: "rotateY(-90deg) translateZ(110px)"
  },
  {
    id: "top",
    label: "DESIGN & MEDIA",
    accent: "border-amber-500/40 bg-amber-950/80 text-amber-300 shadow-amber-500/20",
    skills: ["Figma", "Canva", "Premiere Pro"],
    transform: "rotateX(90deg) translateZ(110px)"
  },
  {
    id: "bottom",
    label: "DEVOPS & TOOLS",
    accent: "border-indigo-500/40 bg-indigo-950/80 text-indigo-300 shadow-indigo-500/20",
    skills: ["Git", "GitHub", "Docker"],
    transform: "rotateX(-90deg) translateZ(110px)"
  }
];

export default function TechCube() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Info Left */}
      <div className="max-w-md space-y-3 z-10 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Box className="w-3.5 h-3.5" />
          <span>3D Interactive Tech Cube</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Modern Tooling Stack
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Hover over the 3D cube to pause rotation and explore tools across AI engineering, full-stack React + FastAPI web applications, graphic design, and video editing.
        </p>

        <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isPaused ? "" : "animate-spin"}`} />
            <span>{isPaused ? "Resume Rotation" : "Pause Rotation"}</span>
          </button>
          <span className="text-slate-500">• Hover to Inspect</span>
        </div>
      </div>

      {/* 3D Rotating Cube Container Right */}
      <div className="relative w-64 h-64 flex items-center justify-center perspective-[1000px] z-10 my-4 md:my-0">
        <div
          className={`w-52 h-52 relative preserve-3d transition-transform duration-700 ${
            isPaused ? "" : "animate-spin-cube"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {cubeFaces.map((face) => (
            <div
              key={face.id}
              className={`absolute inset-0 rounded-2xl p-4 border backdrop-blur-md flex flex-col justify-between shadow-xl transition-all ${face.accent}`}
              style={{ transform: face.transform }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  {face.label}
                </span>
                <Sparkles className="w-3 h-3 text-blue-400" />
              </div>

              <div className="space-y-2 my-auto">
                {face.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-semibold text-white shadow-2xs"
                  >
                    <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="text-[9px] font-mono text-right text-slate-400">
                SUCHIT VANAPILLI
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
