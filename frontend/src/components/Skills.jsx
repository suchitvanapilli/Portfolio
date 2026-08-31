import React, { useState } from "react";
import { skillCategories } from "../data/skills";
import { TechIcon } from "./TechLogos";
import FlowingLogos from "./FlowingLogos";
import { Code, Layout, Server, Database, Cpu, Bot, Wrench, Sparkles, Search, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categoryIcons = {
    "PROGRAMMING": Code,
    "FRONTEND": Layout,
    "BACKEND": Server,
    "DATABASE": Database,
    "AI / ML": Cpu,
    "AI TOOLS": Bot,
    "DEVELOPER & DESIGN TOOLS": Wrench
  };

  const categoryColors = {
    "PROGRAMMING": "from-blue-600 to-indigo-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800",
    "FRONTEND": "from-sky-500 to-cyan-500 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800",
    "BACKEND": "from-emerald-500 to-teal-600 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800",
    "DATABASE": "from-indigo-500 to-purple-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800",
    "AI / ML": "from-purple-600 to-pink-600 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800",
    "AI TOOLS": "from-rose-500 to-pink-600 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800",
    "DEVELOPER & DESIGN TOOLS": "from-amber-500 to-orange-600 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800"
  };

  const filterTabs = [
    "ALL",
    "PROGRAMMING",
    "FRONTEND",
    "BACKEND",
    "DATABASE",
    "AI / ML",
    "AI TOOLS",
    "DEVELOPER & DESIGN TOOLS"
  ];

  const filteredCategories = skillCategories
    .filter((catGroup) => activeCategory === "ALL" || catGroup.category === activeCategory)
    .map((catGroup) => {
      const matchingSkills = catGroup.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery && matchingSkills.length === 0) return null;

      return {
        ...catGroup,
        skills: searchQuery ? matchingSkills : catGroup.skills
      };
    })
    .filter(Boolean);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-black border-t border-slate-100 dark:border-slate-800/80 overflow-hidden relative transition-colors duration-300">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Capabilities ({totalSkillsCount} Technologies)</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Skills & Technical Focus
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-3 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
              className="text-slate-600 dark:text-slate-300 text-base max-w-xl leading-relaxed"
            >
              Seamless stack overview without rigid containers. Click any skill for practical role details.
            </motion.p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, Claude, Canva)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-md transition-all duration-200 shadow-2xs"
            />
          </div>
        </div>

        {/* Live Flowing Tech Logos Stream */}
        <FlowingLogos />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isSelected = activeCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "text-white shadow-xs"
                    : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeBoxlessSkillTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* BOXLESS SEAMLESS SKILLS CLUSTERS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-12"
          >
            {filteredCategories.map((catGroup) => {
              const Icon = categoryIcons[catGroup.category] || Code;
              const colorStyle = categoryColors[catGroup.category] || categoryColors["PROGRAMMING"];

              return (
                <div
                  key={catGroup.category}
                  className="pt-2 pb-6 border-b border-slate-100 dark:border-slate-900 last:border-none relative"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
                    <div className="flex items-center gap-3">
                      {/* 1. Category Icon (Fade & Scale 0.90 -> 1, 400ms) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.90 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`p-2 rounded-xl border ${colorStyle.split(' ').slice(2).join(' ')}`}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>

                      <div>
                        {/* 2. Category Title (Fade & y: 15px -> 0, 450ms, delay: 80ms) */}
                        <motion.h3
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
                          className="text-base font-extrabold text-slate-900 dark:text-white tracking-wider font-mono uppercase"
                        >
                          {catGroup.category}
                        </motion.h3>

                        {/* 3. Category Description (Fade & y: 10px -> 0, 400ms, delay: 150ms) */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                          className="text-xs text-slate-500 dark:text-slate-400"
                        >
                          {catGroup.description}
                        </motion.p>
                      </div>
                    </div>

                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="text-[11px] font-mono font-bold text-slate-400 self-start sm:self-auto"
                    >
                      {catGroup.skills.length} Technologies
                    </motion.span>
                  </div>

                  {/* 4. Technology Pills (Sequential Left to Right, 60ms Stagger) */}
                  <div className="flex flex-wrap gap-3">
                    {catGroup.skills.map((skill, skillIdx) => (
                      <motion.button
                        key={skill.name}
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: 0.20 + (skillIdx * 0.06), ease: "easeOut" }}
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedSkill({ ...skill, category: catGroup.category })}
                        className="relative group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/60 dark:hover:border-blue-400/60 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-2xs hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-pointer"
                      >
                        <TechIcon name={skill.name} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 ml-0.5" />
                        )}

                        {/* Hover Tooltip displaying official technology name */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap z-30 border border-slate-700">
                          {skill.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Skill Detail Pop-up Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <TechIcon name={selectedSkill.name} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                      {selectedSkill.category} • {selectedSkill.level}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <p className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-[10px] mb-1">
                      Practical Role & Application
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      {selectedSkill.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Skill</span>
                    </span>
                    <span className="text-slate-400">Click anywhere outside to close</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
