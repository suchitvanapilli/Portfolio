import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * FadeInLogo Component
 * Instant Zero-Delay Fade-In (starts on frame 1 with 'W', reaches 100% clarity at 'e' in "Welcome").
 * 
 * Includes 1-minute fadeout and immediate refade-in loop.
 */
export default function FadeInLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  const [fadeState, setFadeState] = useState("fade-in"); // "fade-in" | "hold" | "fade-out"

  useEffect(() => {
    // Hold for 60 seconds after initial entrance, then fade out & refade in
    const holdTimer = setTimeout(() => {
      setFadeState("fade-out");
    }, 60000);

    return () => clearTimeout(holdTimer);
  }, []);

  const handleAnimationComplete = () => {
    if (fadeState === "fade-out") {
      // Immediately refade in
      setFadeState("fade-in");
      // Reset 60-second timer
      setTimeout(() => {
        setFadeState("fade-out");
      }, 60000);
    }
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient Blue Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeState === "fade-out" ? 0 : 0.35 }}
        transition={{
          duration: fadeState === "fade-out" ? 0.6 : 0.35,
          ease: "easeOut"
        }}
        className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Exact Uploaded High-Res SV Logo Image */}
      <motion.img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeState === "fade-out" ? 0 : 1 }}
        transition={{
          duration: fadeState === "fade-out" ? 0.6 : 0.35,
          ease: "easeOut"
        }}
        onAnimationComplete={handleAnimationComplete}
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
