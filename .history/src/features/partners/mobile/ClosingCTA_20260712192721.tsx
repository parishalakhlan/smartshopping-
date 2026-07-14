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
    <section className="py-24 px-6 bg-black text-center space-y-4">
      <h2 className="text-2xl font-light text-stone-200 tracking-tight">
        {closingCTA.mobileHeadingLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < closingCTA.mobileHeadingLines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <p className="text-[10px] text-stone-500 uppercase tracking-widest">
        {closingCTA.mobileSubText}
      </p>
    </section>
  );
}
