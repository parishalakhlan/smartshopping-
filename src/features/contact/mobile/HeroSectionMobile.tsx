"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactHeroAssets } from "@/features/contact/data/heroData";

interface HeroSectionMobileProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionMobile: React.FC<HeroSectionMobileProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="contact-hero-mobile"
      className="relative w-full h-[60vh] min-h-[460px] bg-[#F5F2EC]/30 flex items-center overflow-hidden border-b border-[#163B65]/10 lg:hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/95 to-[#FFFFFF]/80" />
      </div>

      {/* Content Container Optimized for Smaller Viewports */}
      <div className="w-full px-4 relative z-10">
        <div className="space-y-5 text-left max-w-md">
          <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
            Smart Shopping Concierge
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#163B65] leading-[1.1]">
            Let&apos;s Start A <br />
            <span className="italic font-normal text-[#F97316]">
              Conversation.
            </span>
          </h1>

          <p className="text-[#475569] text-xs font-normal leading-relaxed pr-4">
            Whether you&apos;re planning a visit, exploring partnerships,
            looking for career opportunities or simply have a question,
            we&apos;re here to help.
          </p>

          {/* Quick Direct-Action Elements (Omit Magnetic Wrappers on Touch Screen Targets) */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full">
            <button
              onClick={() => scrollToSection("paths")}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#163B65] text-[#FFFFFF] active:bg-[#112F52] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-none transition-colors"
            >
              Talk With Us
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
            </button>
            <button
              onClick={() => scrollToSection("visit")}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-[#163B65] border border-[#163B65]/20 active:bg-[#163B65]/5 font-bold text-xs uppercase tracking-widest text-center rounded-none transition-colors"
            >
              Find A Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
