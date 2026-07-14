// components/CultureSectionMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  CULTURE_DATA,
  BELIEF_PILLARS,
} from "@/features/about/data/culture-shared";

export function CultureSectionMobile() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section id="our-beliefs" className="py-16 px-5 bg-[#FFFFFF]">
      {/* Editorial Structural Header */}
      <div className="w-full max-w-md mx-auto mb-8">
        <span className="text-[#F97316] font-sans font-semibold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {CULTURE_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#163B65] tracking-tight leading-[1.16]">
          {CULTURE_DATA.sectionTitleFirstLine} <br />
          {CULTURE_DATA.sectionTitleSecondLine}
        </h2>
      </div>

      {/* Floating Ribbons Collection Stack */}
      <div className="w-full max-w-md mx-auto flex flex-col gap-4 font-sans">
        {BELIEF_PILLARS.map((pillar) => {
          const isOpen = activePillar === pillar.id;
          return (
            <motion.div
              key={pillar.id}
              layout
              onClick={() => setActivePillar(isOpen ? null : pillar.id)}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className={`relative cursor-pointer w-full min-h-[64px] border transition-colors duration-300 overflow-hidden select-none group ${
                isOpen
                  ? "bg-[#163B65] border-[#163B65] text-white"
                  : "bg-[#F5F2EC]/40 border-[#163B65]/10 text-[#0F172A]"
              }`}
            >
              {/* Micro-Interactive Top Ribbon Track */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-[#F97316] transition-transform duration-400 origin-left ${
                  isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />

              <div className="p-4 flex flex-col justify-center min-h-[64px]">
                {/* Ribbon Master Control Row */}
                <div className="flex justify-between items-center gap-4 select-none">
                  <div className="flex items-baseline gap-x-3">
                    <span className="font-serif text-[11px] font-bold text-[#F97316] tracking-widest">
                      {pillar.num}
                    </span>
                    <h3
                      className={`font-serif text-lg font-bold tracking-tight ${isOpen ? "text-white" : "text-[#163B65]"}`}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#F97316] text-white rotate-90"
                        : "bg-[#163B65]/5 text-[#163B65] group-hover:bg-[#163B65] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3 h-3" />
                    ) : (
                      <Plus className="w-3 h-3" />
                    )}
                  </div>
                </div>

                {/* Ribbon Content Expansion Space */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, x: -8 }}
                      animate={{ opacity: 1, height: "auto", x: 0 }}
                      exit={{ opacity: 0, height: 0, x: -8 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-xs sm:text-sm leading-relaxed space-y-3 relative max-h-[180px] overflow-y-auto pr-1 scrollbar-none">
                        <p
                          className={`font-medium ${isOpen ? "text-[#F5F2EC]" : "text-[#0F172A]"}`}
                        >
                          {pillar.excerpt}
                        </p>
                        <p
                          className={`${isOpen ? "text-[#F5F2EC]/80" : "text-[#475569]/90"}`}
                        >
                          {pillar.extended}
                        </p>

                        {/* Spatial Gradient Falloff Overlay */}
                        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#163B65] to-transparent pointer-events-none" />
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
