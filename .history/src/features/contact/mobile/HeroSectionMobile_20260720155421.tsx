"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
      className="relative w-full h-[60vh] min-h-[460px] bg-background-secondary/30 flex items-center overflow-hidden border-b border-border-main lg:hidden"
    >
      {/* Background Layer with Safe Gradient Isolation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          className="object-cover opacity-[0.15] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/95 to-background-main/80" />
      </div>

      {/* Content Container Optimized for Smaller Viewports */}
      <div className="w-full px-4 relative z-10">
        <div className="space-y-5 text-left max-w-md">
          <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
            Smart Shopping Concierge
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-[1.1]">
            Let&apos;s Start A <br />
            <span className="italic font-normal text-accent">
              Conversation.
            </span>
          </h1>

          <p className="text-text-secondary text-xs font-normal leading-relaxed pr-4">
            Whether you&apos;re planning a visit, exploring partnerships,
            looking for career opportunities or simply have a question,
            we&apos;re here to help.
          </p>

          {/* Quick Direct-Action Elements (Omit Magnetic Wrappers on Touch Screen Targets) */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full">
            <Link href="#connect-mobile">
              <button className="w-full sm:w-auto px-6 py-3.5 bg-button-primary-bg text-button-primary-text active:bg-primary-hover font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-none transition-colors">
                Talk With Us
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </button>
            </Link>
            <Link href="/store-locator">
              <button className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-text-primary border border-border-main active:bg-text-primary/5 font-bold text-xs uppercase tracking-widest text-center rounded-none transition-colors">
                Find A Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
