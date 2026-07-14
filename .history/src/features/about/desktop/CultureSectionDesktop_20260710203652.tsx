// components/CultureSectionDesktop.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  CULTURE_DATA,
  BELIEF_PILLARS,
} from "@/features/about/data/culture-shared";

export function CultureSectionDesktop() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section
      id="our-beliefs"
      className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Editorial Header Frame */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-4">
            {CULTURE_DATA.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
            {CULTURE_DATA.sectionTitleFirstLine} <br />
            {CULTURE_DATA.sectionTitleSecondLine}
          </h2>
        </div>

        {/* Large Format Accordion Stack */}
        <div className="w-full border-t border-[#163B65]/10 font-sans">
          {BELIEF_PILLARS.map((pillar) => {
            const isOpen = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                className="border-b border-[#163B65]/10 py-8 transition-colors duration-300"
              >
                <div
                  onClick={() => setActivePillar(isOpen ? null : pillar.id)}
                  className="flex justify-between items-center cursor-pointer group gap-6 select-none"
                >
                  <div className="flex items-center gap-x-12">
                    <span className="font-serif text-sm font-bold text-[#F97316] tracking-widest block py-1">
                      {pillar.num}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#163B65] font-bold group-hover:text-[#F97316] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#163B65] group-hover:bg-[#163B65] group-hover:text-white transition-colors duration-300 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden pl-[92px] pr-4 max-w-4xl"
                    >
                      <div className="pt-4 pb-2 text-base sm:text-lg leading-relaxed font-normal space-y-3">
                        <p className="font-medium text-[#0F172A]">
                          {pillar.excerpt}
                        </p>
                        <p className="text-sm sm:text-base text-[#475569]/90">
                          {pillar.extended}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
