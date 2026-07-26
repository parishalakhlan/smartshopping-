// components/HeroSectionMobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contactHeroAssets } from "@/features/contact/data/heroData";
import Link from "next/link";

interface HeroSectionMobileProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionMobile: React.FC<HeroSectionMobileProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="contact-hero-mobile"
      className="relative w-full max-w-full box-border min-h-[70vh] bg-surface flex flex-col justify-end overflow-hidden px-5 sm:px-6 py-8 border-b-2 border-border-main lg:hidden font-sans"
    >
      {/* Background Layer: Full-Bleed Imagery + Contrast Scrim */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dynamic Token Mask: Solid at bottom for readability, transparent top for photo visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 via-50% to-transparent" />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 w-full max-w-md mx-auto space-y-5 text-left">
        {/* Kicker Identifier */}
        <div className="inline-block px-3 py-1 bg-card-bg border border-border-main shadow-xs">
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
            Smart Shopping Concierge
          </span>
        </div>

        {/* Editorial Heading & Text Stack */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15] drop-shadow-sm">
            Let&apos;s Start A <br />
            <span className="italic font-normal text-accent">
              Conversation.
            </span>
          </h1>

          <div className="pl-3.5 border-l-2 border-accent">
            <p className="text-text-primary text-xs sm:text-sm font-semibold leading-relaxed">
              Whether you&apos;re planning a visit, exploring partnerships,
              looking for career opportunities or simply have a question,
              we&apos;re here to help.
            </p>
          </div>
        </div>

        {/* Action Touch Targets */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
          <Link href="#connect-mobile" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3.5 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 rounded-none border-2 border-border-main shadow-xs active:scale-[0.98] transition-all">
              <span>Talk With Us</span>
              <ArrowUpRight className="w-4 h-4 text-accent shrink-0" />
            </button>
          </Link>

          <Link href="/store-locator" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3.5 bg-card-bg text-text-primary border-2 border-border-main active:border-accent font-extrabold text-xs uppercase tracking-[0.2em] text-center rounded-none shadow-xs active:scale-[0.98] transition-all">
              Find A Store
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
