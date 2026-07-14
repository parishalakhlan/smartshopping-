"use client";

import React from "react";
import { ctaMetadata } from "@/features/contact/data/ctaData";
import { MagneticButton } from "@/features/contact/MagneticButton";

interface FinalCTASectionDesktopProps {
  scrollToSection: (id: string) => void;
}

export const FinalCTASectionDesktop: React.FC<FinalCTASectionDesktopProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="cta-desktop"
      className="bg-[#163B65] text-[#FFFFFF] py-20 relative overflow-hidden hidden lg:block"
    >
      <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[15vw] tracking-wider text-[#FFFFFF]">
        {ctaMetadata.backgroundText}
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
            {ctaMetadata.tagline}
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
            {ctaMetadata.heading}
          </h2>
          <p className="text-[#FFFFFF]/70 text-sm font-normal max-w-md mx-auto leading-relaxed pt-1">
            {ctaMetadata.description}
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center pt-2">
          <MagneticButton
            onClick={() => scrollToSection("paths")}
            className="px-8 py-4 bg-[#F97316] text-[#FFFFFF] hover:bg-[#E26613] border border-[#F97316] font-bold shadow-sm rounded-none"
          >
            Start a Conversation
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("visit")}
            className="px-8 py-4 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 hover:border-[#FFFFFF] rounded-none"
          >
            Visit a Store
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
