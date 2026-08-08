// components/AboutHeroMobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  HERO_DATA,
  titleContainerVariants,
  textRevealVariants,
} from "@/features/about/data/about-shared";

export function AboutHeroMobile() {
  return (
    <section
      id="about-hero"
      className="relative w-full bg-surface pt-10 pb-3 px-5 flex flex-col justify-between font-sans transition-colors duration-300"
    >
      {/* Top Meta Tag & Headline */}
      <div className="w-full relative z-20">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
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
      </motion.div>
    </section>
  );
}
