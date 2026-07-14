// components/JourneyTimelineDesktop.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { JOURNEY_DATA } from "@/features/about/data/journey-shared";

export function JourneyTimelineDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="the-shift"
      className="py-24 sm:py-32 bg-background-main overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Left Block Text Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="col-span-6 space-y-6 font-sans"
          >
            <span className="text-accent font-semibold tracking-[0.25em] text-xs uppercase block">
              {JOURNEY_DATA.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.12]">
              {JOURNEY_DATA.headlineFirstLine} <br />
              {JOURNEY_DATA.headlineSecondLine}
            </h2>

            <div className="text-text-secondary text-base sm:text-lg leading-relaxed space-y-6 font-normal pt-4 max-w-xl">
              <p>{JOURNEY_DATA.paragraph1}</p>
              <p className="text-text-primary font-medium">
                {JOURNEY_DATA.paragraph2Highlight}
              </p>
              <p className="text-sm sm:text-base opacity-90">
                {JOURNEY_DATA.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* Right Block Media Grid Area */}
          <div className="col-span-6 relative w-full aspect-[5/4]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={isInView ? { opacity: 0.15, scale: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-text-primary translate-x-4 translate-y-4"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative w-full h-full overflow-hidden border border-border-main bg-background-secondary"
            >
              <Image
                src={JOURNEY_DATA.displayImage}
                alt="Smart Shopping spatial interior experience"
                fill
                sizes="50vw"
                className="object-cover grayscale contrast-[1.03] brightness-[0.97]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navbar-active/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
