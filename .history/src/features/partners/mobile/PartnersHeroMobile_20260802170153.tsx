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
    <section className="relative min-h-[50vh] w-full max-w-full box-border flex flex-col justify-end px-6 lg:px-8 pb-10 pt-20 bg-primary overflow-hidden border-b border-border-strong">
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
          sizes="100vw"
        />

        {/* High-Contrast Gradient Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-primary/30" />
      </div>

      {/* Asymmetric Structural Header Stack */}
      <div className="relative z-10 space-y-6 max-w-3xl w-full box-border">
        {/* Minimal Kicker Tagline */}
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block">
          {hero.tagline}
        </span>

        {/* High-Contrast Bold Serif Typography Statement */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-inverse leading-[1.05]">
          {hero.headingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
          <span className="font-serif italic font-normal text-accent block mt-1">
            {hero.italicText}
          </span>
        </h1>

        {/* Medium Weight Body Copy for High Legibility */}
        <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
          {hero.description}
        </p>

        {/* High-Contrast Button Execution */}
        <div className="pt-2 sm:pt-4">
          <a
            href={hero.cta.href}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-text-inverse hover:bg-accent-hover border border-accent rounded-none font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-sm"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
