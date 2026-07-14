// components/FoundersStoryMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  FOUNDERS_DATA,
  FoundersStoryProps,
} from "@/features/about/data/founders-shared";

export function FoundersStoryMobile({
  imageSrc = FOUNDERS_DATA.defaultImage,
}: FoundersStoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="the-visionaries" className="py-16 px-5 bg-[#F5F2EC]">
      {/* Structural Minimalist Header Block */}
      <div className="w-full max-w-md mx-auto mb-8 font-sans">
        <span className="text-[#F97316] font-semibold tracking-[0.2em] text-[10px] uppercase block mb-2">
          {FOUNDERS_DATA.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#163B65] tracking-tight leading-[1.16]">
          {FOUNDERS_DATA.headline}
        </h2>
      </div>

      {/* Interactive Discovery Object: The Book Spine */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={`w-full max-w-md mx-auto border cursor-pointer select-none overflow-hidden relative group transition-colors duration-300 ${
          isExpanded
            ? "bg-[#163B65] border-[#163B65] text-white"
            : "bg-[#FFFFFF] border-[#163B65]/10 text-[#0F172A]"
        }`}
      >
        {/* Tactile Decorative Border Accent */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#F97316] transition-transform duration-300 origin-left ${
            isExpanded ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
          }`}
        />

        <div className="p-4 flex flex-col justify-center min-h-[68px]">
          {/* Always Visible Compact Object Summary */}
          <div className="w-full flex justify-between items-center gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Partial Image Crop / Book Spine Thumbnail */}
              <div className="relative w-9 h-9 shrink-0 overflow-hidden bg-[#163B65]/10 border border-[#163B65]/5">
                <Image
                  src={imageSrc}
                  alt="Founders micro asset"
                  fill
                  className="object-cover grayscale position-center"
                />
              </div>
              <p
                className={`font-serif text-base font-bold tracking-tight truncate ${isExpanded ? "text-white" : "text-[#163B65]"}`}
              >
                {isExpanded
                  ? "Closing Vision Archive"
                  : "Reveal Shared Philosophy"}
              </p>
            </div>

            <span
              className={`text-xs font-mono font-bold shrink-0 pr-1 ${isExpanded ? "text-[#F97316]" : "text-[#163B65]/40"}`}
            >
              {isExpanded ? "—" : "+"}
            </span>
          </div>

          {/* Book Spine Deep Unfolding Matrix */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden origin-top"
              >
                {/* Self-Drawing Dynamic Divider Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeInOut" }}
                  className={`w-full h-[1px] mt-4 origin-left ${isExpanded ? "bg-white/20" : "bg-[#163B65]/10"}`}
                />

                {/* Scaled Immersive Media Canvas Area */}
                <div className="relative w-full mt-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#163B65]/5 border border-white/10">
                    <motion.div
                      initial={{ scale: 0.96, filter: "brightness(0.8)" }}
                      animate={{ scale: 1, filter: "brightness(0.95)" }}
                      exit={{ scale: 0.96, filter: "brightness(0.8)" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={imageSrc}
                        alt="Vikram Singh and Vinod Kumar portrait"
                        fill
                        sizes="(max-w-md) 100vw"
                        className="object-cover grayscale contrast-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/40 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </div>

                {/* Intelligent Scroll Protection Content Zone */}
                <div className="relative max-h-[220px] overflow-y-auto mt-4 pr-1 text-xs leading-relaxed font-sans space-y-4 text-white/90 scrollbar-none">
                  <p>{FOUNDERS_DATA.p1}</p>

                  <p className="italic font-serif text-base text-[#F5F2EC] font-semibold tracking-tight border-l-2 border-[#F97316] pl-3 py-0.5 my-3">
                    {FOUNDERS_DATA.quote}
                  </p>

                  <p className="text-white/80">{FOUNDERS_DATA.expandedP1}</p>
                  <p className="text-white/80 pb-4">
                    {FOUNDERS_DATA.expandedP2}
                  </p>

                  {/* Gradient Falloff Overlay to Mask Edge */}
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
