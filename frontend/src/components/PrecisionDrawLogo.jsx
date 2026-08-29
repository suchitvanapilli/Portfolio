import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * PrecisionDrawLogo Component
 * Professional Vector Stroke Draw-On Animation for Suchit Vanapilli's SV Logo.
 * 
 * Strict Sequence Timeline (4.8s cycle):
 * 0.0 - 0.2s: Empty canvas
 * 0.2 - 1.3s: 'S' centerline path draws continuously
 * 1.3 - 2.0s: 'V' diagonal centerline paths draw
 * 2.0 - 2.3s: Blue accent centerline path draws
 * 2.3 - 2.5s: 1% scale stabilization & crossfade lock to exact original image
 * 2.5 - 4.5s: Clean, perfectly still final hold (with brief understated highlight)
 */
export default function PrecisionDrawLogo({ className = "w-28 h-28 sm:w-36 sm:h-36", loop = true }) {
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
      {/* 1. Vector Centerline Path Drawing Layer (0.0s - 2.5s) */}
      <svg
        viewBox="0 0 1000 667"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blueAccentPure" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* 'S' Single Continuous Centerline Path (0.2s - 1.3s) */}
        <motion.path
          d="M 440 250 A 95 95 0 1 0 440 440 C 330 440 250 480 250 540 C 250 610 330 635 440 600"
          stroke="#ffffff"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0, 1, 1, 0],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 4.8,
            times: [0, 0.04, 0.27, 0.52, 1],
            ease: "easeInOut"
          }}
        />

        {/* 'V' Continuous Diagonal Paths (1.3s - 2.0s) */}
        <motion.path
          d="M 440 280 L 620 630 L 890 120"
          stroke="#ffffff"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0, 1, 1, 0],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 4.8,
            times: [0, 0.27, 0.42, 0.52, 1],
            ease: "easeInOut"
          }}
        />

        {/* Blue Accent Path inside V (2.0s - 2.3s) */}
        <motion.path
          d="M 460 295 L 620 595"
          stroke="url(#blueAccentPure)"
          strokeWidth="18"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0, 1, 1, 0],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 4.8,
            times: [0, 0.42, 0.48, 0.52, 1],
            ease: "easeOut"
          }}
        />
      </svg>

      {/* 2. Exact Original High-Res Logo Image Lock & Still Hold (2.3s - 4.5s) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.01 }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [1.01, 1.01, 1.0, 1.0, 1.01]
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.48, 0.52, 0.90, 1],
          ease: "easeOut"
        }}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <img
          src={svLogoSrc}
          alt="Suchit Vanapilli SV Logo"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_14px_rgba(37,99,235,0.35)]"
        />

        {/* Optional Premium Detail: Brief, Understated Highlight Sweep at t=2.6s */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["-100%", "-100%", "150%", "150%"],
            opacity: [0, 0, 0.5, 0]
          }}
          transition={{
            duration: 4.8,
            times: [0, 0.54, 0.62, 0.65],
            ease: "easeInOut"
          }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent skew-x-12 pointer-events-none mix-blend-screen"
        />
      </motion.div>
    </div>
  );
}
