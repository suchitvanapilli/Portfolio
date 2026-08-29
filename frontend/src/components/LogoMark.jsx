import React from "react";
import { motion } from "framer-motion";
import brandLogo from "../assets/brand-logo.png";

/**
 * LogoMark Component
 * Renders the clean SV logo mark with a smooth fade-in animation.
 */
export default function LogoMark({ className = "w-8 h-8" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden ${className}`}>
      <motion.img
        src={brandLogo}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
}
