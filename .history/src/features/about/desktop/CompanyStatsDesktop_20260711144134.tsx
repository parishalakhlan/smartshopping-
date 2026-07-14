// components/CompanyStatsDesktop.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IMPACT_DATA,
  IMPACT_NARRATIVES,
} from "@/features/about/data/impact-shared";

export function CompanyStatsDesktop() {
  return (
    <section
      id="the-impact"
      className="py-24 sm:py-32 bg-background-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading Frame */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <span className="text-accent font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-4">
            {IMPACT_DATA.sectionLabel}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.12]">
            {IMPACT_DATA.sectionTitleFirstLine} <br />
            {IMPACT_DATA.sectionTitleSecondLine}
          </h2>
        </div>

        {/* Editorial Story Stream */}
        <div className="space-y-16 lg:space-y-24 w-full">
          {IMPACT_NARRATIVES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
              className="grid grid-cols-12 gap-12 items-start border-t border-border-main pt-8 group"
            >
              <div className="col-span-5 flex flex-col items-start">
                <span className="font-serif text-3xl lg:text-4xl text-text-primary font-bold tracking-tight block mb-2 transition-colors duration-300 group-hover:text-accent">
                  {item.heading}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] tracking-wide text-accent">
                    {item.metric}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-text-secondary/80">
                    {item.label}
                  </span>
                </div>
              </div>

              <div className="col-span-7 max-w-2xl">
                <p className="font-sans text-text-secondary text-lg leading-relaxed font-normal">
                  {item.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
