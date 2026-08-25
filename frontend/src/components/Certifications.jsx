import React, { useState } from "react";
import { certifications, credlyProfileUrl } from "../data/certifications";
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Linkedin } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "GenAI & Cloud",
  "DSA & Problem Solving",
  "Hackathons & Prototyping"
];

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCerts =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-50/50 dark:bg-black border-t border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-50/60 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Award className="w-3.5 h-3.5" />
              <span>Validated Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications & Achievements
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
            <p className="text-slate-600 dark:text-slate-300 text-base mt-3 max-w-xl">
              Verified certifications, competitive hackathon recognitions, and digital credentials authenticated via LinkedIn and Credly.
            </p>
          </div>

          {/* Section Level Credly CTA */}
          <div className="flex items-center">
            <a
              href={credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Credly Account</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? "text-white shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeCertTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Credentials Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((item, idx) => {
              const isCert = item.type.includes("Certification");

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 card-shadow card-shadow-hover hover:border-blue-200 dark:hover:border-blue-800 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header Tags */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
                          isCert
                            ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                            : "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {item.issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills Learned Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.skillsLearned.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Actions: Points directly to official LinkedIn post */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>

                    <a
                      href={item.linkedinCertUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 px-3.5 py-2 rounded-xl transition-all shadow-2xs"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>View on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
