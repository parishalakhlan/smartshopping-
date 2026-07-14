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
    <section className="relative h-[85vh] flex flex-col justify-end px-6 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className={hero.image.objectFit}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-5">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E25822] font-semibold block">
          {hero.tagline}
        </span>
        <h1 className="text-4xl font-light tracking-tight text-white leading-[1.1]">
          {hero.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < hero.headingLines.length - 1 && <br />}
            </span>
          ))}
          <span className="font-serif italic text-stone-300">
            {hero.italicText}
          </span>
        </h1>
        <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
          {hero.description}
        </p>
        <div className="pt-2">
          <a
            href={hero.cta.href}
            className="inline-block px-6 py-3.5 bg-[#E25822] text-white text-xs font-semibold uppercase tracking-widest"
          >
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
