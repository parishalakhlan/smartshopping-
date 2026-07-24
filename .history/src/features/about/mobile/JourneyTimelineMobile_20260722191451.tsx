// components/JourneyTimelineMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JOURNEY_DATA } from "@/features/about/data/journey-shared";

export function JourneyTimelineMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="the-shift"
      className="py-16 px-5 bg-surface border-t border-border-main transition-colors duration-300"
    >
      {/* Structural Editorial Header Block */}
      <div className="w-full max-w-md mx-auto mb-6 font-sans">
        <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {JOURNEY_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.16]">
          {JOURNEY_DATA.headlineFirstLine} <br />
          {JOURNEY_DATA.headlineSecondLine}
        </h2>
      </div>

      {/* Interactive Discovery Object */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={`w-full max-w-md mx-auto border-2 cursor-pointer select-none overflow-hidden relative group transition-colors duration-300 ${
          isExpanded
            ? "bg-card-bg border-accent text-text-primary shadow-md"
            : "bg-card-bg border-border-main text-text-primary"
        }`}
      >
        {/* Tactile Micro-Interactive Accent Line */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[3px] bg-accent transition-transform duration-300 origin-left ${
            isExpanded ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
          }`}
        />

        <div className="p-4 flex flex-col justify-center min-h-[64px]">
          {/* Always Visible Core Metadata Row */}
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Chrono Rotary Icon Assembly */}
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-7 h-7 rounded-full border-2 border-border-main bg-surface text-accent flex items-center justify-center font-mono text-[9px] font-bold shrink-0"
              >
                t°
              </motion.div>

              <p className="font-serif text-base font-bold tracking-tight truncate text-text-primary">
                {isExpanded
                  ? "Closing Chronology Dial"
                  : "Explore Chronological Shift"}
              </p>
            </div>

            <span className="text-xs font-mono font-extrabold shrink-0 px-2 py-1 bg-surface border border-border-main text-accent">
              {isExpanded ? "—" : "+"}
            </span>
          </div>

          {/* Chronology Deep Content Space */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden origin-top"
              >
                {/* Dynamic Divider Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeInOut" }}
                  className="w-full h-[2px] mt-4 origin-left bg-border-main"
                />

                {/* Full-Color Visual Canvas */}
                <div className="relative w-full mt-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-border-main bg-surface">
                    <motion.div
                      initial={{ scale: 0.96 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.96 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={JOURNEY_DATA.displayImage}
                        alt="Smart Shopping spatial interior experience"
                        fill
                        sizes="(max-w-md) 100vw"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* High-Contrast Scroll Content Zone */}
                <div className="relative max-h-[260px] overflow-y-auto mt-4 pr-1 text-xs sm:text-sm leading-relaxed font-sans space-y-4 text-text-primary font-medium scrollbar-none">
                  <p>{JOURNEY_DATA.paragraph1}</p>

                  <div className="bg-surface p-3.5 border-l-4 border-accent border-y border-r border-border-main">
                    <p className="font-serif italic font-bold text-text-primary text-sm tracking-tight">
                      {JOURNEY_DATA.paragraph2Highlight}
                    </p>
                  </div>

                  <p className="pb-2">{JOURNEY_DATA.paragraph3}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
