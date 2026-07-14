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
      className="py-24 sm:py-32 bg-background-secondary overflow-hidden"
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
              className="relative aspect-[4/5] w-full overflow-hidden bg-text-primary/5 border border-border-main"
            >
              <Image
                src={imageSrc}
                alt="Vikram Singh and Vinod Kumar portrait"
                fill
                sizes="40vw"
                className="object-cover grayscale contrast-[1.02] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:rotate-1"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navbar-active/40 to-transparent pointer-events-none" />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
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
              <span className="text-accent font-semibold tracking-[0.25em] text-xs uppercase block">
                {FOUNDERS_DATA.sectionLabel}
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-text-primary font-bold tracking-tight leading-[1.15]">
                {FOUNDERS_DATA.headline}
              </h2>
            </div>

            <div className="text-text-secondary text-base sm:text-lg leading-relaxed space-y-4 font-normal">
              <p>{FOUNDERS_DATA.p1}</p>
              <p className="italic font-serif text-xl sm:text-2xl text-text-primary font-semibold tracking-tight border-l-2 border-accent pl-4 py-1 my-6">
                {FOUNDERS_DATA.quote}
              </p>
            </div>

            <div className="border-t border-border-main pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none select-none cursor-pointer"
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
                  <ChevronDown className="w-4 h-4" />
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
                    <div className="pt-4 text-base text-text-secondary/90 space-y-4 leading-relaxed max-w-2xl">
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
