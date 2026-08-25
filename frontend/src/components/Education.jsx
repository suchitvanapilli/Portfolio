import React, { useState } from "react";
import { educationData } from "../data/education";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  const [selectedMilestone, setSelectedMilestone] = useState(educationData[0]);

  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-50/50 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Progression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & Academic Journey
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
            <p className="text-slate-600 dark:text-slate-300 text-base mt-3 max-w-xl">
              Currently pursuing <strong className="text-slate-900 dark:text-white">3rd Year B.Tech in Artificial Intelligence & Machine Learning</strong> with a strong foundation in mathematics and CS fundamentals.
            </p>
          </div>

          {/* Current Academic Status Indicator */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900 dark:bg-slate-900 text-white border border-slate-800 shadow-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Current Standing</p>
              <p className="text-xs font-bold text-emerald-300">3rd Year Undergrad (2024–2028)</p>
            </div>
          </div>
        </div>

        {/* Interactive Academic Milestones Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {educationData.map((item) => {
              const isSelected = selectedMilestone.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMilestone(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex-1 flex flex-col justify-between ${
                    isSelected
                      ? "bg-blue-50/70 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700 shadow-md ring-1 ring-blue-400/40"
                      : "bg-slate-50/80 dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
                  }`}
                >
                  {item.isCurrent && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-xl uppercase tracking-wider">
                      Current (3rd Year)
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono text-blue-700 dark:text-blue-300 bg-white dark:bg-black border border-blue-100 dark:border-blue-800 px-2 py-0.5 rounded-md shadow-2xs">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded">
                          {item.score}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-0.5">
                      {item.degree}
                    </h4>

                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1.5 border-t border-slate-200/60 dark:border-slate-800 text-xs mt-auto">
                    <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-[11px]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 text-[11px]">
                      <span>View Coursework</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Coursework & Competency View */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200 dark:border-slate-800 card-shadow card-shadow-hover relative h-full flex flex-col justify-between"
              >
                <div>
                  {/* Milestone Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Academic Milestone Deep-Dive
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
                        {selectedMilestone.degree}
                      </h3>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded-lg border ${
                        selectedMilestone.isCurrent
                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {selectedMilestone.status}
                    </span>
                  </div>

                  {/* Institution, Duration & Marks Details (3 Compact Short Boxes) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3.5 text-xs text-slate-600 dark:text-slate-400">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-slate-800">
                      <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Institution</p>
                      <p className="font-bold text-slate-900 dark:text-white text-[11px] leading-tight">{selectedMilestone.shortInstitution || selectedMilestone.institution}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-slate-800">
                      <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Duration & Location</p>
                      <p className="font-bold text-slate-900 dark:text-white text-[11px] leading-tight">{selectedMilestone.period} • {selectedMilestone.shortLocation || selectedMilestone.location}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
                      <p className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Marks / Score</p>
                      <p className="font-extrabold text-blue-700 dark:text-blue-300 text-xs leading-tight">{selectedMilestone.score}</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-3">
                    <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Academic Scope & Summary</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedMilestone.summary}
                    </p>
                  </div>

                  {/* Core Focus Areas & Coursework */}
                  <div className="mb-3">
                    <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Key Coursework & Focus Areas</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMilestone.focusAreas.map((area, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-[11px] font-semibold shadow-2xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Takeaways / Highlights */}
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                      Key Outcomes & Engineering Highlights
                    </h4>
                    <div className="space-y-1">
                      {selectedMilestone.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
