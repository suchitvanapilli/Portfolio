import React from "react";
import { projects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export default function Projects({ onOpenDetails }) {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Work
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
            Projects built to solve practical problems through software, AI and thoughtful interfaces. All source code is publicly accessible on GitHub.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <FeaturedProject project={featuredProject} onOpenDetails={onOpenDetails} />
        </div>

        {/* Other Selected Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
