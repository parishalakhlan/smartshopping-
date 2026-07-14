"use client";

import React from "react";
import { ctaMetadata } from "@/features/contact/data/ctaData";

interface FinalCTASectionMobileProps {
  scrollToSection: (id: string) => void;
}

export const FinalCTASectionMobile: React.FC<FinalCTASectionMobileProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="cta-mobile"
      className="bg-[#163B65] text-[#FFFFFF] py-14 relative overflow-hidden lg:hidden"
    >
      {/* Background Watermark - Controlled text sizing to prevent screen-edge breakout */}
      <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[24vw] tracking-wider text-[#FFFFFF]">
        {ctaMetadata.backgroundText}
      </div>

      <div className="w-full px-4 text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <span className="text-[9px] text-[#F97316] font-bold tracking-[0.2em] uppercase block">
            {ctaMetadata.tagline}
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight max-w-sm mx-auto leading-tight">
            {ctaMetadata.heading}
          </h2>
          <p className="text-[#FFFFFF]/70 text-[11px] font-normal max-w-xs mx-auto leading-relaxed">
            {ctaMetadata.description}
          </p>
        </div>

        {/* Stacked CTAs for simple thumb reach on small form factor displays */}
        <div className="flex flex-col gap-3 pt-1">
          <button
            onClick={() => scrollToSection("paths")}
            className="w-full py-4 bg-[#F97316] text-[#FFFFFF] border border-[#F97316] font-bold text-xs uppercase tracking-widest transition-colors active:bg-[#E26613]"
          >
            Start a Conversation
          </button>
          <button
            onClick={() => scrollToSection("visit")}
            className="w-full py-4 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 font-bold text-xs uppercase tracking-widest transition-colors active:border-[#FFFFFF] active:bg-[#FFFFFF]/5"
          >
            Visit a Store
          </button>
        </div>
      </div>
    </section>
  );
};
