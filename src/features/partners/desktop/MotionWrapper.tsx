"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const bezierEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  type?: "fade" | "slide" | "scale";
  isOpen?: boolean;
}

export function MotionFade({
  children,
  delay = 0,
  className = "",
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: bezierEasing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionSlide({
  children,
  delay = 0,
  className = "",
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: bezierEasing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionReveal({
  children,
  isOpen = false,
  className = "",
}: MotionWrapperProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: bezierEasing }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
