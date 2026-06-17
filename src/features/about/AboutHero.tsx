"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth, subtle vertical tracking for the background timeline typography
  const yearY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-20 px-4 sm:px-8 lg:px-16"
    >
      {/* Soft atmospheric background depth gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(248,250,252,0.8))] pointer-events-none z-0" />

      {/* 
        Massive Campaign Year Watermark
        Perfectly centered, text colored with a light 5% opacity royal blue tint.
      */}
      <motion.div
        style={{ y: yearY }}
        className="absolute inset-x-0 top-1/4 sm:top-1/3 flex items-center justify-center pointer-events-none z-0 select-none text-center"
      >
        <span className="text-[30vw] font-serif font-black text-[#163B65]/5 leading-none tracking-tighter block uppercase">
          2009
        </span>
      </motion.div>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-12"
        >
          {/* Top Row: Meta Badge & Editorial Heading */}
          <div className="flex flex-col items-start space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-[#163B65]/20 bg-[#163B65]/5 px-4 py-1.5 font-sans text-xs tracking-[0.15em] font-medium uppercase text-[#163B65]">
              <span className="w-1.5 h-1.5 bg-[#F97316] animate-pulse rounded-full" />
              ESTABLISHED MILESTONE
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight text-[#0F172A] leading-[0.95] uppercase">
              THINK BEYOND <br />
              <span className="font-normal italic text-[#163B65] bg-gradient-to-r from-[#163B65] to-[#F97316] bg-clip-text text-transparent">
                METRO.
              </span>
            </h1>
          </div>

          {/* Minimal dividing accent layout bar */}
          <div className="w-24 h-[2px] bg-[#163B65]/30" />

          {/* Asymmetric Descriptive Layout Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
            {/* Left Main Pillar */}
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl text-[#475569] font-light leading-relaxed tracking-wide">
                From a single{" "}
                <span className="font-normal text-[#0F172A] underline decoration-[#F97316] decoration-2 underline-offset-4">
                  900 sq ft storefront in Sirsa
                </span>{" "}
                to anchoring North India's benchmark multi-brand ecosystem. We
                map premium international design arrays onto Tier 2 and Tier 3
                city corridors.
              </p>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 flex flex-col space-y-4 border-l border-[#163B65]/10 pl-6 lg:pl-8 pt-2">
              <div className="font-sans font-semibold tracking-[0.2em] text-[#F97316] text-xs uppercase">
                LIVE CHRONICLES — NORTHERN EXPANSION
              </div>
              <p className="text-sm text-[#475569] font-light tracking-wide leading-relaxed max-w-md">
                Managing 27+ Flagship environments across 7 unique territories.
                We are building premium infrastructure where deep cultural
                tradition seamlessly meets modern global ambition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
