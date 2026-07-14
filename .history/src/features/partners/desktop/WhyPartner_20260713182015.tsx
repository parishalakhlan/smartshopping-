import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pillars } from "@/features/partners/partners.data";
import SectionHeader from "@/features/partners/desktop/SectionHeader";
import { MotionSlide } from "@/features/partners/desktop/MotionWrapper";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function WhyPartner() {
  const [activePillar, setActivePillar] = useState<string>(pillars[0].id);

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5">
      <SectionHeader
        badge="Strategic Foundations"
        title="Why Partner With Us"
      />

      <div className="grid grid-cols-12 gap-12 items-start">
        {/* Navigation Sidebar */}
        <div className="col-span-5 space-y-2 border-l border-white/10">
          {pillars.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className="w-full text-left py-6 px-6 relative block group transition-all"
                aria-expanded={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillarBar"
                    className="absolute inset-y-0 left-0 w-[2px] bg-[#E25822]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <h3
                  className={`text-xl font-light tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-white font-normal"
                      : "text-stone-500 group-hover:text-stone-300"
                  }`}
                >
                  {pillar.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Canvas Presentation */}
        <div className="col-span-7 bg-[#131315] p-10 relative overflow-hidden min-h-[480px] flex flex-col justify-between border border-white/5">
          <AnimatePresence mode="wait">
            {pillars.map((pillar) => {
              if (pillar.id !== activePillar) return null;
              return (
                <MotionSlide key={pillar.id}>
                  <div className="space-y-8 flex flex-col justify-between h-full">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-stone-300 font-light leading-relaxed text-base">
                          {pillar.description}
                        </p>
                        <div className="pt-4 border-t border-white/10">
                          <span className="text-xs text-stone-500 uppercase tracking-widest block">
                            Measurable Impact
                          </span>
                          <span className="text-xl text-[#E25822] font-medium block mt-1">
                            {pillar.impact}
                          </span>
                        </div>
                      </div>
                      <div className="relative h-48 w-full overflow-hidden border border-white/10">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover scale-100 hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className="bg-black/40 p-5 border-l-2 border-stone-600 mt-6">
                      <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-1">
                        Operational Reality
                      </span>
                      <p className="text-xs text-stone-400 italic font-light leading-relaxed">
                        {pillar.example}
                      </p>
                    </div>
                  </div>
                </MotionSlide>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
