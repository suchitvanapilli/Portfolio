import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * FadeInLogo Component
 * Precision Synchronized Fade-In (starts at 'W', completes at last 'e' of "Welcome").
 * 
 * Timing Math:
 * - Typewriter types 1 char every 70ms.
 * - "Welcome" = 7 characters (7 * 70ms = 490ms ~ 0.5s).
 * - 0.0s: Fade-in begins as 'W' starts typing (opacity: 0)
 * - 0.5s: Logo reaches 100% clear visibility right as 'e' in "Welcome" finishes typing (opacity: 1)
 * - 0.5s - 60.5s: Holds fully visible for 1 minute (100% sharp & still)
 * - 60.5s - 61.5s: Smooth fade-out (opacity: 1 -> 0)
 * - 61.5s - 62.0s: Immediately re-fades in over 0.5s and repeats loop
 */
export default function FadeInLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient Blue Background Glow Synchronized with Logo Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.35, 0.35, 0, 0.35]
        }}
        transition={{
          duration: 62.0,
          times: [0, 0.5 / 62.0, 60.5 / 62.0, 61.5 / 62.0, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Exact Uploaded High-Res SV Logo Image */}
      <motion.img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0, 1]
        }}
        transition={{
          duration: 62.0,
          times: [0, 0.5 / 62.0, 60.5 / 62.0, 61.5 / 62.0, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
