"use client";

import React from "react";
import { motion } from "framer-motion";

interface MagneticButtonMobileProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButtonMobile: React.FC<MagneticButtonMobileProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      // Strict Master V3 Touch Matrix Compression Model
      whileTap={{
        scale: 0.965,
        backgroundColor: "rgba(249, 115, 22, 0.05)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
      }}
      className={`w-full py-4 px-6 border border-border-main active:border-accent font-sans font-bold uppercase text-xs tracking-widest text-text-primary text-center select-none rounded-none focus:outline-none transition-colors duration-200 ${className}`}
      style={{ minHeight: "48px" }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
