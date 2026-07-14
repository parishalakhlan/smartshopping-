// features/home/components/FashionExperienceDesktop.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExperienceData } from "@/features/home/data/fashionExperienceData";

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

export default function FashionExperienceDesktop({
  data,
}: {
  data: ExperienceData;
}) {
  return (
    <section className="py-32 bg-background-main overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Editorial Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-12 gap-8 mb-24 items-end"
        >
          <motion.div variants={itemVariants} className="col-span-7">
            <span className="text-accent font-sans font-medium tracking-[0.25em] text-xs uppercase block mb-4">
              {data.tagline}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.1]">
              {data.headerTitle}
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-5 pl-6">
            <p className="font-sans text-text-secondary font-normal text-lg leading-relaxed">
              {data.headerDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* Asymmetrical Masonry Layout Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-12 gap-12 items-start"
        >
          {data.moments.map((moment, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`w-full group ${isEven ? "col-span-7" : "col-span-5 mt-20"}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    sizes="50vw"
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1400ms] ease-out brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                <div className="mt-8 max-w-xl">
                  <h3 className="font-serif text-3xl text-text-primary font-bold mb-3">
                    {moment.title}
                  </h3>
                  <p className="font-sans text-text-secondary text-base leading-relaxed">
                    {moment.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
