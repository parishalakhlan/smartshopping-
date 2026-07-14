// features/home/components/WhySmartShoppingDesktop.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditorialPillar } from "@/features/home/data/pillarsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95 },
  },
};

const MotionLink = motion.create(Link);

export default function WhySmartShoppingDesktop({
  pillars,
}: {
  pillars: EditorialPillar[];
}) {
  return (
    <section className="py-32 bg-background-main overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Editorial Section Heading */}
        <div className="max-w-4xl mb-24">
          <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
            Operational Pillars
          </span>
          <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.1]">
            Redefining The Landscape <br />
            Of Modern Curation.
          </h2>
        </div>

        {/* Minimal Grid Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 w-full border-t border-background-secondary pt-16"
        >
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              variants={blockVariants}
              className="flex flex-col justify-between h-full group"
            >
              <div className="w-full">
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-accent uppercase block mb-5">
                  {item.tag}
                </span>
                <h3 className="font-serif text-2xl text-text-primary font-bold mb-4 tracking-wide transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="font-sans text-text-secondary font-normal text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-full h-[1px] bg-background-secondary mt-10 transition-colors duration-500 group-hover:bg-text-primary/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Action Callout */}
        <div className="mt-24 text-left">
          <MotionLink
            href="/about-us"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-x-4 font-sans text-sm font-bold tracking-widest uppercase text-text-primary group"
          >
            <span>Read Our Full Story</span>
            <div className="w-11 h-11 rounded-full bg-background-secondary flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-5 h-5 shrink-0" />
            </div>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
