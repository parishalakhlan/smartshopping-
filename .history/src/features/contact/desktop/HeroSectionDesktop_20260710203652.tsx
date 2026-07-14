"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/features/contact/MagneticButton";
import { contactHeroAssets } from "@/features/contact/data/heroData";

interface HeroSectionDesktopProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionDesktop: React.FC<HeroSectionDesktopProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="contact-hero-desktop"
      className="relative w-full h-[75vh] min-h-[550px] bg-[#F5F2EC]/30 hidden lg:flex items-center overflow-hidden border-b border-[#163B65]/10"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          className="object-cover opacity-[0.12] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[10px] text-[#F97316] font-bold tracking-[0.3em] uppercase block"
              >
                Smart Shopping Concierge
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163B65] leading-[1.05]"
              >
                Let&apos;s Start A <br />
                <span className="italic font-normal text-[#F97316]">
                  Conversation.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#475569] text-sm font-normal max-w-xl leading-relaxed"
            >
              Whether you&apos;re planning a visit, exploring partnerships,
              looking for career opportunities or simply have a question,
              we&apos;re here to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <MagneticButton
                onClick={() => scrollToSection("paths")}
                className="px-8 py-4 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] border border-[#163B65] flex items-center gap-2 rounded-none"
              >
                Talk With Us{" "}
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("visit")}
                className="px-8 py-4 bg-transparent text-[#163B65] border border-[#163B65]/20 hover:border-[#163B65]"
              >
                Find A Store
              </MagneticButton>
            </motion.div>
          </div>

          <div className="relative h-[400px] w-full">
            <div className="absolute right-0 top-0 w-[85%] h-[350px] bg-[#F5F2EC] overflow-hidden border border-[#163B65]/5 p-2">
              <Image
                src={contactHeroAssets.desktopFeatureImage}
                alt="Concierge Specialist"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-0 bg-[#FFFFFF] border border-[#163B65]/10 p-4 max-w-[200px] shadow-sm">
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#F97316] block mb-1">
                Human Scale
              </span>
              <p className="text-[11px] font-medium text-[#163B65] leading-snug">
                Zero automated voicemail. Genuine interaction only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
