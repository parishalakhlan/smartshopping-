"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EDITORIAL_PILLARS = [
  {
    tag: "Aesthetic // 01",
    title: "International Curation",
    desc: "Bringing world-renowned contemporary silhouettes and clean fabric expressions directly to local regional hubs.",
  },
  {
    tag: "Heritage // 02",
    title: "Exceptional Environments",
    desc: "Architectural layouts planned intentionally down to the smallest detail to ensure slow, meaningful retail discovery.",
  },
  {
    tag: "Culture // 03",
    title: "Community Connection",
    desc: "Spaces created not just to display collections, but to act as conversational anchors inside your city.",
  },
  {
    tag: "Standard // 04",
    title: "Tailored Experience",
    desc: "Attentive, non-intrusive service structures configured entirely to accommodate individual lifestyles.",
  },
];

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

export default function WhySmartShopping() {
  return (
    <section
      id="curated-pillars"
      className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Symmetric Editorial Section Heading */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
            Operational Pillars
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
            Redefining The Landscape <br />
            Of Modern Curation.
          </h2>
        </div>

        {/* Minimal Editorial List Matrix (Replacing Boxy Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full border-t border-[#F5F2EC] pt-12"
        >
          {EDITORIAL_PILLARS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={blockVariants}
              className="flex flex-col justify-between h-full group"
            >
              <div className="w-full whitespace-normal break-words">
                {/* Structural Subtle Type Tag */}
                <span className="font-sans text-[11px] font-bold tracking-widest text-[#F97316] uppercase block mb-4">
                  {item.tag}
                </span>

                {/* Heading Structure */}
                <h3 className="font-serif text-2xl text-[#163B65] font-bold mb-3 tracking-wide transition-colors duration-300 group-hover:text-[#F97316]">
                  {item.title}
                </h3>

                {/* Body Text */}
                <p className="font-sans text-[#475569] font-normal text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Sophisticated Architectural Line Accent */}
              <div className="w-full h-[1px] bg-[#F5F2EC] mt-8 transition-colors duration-500 group-hover:bg-[#163B65]/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Next-Gen Link Alignment */}
        <div className="mt-20 lg:mt-28 text-left">
          <MotionLink
            href="/about"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-x-3 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#163B65] group transition-all"
          >
            <span>Read Our Full Story</span>
            <div className="w-9 h-9 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#163B65] group-hover:bg-[#163B65] group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-4 h-4 shrink-0" />
            </div>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
