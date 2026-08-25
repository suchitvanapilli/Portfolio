import React from "react";
import { Brain, Layers, Eye, Layout } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Brain,
    title: "AI & ML",
    subtitle: "Academic Focus",
    detail: "B.Tech specialization in Artificial Intelligence & Machine Learning foundations.",
    accent: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-100 dark:border-blue-800"
  },
  {
    icon: Layers,
    title: "Full-Stack",
    subtitle: "Development Direction",
    detail: "Integrating responsive React frontends with asynchronous FastAPI/Node backends.",
    accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-100 dark:border-indigo-800"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    subtitle: "Practical Project Experience",
    detail: "Hands-on implementation of OpenCV and NumPy for biometric face verification.",
    accent: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border-sky-100 dark:border-sky-800"
  },
  {
    icon: Layout,
    title: "UI/UX",
    subtitle: "Design Understanding",
    detail: "Building clean, intuitive user flows with Tailwind CSS and modern web design principles.",
    accent: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
  }
];

export default function ProfileSnapshot() {

  return (
    <section className="py-8 bg-slate-50/70 dark:bg-black border-y border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className={`p-2 rounded-lg border ${card.accent}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
