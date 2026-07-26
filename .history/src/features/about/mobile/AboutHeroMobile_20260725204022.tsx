// components/AboutHeroMobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import {
  HERO_DATA,
  titleContainerVariants,
  textRevealVariants,
} from "@/features/about/data/about-shared";

export function AboutHeroMobile() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("the-challenge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about-hero"
      className="relative w-full bg-surface pt-24 pb-8 px-5 flex flex-col justify-between font-sans transition-colors duration-300"
    >
      {/* Top Meta Tag & Headline */}
      <div className="w-full relative z-20">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          <motion.div
            variants={textRevealVariants}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase block">
              {HERO_DATA.label}
            </span>
          </motion.div>

          <motion.h1
            variants={textRevealVariants}
            className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.18]"
          >
            {HERO_DATA.headlineFirstLine} <br />
            {HERO_DATA.headlineSecondLine} <br />
            <span className="italic font-semibold text-accent">
              {HERO_DATA.headlineThirdLine}
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Hero Visual Display */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="w-full mt-6 flex flex-col gap-4"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border-main bg-background-secondary shadow-md">
          {/* Subtle Accent Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-10" />

          <Image
            src={HERO_DATA.backdropImage}
            alt="Editorial showcase frame"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Narrative Narrative Panel */}
        <div className="p-4 bg-background-secondary border-l-2 border-accent border-y border-r border-border-main shadow-sm">
          <p className="text-xs leading-relaxed text-text-secondary font-medium">
            {HERO_DATA.supportingParagraph}
          </p>
        </div>
      </motion.div>

      {/* Action Footer Bar */}
      <div className="w-full border-t border-border-main pt-5 mt-8 flex justify-between items-center z-20">
        <button
          onClick={scrollToNext}
          type="button"
          className="inline-flex items-center gap-x-2 font-sans text-xs font-bold uppercase tracking-widest text-button-primary-text bg-button-primary-bg hover:bg-button-primary-hover active:bg-accent transition-colors px-4 py-2 border border-border-main shadow-sm focus-luxury"
        >
          <span>{HERO_DATA.ctaText}</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent" />
        </button>
      </div>
    </section>
  );
}
