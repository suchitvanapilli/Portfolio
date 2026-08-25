import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
        isDark
          ? "bg-slate-900 border-slate-700 text-amber-300 hover:border-amber-400/50 hover:bg-slate-800 shadow-xs"
          : "bg-amber-50/80 border-amber-200/90 text-amber-600 hover:bg-amber-100 hover:border-amber-300 shadow-2xs"
      } ${className}`}
      title={isDark ? "Switch to Sunrise (Light Mode)" : "Switch to Sunset (Dark Mode)"}
      aria-label={isDark ? "Switch to Sunrise (Light Mode)" : "Switch to Sunset (Dark Mode)"}
    >
      <motion.div
        key={isDark ? "sunset" : "sunrise"}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 fill-amber-300/20 text-amber-300" />
        ) : (
          <Sun className="w-4 h-4 fill-amber-500/20 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
