import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFade } from "@/features/partners/desktop/MotionWrapper";

const bezierEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function PartnersHero() {
  return (
    <section className="relative h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-24 overflow-hidden bg-background-main">
      {/* Background Section with Elegant Vignette & High-End Visual Treatment */}
      <div className="absolute inset-0 z-0 opacity-80 scale-100 transition-transform duration-1000">
        <Image
          src="/interior/interiro4.webp"
          alt="Premium Retail Architecture"
          fill
          priority
          className="object-cover object-center transform transition-transform duration-1000"
        />
        {/* Soft elegant overlay using subtle editorial gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-main via-background-main/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl space-y-12">
        {/* Supporting Label / Kicker */}
        <MotionFade delay={0}>
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-medium block">
            Exclusive Commercial Syndication
          </span>
        </MotionFade>

        {/* Editorial Heading */}
        <MotionFade delay={0.1}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: bezierEasing }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1] text-text-primary max-w-4xl"
          >
            Build The Future Of <br />
            <span className="font-serif italic font-light text-text-secondary">
              Fashion Retail
            </span>{" "}
            Together.
          </motion.h1>
        </MotionFade>

        {/* Supporting Copy */}
        <MotionFade delay={0.2}>
          <p className="text-base md:text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
            Align with an enterprise omnichannel network engineered for luxury
            retail operators, spatial innovators, and visionaries looking to
            scale global commercial hubs.
          </p>
        </MotionFade>

        {/* Action Blocks / Buttons */}
        <MotionFade delay={0.3}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-12 pt-6">
            <a
              href="#application"
              className="group relative px-10 py-5 bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 border border-transparent hover:bg-transparent hover:border-text-primary hover:text-text-primary"
            >
              <span className="relative z-10 flex items-center gap-3">
                Become A Partner{" "}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
            <a
              href="#models"
              className="group text-xs uppercase tracking-[0.2em] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 relative py-2 flex items-center justify-center sm:justify-start"
            >
              Explore Partnership Models
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
