"use client";

import React from "react";
import { partnersConfig } from "@/features/partners/partners.data";

interface ClosingCTAMobileProps {
  config?: typeof partnersConfig;
}

export default function ClosingCTAMobile({
  config = partnersConfig,
}: ClosingCTAMobileProps) {
  const { closingCTA } = config;

  return (
    <section className="py-20 px-6 bg-surface text-center relative flex flex-col items-center justify-center overflow-hidden border-t-2 border-border-main transition-colors duration-300">
      {/* Structural Column Container */}
      <div className="space-y-5 relative z-10 w-full max-w-md flex flex-col items-center">
        {/* High-Contrast Mobile Headline Execution */}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-[1.2]">
          {closingCTA.mobileHeadingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Vibrant Supporting Label */}
        <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-extrabold pt-1">
          {closingCTA.mobileSubText}
        </p>
      </div>

      {/* Structural Anchor Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-t from-accent to-transparent pointer-events-none" />
    </section>
  );
}
