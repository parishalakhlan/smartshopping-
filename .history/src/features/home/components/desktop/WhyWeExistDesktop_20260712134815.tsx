// features/home/components/WhyWeExistDesktop.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { WhyWeExistConfig } from "@/features/home/data/whyWeExistData";

export default function WhyWeExistDesktop({
  config,
}: {
  config: WhyWeExistConfig;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-32 bg-background-main overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Asymmetric Fashion Portraiture */}
          <div className="col-span-5 relative aspect-[3/4] w-full bg-background-secondary overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={config.imageSrc}
                alt="Smart Shopping Premium Lifestyle Presentation"
                fill
                sizes="40vw"
                className="object-cover object-center brightness-[0.95]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Premium Editorial Content Disclosure Canvas */}
          <div className="col-span-7 flex flex-col justify-start pt-4">
            <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
              {config.tagline}
            </span>

            <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.1] mb-10">
              {config.heading}
            </h2>

            <div className="font-sans text-text-secondary text-base lg:text-lg leading-relaxed max-w-2xl space-y-6">
              <p className="font-medium text-text-primary">
                {config.leadParagraph}
              </p>

              <p>{config.coreParagraph}</p>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 border-t border-background-secondary text-text-secondary font-normal">
                      {config.expandedParagraph}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimalist Editorial Expansion Mechanism */}
              <div className="pt-8">
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ gap: "16px" }}
                  className="inline-flex items-center gap-3 font-sans text-sm font-bold tracking-widest uppercase text-text-primary group transition-all"
                >
                  <span>{isExpanded ? "Read Less" : "Expand Narrative"}</span>
                  <div className="w-9 h-9 rounded-full bg-background-secondary flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors duration-300">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0" />
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
