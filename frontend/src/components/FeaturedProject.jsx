import React from "react";
import { ArrowRight, Sparkles, Layers, Server, Cpu, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { motion } from "framer-motion";

export default function FeaturedProject({ project, onOpenDetails }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 card-shadow card-shadow-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Accent Badge */}
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-2xs flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        <span>Featured Engineering Project</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Visual System Architecture Preview */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="bg-slate-950 dark:bg-black rounded-2xl p-5 sm:p-6 text-slate-200 border border-slate-800 shadow-inner">
            
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  frs-biometric-pipeline.py
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                FastAPI + OpenCV
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>React UI Layer</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-sans">Webcam Frame Capture</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <span>↓ REST API</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-400" />
                  <span>FastAPI + JWT Auth</span>
                </div>
                <span className="text-[10px] text-blue-300 font-sans">Async Endpoint</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <span>↓ Vector Matching</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/80 text-blue-200">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>OpenCV + NumPy Vector Match</span>
                </div>
                <span className="text-[10px] text-emerald-300 font-sans font-semibold">&lt; 1s Verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project Title, Short Description, Tags & Actions */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider">
              01 • FEATURED PROJECT
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
