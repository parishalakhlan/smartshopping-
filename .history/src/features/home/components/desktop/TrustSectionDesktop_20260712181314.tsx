"use client";

import { motion } from "framer-motion";
import { TrustSectionConfig } from "@/features/home/data/trustSectionData";

interface TrustSectionDesktopProps {
  config: TrustSectionConfig;
}

export default function TrustSectionDesktop({
  config,
}: TrustSectionDesktopProps) {
  const { section, philosophies, animation } = config;

  return (
    <section className="py-32 bg-background-secondary overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-24">
          <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-4">
            {section.tagline}
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.1]">
            {section.headingLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < section.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* Minimalist Narrative Columns */}
        <motion.div
          variants={animation.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-12 lg:gap-16 w-full"
        >
          {philosophies.map((philosophy, idx) => (
            <motion.div
              key={idx}
              variants={animation.item}
              className="flex flex-col border-t border-border-main pt-8"
            >
              <div className="font-sans text-xs font-bold tracking-widest text-accent uppercase mb-4">
                {philosophy.numberPrefix}
              </div>

              <h3 className="font-serif text-2xl text-text-primary font-bold tracking-wide mb-4">
                {philosophy.title}
              </h3>

              <p className="font-sans text-text-secondary text-base leading-relaxed font-normal">
                {philosophy.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
