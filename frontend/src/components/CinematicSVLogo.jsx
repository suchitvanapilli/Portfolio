import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * CinematicSVLogo Component
 * Premium, Apple-level light materialization animation for the exact uploaded SV logo.
 * 
 * Timeline (Total 4.5s cycle):
 * 0.0 - 0.5s: Energy pulse buildup (subtle ambient glow)
 * 0.5 - 1.5s: SV logo materializes via smooth gradient mask reveal
 * 1.5 - 2.0s: Thin blue-white light sweep left to right
 * 2.0 - 2.5s: 1.5% scale stabilization & lock
 * 2.5 - 4.5s: Clean, perfectly still final hold
 */
export default function CinematicSVLogo({ className = "w-28 h-28 sm:w-36 sm:h-36", loop = true }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!loop) return;
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4800);
    return () => clearInterval(interval);
  }, [loop]);

  return (
    <div key={key} className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* PHASE 1: Ambient Controlled Energy Build (Glow Aura) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: [0, 0.4, 0.25, 0.35, 0],
          scale: [0.6, 1.05, 1.0, 1.0, 0.95]
        }}
        transition={{
          duration: 4.5,
          times: [0, 0.12, 0.45, 0.85, 1],
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-full blur-2xl pointer-events-none"
      />

      {/* Container for Materialization */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* PHASE 2 & 4: Exact Logo Image Reveal & Settle */}
        <motion.img
          src={svLogoSrc}
          alt="Suchit Vanapilli SV Logo"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{
            opacity: [0, 0, 1, 1, 1, 0],
            scale: [0.985, 0.985, 1.015, 1.0, 1.0, 0.985]
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.1, 0.35, 0.52, 0.88, 1],
            ease: "easeInOut"
          }}
          className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
        />

        {/* PHASE 3: Thin Blue-White Light Sweep Overlay */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["-100%", "150%", "150%"],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4.5,
            times: [0.33, 0.48, 1],
            ease: "easeInOut"
          }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent skew-x-12 pointer-events-none mix-blend-screen"
        />
      </div>
    </div>
  );
}
