"use client";

import React from "react";
import { motion } from "framer-motion";

export const ApplicationSuccess: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center p-8 py-20 space-y-4 max-w-md mx-auto h-full"
    >
      <div className="w-12 h-12 border border-text-primary flex items-center justify-center mb-2">
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.polyline
            points="3 8 6 11 13 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
          />
        </motion.svg>
      </div>

      <h3 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
        Application Submitted Successfully
      </h3>

      <p className="text-text-secondary text-xs font-normal leading-relaxed">
        Thank you for applying. Our recruitment team will review your
        application and contact you if your profile matches our requirements.
      </p>
    </motion.div>
  );
};
