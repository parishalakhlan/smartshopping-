"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigationConfig } from "@/config/navigation";

export const NavbarLinks = memo(function NavbarLinks() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav
      className="hidden lg:flex items-center gap-x-8 px-2"
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
            className="relative py-2 block cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163B65] rounded-sm group"
          >
            {/* Typography Scale: Inter, 15px, Medium, Letter Spacing 0.2px */}
            <motion.span
              animate={{
                color: isActive || isHovered ? "#163B65" : "#0F172A",
                y: isHovered ? -1 : 0,
              }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 block font-sans text-[15px] font-medium tracking-[0.2px]"
            >
              {item.label}
            </motion.span>

            {/* Brand Motif Indicator: Connected Destination (●────) */}
            <div
              className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-[4px] flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              {/* Active Route Indicator */}
              {isActive && (
                <div className="flex items-center justify-center">
                  <motion.span
                    layoutId="smartNavDot"
                    className="w-1.5 h-1.5 rounded-full bg-[#F97316] mr-[2px]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                  <motion.span
                    layoutId="smartNavLine"
                    className="w-5 h-[1px] bg-[#F97316]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                </div>
              )}

              {/* Hover States Layer */}
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mr-[2px]" />
                  <span className="w-5 h-[1px] bg-[#F97316]" />
                </motion.div>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
});
