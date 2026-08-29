import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * FadeInLogo Component
 * Instant Logo Appearance with 1-Minute Fade-Out & Immediate Re-Fade-In Loop.
 * 
 * Timeline:
 * - 0.0s: Appears INSTANTLY (0s fade-in time, opacity: 1) as welcome text starts
 * - 0.0s - 60.0s: Holds fully visible for 1 minute (100% sharp & still)
 * - 60.0s - 61.0s: Smooth fade-out (opacity: 1 -> 0)
 * - 61.0s - 61.4s: Immediately re-appears / re-fades in (opacity: 0 -> 1) and repeats loop
 */
export default function FadeInLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient Blue Background Glow */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{
          opacity: [0.35, 0.35, 0, 0.35]
        }}
        transition={{
          duration: 61.4,
          times: [0, 60 / 61.4, 61 / 61.4, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Exact Uploaded High-Res SV Logo Image */}
      <motion.img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 1, 0, 1]
        }}
        transition={{
          duration: 61.4,
          times: [0, 60 / 61.4, 61 / 61.4, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
