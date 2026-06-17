"use client";
import { motion } from "framer-motion";

const METRICS = [
  {
    stat: "27+",
    title: "Premium Stores",
    desc: "Across North India",
  },
  {
    stat: "7",
    title: "States Coverage",
    desc: "Punjab, Haryana, Rajasthan & More",
  },
  {
    stat: "7",
    title: "International Brands",
    desc: "Bestseller & Celio Portfolio",
  },
  {
    stat: "15+",
    title: "Years Experience",
    desc: "Since 2009",
  },
];

export default function RetailScale() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#F97316] font-sans font-semibold tracking-wider text-xs uppercase block mb-2">
            RETAIL SCALE & PRESENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal">
            Fashion Retail At Scale
          </h2>
        </div>

        {/* Horizontal Premium Metrics Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-6 border-y border-slate-200">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-start"
            >
              <span className="font-serif text-5xl lg:text-6xl text-[#163B65] font-light tracking-tight mb-2 block">
                {metric.stat}
              </span>
              <h3 className="font-sans font-semibold text-[#0F172A] text-base uppercase tracking-wider mb-1">
                {metric.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 font-light">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle Regional Footprint Flag */}
        <div className="mt-8 text-center md:text-right">
          <p className="font-sans text-xs text-slate-400 uppercase tracking-widest">
            Strategic footprints across Tier-2 & Tier-3 lifestyle clusters •
            Empowering Aspirations
          </p>
        </div>
      </div>
    </section>
  );
}
