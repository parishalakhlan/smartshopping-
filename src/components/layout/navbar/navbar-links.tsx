"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationConfig } from "@/config/navigation";

export const NavbarLinks = memo(function NavbarLinks() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      className="hidden lg:flex items-center gap-x-12 px-4"
      aria-label="Main Navigation"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {navigationConfig.map((item, index) => {
        const isActive = pathname === item.href;
        const isHovered = hoveredIndex === index;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onMouseEnter={() => setHoveredIndex(index)}
            className="font-luxury-nav relative py-3 focus-luxury block cursor-pointer select-none"
          >
            {/* Dynamic Progressive Intensity Text Layer */}
            <motion.span
              animate={{
                color: isActive || isHovered ? "#111111" : "#555555",
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative z-10 block"
            >
              {item.label}
            </motion.span>

            {/* Active Anchor Dot Indicator */}
            {isActive && (
              <motion.span
                layoutId="luxuryActiveDot"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E65100]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            {/* Sliding Premium Terracotta Slider Underline */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  layoutId="luxuryNavIndicator"
                  initial={{ opacity: 0, scaleX: 0.9 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28,
                    mass: 0.5,
                  }}
                  className="absolute bottom-[2px] left-0 right-0 h-[2px] bg-[#E65100] z-0 origin-center"
                />
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </nav>
  );
});
