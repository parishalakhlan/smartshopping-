"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="brand-invitation"
      className="py-28 sm:py-36 bg-[#163B65] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
    >
      {/* Premium Finish Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Core Layout Framing */}
        <div className="space-y-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#F97316] block uppercase">
            AN OPEN INVITATION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15]">
            Fashion Belongs Everywhere.
          </h2>
        </div>

        {/* Narrative Requirement Copy */}
        <p className="font-sans text-base sm:text-lg text-white/80 font-normal max-w-2xl mx-auto leading-relaxed whitespace-normal break-words">
          Discover the brands, experiences, and communities that continue
          shaping the Smart Shopping story.
        </p>

        {/* Dual Button Layout Alignment */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto w-full font-sans">
          <motion.a
            href="#explore-brands"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold tracking-widest px-8 transition-colors duration-300 uppercase shrink-0"
          >
            <span>Explore Brands</span>
          </motion.a>

          <motion.a
            href="#find-store"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white text-xs font-bold tracking-widest px-8 transition-colors duration-300 uppercase gap-2 shrink-0"
          >
            <span>Find A Store</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] opacity-80" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
