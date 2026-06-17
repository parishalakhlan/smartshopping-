"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "27+", label: "Stores Across 7 States" },
  { value: "7", label: "International Brands" },
  { value: "26", label: "Average Team Age" },
  { value: "15+", label: "Years of Excellence" },
];

export function CompanyStats() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F8F8] px-4 sm:px-8 lg:px-16 border-y border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col space-y-2 text-center lg:text-left"
            >
              <span className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-[#1F4D45]">
                {stat.value}
              </span>
              <div className="w-6 h-[1px] bg-[#E65100] mx-auto lg:mx-0 my-1" />
              <span className="text-xs font-luxury-meta tracking-widest text-[#555555] font-medium max-w-[180px] mx-auto lg:mx-0 leading-normal">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
