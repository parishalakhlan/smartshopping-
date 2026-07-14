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
    <section className="py-44 px-24 bg-black text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-200">
          {closingCTA.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < closingCTA.headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-stone-500 font-light text-xs tracking-widest uppercase pt-2">
          {closingCTA.subText}
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#111112_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-30" />
    </section>
  );
}
