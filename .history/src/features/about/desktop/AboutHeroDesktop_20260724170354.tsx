"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  HERO_DATA,
  titleContainerVariants,
  textRevealVariants,
} from "@/features/about/data/about-shared";

export function AboutHeroDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("the-challenge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-surface overflow-hidden pt-36 pb-12 font-sans"
    >
      {/* 1. Full-Bleed Night Image with High-Contrast Directional Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={HERO_DATA.backdropImage}
          alt="High fashion fabrics architectural display"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Deep, smooth gradient scrim guaranteeing 100% contrast behind copy */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* 2. Main Hero Content - Solid High-Visibility Typography */}
      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 my-auto">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-12 items-start"
        >
          <div className="col-span-10 lg:col-span-9 space-y-6">
            {/* Bright Category Tag */}
            <motion.div variants={textRevealVariants}>
              <span className="inline-flex items-center gap-2.5 text-accent font-sans font-extrabold tracking-[0.25em] text-xs sm:text-sm uppercase">
                <span className="w-2.5 h-2.5 bg-accent" />
                {HERO_DATA.label}
              </span>
            </motion.div>

            {/* Solid Bold Headline */}
            <motion.h1
              variants={textRevealVariants}
              className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.05] text-balance drop-shadow-lg"
            >
              {HERO_DATA.headlineFirstLine} <br />
              <span className="text-accent">
                {HERO_DATA.headlineSecondLine}
              </span>{" "}
              <br />
              {HERO_DATA.headlineThirdLine}
            </motion.h1>

            {/* Solid Opaque Supporting Paragraph */}
            <motion.div
              variants={textRevealVariants}
              className="pt-2 max-w-2xl"
            >
              <p className="font-sans text-white text-lg lg:text-xl leading-relaxed font-medium tracking-wide text-balance drop-shadow-md">
                {HERO_DATA.supportingParagraph}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3. Crisp High-Contrast Footer Bar */}
      <div className="max-w-7xl mx-auto w-full px-8 relative z-10">
        <div className="border-t border-white/30 pt-6 flex justify-between items-center">
          <span className="font-sans text-xs uppercase tracking-widest text-white font-bold drop-shadow-sm">
            {HERO_DATA.footerMeta}
          </span>

          <motion.button
            onClick={scrollToNext}
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-x-3 font-sans text-xs font-extrabold uppercase tracking-widest text-white hover:text-accent transition-colors duration-300 group cursor-pointer"
          >
            <span className="drop-shadow-sm">{HERO_DATA.ctaText}</span>
            <div className="p-2 rounded-full border-2 border-white/80 group-hover:border-accent bg-black/40 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 text-accent group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
