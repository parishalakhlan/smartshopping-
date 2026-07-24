// components/HeroSectionDesktop.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/features/contact/MagneticButton";
import { contactHeroAssets } from "@/features/contact/data/heroData";
import Link from "next/link";

interface HeroSectionDesktopProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionDesktop: React.FC<HeroSectionDesktopProps> = ({
  scrollToSection,
}) => {
  return (
    <section
      id="contact-hero-desktop"
      className="relative w-full h-[75vh] min-h-[550px] bg-surface hidden lg:flex items-center overflow-hidden border-b-2 border-border-main transition-colors duration-300"
    >
      {/* Visual Canvas Backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={contactHeroAssets.backgroundImage}
          alt="Smart Shopping Premium Retail Space"
          fill
          priority
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div className="space-y-6 text-left">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] text-accent font-bold tracking-[0.3em] uppercase block"
              >
                Connect With Smart Shopping
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.05]"
              >
                {"We're Ready To Hear From "}
                <span className="italic font-normal text-accent">You.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-primary text-base font-medium max-w-xl leading-relaxed"
            >
              {
                "Whether you're exploring our stores, interested in partnering with Smart Shopping, looking for franchise opportunities, planning your career with us, or simply have a question, our team is ready to help."
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="#connect-desktop">
                <MagneticButton className="px-8 py-4 bg-button-primary-bg text-button-primary-text hover:bg-primary-hover border-2 border-button-primary-bg flex items-center gap-2 rounded-none font-bold">
                  {" Get In Touch "}
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </MagneticButton>
              </Link>
              <Link href="/store-locator">
                <MagneticButton className="px-8 py-4 bg-surface text-text-primary border-2 border-border-main hover:border-accent font-bold">
                  Visit Our Stores
                </MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Feature Graphic Layer */}
          <div className="relative h-[400px] w-full">
            <div className="absolute right-0 top-0 w-[85%] h-[350px] bg-card-bg overflow-hidden border-2 border-border-main p-2 shadow-sm">
              <div className="relative w-full h-full">
                <Image
                  src={contactHeroAssets.desktopFeatureImage}
                  alt="Concierge Specialist"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* High-Contrast Floating Feature Badge */}
            <div className="absolute bottom-2 left-0 bg-card-bg border-2 border-border-main border-l-4 border-l-accent p-5 max-w-[240px] shadow-md">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent block mb-1">
                {"We're Here To Help"}
              </span>
              <p className="text-xs font-bold text-text-primary leading-snug">
                Whether online or in-store, every conversation starts with
                people who genuinely care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
