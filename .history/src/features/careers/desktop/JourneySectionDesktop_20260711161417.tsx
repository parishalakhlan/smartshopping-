"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { journeySteps } from "@/features/careers/data/data";

export const JourneySectionDesktop: React.FC = () => {
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  return (
    <section
      id="journey"
      className="py-20 bg-background-secondary/30 border-b border-border-main hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left space-y-3 mb-12">
          <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
            Career Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Your Growth Journey
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm font-normal leading-relaxed">
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
                    ? "bg-navbar-active border-navbar-active text-white"
                    : "bg-background-main border-border-main text-text-primary hover:border-border-hover"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    activeJourneyStep === index
                      ? "text-accent"
                      : "text-text-primary/40"
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

          <div className="col-span-8 bg-background-main border border-border-main p-8 shadow-sm text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-border-main pb-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest block">
                      Phase
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-text-primary">
                      {journeySteps[activeJourneyStep].role}
                    </h3>
                  </div>
                  <span className="font-serif text-4xl font-extrabold text-text-primary/10">
                    {journeySteps[activeJourneyStep].stage}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                    Key Skills:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {journeySteps[activeJourneyStep].skills.map(
                      (skill, idx) => (
                        <span
                          key={idx}
                          className="bg-background-secondary text-text-primary text-[11px] font-medium px-2.5 py-1 border border-border-main/5"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                      Responsibilities:
                    </span>
                    <p className="text-xs text-text-secondary font-normal leading-relaxed">
                      {journeySteps[activeJourneyStep].responsibilities}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                      Growth Opportunity:
                    </span>
                    <p className="text-xs text-text-secondary font-normal leading-relaxed">
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
