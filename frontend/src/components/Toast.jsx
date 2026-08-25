import React, { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-xl shadow-xl border border-slate-800 text-xs sm:text-sm font-medium"
        >
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{message}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
