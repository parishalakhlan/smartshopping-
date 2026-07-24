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
    <section className="py-24 md:py-36 px-8 md:px-16 lg:px-24 bg-surface text-center relative overflow-hidden flex flex-col items-center justify-center border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Layout Container */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
        {/* Crisp High-Contrast Typography Statement */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.12] max-w-3xl">
          {closingCTA.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < closingCTA.headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Refined High-Visibility Kicker */}
        <p className="text-accent font-extrabold text-xs tracking-[0.3em] uppercase pt-2">
          {closingCTA.subText}
        </p>
      </div>

      {/* Structural Anchor Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-t from-accent to-transparent pointer-events-none" />
    </section>
  );
}
