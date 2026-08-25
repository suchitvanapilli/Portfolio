import React from "react";
import brandLogo from "../assets/brand-logo.png";

export default function LogoMark({ className = "w-8 h-8", animated = false }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl ${className}`}>
      <img
        src={brandLogo}
        alt="Suchit Vanapilli SV Logo"
        className={`w-full h-full object-contain ${animated ? "animate-pulse" : ""}`}
      />
    </div>
  );
}
