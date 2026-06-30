// components/WhyPeopleStayDesktop.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { RETENTION_DATA } from "@/features/about/data/retention-shared";

export function WhyPeopleStayDesktop() {
  return (
    <section
      id="workspace-culture-desktop"
      className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Title Block */}
        <div className="max-w-3xl mb-20">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-3">
            {RETENTION_DATA.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight leading-[1.15]">
            {RETENTION_DATA.headlineLine1} <br />
            {RETENTION_DATA.headlineLine2}
          </h2>
        </div>

        {/* Clean Typographic 3-Column Layout */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 relative z-10 w-full font-sans">
          {RETENTION_DATA.retentionFields.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group flex flex-col justify-between p-8 bg-[#F5F2EC] border border-[#163B65]/5 relative transition-all duration-300 hover:bg-[#FFFFFF] hover:border-[#F97316]/30 hover:shadow-md"
            >
              <div className="space-y-6">
                {/* Structural Top Sub-border Header */}
                <div className="flex items-center justify-between border-b border-[#163B65]/10 pb-4">
                  <span className="font-serif text-sm font-bold text-[#F97316] tracking-widest">
                    {item.num}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#475569]/50 font-bold uppercase">
                    {item.label}
                  </span>
                </div>

                {/* Narrative Text Space */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#163B65] tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[#475569] font-normal leading-relaxed whitespace-normal break-words">
                    {item.story}
                  </p>
                </div>
              </div>

              {/* Minimal Geometric Corner Pin */}
              <div className="absolute top-0 right-6 w-[1px] h-3 bg-[#F97316] opacity-20 group-hover:opacity-100 group-hover:h-4 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
