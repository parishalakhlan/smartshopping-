// components/CompanyStatsMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IMPACT_DATA,
  IMPACT_NARRATIVES,
} from "@/features/about/data/impact-shared";

export function CompanyStatsMobile() {
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);

  return (
    <section id="the-impact" className="py-16 px-5 bg-background-secondary">
      {/* Editorial Structural Header — Ultra Minimalist Presence */}
      <div className="w-full max-w-md mx-auto mb-8">
        <span className="text-accent font-sans font-semibold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {IMPACT_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.16]">
          {IMPACT_DATA.sectionTitleFirstLine} <br />
          {IMPACT_DATA.sectionTitleSecondLine}
        </h2>
      </div>

      {/* Interactive Editorial Objects Stack */}
      <div className="w-full max-w-md mx-auto flex flex-col gap-3 font-sans">
        {IMPACT_NARRATIVES.map((item, idx) => {
          const isSelected = activeTileIndex === idx;

          return (
            <motion.div
              key={idx}
              layout
              onClick={() => setActiveTileIndex(isSelected ? null : idx)}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className={`relative cursor-pointer w-full min-h-[64px] border transition-colors duration-300 overflow-hidden select-none group ${
                isSelected
                  ? "bg-navbar-active border-navbar-active text-white"
                  : "bg-background-main border-border-main text-text-primary"
              }`}
            >
              {/* Micro-Interactive Edge Highlight */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-accent transition-transform duration-300 origin-left ${
                  isSelected
                    ? "scale-y-100"
                    : "scale-y-0 group-hover:scale-y-100"
                }`}
              />

              <div className="p-4 flex flex-col justify-center min-h-[64px]">
                {/* Always Visible Core Metadata Row */}
                <div className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    {/* Sculptural Number Orb */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isSelected
                          ? "bg-accent text-white scale-105"
                          : "bg-background-secondary text-text-primary group-hover:bg-text-primary group-hover:text-white"
                      }`}
                    >
                      {item.metric}
                    </div>

                    <div className="space-y-0.5">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-widest block opacity-60 ${isSelected ? "text-background-secondary" : "text-text-secondary"}`}
                      >
                        {item.label}
                      </span>
                      <h3
                        className={`font-serif text-base font-bold tracking-tight ${isSelected ? "text-white" : "text-text-primary"}`}
                      >
                        {item.heading}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold shrink-0 pr-1 ${isSelected ? "text-accent" : "text-text-primary/40"}`}
                  >
                    {isSelected ? "—" : "+"}
                  </span>
                </div>

                {/* Tactile Motion Reveal Expansion Panel */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Self-Drawing Animated Divider Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.05,
                          ease: "easeInOut",
                        }}
                        className={`w-full h-[1px] mt-4 origin-left ${isSelected ? "bg-white/20" : "bg-border-main"}`}
                      />

                      {/* Viewport Intelligently Faded Narrative Container */}
                      <div className="relative max-h-[160px] overflow-y-auto mt-4 pr-1 scrollbar-none">
                        <p className="font-sans text-xs sm:text-sm text-background-secondary/90 leading-relaxed font-normal pb-4">
                          {item.story}
                        </p>
                        {/* Elegant Falloff Edge Mask */}
                        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-navbar-active to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
