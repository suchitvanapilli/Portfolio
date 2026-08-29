import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * ProgressiveStrokeLogo Component
 * Progressive Stroke Vector Reveal Animation for Suchit Vanapilli's SV Logo.
 * 
 * Uses animated SVG centerline path strokes as a progressive MASK over the exact 
 * high-res logo image. Unveils the actual thick white logo letters in real time:
 * - 0.2s - 1.3s: Progressive stroke reveal of 'S' letter
 * - 1.3s - 2.0s: Progressive stroke reveal of 'V' letter
 * - 2.0s - 2.3s: Progressive stroke reveal of blue accent line
 * - 2.3s - 4.5s: 100% full lock & pristine still hold
 */
export default function ProgressiveStrokeLogo({ className = "w-28 h-28 sm:w-36 sm:h-36", loop = true }) {
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
      <svg
        viewBox="0 0 1000 667"
        className="w-full h-full object-contain overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Progressive Stroke Mask */}
          <mask id="progressiveStrokeMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="667">
            <rect x="0" y="0" width="1000" height="667" fill="black" />

            {/* 1. Progressive Stroke Reveal for 'S' (0.2s - 1.3s) */}
            <motion.path
              d="M 440 310 C 440 170 250 170 250 310 C 250 450 440 450 440 580 C 440 650 310 650 250 580"
              stroke="white"
              strokeWidth="85"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 4.8,
                times: [0, 0.04, 0.27, 0.90, 1],
                ease: "easeInOut"
              }}
            />

            {/* 2. Progressive Stroke Reveal for 'V' (1.3s - 2.0s) */}
            <motion.path
              d="M 440 280 L 620 635 L 890 120"
              stroke="white"
              strokeWidth="85"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 4.8,
                times: [0, 0.27, 0.42, 0.90, 1],
                ease: "easeInOut"
              }}
            />

            {/* 3. Progressive Stroke Reveal for Blue Accent (2.0s - 2.3s) */}
            <motion.path
              d="M 460 295 L 620 595"
              stroke="white"
              strokeWidth="50"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0, 1, 1, 0] }}
              transition={{
                duration: 4.8,
                times: [0, 0.42, 0.48, 0.90, 1],
                ease: "easeOut"
              }}
            />
          </mask>
        </defs>

        {/* The Exact Original Logo Image unveiled progressively through the SVG stroke mask! */}
        <image
          href={svLogoSrc}
          x="0"
          y="0"
          width="1000"
          height="667"
          mask="url(#progressiveStrokeMask)"
        />
      </svg>

      {/* 4. Complete Final Lock & Still Hold (100% Identical to Original Uploaded Image) */}
      <motion.img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 0]
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.48, 0.54, 0.90, 1],
          ease: "easeInOut"
        }}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_14px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
