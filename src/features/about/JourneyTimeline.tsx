"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2009",
    title: "Genesis Footprint",
    area: "Sirsa Flagship",
    desc: "Launches the conceptual foundation with a premium high-street apparel environment designed to test regional appetite.",
  },
  {
    year: "2011",
    title: "Portfolio Integration",
    area: "Brand Partnerships",
    desc: "Secures major distribution frameworks with tier-1 international labels, elevating product range quality.",
  },
  {
    year: "2013",
    title: "Regional Multiplication",
    area: "Territory Scaling",
    desc: "Bridges logistical pipelines across adjacent fashion corridors, doubling floor footprints within six months.",
  },
  {
    year: "2015",
    title: "Lifestyle Networks",
    area: "New Sub-Brands",
    desc: "Deploys targeted standalone everyday casualwear segments answering rising consumer lifestyle trends.",
  },
  {
    year: "2018",
    title: "Sovereign Crossings",
    area: "Multi-State Expansion",
    desc: "Inaugurates operational storefront flags outside baseline state limits, expanding into 12 tier-2 and tier-3 city hubs.",
  },
  {
    year: "2022",
    title: "Logistical Superhub",
    area: "Supply Chain Velocity",
    desc: "Deploys automated distribution centers driving frictionless, high-velocity stock turnarounds regional-wide.",
  },
  {
    year: "2026",
    title: "The 27+ Store Collective",
    area: "Omni-Channel Authority",
    desc: "Solidifies corporate control parameters as North India's benchmark multi-brand fashion powerhouse.",
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-background-secondary px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Editorial Title Block */}
      <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
        <span className="text-xs font-luxury-meta tracking-[0.25em] text-accent font-semibold block uppercase">
          HISTORIC SCALE MATRIX
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-luxury-heading tracking-tight mt-3 text-text-primary">
          The Growth Journey
        </h2>
        <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-6" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Visible, High-Contrast Structural Center Track Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-main md:-translate-x-1/2 z-0" />

        <div className="space-y-12 md:space-y-20">
          {milestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row relative items-start ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Precision Interactive Node Marker on the timeline path */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-accent -translate-x-1/2 mt-6 z-20 shadow-md ring-4 ring-background-secondary"
                />

                {/* Narrative Card Module */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 pl-10 md:pl-0"
                >
                  <div
                    className={`bg-background-main p-6 sm:p-8 border border-border-main shadow-sm group hover:shadow-md hover:border-accent/60 transition-all duration-300 relative ${
                      isLeft ? "md:ml-10" : "md:mr-10"
                    }`}
                  >
                    {/* Header line ensuring high readability for the Year and Area */}
                    <div className="flex items-center justify-between border-b border-border-main pb-3 mb-4">
                      <span className="text-[11px] uppercase font-luxury-meta tracking-widest text-accent font-semibold">
                        {item.area}
                      </span>
                      <span className="text-sm font-serif font-bold text-text-primary px-2.5 py-0.5 bg-background-secondary border border-border-main rounded">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-luxury-heading tracking-wide text-text-primary mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-text-secondary font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Mirror Balance Frame Container */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
