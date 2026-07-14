"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroData } from "@/features/home/data/heroData";

interface HeroMobileProps {
  data: HeroData;
}

export default function HeroMobile({ data }: HeroMobileProps) {
  const { section, headline, description, cta, image, metadata } = data;

  return (
    <section className="relative h-[100vh] w-full flex flex-col justify-end overflow-hidden bg-text-primary md:hidden">
      {/* Immersive Mobile Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.55 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority}
            sizes={image.sizes.mobile}
            className={`${image.objectFit} ${image.objectPosition}`}
          />
        </motion.div>
        {/* Aggressive vertical dark scrim for strict text legibility on small viewports */}
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-text-primary/85 to-text-primary/30" />
      </div>

      {/* Mobile Editorial Content Block */}
      <div className="relative z-10 w-full px-5 pb-16 pt-24 flex flex-col justify-end h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: [0.215, 0.61, 0.355, 1.0],
            delay: 0.1,
          }}
        >
          <span className="inline-block text-accent font-sans font-medium tracking-[0.2em] text-xs uppercase mb-4">
            {section.taglineMobile}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.1] text-white tracking-tight mb-5">
            {headline.line1} <br />
            {headline.line2} <br />
            <span className="text-background-secondary font-normal italic">
              {headline.italic}
            </span>
          </h1>

          <p className="font-sans text-base text-background-secondary/85 font-normal mb-8 max-w-md leading-relaxed">
            {description}
          </p>

          {/* Thumb-Optimized App Stack Layout */}
          <div className="flex flex-col items-stretch gap-3.5 w-full">
            <motion.a
              href={cta.primary.href}
              aria-label={cta.primary.ariaLabel}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="inline-flex items-center justify-center bg-background-main text-text-primary font-sans text-xs tracking-widest font-bold py-4.5 px-6 rounded-none shadow-sm text-center uppercase active:bg-background-secondary"
              style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
            >
              <span>{cta.primary.text}</span>
            </motion.a>

            <motion.a
              href={cta.secondary.href}
              aria-label={cta.secondary.ariaLabel}
              whileTap={{ scale: 0.98, x: 4 }}
              className="group inline-flex items-center justify-center gap-x-2 bg-transparent text-white font-sans text-xs tracking-widest font-bold py-4 px-6 border border-white/20 uppercase"
            >
              <span>{cta.secondary.text}</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </motion.a>
          </div>
        </motion.div>

        {/* Floating App Architecture Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <span className="font-sans text-[9px] tracking-[0.25em] text-white uppercase font-light">
            {metadata.scrollIndicatorText}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2.5 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
