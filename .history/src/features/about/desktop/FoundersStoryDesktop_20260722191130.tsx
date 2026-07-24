// components/FoundersStoryDesktop.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  FOUNDERS_DATA,
  FoundersStoryProps,
} from "@/features/about/data/founders-shared";

export function FoundersStoryDesktop({
  imageSrc = FOUNDERS_DATA.defaultImage,
}: FoundersStoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="the-visionaries"
      className="py-24 sm:py-32 bg-surface overflow-hidden transition-colors duration-300 border-t border-border-main"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Portrait Asset Container */}
          <div className="col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-card-bg border-2 border-border-main shadow-sm"
            >
              <Image
                src={imageSrc}
                alt="Vikram Singh and Vinod Kumar portrait"
                fill
                sizes="40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/40 -z-10 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          </div>

          {/* Core Content Engine Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="col-span-7 space-y-8 font-sans"
          >
            <div className="space-y-3">
              <span className="text-accent font-bold tracking-[0.25em] text-xs uppercase block">
                {FOUNDERS_DATA.sectionLabel}
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-text-primary font-bold tracking-tight leading-[1.15]">
                {FOUNDERS_DATA.headline}
              </h2>
            </div>

            <div className="text-text-primary text-base sm:text-lg leading-relaxed space-y-4 font-medium">
              <p>{FOUNDERS_DATA.p1}</p>
              <blockquote className="italic font-serif text-xl sm:text-2xl text-text-primary font-bold tracking-tight border-l-4 border-accent pl-5 py-2 my-6 bg-card-bg border-y border-r border-border-main">
                {FOUNDERS_DATA.quote}
              </blockquote>
            </div>

            <div className="border-t-2 border-border-main pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest text-text-primary hover:text-accent active:text-accent transition-colors duration-300 focus:outline-none select-none cursor-pointer bg-card-bg px-3.5 py-2 border border-border-main shadow-xs"
              >
                <span>
                  {isExpanded
                    ? FOUNDERS_DATA.btnCollapse
                    : FOUNDERS_DATA.btnExpand}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-accent" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 text-base text-text-primary font-medium space-y-4 leading-relaxed max-w-2xl bg-card-bg p-6 border-2 border-border-main mt-4">
                      <p>{FOUNDERS_DATA.expandedP1}</p>
                      <p>{FOUNDERS_DATA.expandedP2}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
