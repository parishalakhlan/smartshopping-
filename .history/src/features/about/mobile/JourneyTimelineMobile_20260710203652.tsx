// components/JourneyTimelineMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JOURNEY_DATA } from "@/features/about/data/journey-shared";

export function JourneyTimelineMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="the-shift" className="py-16 px-5 bg-[#FFFFFF]">
      {/* Structural Editorial Header Block */}
      <div className="w-full max-w-md mx-auto mb-8 font-sans">
        <span className="text-[#F97316] font-semibold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {JOURNEY_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#163B65] tracking-tight leading-[1.16]">
          {JOURNEY_DATA.headlineFirstLine} <br />
          {JOURNEY_DATA.headlineSecondLine}
        </h2>
      </div>

      {/* Interactive Discovery Object: The Timeline Dial */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={`w-full max-w-md mx-auto border cursor-pointer select-none overflow-hidden relative group transition-colors duration-300 ${
          isExpanded
            ? "bg-[#163B65] border-[#163B65] text-white"
            : "bg-[#F5F2EC]/40 border-[#163B65]/10 text-[#0F172A]"
        }`}
      >
        {/* Tactile Micro-Interactive Accent Line */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#F97316] transition-transform duration-300 origin-left ${
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
                className={`w-7 h-7 rounded-full border flex items-center justify-center font-mono text-[9px] font-bold shrink-0 transition-colors duration-300 ${
                  isExpanded
                    ? "border-white/30 bg-white/10 text-[#F97316]"
                    : "border-[#163B65]/20 bg-[#FFFFFF] text-[#163B65]"
                }`}
              >
                t°
              </motion.div>

              <p
                className={`font-serif text-base font-bold tracking-tight truncate ${isExpanded ? "text-white" : "text-[#163B65]"}`}
              >
                {isExpanded
                  ? "Closing Chronology Dial"
                  : "Explore Chronological Shift"}
              </p>
            </div>

            <span
              className={`text-xs font-mono font-bold shrink-0 pr-1 ${isExpanded ? "text-[#F97316]" : "text-[#163B65]/40"}`}
            >
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
                {/* Horizontal Self-Drawing Mask Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeInOut" }}
                  className={`w-full h-[1px] mt-4 origin-left ${isExpanded ? "bg-white/20" : "bg-[#163B65]/10"}`}
                />

                {/* Immersive Micro-Scale Graphic Box */}
                <div className="relative w-full mt-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#163B65]/5 border border-white/10">
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
                        className="object-cover grayscale contrast-[1.03] brightness-[0.88]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/50 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </div>

                {/* Custom Narrative Viewport Frame with Gradient Fading */}
                <div className="relative max-h-[220px] overflow-y-auto mt-4 pr-1 text-xs sm:text-sm leading-relaxed font-sans space-y-4 text-white/90 scrollbar-none">
                  <p>{JOURNEY_DATA.paragraph1}</p>

                  <p className="text-[#F97316] font-medium font-serif italic text-base tracking-tight border-l border-[#F97316] pl-3 py-0.5 my-2">
                    {JOURNEY_DATA.paragraph2Highlight}
                  </p>

                  <p className="text-white/70 pb-4">
                    {JOURNEY_DATA.paragraph3}
                  </p>

                  {/* Anti-Fatigue Gradient Edge falloff overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#163B65] to-transparent pointer-events-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
