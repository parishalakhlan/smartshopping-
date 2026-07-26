// components/JourneyTimelineMobile.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";
import { JOURNEY_DATA } from "@/features/about/data/journey-shared";

export function JourneyTimelineMobile() {
  return (
    <section
      id="the-shift"
      className="py-12 px-5 bg-surface border-t border-border-main transition-colors duration-300"
    >
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Structural Editorial Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans flex flex-col gap-2"
        >
          <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.16]">
            {JOURNEY_DATA.headlineFirstLine} <br />
            <span className="italic font-semibold text-accent">
              {JOURNEY_DATA.headlineSecondLine}
            </span>
          </h2>
        </motion.div>

        {/* Dynamic Aspect Image Canvas (No cropping, No empty border gaps) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full overflow-hidden border border-border-main bg-background-secondary shadow-md"
        >
          {/* Accent Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-10" />

          <div className="relative w-full">
            <Image
              src={JOURNEY_DATA.displayImage}
              alt="Smart Shopping spatial interior experience"
              width={800}
              height={500}
              priority
              sizes="(max-width: 480px) 100vw, 480px"
              className="w-full h-auto object-cover object-center block"
            />
          </div>
        </motion.div>

        {/* Editorial Highlight Quote Card */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background-secondary p-4 border-l-4 border-accent border-y border-r border-border-main shadow-sm"
        >
          <p className="font-serif italic text-sm text-text-primary font-bold leading-snug">
            {JOURNEY_DATA.paragraph2Highlight}
          </p>
        </motion.div>

        {/* High-Contrast Narrative Content Zone */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 text-xs leading-relaxed font-sans text-text-secondary font-medium"
        >
          <p>{JOURNEY_DATA.paragraph1}</p>
          <p className="pt-1 text-text-muted">{JOURNEY_DATA.paragraph3}</p>
        </motion.div>
      </div>
    </section>
  );
}
