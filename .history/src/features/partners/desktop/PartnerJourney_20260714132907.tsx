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
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-background-main">
      {/* Editorial Header Section */}
      <div className="mb-16 md:mb-20">
        <SectionHeader
          badge="Deployment Pipelines"
          title="The Operational Milestones"
        />
      </div>

      {/* Asymmetric Architectonic Grid Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {config.journeyStations.map((station) => {
          const isOpen = activeStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setActiveStep(isOpen ? null : station.id)}
              className={`cursor-pointer p-8 transition-all duration-500 ease-out relative flex flex-col justify-between min-h-[340px] group select-none ${
                isOpen ? "bg-surface" : "bg-card-bg hover:bg-surface/50"
              }`}
            >
              {/* Top Accent Line Supporting Active State Quietly */}
              <div
                className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ease-out ${
                  isOpen
                    ? "w-full bg-accent"
                    : "w-0 bg-text-primary/10 group-hover:w-12"
                }`}
              />

              <div className="space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-[0.2em] font-light text-text-muted">
                    {station.step}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                      isOpen
                        ? "text-accent"
                        : "text-text-muted group-hover:text-text-secondary"
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
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="space-y-6"
                    >
                      <p className="text-sm text-text-secondary leading-relaxed font-light">
                        {station.process}
                      </p>
                      <div className="pt-4 border-t border-text-primary/5">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted block">
                          Duration Matrix
                        </span>
                        <span className="text-sm text-text-primary block mt-1 font-light">
                          {station.timeline}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-sm text-text-secondary font-light line-clamp-3 leading-relaxed transition-colors duration-300 group-hover:text-text-primary">
                      Click to open onboarding sequence and auditing protocols.
                    </p>
                  )}
                </AnimatePresence>
              </div>

              {isOpen && (
                <div className="pt-4 border-t border-text-primary/5 mt-6">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted block">
                    Support Protocol
                  </span>
                  <p className="text-xs text-text-secondary font-light mt-1 leading-relaxed">
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
