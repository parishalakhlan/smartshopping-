// components/AboutHeroMobile.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  HERO_DATA,
  titleContainerVariants,
  textRevealVariants,
} from "@/features/about/data/about-shared";

export function AboutHeroMobile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToNext = () => {
    const nextSection = document.getElementById("the-challenge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about-hero"
      className="relative w-full bg-background-secondary overflow-hidden pt-24 pb-6 px-5 flex flex-col justify-between font-sans transition-colors duration-300"
    >
      {/* 1. Core Typography Blueprint Frame (Always Visible) */}
      <div className="w-full relative z-20">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          <motion.span
            variants={textRevealVariants}
            className="text-accent font-semibold tracking-[0.2em] text-[10px] uppercase block"
          >
            {HERO_DATA.label}
          </motion.span>

          <motion.h1
            variants={textRevealVariants}
            className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.18]"
          >
            {HERO_DATA.headlineFirstLine} <br />
            {HERO_DATA.headlineSecondLine} <br />
            <span className="italic font-normal text-text-primary/90">
              {HERO_DATA.headlineThirdLine}
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* 2. The Interactive Editorial Fold Object */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={`w-full mt-6 border cursor-pointer select-none overflow-hidden relative group transition-colors duration-300 ${
          isExpanded
            ? "bg-navbar-active border-navbar-active text-white"
            : "bg-background-main border-border-main text-text-primary"
        }`}
      >
        {/* Decorative Micro-Interactive Accent Line */}
        <div className="absolute top-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />

        <div className="p-5 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start gap-4">
            <p
              className={`font-serif text-sm font-semibold tracking-wide ${isExpanded ? "text-background-secondary" : "text-text-primary"}`}
            >
              {isExpanded ? "Closing Vision Lookbook" : "Open Spatial Curation"}
            </p>
            <span
              className={`text-xs font-mono font-bold shrink-0 ${isExpanded ? "text-accent" : "text-text-primary/40"}`}
            >
              {isExpanded ? "—" : "+"}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="w-full relative origin-top"
              >
                {/* Immersive Clipped Image Reveal Canvas */}
                <div className="relative aspect-[16/10] w-full mt-4 overflow-hidden bg-text-primary/5 border border-white/10">
                  <motion.div
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_DATA.backdropImage}
                      alt="High fashion display"
                      fill
                      priority
                      className="object-cover object-center filter grayscale-[20%] brightness-[0.85] contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navbar-active/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="mt-4 pb-1 text-xs leading-relaxed text-background-secondary/90 max-w-sm"
                >
                  <p>{HERO_DATA.supportingParagraph}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 3. Operational Fixed Mobile Action Bar Footer */}
      <div className="w-full border-t border-border-main pt-4 mt-6 flex justify-between items-center z-20">
        <span className="font-sans text-[9px] uppercase tracking-widest text-text-muted/60 font-medium">
          {HERO_DATA.footerMeta}
        </span>

        <button
          onClick={scrollToNext}
          type="button"
          className="inline-flex items-center gap-x-1.5 font-sans text-xs font-bold uppercase tracking-widest text-text-primary active:text-accent transition-colors"
        >
          <span>{HERO_DATA.ctaText}</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent" />
        </button>
      </div>
    </section>
  );
}
