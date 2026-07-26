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
      className="w-full max-w-full box-border bg-surface flex flex-col justify-between overflow-hidden border-b-2 border-border-main lg:hidden font-sans"
    >
      {/* Top Graphic Banner - Photo framed cleanly without text overlay collision */}
      <div className="relative w-full h-[32vh] min-h-[220px] bg-background-main border-b border-border-main overflow-hidden">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle Brand Kicker Tag Floating Over Photo */}
        <div className="absolute top-4 left-5 z-10">
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase px-2.5 py-1 bg-surface border border-border-main">
            Smart Shopping Concierge
          </span>
        </div>
      </div>

      {/* Main Content Area - Unboxed Editorial Text Flow */}
      <div className="px-5 sm:px-6 py-6 space-y-5 text-left">
        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
          Let&apos;s Start A <br />
          <span className="italic font-normal text-accent">Conversation.</span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm font-medium leading-relaxed pl-3 border-l-2 border-accent">
          Whether you&apos;re planning a visit, exploring partnerships, looking
          for career opportunities or simply have a question, we&apos;re here to
          help.
        </p>

        {/* Action Buttons - Clean Minimal Touch Targets */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
          <Link href="#connect-mobile" className="w-full sm:w-auto">
            <button className="w-full py-3.5 px-6 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 border border-border-main transition-all active:scale-[0.98]">
              <span>Talk With Us</span>
              <ArrowUpRight className="w-4 h-4 text-accent shrink-0" />
            </button>
          </Link>

          <Link href="/store-locator" className="w-full sm:w-auto">
            <button className="w-full py-3.5 px-6 bg-surface hover:bg-card-bg text-text-primary border border-border-main font-extrabold text-xs uppercase tracking-[0.2em] text-center transition-all active:scale-[0.98]">
              Find A Store
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
