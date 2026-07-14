// components/ValuesWallDesktop.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { VALUES_DATA } from "@/features/about/data/values-shared";

export function ValuesWallDesktop() {
  return (
    <section
      id="the-pillars-desktop"
      className="py-24 sm:py-32 bg-[#F5F2EC] relative overflow-hidden hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-3">
            {VALUES_DATA.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight leading-[1.15]">
            {VALUES_DATA.headlineLine1} <br />
            {VALUES_DATA.headlineLine2}
          </h2>
          <div className="w-12 h-[2px] bg-[#F97316]/40 mt-6" />
        </div>

        {/* 3-Column Grid Block */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {VALUES_DATA.pillars.map((pillar, idx) => (
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
                {/* Number Frame Layout Line */}
                <div className="flex items-center justify-between border-b border-[#163B65]/10 pb-4 mb-6">
                  <span className="font-serif text-2xl font-bold text-[#F97316]/80 group-hover:text-[#F97316] transition-colors duration-300">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-sans tracking-widest text-[#475569]/40 uppercase font-medium">
                    Pillar // Internal
                  </span>
                </div>

                {/* Main Copy Context */}
                <div className="space-y-3">
                  <h3 className="font-sans text-lg font-bold text-[#163B65] tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm lg:text-base text-[#475569] font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Minimal Design Accent Tag */}
              <div className="absolute top-0 right-6 w-[1px] h-3 bg-[#F97316] opacity-30 group-hover:opacity-100 group-hover:h-4 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
