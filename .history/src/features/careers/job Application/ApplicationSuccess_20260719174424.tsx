// app/careers/components/ApplicationSuccess.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const ApplicationSuccess: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Minimal Signature Checked Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 100 }}
          className="mb-8 w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-5 h-5 text-neutral-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </motion.div>

        <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-wide text-neutral-900 mb-4">
          Application Submitted Successfully
        </h3>

        <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
          Thank you for applying. Our recruitment team will review your
          application and contact you if your profile matches our requirements.
        </p>
      </div>
    </motion.div>
  );
};
