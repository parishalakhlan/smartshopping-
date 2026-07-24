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
    <section className="py-20 px-6 sm:px-8 md:px-16 lg:px-24 bg-surface border-t-2 border-b-2 border-border-main flex flex-col space-y-10 transition-colors duration-300">
      {/* Editorial Header Block */}
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-accent block font-extrabold">
          Onboarding Pipelines
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-tight">
          Sequential Stations
        </h2>
      </div>

      {/* High-Contrast Timeline/Accordion Interface */}
      <div className="flex flex-col space-y-4">
        {config.journeyStations.map((station) => {
          const isOpen = openStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setOpenStep(isOpen ? null : station.id)}
              className={`p-5 md:p-6 transition-all duration-300 group select-none cursor-pointer border-2 shadow-sm ${
                isOpen
                  ? "bg-card-bg border-accent border-l-8"
                  : "bg-surface border-border-main hover:bg-card-bg hover:border-text-primary"
              }`}
            >
              {/* Flex Header */}
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-4 md:gap-6 flex-1">
                  <span className="text-xs md:text-sm font-mono font-extrabold text-accent tracking-wider">
                    {station.step}
                  </span>
                  <span className="text-base md:text-lg text-text-primary font-bold tracking-tight transition-colors duration-300">
                    {station.phase}
                  </span>
                </div>

                <span
                  className={`text-xs font-bold transition-all duration-300 select-none w-7 h-7 flex items-center justify-center rounded-none border-2 shadow-sm ${
                    isOpen
                      ? "bg-accent text-card-bg border-accent rotate-45"
                      : "bg-surface text-text-primary border-border-main group-hover:border-text-primary"
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
                    animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden pl-0 md:pl-10 pr-2 space-y-4 border-t-2 border-border-main pt-4"
                  >
                    <p className="text-sm md:text-base text-text-primary font-medium leading-relaxed max-w-3xl">
                      {station.process}
                    </p>

                    <div className="p-3 bg-surface border-2 border-border-main border-l-4 border-l-accent inline-block shadow-sm">
                      <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-accent block">
                        Window: {station.timeline}
                      </span>
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
