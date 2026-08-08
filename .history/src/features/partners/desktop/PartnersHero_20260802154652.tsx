import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFade } from "@/features/partners/desktop/MotionWrapper";

const bezierEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function PartnersHero() {
  return (
    <section className="relative h-screen min-h-125 overflow-hidden bg-primary flex items-center border-b border-border-strong">
      {/* Visual Canvas Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/interior/interiro4.webp"
          alt="Premium Retail Architecture"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          priority
          className="object-cover object-center opacity-30 scale-105"
        />
        {/* High-Contrast Gradient Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-primary/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Supporting Kicker Badge */}
          <MotionFade delay={0}>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold block">
              Exclusive Commercial Syndication
            </span>
          </MotionFade>

          {/* High-Contrast Heading */}
          <MotionFade delay={0.1}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: bezierEasing }}
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-text-inverse leading-[1.05]"
            >
              Build The Future Of <br />
              <span className="font-serif italic font-normal text-accent">
                Fashion Retail
              </span>{" "}
              Together.
            </motion.h1>
          </MotionFade>

          {/* Supporting Description */}
          <MotionFade delay={0.2}>
            <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
              Align with an enterprise omnichannel network engineered for luxury
              retail operators, spatial innovators, and visionaries looking to
              scale global commercial hubs.
            </p>
          </MotionFade>

          {/* Action CTA Buttons */}
          <MotionFade delay={0.3}>
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a
                href="#application"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-inverse hover:bg-accent-hover border border-accent rounded-none font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-sm"
              >
                Become A Partner
                <ArrowRight
                  size={16}
                  className="text-text-inverse transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#models"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text-inverse border border-border-strong hover:border-accent hover:text-accent font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300"
              >
                Explore Partnership Models
                <span className="w-8 h-px bg-accent transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
