"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { journeySteps } from "@/features/careers/data/data";

export const JourneySectionDesktop: React.FC = () => {
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  return (
    <section
      id="journey"
      className="py-20 bg-[#F5F2EC]/30 border-b border-[#163B65]/10 hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left space-y-3 mb-12">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
            Career Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
            Your Growth Journey
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
            Track how a self-driven candidate moves from exploratory internships
            into definitive executive leadership.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 flex flex-col gap-3">
            {journeySteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveJourneyStep(index)}
                className={`p-4 border text-left transition-all rounded-none flex items-center space-x-3 group relative ${
                  activeJourneyStep === index
                    ? "bg-[#163B65] border-[#163B65] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-[#163B65]/10 text-[#163B65] hover:border-[#163B65]/40"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    activeJourneyStep === index
                      ? "text-[#F97316]"
                      : "text-[#163B65]/40"
                  }`}
                >
                  {step.stage}
                </span>
                <span className="text-xs font-bold tracking-wide uppercase truncate">
                  {step.role}
                </span>
              </button>
            ))}
          </div>

          <div className="col-span-8 bg-[#FFFFFF] border border-[#163B65]/10 p-8 shadow-sm text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#163B65]/10 pb-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">
                      Phase
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#163B65]">
                      {journeySteps[activeJourneyStep].role}
                    </h3>
                  </div>
                  <span className="font-serif text-4xl font-extrabold text-[#163B65]/10">
                    {journeySteps[activeJourneyStep].stage}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                    Key Skills:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {journeySteps[activeJourneyStep].skills.map(
                      (skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F5F2EC] text-[#163B65] text-[11px] font-medium px-2.5 py-1 border border-[#163B65]/5"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block">
                      Responsibilities:
                    </span>
                    <p className="text-xs text-[#475569] font-normal leading-relaxed">
                      {journeySteps[activeJourneyStep].responsibilities}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                      Growth Opportunity:
                    </span>
                    <p className="text-xs text-[#475569] font-normal leading-relaxed">
                      {journeySteps[activeJourneyStep].opportunity}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
