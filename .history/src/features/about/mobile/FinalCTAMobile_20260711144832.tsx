// components/FinalCTAMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTA_DATA } from "@/features/about/data/cta-shared";

export function FinalCTAMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="brand-invitation"
      className="py-12 bg-navbar-active text-white px-5 relative overflow-hidden"
    >
      {/* Premium Finish Radial Ambient Blend Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10" />

      {/* Interactive Discovery Object Container */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={`w-full max-w-md mx-auto border cursor-pointer select-none overflow-hidden relative group transition-colors duration-300 ${
          isExpanded
            ? "bg-navbar-active/90 border-white/20"
            : "bg-navbar-active/40 border-white/10"
        }`}
      >
        {/* Tactile Micro-Interactive Accent Highlight */}
        <div className="absolute top-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />

        <div className="p-5 flex flex-col justify-center min-h-[72px]">
          {/* Always Visible Lead Object Header */}
          <div className="w-full flex justify-between items-center gap-4">
            <div className="space-y-0.5">
              <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-accent block uppercase">
                {CTA_DATA.sectionLabel}
              </span>
              <h2 className="font-serif text-lg text-white font-bold tracking-tight">
                {CTA_DATA.headline}
              </h2>
            </div>

            <span className="text-xs font-mono font-bold shrink-0 text-accent pr-1">
              {isExpanded ? "—" : "+"}
            </span>
          </div>

          {/* Editorial Fold Deep Content Reveal */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden origin-top"
              >
                {/* Self-Drawing Visual Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeInOut" }}
                  className="w-full h-[1px] bg-white/10 mt-4 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.3 }}
                  className="font-sans text-xs sm:text-sm text-white/80 font-normal leading-relaxed mt-4 max-w-xs"
                >
                  {CTA_DATA.supportingParagraph}
                </motion.p>

                {/* Tactile Micro-Interaction Action Touch Targets */}
                <div className="flex flex-col gap-2.5 pt-5 pb-1 w-full font-sans">
                  <a
                    href={CTA_DATA.primaryBtnHref}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full h-11 inline-flex items-center justify-center bg-button-secondary-bg active:bg-accent-hover text-button-secondary-text text-[11px] font-bold tracking-widest transition-colors duration-200 uppercase"
                  >
                    <span>{CTA_DATA.primaryBtnText}</span>
                  </a>

                  <a
                    href={CTA_DATA.secondaryBtnHref}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full h-11 inline-flex items-center justify-center bg-transparent active:bg-white/5 text-white border border-white/20 active:border-white text-[11px] font-bold tracking-widest transition-colors duration-200 uppercase gap-1.5"
                  >
                    <span>{CTA_DATA.secondaryBtnText}</span>
                    <ArrowUpRight className="w-3 h-3 stroke-[2] opacity-70" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
