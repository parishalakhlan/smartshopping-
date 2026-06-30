"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface MagneticButtonDesktopProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButtonDesktop: React.FC<MagneticButtonDesktopProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative rounded-none font-medium uppercase text-xs tracking-widest transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};
