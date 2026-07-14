import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyStations } from "@/features/partners/partners.data";
import SectionHeader from "../shared/SectionHeader";

export default function PartnerJourney() {
  const [activeStep, setActiveStep] = useState<string | null>(
    journeyStations[0].id,
  );

  return (
    <section className="py-32 px-24 bg-black border-b border-white/5">
      <SectionHeader
        badge="Deployment Pipelines"
        title="The Operational Milestones"
      />

      <div className="grid grid-cols-4 gap-6">
        {journeyStations.map((station) => {
          const isOpen = activeStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setActiveStep(isOpen ? null : station.id)}
              className={`cursor-pointer p-8 border transition-all duration-500 relative flex flex-col justify-between min-h-[300px] ${
                isOpen
                  ? "bg-[#131315] border-[#E25822]"
                  : "bg-[#0A0A0B] border-white/5 hover:border-white/15"
              }`}
            >
              <div>
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-mono tracking-wider text-stone-500">
                    {station.step}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#E25822] font-medium">
                    {station.phase}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <p className="text-xs text-stone-300 leading-relaxed font-light">
                        {station.process}
                      </p>
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-[10px] uppercase text-stone-500 block">
                          Duration Matrix
                        </span>
                        <span className="text-xs text-white block mt-0.5">
                          {station.timeline}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-sm text-stone-400 font-light line-clamp-3">
                      Click to open onboarding sequence and auditing protocols.
                    </p>
                  )}
                </AnimatePresence>
              </div>

              {isOpen && (
                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-[10px] uppercase text-stone-500 block">
                    Support Protocol
                  </span>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
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
