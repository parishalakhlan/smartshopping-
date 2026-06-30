// features/home/components/TrustSectionDesktop.tsx
"use client";

import { motion } from "framer-motion";
import { TrustSectionConfig } from "@/features/home/data/trustSectionData";

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

export default function TrustSectionDesktop({
  config,
}: {
  config: TrustSectionConfig;
}) {
  return (
    <section className="py-32 bg-[#F5F2EC] overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-24">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-4">
            {config.tagline}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
            Our Commitment To Creative <br />
            Retail Excellence.
          </h2>
        </div>

        {/* Minimalist Narrative Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-12 lg:gap-16 w-full"
        >
          {config.philosophies.map((philosophy, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col border-t border-[#163B65]/10 pt-8"
            >
              <div className="font-sans text-xs font-bold tracking-widest text-[#F97316] uppercase mb-4">
                0{idx + 1}
              </div>

              <h3 className="font-serif text-2xl text-[#163B65] font-bold tracking-wide mb-4">
                {philosophy.title}
              </h3>

              <p className="font-sans text-[#475569] text-base leading-relaxed font-normal">
                {philosophy.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
