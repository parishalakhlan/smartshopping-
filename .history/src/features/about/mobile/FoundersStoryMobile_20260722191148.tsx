// components/FoundersStoryMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FOUNDERS_DATA,
  FoundersStoryProps,
} from "@/features/about/data/founders-shared";

export function FoundersStoryMobile({
  imageSrc = FOUNDERS_DATA.defaultImage,
}: FoundersStoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="the-visionaries"
      className="py-16 px-5 bg-surface border-t border-border-main transition-colors duration-300"
    >
      {/* Structural Minimalist Header Block */}
      <div className="w-full max-w-md mx-auto mb-6 font-sans">
        <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {FOUNDERS_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.16]">
          {FOUNDERS_DATA.headline}
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
        {/* Tactile Decorative Border Accent */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[3px] bg-accent transition-transform duration-300 origin-left ${
            isExpanded ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
          }`}
        />

        <div className="p-4 flex flex-col justify-center min-h-[68px]">
          {/* Always Visible Compact Object Summary */}
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Micro Asset Thumbnail */}
              <div className="relative w-10 h-10 shrink-0 overflow-hidden border-2 border-border-main bg-surface">
                <Image
                  src={imageSrc}
                  alt="Founders micro asset"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="font-serif text-base font-bold tracking-tight truncate text-text-primary">
                {isExpanded
                  ? "Closing Vision Archive"
                  : "Reveal Shared Philosophy"}
              </p>
            </div>

            <span className="text-xs font-mono font-extrabold shrink-0 px-2 py-1 bg-surface border border-border-main text-accent">
              {isExpanded ? "—" : "+"}
            </span>
          </div>

          {/* Deep Unfolding Matrix */}
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

                {/* Scaled Immersive Media Canvas Area */}
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
                        src={imageSrc}
                        alt="Vikram Singh and Vinod Kumar portrait"
                        fill
                        sizes="(max-w-md) 100vw"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* High Contrast Scroll Content Zone */}
                <div className="relative max-h-[260px] overflow-y-auto mt-4 pr-1 text-xs leading-relaxed font-sans space-y-4 text-text-primary font-medium scrollbar-none">
                  <p>{FOUNDERS_DATA.p1}</p>

                  <blockquote className="italic font-serif text-sm text-text-primary font-bold tracking-tight border-l-4 border-accent pl-3 py-1 my-3 bg-surface border-y border-r border-border-main">
                    {FOUNDERS_DATA.quote}
                  </blockquote>

                  <p>{FOUNDERS_DATA.expandedP1}</p>
                  <p className="pb-2">{FOUNDERS_DATA.expandedP2}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
