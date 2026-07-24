// components/AboutHeroDesktop.tsx
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
      className="relative min-h-screen flex flex-col justify-between bg-card-bg overflow-hidden pt-36 pb-12"
    >
      {/* Full Image Background - No overlay effect */}
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
        {/* Removed the white/backdrop overlay entirely */}
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 my-auto">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-12 items-start"
        >
          <div className="col-span-10">
            <motion.span
              variants={textRevealVariants}
              className="text-accent font-sans font-bold tracking-[0.25em] text-xs sm:text-sm uppercase block mb-6"
            >
              {HERO_DATA.label}
            </motion.span>

            <motion.h1
              variants={textRevealVariants}
              className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary tracking-tight leading-[1.08] mb-10 text-balance"
            >
              {HERO_DATA.headlineFirstLine} <br />
              {HERO_DATA.headlineSecondLine} <br />
              {HERO_DATA.headlineThirdLine}
            </motion.h1>
          </div>

          <div className="col-span-8 grid grid-cols-12 gap-4">
            <motion.div variants={textRevealVariants} className="col-span-11">
              <p className="font-sans text-text-primary text-lg lg:text-xl leading-relaxed font-medium tracking-wide text-balance">
                {HERO_DATA.supportingParagraph}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* High-Contrast Footer Bar */}
      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 border-t-2 border-border-main pt-6 mt-12 flex justify-between items-center">
        <span className="font-sans text-xs uppercase tracking-widest text-text-primary font-bold">
          {HERO_DATA.footerMeta}
        </span>

        <motion.button
          onClick={scrollToNext}
          whileHover={{ y: 3 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-x-2.5 font-sans text-xs font-bold uppercase tracking-widest text-text-primary hover:text-accent transition-colors duration-300 group bg-card-bg px-4 py-2 border border-border-main hover:border-primary shadow-sm"
        >
          <span>{HERO_DATA.ctaText}</span>
          <ArrowDown className="w-4 h-4 text-accent group-hover:translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
