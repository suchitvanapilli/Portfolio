import React from "react";
import { currentFocusAreas } from "../data/focus";
import { Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-20 md:py-28 bg-slate-50/70 dark:bg-black border-y border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I'm Building Toward
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
            My active areas of exploration, continuous learning, and software engineering refinement.
          </p>
        </div>

        {/* 3 Strategic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentFocusAreas.map((area, idx) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800">
                    {area.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {area.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {area.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                  Core Focus Topics:
                </p>
                <div className="space-y-1.5">
                  {area.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
