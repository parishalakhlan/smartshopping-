"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const IMPACT_NARRATIVES = [
  {
    metric: "01",
    heading: "Fashion Gained Local Presence",
    label: "ACCESS EVOLUTION",
    story:
      "Young people who previously spent entire weekends traveling hours to primary metro hubs now discover the latest global collection drops dropping natively in their own neighborhood coordinates the exact same hour they enter elite flagships.",
  },
  {
    metric: "02",
    heading: "Communities Gained Real Choice",
    label: "PORTFOLIO CULTIVATION",
    story:
      "By entirely replacing the outdated logistics paradigm of generic retail clearance portals, we introduced an uncompromised multi-brand pipeline. Regional cities now cultivate their personal and cultural identity through authentic global design access.",
  },
  {
    metric: "03",
    heading: "Families Discovered New Experiences",
    label: "ARCHITECTURAL RESPECT",
    story:
      "True scale isn't measured in square footage but in localized pride. Elevating regional infrastructure with clean gallery lighting and refined material textures signals a deep respect for the communities choosing to spend their life milestones here.",
  },
];

export function CompanyStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="the-impact"
      className="py-24 sm:py-32 bg-[#F5F2EC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading — Strictly Typographical Narrative Frame */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-4">
            THE IMPACT // REALIZED PARITY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.12]">
            What Changed When Quality <br />
            Became Proximity.
          </h2>
        </div>

        {/* Editorial Story Grid — Replaces Banned Metric & KPI Dashboards */}
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start border-t border-[#163B65]/10 pt-8 group"
            >
              {/* Natural Integration of Numbers via Large Typographic Scale */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <span className="font-serif text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight block mb-2 transition-colors duration-300 group-hover:text-[#F97316]">
                  {item.heading}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] tracking-wide text-[#F97316]">
                    {item.metric}
                  </span>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#475569]/80">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Seamless, Jargon-Free Editorial Story Block */}
              <div className="lg:col-span-8 lg:max-w-3xl">
                <p className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed font-normal whitespace-normal break-words">
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
