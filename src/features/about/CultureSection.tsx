"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const BELIEF_PILLARS = [
  {
    id: "belonging",
    num: "01",
    title: "Inherent Belonging",
    excerpt:
      "True style is not an exclusive club reserved for tier-one environments. Every community deserves a seat at the global cultural table.",
    extended:
      "We build environments that serve as local neighborhood anchors. When an individual steps through our doors, they are not just entering a retail footprint—they are claiming their rightful space within the modern global fashion dialogue.",
  },
  {
    id: "accessibility",
    num: "02",
    title: "Radical Access",
    excerpt:
      "Proximity should never dictate the boundaries of individual self-expression or personal style.",
    extended:
      "We eliminate the geographical tax on fashion. By establishing authentic premium environments directly within emerging clusters, we make high-tier craftsmanship an immediate, everyday local reality.",
  },
  {
    id: "trust",
    num: "03",
    title: "Absolute Trust",
    excerpt:
      "Honoring relationships through uncompromised brand authenticity and highly considered structural designs.",
    extended:
      "We refuse to offer watered-down selections for regional audiences. Every textile, layout, and collection is delivered to the exact same rigorous global standards found in fashion capitals worldwide.",
  },
  {
    id: "confidence",
    num: "04",
    title: "Everyday Confidence",
    excerpt:
      "Fashion is simply the medium; the ultimate objective is the realization of individual agency.",
    extended:
      "The correct clothing changes how a person stands, speaks, and occupies a room. We exist to provide the premium armor required for individuals to step into their daily ambitions with absolute certainty.",
  },
];

export function CultureSection() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section
      id="our-beliefs"
      className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Frame */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block mb-4">
            FOUNDATIONAL GROUNDING
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
            Four Belief Pillars <br />
            Governing Our Action.
          </h2>
        </div>

        {/* Interactive Philosophy Stack Accordion */}
        <div className="w-full border-t border-[#163B65]/10 font-sans">
          {BELIEF_PILLARS.map((pillar) => {
            const isOpen = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                className="border-b border-[#163B65]/10 py-6 sm:py-8 transition-colors duration-300"
              >
                <div
                  onClick={() => setActivePillar(isOpen ? null : pillar.id)}
                  className="flex justify-between items-center cursor-pointer group gap-6 select-none"
                >
                  <div className="flex items-center gap-x-6 sm:gap-x-12">
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#F97316] tracking-widest block py-1">
                      {pillar.num}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#163B65] font-bold group-hover:text-[#F97316] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#163B65] group-hover:bg-[#163B65] group-hover:text-white transition-colors duration-300 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Progressive Reveal Drawer Canvas */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden pl-6 sm:pl-[92px] pr-4 max-w-4xl"
                    >
                      <div className="pt-4 pb-2 text-[#475569] text-base sm:text-lg leading-relaxed font-normal space-y-3">
                        <p className="font-medium text-[#0F172A]">
                          {pillar.excerpt}
                        </p>
                        <p className="text-sm sm:text-base text-[#475569]/90">
                          {pillar.extended}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
