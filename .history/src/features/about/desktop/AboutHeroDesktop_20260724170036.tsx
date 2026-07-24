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
      className="relative min-h-screen flex flex-col justify-between bg-surface overflow-hidden pt-32 pb-10 transition-colors duration-300"
    >
      {/* Full Background Night Photo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={HERO_DATA.backdropImage}
          alt="High fashion fabrics architectural display"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle radial scrim to maintain background texture while preserving foreground readability */}
        <div className="absolute inset-0 bg-background-main/40 mix-blend-multiply" />
      </div>

      {/* Main Content Area - High-Contrast Floating Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10 my-auto">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="bg-surface/90 backdrop-blur-md border-2 border-border-main shadow-2xl p-8 sm:p-12 md:p-16 max-w-5xl"
        >
          <div className="space-y-6">
            <motion.div variants={textRevealVariants} className="inline-block">
              <span className="text-accent bg-card-bg border-2 border-border-main font-sans font-extrabold tracking-[0.25em] text-xs sm:text-sm uppercase px-3.5 py-1.5 shadow-sm inline-block">
                {HERO_DATA.label}
              </span>
            </motion.div>

            <motion.h1
              variants={textRevealVariants}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-text-primary tracking-tight leading-[1.05] text-balance drop-shadow-sm"
            >
              {HERO_DATA.headlineFirstLine} <br />
              <span className="text-accent">
                {HERO_DATA.headlineSecondLine}
              </span>{" "}
              <br />
              {HERO_DATA.headlineThirdLine}
            </motion.h1>

            <motion.div
              variants={textRevealVariants}
              className="pt-4 max-w-3xl"
            >
              <div className="bg-card-bg/90 border-2 border-border-main border-l-4 border-l-accent p-6 shadow-sm">
                <p className="font-sans text-text-primary text-base sm:text-lg lg:text-xl leading-relaxed font-semibold tracking-wide text-balance">
                  {HERO_DATA.supportingParagraph}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* High-Contrast Footer Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10 mt-12">
        <div className="bg-surface border-2 border-border-main p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-accent rounded-none inline-block animate-pulse" />
            <span className="font-sans text-xs uppercase tracking-widest text-text-primary font-extrabold">
              {HERO_DATA.footerMeta}
            </span>
          </div>

          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-x-3 font-sans text-xs font-extrabold uppercase tracking-widest bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text border-2 border-border-main hover:border-accent px-6 py-3 shadow-md transition-all duration-300 group cursor-pointer active:scale-95"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowDown className="w-4 h-4 text-accent group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
