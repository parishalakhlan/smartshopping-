// components/FinalCTADesktop.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTA_DATA } from "@/features/about/data/cta-shared";

export function FinalCTADesktop() {
  return (
    <section
      id="brand-invitation"
      className="py-36 bg-[#163B65] text-white px-8 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="space-y-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#F97316] block uppercase">
            {CTA_DATA.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15]">
            {CTA_DATA.headline}
          </h2>
        </div>

        <p className="font-sans text-lg text-white/80 font-normal max-w-2xl mx-auto leading-relaxed">
          {CTA_DATA.supportingParagraph}
        </p>

        {/* Dual Inline Button Alignment */}
        <div className="flex items-center justify-center gap-4 pt-4 max-w-md mx-auto w-full font-sans">
          <motion.a
            href={CTA_DATA.primaryBtnHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-auto h-12 inline-flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold tracking-widest px-8 transition-colors duration-300 uppercase shrink-0"
          >
            <span>{CTA_DATA.primaryBtnText}</span>
          </motion.a>

          <motion.a
            href={CTA_DATA.secondaryBtnHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-auto h-12 inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white text-xs font-bold tracking-widest px-8 transition-colors duration-300 uppercase gap-2 shrink-0"
          >
            <span>{CTA_DATA.secondaryBtnText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] opacity-80" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
