"use client";

import React from "react";
import { ctaMetadata } from "@/features/contact/data/ctaData";
import { MagneticButton } from "@/features/contact/MagneticButton";
import Link from "next/link";
interface FinalCTASectionDesktopProps {
  scrollToSection: (id: string) => void;
}

export const FinalCTASectionDesktop: React.FC<FinalCTASectionDesktopProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="cta-desktop"
      className="bg-navbar-active text-white py-20 relative overflow-hidden hidden lg:block"
    >
      <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[15vw] tracking-wider text-white">
        {ctaMetadata.backgroundText}
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
            {ctaMetadata.tagline}
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
            {ctaMetadata.heading}
          </h2>
          <p className="text-white/70 text-sm font-normal max-w-md mx-auto leading-relaxed pt-1">
            {ctaMetadata.description}
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center pt-2">
          <Link href="#openings-mobile" scroll={true}>
            <MagneticButton className="px-8 py-4 bg-button-secondary-bg text-button-secondary-text hover:bg-accent-hover border border-button-secondary-bg font-bold shadow-sm rounded-none">
              Start a Conversation
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton className="px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white rounded-none">
              Visit a Store
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
