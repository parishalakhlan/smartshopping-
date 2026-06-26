"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface FoundersStoryProps {
  imageSrc?: string;
}

export function FoundersStory({
  imageSrc = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
}: FoundersStoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="the-visionaries"
      className="py-24 sm:py-32 bg-[#F5F2EC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Section 4: Portrait Hover Depth Asset */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#163B65]/5 border border-[#163B65]/10"
            >
              <Image
                src={imageSrc}
                alt="Vikram Singh and Vinod Kumar portrait"
                fill
                sizes="(max-w-7xl) 100vw, 40vw"
                className="object-cover grayscale contrast-[1.02] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:rotate-1"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Minimalist Visual Accent Shadow Tag */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#F97316]/20 -z-10 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          </div>

          {/* Section 4: Personal Philosophy & Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-8 font-sans"
          >
            <div className="space-y-3">
              <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block">
                THE FOUNDING PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight leading-[1.15]">
                Driven By Belief, Not Infrastructure.
              </h2>
            </div>

            {/* Core Story Sequence */}
            <div className="text-[#475569] text-base sm:text-lg leading-relaxed space-y-4 font-normal">
              <p>
                When Vikram Singh and Vinod Kumar looked closely at the premium
                lifestyle spaces across North India, they discovered a
                recurring, artificial divide. World-class curation and immersive
                lifestyle presentation fields remained anchored strictly within
                major metropolitan boundaries.
              </p>

              <p className="italic font-serif text-xl sm:text-2xl text-[#163B65] font-semibold tracking-tight border-l-2 border-[#F97316] pl-4 py-1 my-6">
                &ldquo;A neighborhood should never have to compromise its
                regional identity or individual confidence because of geographic
                logistics.&rdquo;
              </p>
            </div>

            {/* Interactive Section 4 Story Expansion Controls */}
            <div className="border-t border-[#163B65]/10 pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest text-[#163B65] hover:text-[#F97316] transition-colors duration-300 focus:outline-none select-none cursor-pointer"
              >
                <span>
                  {isExpanded ? "Collapse Background" : "Read Full Story"}
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
                    <div className="pt-4 text-sm sm:text-base text-[#475569]/90 space-y-4 leading-relaxed max-w-2xl">
                      <p>
                        Rejecting typical retail corporate timelines, they chose
                        to invest alternative human resources directly into
                        towns like Hisar and surrounding regions. They believed
                        that local families deserved exactly the same aesthetic
                        environments, premium collections, and uncompromised
                        dignity traditionally found in major capital cities.
                      </p>
                      <p>
                        Today, their collaborative leadership remains structured
                        around this singular realization: Smart Shopping is not
                        merely an ongoing expansion project, it is a localized
                        cultural equalizer.
                      </p>
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
