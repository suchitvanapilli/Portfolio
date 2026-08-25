import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fade-up", // "fade-up", "fade-left", "fade-right", "zoom-in"
  once = true
}) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }

    switch (variant) {
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 }
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 }
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.93 },
          visible: { opacity: 1, scale: 1 }
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 38 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : delay
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
