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
      className="relative min-h-[80vh] w-full max-w-full box-border flex flex-col justify-end px-6 pb-10 pt-20 bg-primary overflow-hidden border-b border-border-strong font-sans"
    >
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_DATA.backdropImage}
          alt="Smart Shopping Retail Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />

        {/* High-Contrast Gradient Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40" />

        {/* Subtle Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 space-y-5 w-full box-border">
        {/* Minimal Kicker / Accent Line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
            About Smart Shopping
          </span>
        </motion.div>

        {/* High-Contrast Bold Serif Headline */}
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.h1
            variants={textRevealVariants}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-inverse leading-[1.12]"
          >
            {HERO_DATA.headlineFirstLine} <br />
            {HERO_DATA.headlineSecondLine} <br />
            <span className="font-serif italic font-normal text-accent block mt-1">
              {HERO_DATA.headlineThirdLine}
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
