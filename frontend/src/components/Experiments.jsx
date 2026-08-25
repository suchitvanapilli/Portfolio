import React from "react";
import { experimentProjects } from "../data/projects";
import { FlaskConical, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { motion } from "framer-motion";

export default function Experiments() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-black border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Exploratory & Practice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiments & Other Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Concepts, problem-solving repositories, and algorithmic practice.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experimentProjects.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white dark:bg-black text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {exp.type}
                  </span>
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                      aria-label={`GitHub repository for ${exp.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {exp.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-white dark:bg-black text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {exp.github && (
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-end">
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <span>Explore Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
