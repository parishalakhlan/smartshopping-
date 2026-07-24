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
      className="relative w-full h-[60vh] min-h-[460px] bg-surface flex items-center overflow-hidden border-b-2 border-border-main lg:hidden transition-colors duration-300"
    >
      {/* Background Layer with Clean Contrast Gradient Isolation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          className="object-cover opacity-20 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-transparent" />
      </div>

      {/* Content Container Optimized for Mobile Viewports */}
      <div className="w-full px-5 relative z-10">
        <div className="space-y-5 text-left max-w-md mx-auto">
          <span className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase block">
            Smart Shopping Concierge
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-[1.1]">
            Let&apos;s Start A <br />
            <span className="italic font-normal text-accent">
              Conversation.
            </span>
          </h1>

          <p className="text-text-primary text-sm font-medium leading-relaxed pr-2">
            Whether you&apos;re planning a visit, exploring partnerships,
            looking for career opportunities or simply have a question,
            we&apos;re here to help.
          </p>

          {/* Quick Direct-Action Touch Targets */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <Link href="#connect-mobile" className="w-full sm:w-auto">
              <button className="w-full px-6 py-4 bg-button-primary-bg text-button-primary-text active:bg-primary-hover font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-none border-2 border-button-primary-bg transition-colors">
                Talk With Us
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </button>
            </Link>
            <Link href="/store-locator" className="w-full sm:w-auto">
              <button className="w-full px-6 py-4 bg-card-bg text-text-primary border-2 border-border-main active:border-accent font-bold text-xs uppercase tracking-widest text-center rounded-none transition-colors">
                Find A Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
