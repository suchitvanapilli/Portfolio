import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * LineRevealSnapLogo Component
 * Precision Line Reveal + Snap Animation for Suchit Vanapilli's SV Logo.
 * 
 * Timeline (Total 4.5s cycle):
 * 0.0 - 0.2s: Empty canvas
 * 0.2 - 0.9s: Sharp cyan line sweeps down, revealing exact original logo
 * 0.9 - 1.1s: SNAP phase — micro 1.5% scale click & razor-sharp focus lock
 * 1.1 - 4.5s: Hold completed logo perfectly still (100% identical to original image)
 */
export default function LineRevealSnapLogo({ className = "w-28 h-28 sm:w-36 sm:h-36", loop = true }) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (!loop) return;
    const timer = setInterval(() => {
      setAnimKey((prev) => prev + 1);
    }, 4800);
    return () => clearInterval(timer);
  }, [loop]);

  return (
    <div key={animKey} className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient Blue Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 0.4, 0.2, 0.35, 0],
          scale: [0.9, 1.05, 1.0, 1.0, 0.95]
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.18, 0.45, 0.88, 1],
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* 1. Line Reveal Mask Container */}
      <motion.div
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 0, scale: 0.985 }}
        animate={{
          clipPath: [
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",       // 0.0s: empty
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",       // 0.2s: start line reveal
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",   // 0.9s: full reveal
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",   // 4.5s: hold full
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"        // 4.8s: loop reset
          ],
          opacity: [0, 1, 1, 1, 0],
          scale: [0.985, 0.985, 1.015, 1.0, 0.985] // SNAP click effect at 0.9s
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.04, 0.18, 0.90, 1],
          ease: [0.16, 1, 0.3, 1] // Sharp snapping ease curve
        }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        <img
          src={svLogoSrc}
          alt="Suchit Vanapilli SV Logo"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
        />

        {/* 2. Leading Razor-Sharp Cyan Reveal Line */}
        <motion.div
          initial={{ top: "-5%", opacity: 0 }}
          animate={{
            top: ["-5%", "-5%", "105%", "105%"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4.8,
            times: [0, 0.04, 0.18, 0.22],
            ease: "easeOut"
          }}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8,0_0_20px_#2563eb] pointer-events-none z-10"
        />
      </motion.div>
    </div>
  );
}
