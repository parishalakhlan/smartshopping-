"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "27+", label: "STORES ACROSS 7 STATES", focus: "Retail Footprint" },
  { value: "7", label: "INTERNATIONAL BRANDS", focus: "Global Portfolios" },
  { value: "26", label: "AVERAGE TEAM AGE", focus: "Youth Driven Velocity" },
  {
    value: "15+",
    label: "YEARS OF EXCELLENCE",
    focus: "Timeless Domain Authority",
  },
];

export function CompanyStats() {
  return (
    <section className="py-24 bg-primary text-white px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* 
        FIXED BACKGROUND TYPOGRAPHY:
        - Swapped 'right-0 bottom-0' to 'right-4 bottom-2 sm:right-12 sm:bottom-4' to clear the center workspace.
        - Adjusted opacity tint to text-white/5 for a tight, high-contrast crisp depth factor without washed out bleedout.
      */}
      <div className="absolute right-4 bottom-2 sm:right-12 sm:bottom-4 text-[14vw] font-serif font-black text-white/5 leading-none pointer-events-none uppercase select-none tracking-tighter">
        METRIC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              /* 
                COLOR TRANSITION UTILITIES:
                - Uses 'border-accent/30' and transitions smoothly to full 'border-accent' on hover.
              */
              className="flex flex-col border-l border-accent/30 pl-6 space-y-3 group hover:border-accent transition-colors duration-300"
            >
              <span className="font-luxury-meta tracking-widest text-accent">
                {stat.focus}
              </span>

              {/* Numbers transition directly to your accent theme token color upon hover */}
              <span className="text-6xl sm:text-7xl font-serif font-light tracking-tighter text-white group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </span>

              <span className="font-luxury-nav tracking-[0.15em] text-white/80 leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
