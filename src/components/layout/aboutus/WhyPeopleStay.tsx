"use client";

import React from "react";
import { motion } from "framer-motion";

const dimensions = [
  {
    title: "Vertical Growth",
    desc: "Over 40% of our current flagship operational management climbed directly from internal store floor coordinates.",
  },
  {
    title: "Absolute Ownership",
    desc: "We run modular floor parameters. Teams manage targets as self-contained micro-ventures.",
  },
  {
    title: "Regional Purpose",
    desc: "Elevating lifestyle access across sub-metro landscapes changes regional identity dynamics directly.",
  },
];

export function WhyPeopleStay() {
  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-[#EAEAEA] pb-8 mb-16">
          <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100] block mb-2">
            RETENTION MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-luxury-heading tracking-wide text-[#111111]">
            Why People Stay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {dimensions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="text-xs font-mono tracking-widest text-[#999999]">
                0{idx + 1} /
              </div>
              <h3 className="text-md font-luxury-nav tracking-widest text-[#1F4D45] font-semibold">
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
