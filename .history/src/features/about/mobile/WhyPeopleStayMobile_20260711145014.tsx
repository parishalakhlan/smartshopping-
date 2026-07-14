// components/WhyPeopleStayMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RETENTION_DATA } from "@/features/about/data/retention-shared";

export function WhyPeopleStayMobile() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="workspace-culture-mobile"
      className="py-12 px-6 bg-background-main md:hidden min-h-[80vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Structural Minimalist Header Block */}
      <div className="w-full max-w-sm mx-auto mb-10 font-sans select-none">
        <span className="text-accent font-semibold tracking-[0.25em] text-[9px] uppercase block mb-1 opacity-90">
          {RETENTION_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight leading-tight">
          {RETENTION_DATA.headlineLine1}
        </h2>
      </div>

      {/* Design M: Timeline Dial Discovery Interface */}
      <div className="w-full max-w-sm mx-auto flex flex-col gap-2 relative">
        {RETENTION_DATA.retentionFields.map((item, idx) => {
          const isSelected = activeIdx === idx;
          const isAnySelected = activeIdx !== null;

          return (
            <motion.div
              key={item.num}
              layout="position"
              onClick={() => setActiveIdx(isSelected ? null : idx)}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              style={{
                transformOrigin: "left center",
              }}
              className={`w-full relative overflow-hidden cursor-pointer select-none border-b border-border-main transition-all duration-500 ${
                isSelected
                  ? "bg-navbar-active text-white rounded-lg shadow-xl border-none z-20"
                  : isAnySelected
                    ? "opacity-30 scale-[0.97] blur-[0.3px] z-10 bg-transparent"
                    : "bg-transparent z-10"
              }`}
            >
              {/* Tactile Micro-Interactive Accent Tracker */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] bg-accent transition-transform duration-400 ease-out ${
                  isSelected ? "scale-y-100" : "scale-y-0"
                }`}
              />

              <div className="p-4 flex flex-col justify-center min-h-[60px]">
                {/* Discovery Strip Row */}
                <div className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    {/* Chrono Timeline Dial Unit */}
                    <motion.div
                      animate={{
                        rotate: isSelected ? 90 : 0,
                        scale: isSelected ? 1.05 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                      }}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[9px] font-bold shrink-0 transition-colors duration-300 ${
                        isSelected
                          ? "border-white/30 bg-white/10 text-accent"
                          : "border-border-main bg-background-secondary text-text-primary"
                      }`}
                    >
                      {item.num}
                    </motion.div>

                    <div className="flex flex-col overflow-hidden leading-tight">
                      <span
                        className={`text-[7px] font-mono tracking-widest uppercase font-bold tracking-wider ${
                          isSelected
                            ? "text-white/40"
                            : "text-text-secondary/50"
                        }`}
                      >
                        {item.label}
                      </span>
                      <p
                        className={`font-sans text-xs font-bold tracking-tight uppercase transition-colors duration-300 ${
                          isSelected ? "text-white" : "text-text-primary"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Micro Icon Feedback */}
                  <span
                    className={`text-xs font-mono font-light transition-colors duration-300 ${
                      isSelected ? "text-accent" : "text-text-primary/30"
                    }`}
                  >
                    {isSelected ? "—" : "+"}
                  </span>
                </div>

                {/* Editorial Fold Reveal Block */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -4 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Self-Drawing Horizontal Vector */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.05,
                          ease: "easeInOut",
                        }}
                        className="w-full h-[1px] mt-4 origin-left bg-white/10"
                      />

                      {/* Content Sheet Window */}
                      <div className="relative mt-4 max-h-[150px] overflow-y-auto pr-1 text-[11px] leading-relaxed font-sans font-normal text-white/80 scrollbar-none">
                        <p className="pb-3 whitespace-normal break-words tracking-wide">
                          {item.story}
                        </p>

                        {/* Fallback Fade Shadow overlay for lengthy copy */}
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
