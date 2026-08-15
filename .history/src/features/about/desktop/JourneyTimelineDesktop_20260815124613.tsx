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
      className="py-24 sm:py-32 bg-surface overflow-hidden transition-colors duration-300 border-t border-border-main"
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
            <span className="text-accent font-bold tracking-[0.25em] text-xs uppercase block">
              {JOURNEY_DATA.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.12]">
              {JOURNEY_DATA.headlineFirstLine} <br />
              {JOURNEY_DATA.headlineSecondLine}
            </h2>

            <div className="text-text-primary text-base sm:text-lg leading-relaxed space-y-6 font-medium pt-2 max-w-xl">
              <p>{JOURNEY_DATA.paragraph1}</p>

              <div className="bg-card-bg p-5 border-l-4 border-accent border-y border-r border-border-main shadow-xs">
                <p className="text-text-primary font-bold">
                  {JOURNEY_DATA.paragraph2Highlight}
                </p>
              </div>

              <p className="text-sm sm:text-base font-medium text-text-primary">
                {JOURNEY_DATA.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* Right Block Media Grid Area */}
          <div className="col-span-6 relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative w-full overflow-hidden border-2 border-border-main bg-card-bg shadow-sm"
            >
              <Image
                src={JOURNEY_DATA.displayImage}
                alt="Smart Shopping spatial interior experience"
                width={1200}
                height={960}
                sizes="50vw"
                className="block w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
