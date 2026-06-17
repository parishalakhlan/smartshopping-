"use client";

import React from "react";
import { motion } from "framer-motion";

const milestoneData = [
  {
    year: "2009",
    title: "Company Founded",
    desc: "Launches the blueprint with a single 900 sq ft boutique space in Sirsa.",
  },
  {
    year: "2011",
    title: "Brand Acquisition",
    desc: "Secures first corporate portfolio partnership with marquee names.",
  },
  {
    year: "2013",
    title: "Expansion Phase",
    desc: "Establishes multi-city footprint across strategic sub-metro corridors.",
  },
  {
    year: "2015",
    title: "New Brand Launch",
    desc: "Introduces dedicated modern everyday high-street retail footprints.",
  },
  {
    year: "2018",
    title: "Multi-State Presence",
    desc: "Crosses borders into adjacent northern territories with 12 operational spaces.",
  },
  {
    year: "2022",
    title: "Major Retail Growth",
    desc: "Scales logistic arrays and flags multi-tier flagship experiences.",
  },
  {
    year: "2026",
    title: "27+ Stores Ecosystem",
    desc: "Solidifies standing as North India's benchmark fashion collective.",
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100]">
          THE CHRONICLE
        </span>
        <h2 className="text-3xl sm:text-4xl font-luxury-heading tracking-wide mt-2 text-[#111111]">
          A Journey in Motion
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Central visual line connector for desktop scopes */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#EAEAEA] -translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {milestoneData.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className={`flex flex-col md:flex-row items-start relative ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline node node connector point */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#E65100] border-2 border-white rounded-full -translate-x-1/2 mt-3 z-10 shadow-sm" />

                {/* Left/Right content wrapper blocks */}
                <div
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}
                >
                  <span className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-[#1F4D45] block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-md font-luxury-nav tracking-widest text-[#111111] font-medium mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-[#555555] font-light max-w-sm leading-relaxed tracking-wide inline-block">
                    {milestone.desc}
                  </p>
                </div>

                {/* Counterbalance dead container element to maintain geometric integrity */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
