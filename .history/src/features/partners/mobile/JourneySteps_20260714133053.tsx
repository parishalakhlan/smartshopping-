"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { partnersConfig } from "@/features/partners/partners.data";

interface JourneyStepsProps {
  config?: typeof partnersConfig;
}

export default function JourneySteps({
  config = partnersConfig,
}: JourneyStepsProps) {
  const [openStep, setOpenStep] = useState<string | null>(
    config.journeyStations[0]?.id || null,
  );

  return (
    <section className="py-20 px-8 bg-background-main flex flex-col space-y-10">
      {/* Editorial Header Block */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-medium">
          Onboarding Pipelines
        </span>
        <h2 className="text-3xl font-extralight text-text-primary tracking-tight leading-tight">
          Sequential Stations
        </h2>
      </div>

      {/* Luxury Minimalist Timeline/Accordion Interface */}
      <div className="flex flex-col border-t border-text-primary/5">
        {config.journeyStations.map((station) => {
          const isOpen = openStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setOpenStep(isOpen ? null : station.id)}
              className="bg-transparent border-b border-text-primary/5 py-6 transition-all duration-300 group select-none cursor-pointer"
            >
              {/* Flex Header with Asymmetric Sizing */}
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                  <span className="text-[10px] md:text-xs font-mono text-text-muted/60 tracking-wider">
                    {station.step}
                  </span>
                  <span className="text-sm md:text-base text-text-primary font-light tracking-tight transition-colors duration-300 group-hover:text-text-primary/80">
                    {station.phase}
                  </span>
                </div>

                <span
                  className={`text-text-muted text-[10px] font-light transition-transform duration-500 ease-out select-none block w-5 h-5 flex items-center justify-center ${
                    isOpen
                      ? "rotate-45 text-accent"
                      : "group-hover:text-text-secondary"
                  }`}
                >
                  ＋
                </span>
              </div>

              {/* Animated Reveal Container */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pl-[44px] md:pl-[68px] pr-4 space-y-4"
                  >
                    <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                      {station.process}
                    </p>

                    <div className="text-[10px] font-mono uppercase tracking-widest text-accent/80 pt-1">
                      Window: {station.timeline}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
