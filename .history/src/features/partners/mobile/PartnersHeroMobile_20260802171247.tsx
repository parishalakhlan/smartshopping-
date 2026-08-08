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
    <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center px-6 lg:px-8 py-20 sm:py-24 bg-primary overflow-hidden border-b border-border-strong font-sans">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary/95" />

        {/* Subtle Background Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Foreground Header Content */}
      <div className="relative z-10 space-y-6 max-w-3xl w-full">
        {/* Minimal Kicker Tagline */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
            {hero.tagline}
          </span>
        </div>

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

        {/* Medium Weight Body Copy */}
        <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
          {hero.description}
        </p>

        {/* High-Contrast Button Execution */}
        <div className="pt-2">
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
