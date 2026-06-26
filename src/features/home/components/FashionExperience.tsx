"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MOMENTS = [
  {
    title: "Curated Spaces",
    subtitle:
      "A physical sanctuary designed to let you disconnect and discover at your own pace.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    title: "The Family Wardrobe",
    subtitle:
      "Bringing premium design together for every generation, under one roof.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

export default function FashionExperience() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-28 items-end"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
              The Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
              A Space Where Time Slows Down.
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 lg:pl-6">
            <p className="font-sans text-[#475569] font-normal text-base sm:text-lg leading-relaxed">
              {` We believe shopping shouldn't be a frictionless click or a rushed
              chore. Our stores are warm, tactile destinations where world-class
              fashion is brought directly to your neighborhood.  `}
            </p>
          </motion.div>
        </motion.div>

        {/* Immersive Visual Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {MOMENTS.map((moment, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`w-full group ${
                moment.size === "large"
                  ? "lg:col-span-7"
                  : "lg:col-span-5 lg:mt-16"
              }`}
            >
              {/* Premium Interactive Showcase Card */}
              <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] w-full overflow-hidden bg-[#F5F2EC] rounded-none shadow-sm">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority={idx === 0}
                  className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out brightness-[0.95]"
                />

                {/* Subtle scrim for reading contrast over dynamic photography */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Editorial Captions with Safe Wrapping */}
              <div className="mt-6 max-w-xl">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#163B65] font-bold mb-2 break-words whitespace-normal">
                  {moment.title}
                </h3>
                <p className="font-sans text-[#475569] text-sm sm:text-base leading-relaxed break-words whitespace-normal">
                  {moment.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
