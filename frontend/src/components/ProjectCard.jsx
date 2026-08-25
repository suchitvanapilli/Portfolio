import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index, onOpenDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 card-shadow card-shadow-hover hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider">
            {String(index + 2).padStart(2, "0")} • PROJECT
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
          {project.shortTitle || project.title}
        </h3>

        {/* Concise Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}

        {project.figma && (
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-purple-500" />
            <span>Figma Prototype</span>
          </a>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 rounded-lg transition-colors cursor-pointer ml-auto"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
