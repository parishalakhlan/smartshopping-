"use client";

import React from "react";
import Image from "next/image";
import { partnersConfig } from "@/features/partners/partners.data";

interface PartnersHeroMobileProps {
  config?: typeof partnersConfig;
}

export default function PartnersHeroMobile({
  config = partnersConfig,
}: PartnersHeroMobileProps) {
  const { hero } = config;

  return (
    <section className="relative min-h-[50vh] w-full max-w-full box-border flex flex-col justify-end px-5 sm:px-8 pb-10 pt-20 bg-background-main overflow-hidden">
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* High-Contrast Scrim Layer: Dark gradient ensures white & accent text pops regardless of image brightness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
      </div>

      {/* Asymmetric Structural Header Stack */}
      <div className="relative z-10 space-y-4 sm:space-y-6 max-w-md w-full box-border">
        {/* Minimal Kicker */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-extrabold block drop-shadow-xs">
          {hero.tagline}
        </span>

        {/* High-End Editorial Typography Statement */}
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-[1.18] drop-shadow-sm">
          {hero.headingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
          <span className="font-serif italic text-white/90 block mt-1">
            {hero.italicText}
          </span>
        </h1>

        {/* Sophisticated Body Copy */}
        <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-sm drop-shadow-xs">
          {hero.description}
        </p>

        {/* Premium Clean Button Execution */}
        <div className="pt-2 sm:pt-4">
          <a
            href={hero.cta.href}
            className="inline-block w-full sm:w-auto text-center px-8 py-3.5 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text border border-border-main/30 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 active:scale-[0.98] shadow-md"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
