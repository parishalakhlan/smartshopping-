"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, Compass, Sparkles } from "lucide-react";
import { journeySteps } from "@/features/careers/data/data";

const LADDER_EASE = [0.25, 1, 0.5, 1];

export const JourneySectionMobile: React.FC = () => {
  // Global Exclusive Ladder Tracking Matrix: First step active by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="journey-mobile"
      className="w-full bg-[#F5F2EC]/30 py-12 px-4 border-b border-[#163B65]/10 font-sans lg:hidden"
    >
      {/* Editorial Title Header */}
      <div className="text-left space-y-2 pb-6 border-b border-[#163B65]/10 mb-8">
        <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
          Career Journey
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#163B65] tracking-tight">
          The Interactive Career Ladder
        </h2>
        <p className="text-[#475569] text-xs font-normal leading-relaxed">
          Tap a milestone tier to step upward and preview real expected
          milestones, skill acquisitions, and professional progression curves.
        </p>
      </div>

      {/* The Vertical Ladder Framework */}
      <div className="relative pl-4 space-y-4 border-l border-[#163B65]/10 ml-2">
        {journeySteps.map((step, index) => {
          const isExpanded = expandedIndex === index;
          const sectionPanelId = `ladder-tier-${index}`;

          return (
            <div key={index} className="relative">
              {/* Active Segment Vertical Line Overlay Indicator */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute -left-[17px] top-0 w-[2px] bg-[#F97316] z-10"
                  />
                )}
              </AnimatePresence>

              {/* Sculpted Milestone Connector Node */}
              <div
                className={`absolute -left-[21px] top-4 w-2 h-2 rounded-none transition-colors duration-300 z-20 ${
                  isExpanded ? "bg-[#F97316]" : "bg-[#163B65]/30"
                }`}
              />

              {/* Milestone Box Frame */}
              <motion.div
                animate={{ x: isExpanded ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                className={`border transition-all duration-300 rounded-none ${
                  isExpanded
                    ? "border-[#163B65] bg-[#FFFFFF] shadow-sm"
                    : "border-[#163B65]/10 bg-[#FFFFFF]"
                }`}
              >
                {/* Micro-Lift Interactive Anchor Trigger */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={sectionPanelId}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                  style={{ minHeight: "48px" }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-xs font-bold ${isExpanded ? "text-[#F97316]" : "text-[#163B65]/40"}`}
                    >
                      {step.stage}
                    </span>
                    <h3 className="font-serif text-sm font-bold tracking-wide text-[#163B65] uppercase">
                      {step.role}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#163B65]/40"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Horizontal Expansion Matrix */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={sectionPanelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden border-t border-[#163B65]/5"
                    >
                      <div className="p-4 space-y-4 bg-[#F5F2EC]/10 text-xs">
                        {/* Skills Track Segment */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-[#163B65] uppercase tracking-wider block">
                            Skills Learned
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="bg-[#FFFFFF] text-[#163B65] text-[10px] font-medium px-2 py-0.5 border border-[#163B65]/10"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Functional Matrix Content Blocks */}
                        <div className="space-y-3 pt-2 border-t border-[#163B65]/5">
                          <div className="flex gap-2.5 items-start">
                            <Compass className="w-3.5 h-3.5 text-[#F97316] mt-0.5 flex-shrink-0" />
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-bold text-[#163B65] uppercase tracking-wider">
                                Responsibilities
                              </h4>
                              <p className="text-[#475569] leading-relaxed font-normal">
                                {step.responsibilities}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2.5 items-start">
                            <Sparkles className="w-3.5 h-3.5 text-[#163B65] mt-0.5 flex-shrink-0" />
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-bold text-[#163B65] uppercase tracking-wider">
                                Growth Opportunity
                              </h4>
                              <p className="text-[#475569] leading-relaxed font-normal">
                                {step.opportunity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
