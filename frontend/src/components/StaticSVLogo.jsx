import React from "react";
import svLogoSrc from "../assets/sv-logo-clean.png";

/**
 * StaticSVLogo Component
 * Clean, Static Display of Suchit Vanapilli's exact uploaded SV Logo.
 * Zero animation, zero mask reveals, zero stroke effects.
 */
export default function StaticSVLogo({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Subtle Ambient Blue Aura */}
      <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Pristine Exact Original High-Res SV Logo Image */}
      <img
        src={svLogoSrc}
        alt="Suchit Vanapilli SV Logo"
        className="relative w-full h-full object-contain pointer-events-none drop-shadow-[0_0_16px_rgba(37,99,235,0.35)]"
      />
    </div>
  );
}
