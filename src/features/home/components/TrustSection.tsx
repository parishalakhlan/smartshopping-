"use client";

import { motion } from "framer-motion";

const DESIGN_PHILOSOPHIES = [
  {
    title: "Curated Selections",
    body: "We do not believe in infinite, mindless choices. Every piece across our environments is handpicked to meet strict international standards.",
  },
  {
    title: "Uncompromising Space",
    body: "Our locations are architectural spaces designed intentionally for deep, premium lifestyle discovery and relaxed physical exploration.",
  },
  {
    title: "Community First",
    body: "We intentionally introduce the cultural energy of premium global fashion hubs straight to the neighborhoods you call home.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95 },
  },
};

export default function TrustSection() {
  return (
    <section
      id="house-philosophy"
      className="py-24 sm:py-32 bg-[#F5F2EC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
            The House Ethos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
            Our Commitment To Creative <br />
            Retail Excellence.
          </h2>
        </div>

        {/* Minimalist Narrative Columns (Replacing Banned Metric Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full"
        >
          {DESIGN_PHILOSOPHIES.map((philosophy, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col border-t border-[#163B65]/10 pt-8 group"
            >
              {/* Step Tracking Variant Line Indicator */}
              <div className="font-sans text-[11px] font-bold tracking-widest text-[#F97316] uppercase mb-4">
                0{idx + 1}
              </div>

              <h3 className="font-serif text-2xl text-[#163B65] font-bold tracking-wide mb-4 break-words whitespace-normal">
                {philosophy.title}
              </h3>

              <p className="font-sans text-[#475569] text-base leading-relaxed font-normal break-words whitespace-normal">
                {philosophy.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
