"use client";

import React from "react";
import Image from "next/image";

export const HeroSectionMobile: React.FC = () => {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center px-6 lg:px-8 py-20 sm:py-24 bg-primary overflow-hidden border-b border-border-strong font-sans lg:hidden">
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/employees/employee5.webp"
          alt="Grow With Smart Shopping"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />

        {/* High-Contrast Gradient Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20" />

        {/* Subtle Background Grid Texture */}
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
      <div className="relative z-10 space-y-6 max-w-3xl w-full">
        {/* Minimal Kicker Tagline */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
            Careers & Culture
          </span>
        </div>

        {/* High-Contrast Bold Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-text-inverse leading-[1.05]">
          Grow With <br />
          <span className="font-serif italic font-normal text-accent block mt-1">
            Smart Shopping.
          </span>
        </h1>

        {/* Medium Weight Body Copy */}
        <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
          Step into a career built around tactile exploration, master mentoring
          tracks, and premium retail workspace engineering.
        </p>
      </div>
    </section>
  );
};
