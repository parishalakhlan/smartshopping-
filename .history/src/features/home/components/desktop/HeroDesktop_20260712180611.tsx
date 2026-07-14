"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroData } from "@/features/home/data/heroData";

interface HeroDesktopProps {
  data: HeroData;
}

export default function HeroDesktop({ data }: HeroDesktopProps) {
  const { section, headline, description, cta, image, animation } = data;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navbar-active hidden md:flex">
      {/* Cinematic Ambient Backdrop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          initial={animation.desktop.background.initial}
          animate={animation.desktop.background.animate}
          transition={animation.desktop.background.transition}
          className="relative w-full h-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority}
            sizes={image.sizes.desktop}
            className={`${image.objectFit} ${image.objectPosition}`}
          />
        </motion.div>
        {/* Soft immersive desktop gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary via-navbar-active/75 to-transparent" />
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 py-32 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={animation.desktop.content.initial}
          animate={animation.desktop.content.animate}
          transition={animation.desktop.content.transition}
          className="max-w-5xl"
        >
          <span className="inline-block text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase mb-8">
            {section.tagline}
          </span>

          <h1 className="font-serif text-7xl lg:text-8xl font-bold leading-[1.02] text-white tracking-tight mb-8">
            {headline.line1} <br />
            {headline.line2} <br />
            <span className="text-background-secondary font-normal italic">
              {headline.italic}
            </span>
          </h1>

          <p className="font-sans text-xl lg:text-2xl text-background-secondary/80 font-normal mb-14 max-w-2xl leading-relaxed">
            {description}
          </p>

          {/* Premium Desktop Action Cluster */}
          <div className="flex items-center gap-8">
            <motion.a
              href={cta.primary.href}
              aria-label={cta.primary.ariaLabel}
              whileHover={animation.desktop.primaryCta.whileHover}
              whileTap={animation.desktop.primaryCta.whileTap}
              transition={animation.desktop.primaryCta.transition}
              className="inline-flex items-center justify-center bg-background-main text-text-primary font-sans text-sm tracking-wider font-bold px-12 py-6 rounded-none shadow-md transition-colors hover:bg-background-secondary"
            >
              <span>{cta.primary.text}</span>
            </motion.a>

            <motion.a
              href={cta.secondary.href}
              aria-label={cta.secondary.ariaLabel}
              whileHover={animation.desktop.secondaryCta.whileHover}
              transition={animation.desktop.secondaryCta.transition}
              className="group inline-flex items-center gap-x-3 bg-transparent text-white font-sans text-sm tracking-wider font-semibold py-6 border border-transparent"
            >
              <span>{cta.secondary.text}</span>
              <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 via-transparent to-transparent z-10" />
    </section>
  );
}
