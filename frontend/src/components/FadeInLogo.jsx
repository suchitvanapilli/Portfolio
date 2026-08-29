import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * FadeInLogo Component
 * Synchronized Fade-In (starts simultaneously with typewriter welcome text).
 * 
 * Timeline:
 * - 0.0s - 1.2s: Fades in smoothly simultaneously as typewriter text starts (opacity: 0 -> 1)
 * - 1.2s - 61.2s: Holds fully visible for 1 minute (100% sharp & still)
 * - 61.2s - 62.2s: Smooth fade-out (opacity: 1 -> 0)
 * - 62.2s - 63.4s: Immediately re-fades in (opacity: 0 -> 1) and repeats loop
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
          duration: 63.4,
          times: [0, 1.2 / 63.4, 61.2 / 63.4, 62.2 / 63.4, 1],
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
          duration: 63.4,
          times: [0, 1.2 / 63.4, 61.2 / 63.4, 62.2 / 63.4, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
