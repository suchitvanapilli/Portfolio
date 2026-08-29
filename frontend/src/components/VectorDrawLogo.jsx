import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * VectorDrawLogo Component (Simple Architectural Logo Animation)
 * 
 * Minimal, clean architectural animation for Suchit Vanapilli's exact SV logo.
 * Features a structural scale & rise entrance, subtle blue shimmer sweep, and ambient glow.
 */
export default function VectorDrawLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* 1. Ambient Architectural Blue Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 0.4, 0.25], scale: [0.9, 1.05, 1.0] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* 2. Structural Unfolding Container */}
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        {/* Exact Original High-Res SV Logo Image */}
        <img
          src={svLogoSrc}
          alt="Suchit Vanapilli SV Logo"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
        />

        {/* 3. Subtle Architectural Shimmer Sweep */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: ["-100%", "150%", "150%"], opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12 pointer-events-none mix-blend-screen"
        />
      </motion.div>
    </div>
  );
}
