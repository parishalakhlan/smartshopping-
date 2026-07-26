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
      className="relative w-full max-w-full box-border min-h-[75vh] bg-surface flex flex-col justify-between overflow-hidden px-4 sm:px-6 py-6 border-b-2 border-border-main lg:hidden font-sans"
    >
      {/* Background Photography Layer (Full-Bleed Viewport Cover) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Top Floating Kicker Identifier */}
      <div className="relative z-10 w-full text-left pt-2">
        <div className="inline-block px-3 py-1.5 bg-card-bg border-2 border-border-main shadow-sm">
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
            Smart Shopping Concierge
          </span>
        </div>
      </div>

      {/* Bottom High-Contrast Token Card Container */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-auto pt-6">
        <div className="bg-card-bg border-2 border-border-main p-5 sm:p-6 space-y-4 shadow-md">
          {/* Main Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
            Let&apos;s Start A <br />
            <span className="italic font-normal text-accent">
              Conversation.
            </span>
          </h1>

          {/* Description Block */}
          <div className="pl-3 border-l-2 border-accent">
            <p className="text-text-primary text-xs sm:text-sm font-bold leading-relaxed">
              Whether you&apos;re planning a visit, exploring partnerships,
              looking for career opportunities or simply have a question,
              we&apos;re here to help.
            </p>
          </div>

          {/* Direct Action Touch Targets */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <Link href="#connect-mobile" className="w-full sm:w-auto">
              <button className="w-full px-5 py-3.5 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 border-2 border-border-main active:scale-[0.98] transition-all">
                <span>Talk With Us</span>
                <ArrowUpRight className="w-4 h-4 text-accent shrink-0" />
              </button>
            </Link>

            <Link href="/store-locator" className="w-full sm:w-auto">
              <button className="w-full px-5 py-3.5 bg-surface text-text-primary border-2 border-border-main active:border-accent font-extrabold text-xs uppercase tracking-[0.2em] text-center active:scale-[0.98] transition-all">
                Find A Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
