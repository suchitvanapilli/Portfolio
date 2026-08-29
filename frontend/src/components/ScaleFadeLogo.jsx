import React from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * ScaleFadeLogo Component
 * Premium Apple-Style Scale + Fade Entrance Animation for Suchit Vanapilli's SV Logo.
 * 
 * Features:
 * - 100% exact high-res original logo image (zero shape distortion, zero line drawing).
 * - Smooth cubic-bezier scale-in (0.92 -> 1.0) & opacity fade (0 -> 1).
 * - Soft ambient blue aura (#2563eb).
 */
export default function ScaleFadeLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* 1. Ambient Blue Glow Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: [0, 0.4, 0.25], scale: [0.85, 1.05, 1.0] }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* 2. Pristine Exact Original High-Res Logo Image with Scale + Fade */}
      <motion.img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
