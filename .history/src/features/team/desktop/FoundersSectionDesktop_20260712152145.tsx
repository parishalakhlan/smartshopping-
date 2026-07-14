// @/components/team/FoundersSectionDesktop.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, Anchor } from "lucide-react";
import { Founder } from "@/features/team/data/foundersData";

interface DesktopProps {
  founders: Founder[];
}

export default function FoundersSectionDesktop({ founders }: DesktopProps) {
  return (
    <div className="space-y-12 font-sans hidden lg:block">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-main pb-8">
        <div className="space-y-3 text-left">
          <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
            The Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-button-primary-bg tracking-tight">
            The Genesis of Our Craft
          </h2>
        </div>
        <p className="text-text-secondary text-xs font-normal max-w-sm md:text-right leading-relaxed">
          Our collective was born from a simple evening conversation regarding
          human utility, sustainable beauty, and structural space. Meet our
          founding partners.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 lg:gap-16 items-start">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col space-y-6 text-left group"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary rounded-none border border-border-main shadow-sm">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                priority
                sizes="50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-border-main pb-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-button-primary-bg">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-bold text-accent tracking-widest uppercase mt-0.5">
                    {founder.role}
                  </p>
                </div>
                <div className="text-button-primary-bg/40 group-hover:text-accent transition-colors duration-300">
                  {founder.focusIcon === "creative" ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <Anchor className="w-5 h-5" />
                  )}
                </div>
              </div>

              <div className="relative bg-background-secondary/30 p-5 rounded-none border-l-2 border-button-primary-bg/30">
                <Quote className="w-8 h-8 text-button-primary-bg/5 absolute -top-2 -right-1 pointer-events-none" />
                <p className="font-serif text-sm italic text-text-secondary leading-relaxed">
                  &ldquo;{founder.signatureQuote}&rdquo;
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-text-secondary font-normal leading-relaxed">
                  {founder.narrativeBiography}
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-wider text-button-primary-bg uppercase">
                    Core Directive:
                  </span>
                  <span className="text-[11px] font-medium text-text-secondary">
                    {founder.focusArea}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
