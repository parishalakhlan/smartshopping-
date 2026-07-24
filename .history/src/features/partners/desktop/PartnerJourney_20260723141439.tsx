"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { partnersConfig } from "@/features/partners/partners.data";
import SectionHeader from "@/features/partners/desktop/SectionHeader";

interface PartnerJourneyProps {
  config?: typeof partnersConfig;
}

export default function PartnerJourney({
  config = partnersConfig,
}: PartnerJourneyProps) {
  const [activeStep, setActiveStep] = useState<string | null>(
    config.journeyStations[0].id,
  );

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-24 bg-surface border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Header Section */}
      <div className="mb-16 md:mb-20">
        <SectionHeader
          badge="Deployment Pipelines"
          title="The Operational Milestones"
        />
      </div>

      {/* High-Contrast Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {config.journeyStations.map((station) => {
          const isOpen = activeStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setActiveStep(isOpen ? null : station.id)}
              className={`cursor-pointer p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between min-h-[340px] group select-none border-2 shadow-sm ${
                isOpen
                  ? "bg-card-bg border-accent"
                  : "bg-surface border-border-main hover:bg-card-bg hover:border-text-primary"
              }`}
            >
              {/* Top Accent Line Supporting Active State */}
              <div
                className={`absolute top-0 left-0 h-[4px] transition-all duration-300 ease-out ${
                  isOpen ? "w-full bg-accent" : "w-0 bg-accent group-hover:w-16"
                }`}
              />

              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b-2 border-border-main pb-3">
                  <span className="text-xs tracking-[0.2em] font-extrabold text-accent">
                    {station.step}
                  </span>
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] font-extrabold transition-colors duration-300 ${
                      isOpen ? "text-accent" : "text-text-primary"
                    }`}
                  >
                    {station.phase}
                  </span>
                </div>

                <AnimatePresence initial={false} mode="wait">
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-5"
                    >
                      <p className="text-sm sm:text-base text-text-primary leading-relaxed font-medium">
                        {station.process}
                      </p>

                      {/* Duration Matrix Callout */}
                      <div className="p-3.5 bg-surface border-2 border-border-main border-l-4 border-l-accent shadow-sm">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent block font-extrabold">
                          Duration Matrix
                        </span>
                        <span className="text-sm text-text-primary block mt-1 font-bold">
                          {station.timeline}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-sm text-text-primary font-medium line-clamp-3 leading-relaxed transition-colors duration-300">
                      Click to open onboarding sequence and auditing protocols.
                    </p>
                  )}
                </AnimatePresence>
              </div>

              {isOpen && (
                <div className="p-3.5 bg-surface border-2 border-border-main mt-6 shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent block font-extrabold">
                    Support Protocol
                  </span>
                  <p className="text-xs sm:text-sm text-text-primary font-bold mt-1 leading-relaxed">
                    {station.supportOffered}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
