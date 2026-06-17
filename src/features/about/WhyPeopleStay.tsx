"use client";

import React from "react";
import { motion } from "framer-motion";

const stayReasons = [
  {
    metric: "40%+",
    title: "Internal Promoted Leaders",
    desc: "Nearly half of our store management and operational leads scaled directly from initial entry-level floor coordinates.",
  },
  {
    metric: "100%",
    title: "Autonomous Core Units",
    desc: "We completely reject micro-management. Local branch leaders run inventory parameters based entirely on regional insights.",
  },
  {
    metric: "01",
    title: "Regional Impact Purpose",
    desc: "We introduce tier-1 fashion accessibility to emerging markets, changing regional lifestyle paths directly.",
  },
];

export function WhyPeopleStay() {
  return (
    <section className="py-28 bg-white px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="border-b-2 border-[#1F4D45] pb-6 mb-16 flex flex-col sm:flex-row justify-between items-baseline gap-4">
          <div>
            <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100] font-bold block mb-1">
              RETENTION AUDIT
            </span>
            <h2 className="text-3xl font-luxury-heading tracking-wide text-[#111111]">
              Why People Build Careers Here
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest text-[#555555]">
            PROVEN METRICS / 2026 AUDIT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stayReasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4 relative pl-6 border-l border-[#EAEAEA] hover:border-[#E65100] transition-colors duration-300"
            >
              <div className="text-4xl font-serif font-light text-[#1F4D45] tracking-tight">
                {item.metric}
              </div>
              <h3 className="text-xs font-luxury-nav tracking-widest font-bold text-[#111111] uppercase">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed tracking-wide">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
