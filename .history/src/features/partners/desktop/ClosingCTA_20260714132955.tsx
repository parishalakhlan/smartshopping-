"use client";

import React from "react";
import { partnersConfig } from "@/features/partners/partners.data";

interface ClosingCTADesktopProps {
  config?: typeof partnersConfig;
}

export default function ClosingCTADesktop({
  config = partnersConfig,
}: ClosingCTADesktopProps) {
  const { closingCTA } = config;

  return (
    <section className="py-32 md:py-44 px-8 md:px-16 lg:px-24 bg-background-main text-center relative overflow-hidden flex flex-col items-center justify-center">
      {/* Editorial Layout Container */}
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
        {/* Architectonic & Minimal Typography Statement */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-text-primary leading-[1.15] max-w-3xl">
          {closingCTA.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < closingCTA.headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Refined Supporting Kicker */}
        <p className="text-text-muted font-medium text-xs tracking-[0.4em] uppercase pt-4">
          {closingCTA.subText}
        </p>
      </div>

      {/* Luxury Spatial Visual Element - Soft Structural Grid Line Instead of Dashboard Radial Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-text-primary/10 to-transparent pointer-events-none" />
    </section>
  );
}
