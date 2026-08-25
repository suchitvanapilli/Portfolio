import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import welcomeImg from "../assets/suchit-welcome.jpg";
import LogoMark from "./LogoMark";

const fullTitle = "Welcome to My Portfolio";

export default function WelcomeSplash({ onComplete }) {
  const [typedTitle, setTypedTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Typewriter effect for "Welcome to My Portfolio"
  useEffect(() => {
    let idx = 0;
    const typewriterTimer = setInterval(() => {
      if (idx <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, idx));
        idx++;
      } else {
        clearInterval(typewriterTimer);
      }
    }, 65);

    return () => clearInterval(typewriterTimer);
  }, []);

  // Loading progress bar timer
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-start bg-black text-white overflow-hidden p-6 sm:p-12"
    >
      {/* Full-Screen Background Image with Pro Vignette Effect & Fill */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={welcomeImg}
          alt="Suchit Vanapilli Background"
          width="1920"
          height="1080"
          decoding="async"
          className="w-full h-full object-cover object-[75%_top] filter brightness-105"
        />

        {/* Dedicated Pure Black Fade-In Mask */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-black pointer-events-none z-10"
        />

        {/* Pro Radial Vignette Mask focused on portrait on the right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,transparent_35%,rgba(0,0,0,0.5)_75%,#000000_100%)]" />
        
        {/* Directional Vignette Gradient to highlight left-side text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-left pl-2 sm:pl-8 lg:pl-16">
        {/* Typewriter Welcome Title */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 min-h-[4rem] text-left leading-tight"
        >
          <span className="text-white drop-shadow-xl">
            {typedTitle}
          </span>
          <span className="animate-pulse text-cyan-400 ml-1 inline-block">|</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2.5 mb-8"
        >
          <LogoMark className="w-6 h-6 animate-pulse" />
          <p className="text-sm font-bold text-blue-400 font-mono tracking-widest uppercase drop-shadow-md">
            SUCHIT VANAPILLI
          </p>
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2 mb-8 max-w-sm"
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-200 drop-shadow-sm">
            <span>{isDone ? "ASSETS LOADED" : "LOADING ASSETS"}</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-black/60 border border-white/20 overflow-hidden p-0.5 backdrop-blur-sm shadow-md">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        {/* Pop-up Button when 100% complete */}
        <AnimatePresence>
          {isDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <button
                type="button"
                onClick={onComplete}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-600/40 cursor-pointer group"
              >
                <span>Go to Home</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
