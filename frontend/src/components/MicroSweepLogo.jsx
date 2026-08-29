import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * MicroSweepLogo Component
 * Clean, Static Original SV Logo with a Subtle Micro Light Sweep.
 * 
 * Features:
 * - 100% exact high-res original logo image (zero shape distortion, zero drawing lines).
 * - Ultra-clean micro light sweep highlight passing smoothly across the logo.
 * - Subtle ambient blue aura (#2563eb).
 */
export default function MicroSweepLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* 1. Ambient Blue Glow Aura */}
      <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* 2. Pristine Exact Original High-Res Logo Image */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={svLogoSrc}
          alt="Suchit Vanapilli SV Logo"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
        />

        {/* 3. Micro Light Sweep Highlight Overlay */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["-100%", "-100%", "150%", "150%"],
            opacity: [0, 0, 0.65, 0]
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.15, 0.45, 0.50],
            repeat: Infinity,
            repeatDelay: 0,
            ease: "easeInOut"
          }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent skew-x-12 pointer-events-none mix-blend-screen"
        />
      </div>
    </div>
  );
}
