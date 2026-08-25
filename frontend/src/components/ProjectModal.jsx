import React, { useEffect } from "react";
import { X, CheckCircle2, Layers, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-7 bg-slate-50 dark:bg-black border-b border-slate-200/80 dark:border-slate-800 relative shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5 font-mono">
              Engineering Deep-Dive
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pr-8">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6 sm:space-y-8 text-slate-700 dark:text-slate-300 flex-1 min-h-0">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/60">
                <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Problem Statement
                </h5>
                <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60">
                <h5 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Engineering Solution
                </h5>
                <p className="text-xs sm:text-sm text-blue-950 dark:text-blue-200 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* System Architecture Visualization */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>System Architecture Flow</span>
              </h4>

              <div className="bg-slate-900 dark:bg-black rounded-2xl p-5 text-white space-y-3 font-mono text-xs border border-slate-800">
                {project.architectureSteps.map((node, i) => (
                  <React.Fragment key={node.step}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[11px] font-bold">
                          {node.step}
                        </span>
                        <span className="font-semibold text-slate-100">{node.name}</span>
                      </div>
                      <span className="text-xs text-slate-300 font-sans">{node.desc}</span>
                    </div>
                    {i < project.architectureSteps.length - 1 && (
                      <div className="flex justify-center text-slate-500 py-0.5">
                        <span className="text-[11px]">↓ pipeline data transfer</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Verified Tech Stack */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                Verified Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features / Capabilities */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Repository Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <p className="font-bold text-slate-800 dark:text-slate-200">Repository Highlights:</p>
                {project.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-7 bg-slate-50 dark:bg-black border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Verified Public GitHub Repository
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-xs cursor-pointer"
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
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
