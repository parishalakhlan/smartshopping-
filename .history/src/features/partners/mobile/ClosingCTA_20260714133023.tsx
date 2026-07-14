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
    <section className="py-24 px-8 bg-background-main text-center relative flex flex-col items-center justify-center overflow-hidden">
      {/* Structural Column Container */}
      <div className="space-y-6 relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Minimal High-Fashion Typographic Execution */}
        <h2 className="text-3xl font-extralight text-text-primary tracking-tight leading-[1.25]">
          {closingCTA.mobileHeadingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Elegant Supporting Label */}
        <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-medium pt-2">
          {closingCTA.mobileSubText}
        </p>
      </div>

      {/* Luxury Spatial Visual Element - Soft Structural Center Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-t from-text-primary/10 to-transparent pointer-events-none" />
    </section>
  );
}
