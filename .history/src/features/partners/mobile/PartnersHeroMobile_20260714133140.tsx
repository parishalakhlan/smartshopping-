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
    <section className="relative h-[85vh] flex flex-col justify-end px-8 pb-16 bg-background-main overflow-hidden">
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover"
        />
        {/* Luxury architectural vignette mapping to design tokens */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/60 to-transparent" />
      </div>

      {/* Asymmetric Structural Header Stack */}
      <div className="relative z-10 space-y-6 max-w-md">
        {/* Minimal Kicker */}
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium block">
          {hero.tagline}
        </span>

        {/* High-End Editorial Typography Statement */}
        <h1 className="text-4xl font-extralight tracking-tight text-text-primary leading-[1.15]">
          {hero.headingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
          <span className="font-serif italic text-text-secondary/90 block mt-1">
            {hero.italicText}
          </span>
        </h1>

        {/* Sophisticated Body Copy */}
        <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
          {hero.description}
        </p>

        {/* Premium Clean Button Execution */}
        <div className="pt-4">
          <a
            href={hero.cta.href}
            className="inline-block px-10 py-4 bg-button-primary-bg text-button-primary-text text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 active:scale-[0.99] hover:opacity-90"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
