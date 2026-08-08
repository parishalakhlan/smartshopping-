"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactHeroAssets } from "@/features/contact/data/heroData";

interface HeroSectionMobileProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionMobile: React.FC<HeroSectionMobileProps> = () => {
  return (
    <section
      id="contact-hero-mobile"
      className="relative w-full min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center px-6 lg:px-8 py-20 sm:py-24 bg-primary overflow-hidden border-b border-border-strong font-sans lg:hidden"
    >
      {/* Immersive Photography Backing Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />

        {/* High-Contrast Gradient Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary/95" />

        {/* Subtle Background Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 space-y-6 max-w-3xl w-full">
        {/* Minimal Kicker Tagline */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
            Get In Touch
          </span>
        </div>

        {/* High-Contrast Bold Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-text-inverse leading-[1.05]">
          Let&apos;s Start A <br />
          <span className="font-serif italic font-normal text-accent block mt-1">
            Conversation.
          </span>
        </h1>

        {/* Medium Weight Body Copy */}
        <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
          Whether you&apos;re planning a visit, exploring partnerships, looking
          for career opportunities or simply have a question, we&apos;re here to
          help.
        </p>

        {/* High-Contrast Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
          <Link href="#connect-mobile" className="w-full sm:w-auto">
            <button className="w-full py-4 px-8 bg-accent text-text-inverse hover:bg-accent-hover border border-accent rounded-none font-bold text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-sm active:scale-[0.98]">
              <span>Talk With Us</span>
              <ArrowUpRight className="w-4 h-4 text-text-inverse shrink-0" />
            </button>
          </Link>

          <Link href="/store-locator" className="w-full sm:w-auto">
            <button className="w-full py-4 px-8 bg-primary/80 text-text-inverse border border-border-strong hover:bg-primary/50 font-bold text-xs tracking-[0.18em] uppercase text-center transition-all duration-300 active:scale-[0.98]">
              Find A Store
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
