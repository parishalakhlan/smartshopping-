// components/ValuesWallMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VALUES_DATA } from "@/features/about/data/values-shared";

export function ValuesWallMobile() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="the-pillars-mobile"
      className="py-12 px-6 bg-[#F5F2EC] md:hidden min-h-[85vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Structural Minimalist Header Block - Reduced Footprint */}
      <div className="w-full max-w-sm mx-auto mb-10 font-sans select-none">
        <span className="text-[#F97316] font-semibold tracking-[0.25em] text-[9px] uppercase block mb-1 opacity-90">
          {VALUES_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#163B65] tracking-tight leading-tight">
          {VALUES_DATA.headlineLine1}
        </h2>
      </div>

      {/* Design M: Floating Ribbons Interface */}
      <div className="w-full max-w-sm mx-auto flex flex-col gap-3 relative">
        {VALUES_DATA.pillars.map((pillar, idx) => {
          const isSelected = activeIdx === idx;
          const isAnySelected = activeIdx !== null;

          return (
            <motion.div
              key={pillar.num}
              layout="position"
              onClick={() => setActiveIdx(isSelected ? null : idx)}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              style={{
                clipPath: isSelected
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 98% 0, 100% 100%, 2% 100%)", // Sculptural Asymmetric Cut
              }}
              className={`w-full relative overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out ${
                isSelected
                  ? "bg-[#163B65] text-white z-20 shadow-xl"
                  : isAnySelected
                    ? "bg-[#FFFFFF]/40 opacity-40 scale-[0.97] blur-[0.5px] z-10 border border-[#163B65]/5"
                    : "bg-[#FFFFFF] border border-[#163B65]/5 z-10 hover:bg-[#FFFFFF]/90"
              }`}
            >
              {/* Kinetic Traveling Ribbon Accent */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isSelected ? "0%" : "-100%" }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-y-0 left-0 w-1.5 bg-[#F97316]"
              />

              <div className="p-4 flex flex-col justify-center min-h-[64px]">
                {/* Ribbon Master Strip */}
                <div className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    {/* Micro Numeral Assembly */}
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widest ${
                        isSelected ? "text-[#F97316]" : "text-[#163B65]/40"
                      }`}
                    >
                      {pillar.num}
                    </span>

                    {/* Sliding Typographic Presentation */}
                    <motion.p
                      layout="position"
                      className={`font-sans text-xs font-bold uppercase tracking-wider ${
                        isSelected ? "text-white" : "text-[#163B65]"
                      }`}
                    >
                      {pillar.title}
                    </motion.p>
                  </div>

                  {/* Ribbon Structural Toggle */}
                  <motion.div
                    animate={{
                      rotate: isSelected ? 45 : 0,
                      scale: isSelected ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`font-mono text-xs font-light tracking-tighter ${
                      isSelected ? "text-[#F97316]" : "text-[#163B65]/30"
                    }`}
                  >
                    {isSelected ? "✕" : "↗"}
                  </motion.div>
                </div>

                {/* Ribbon Unfolding Mask Layer */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 4 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="overflow-hidden"
                    >
                      {/* Left-to-Right Self-Drawing Rule */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1,
                          ease: "easeInOut",
                        }}
                        className="w-full h-[1px] mt-4 origin-left bg-white/10"
                      />

                      {/* Internal Height-Protected Viewport */}
                      <div className="relative mt-4 max-h-[140px] overflow-y-auto pr-1 text-[11px] leading-relaxed font-sans font-normal text-white/80 scrollbar-none">
                        <p className="pb-4 whitespace-normal break-words tracking-wide">
                          {pillar.desc}
                        </p>

                        {/* Edge protection gradient for small screens */}
                        <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-t from-[#163B65] to-transparent pointer-events-none" />
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
