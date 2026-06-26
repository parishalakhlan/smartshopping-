"use client";

import React from "react";
import { motion } from "framer-motion";

const structuralPillars = [
  {
    num: "01",
    title: "Regional Dignity",
    desc: "We believe a family in a rising tier-2 city deserves the exact same spatial environment, textile integrity, and personal respect as a buyer in a state capital.",
  },
  {
    num: "02",
    title: "Generational Patience",
    desc: "We reject short-term market speculation. We build retail hubs intended to anchor local high streets for decades, investing deeply in local workspace development.",
  },
  {
    num: "03",
    title: "Material Honesty",
    desc: "No compromise on production standards. Every piece in our multi-brand collective is vetted for real durability, clean finishes, and timeless wearability.",
  },
];

export function ValuesWall() {
  return (
    <section
      id="the-pillars"
      className="py-24 sm:py-32 bg-[#F5F2EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-3">
            OUR OPERATING CONSTITUTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight leading-[1.15]">
            The Real Core Pillars. <br />
            No Corporate Gloss.
          </h2>
          <div className="w-12 h-[2px] bg-[#F97316]/40 mt-6" />
        </div>

        {/* 3-Column Editorial Core Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {structuralPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group flex flex-col justify-between p-8 bg-[#FFFFFF] border border-[#163B65]/10 h-full relative transition-all duration-300 hover:border-[#F97316]/30 hover:shadow-md"
            >
              <div>
                {/* Structural Number Layer */}
                <div className="flex items-center justify-between border-b border-[#163B65]/10 pb-4 mb-6">
                  <span className="font-serif text-2xl font-bold text-[#F97316]/80 group-hover:text-[#F97316] transition-colors duration-300">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-sans tracking-widest text-[#475569]/40 uppercase font-medium">
                    Pillar // Internal
                  </span>
                </div>

                {/* Content Block */}
                <div className="space-y-3">
                  <h3 className="font-sans text-lg font-bold text-[#163B65] tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Sophisticated Geometric Accent Hook */}
              <div className="absolute top-0 right-6 w-[1px] h-3 bg-[#F97316] opacity-30 group-hover:opacity-100 group-hover:h-4 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
