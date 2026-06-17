"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-white overflow-hidden pt-20 px-4 sm:px-8 lg:px-16 select-none"
    >
      {/* Immersive Background Watermark */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <span className="text-[24vw] font-bold text-[#F5F5F5] tracking-tight leading-none uppercase">
          EST. 2009
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-8 flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-luxury-meta tracking-[0.3em] text-[#E65100] block">
              OUR GENESIS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-luxury-heading font-light tracking-tight text-[#111111] leading-[1.15]">
              Think Beyond <br />
              <span className="font-normal italic text-[#1F4D45]">Metro.</span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-[#555555] font-light max-w-xl leading-relaxed tracking-wide">
            From a single 900 sq ft store in Sirsa to becoming North India's
            leading fashion retail group with 27+ stores across 7 states. We
            bridge the gap between luxury curation and sub-metro accessibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
