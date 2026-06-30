// components/AboutHeroDesktop.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  HERO_DATA,
  titleContainerVariants,
  textRevealVariants,
} from "@/features/about/data/about-shared";

export function AboutHeroDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("the-challenge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-[#F5F2EC] overflow-hidden pt-36 pb-12"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src={HERO_DATA.backdropImage}
          alt="High fashion fabrics architectural display"
          fill
          priority
          className="object-cover object-center filter grayscale-[30%] brightness-[0.92] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2EC]/85 via-[#F5F2EC]/75 to-[#F5F2EC]/90" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 my-auto">
        <motion.div
          style={{ y: contentY }}
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-12 items-start"
        >
          <div className="col-span-10">
            <motion.span
              variants={textRevealVariants}
              className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-sm uppercase block mb-6"
            >
              {HERO_DATA.label}
            </motion.span>

            <motion.h1
              variants={textRevealVariants}
              className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-[#163B65] tracking-tight leading-[1.08] mb-10 text-balance"
            >
              {HERO_DATA.headlineFirstLine} <br />
              {HERO_DATA.headlineSecondLine} <br />
              {HERO_DATA.headlineThirdLine}
            </motion.h1>
          </div>

          <div className="col-span-8 grid grid-cols-12 gap-4">
            <motion.div variants={textRevealVariants} className="col-span-11">
              <p className="font-sans text-[#475569] text-lg lg:text-xl leading-relaxed font-normal tracking-wide text-balance">
                {HERO_DATA.supportingParagraph}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 border-t border-[#163B65]/10 pt-6 mt-12 flex justify-between items-center">
        <span className="font-sans text-xs uppercase tracking-widest text-[#475569]/60 font-medium">
          {HERO_DATA.footerMeta}
        </span>

        <motion.button
          onClick={scrollToNext}
          whileHover={{ y: 3 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-x-2.5 font-sans text-xs font-bold uppercase tracking-widest text-[#163B65] hover:text-[#F97316] transition-colors duration-300 group"
        >
          <span>{HERO_DATA.ctaText}</span>
          <ArrowDown className="w-4 h-4 text-[#F97316] group-hover:translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
