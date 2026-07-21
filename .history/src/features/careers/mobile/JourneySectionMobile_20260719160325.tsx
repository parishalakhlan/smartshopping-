"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Compass, Sparkles } from "lucide-react";
import { journeySteps } from "@/features/careers/data/data";

const LADDER_EASE = [0.25, 1, 0.5, 1];

export const JourneySectionMobile: React.FC = () => {
  // Global Exclusive Ladder Tracking Matrix: First step active by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="journey-mobile"
      className="w-full bg-background-secondary/30 py-12 px-4 border-b border-border-main font-sans lg:hidden"
    >
      {/* Editorial Title Header */}
      <div className="text-left space-y-2 pb-6 border-b border-border-main mb-8">
        <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
          Career Journey
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
          The Interactive Career Ladder
        </h2>
        <p className="text-text-secondary text-xs font-normal leading-relaxed">
          Tap a milestone tier to step upward and preview real expected
          milestones, skill acquisitions, and professional progression curves.
        </p>
      </div>

      {/* The Vertical Ladder Framework */}
      <div className="relative pl-4 space-y-4 border-l border-border-main ml-2">
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
                    className="absolute -left-[17px] top-0 w-[2px] bg-accent z-10"
                  />
                )}
              </AnimatePresence>

              {/* Sculpted Milestone Connector Node */}
              <div
                className={`absolute -left-[21px] top-4 w-2 h-2 rounded-none transition-colors duration-300 z-20 ${
                  isExpanded ? "bg-accent" : "bg-text-primary/30"
                }`}
              />

              {/* Milestone Box Frame */}
              <motion.div
                animate={{ x: isExpanded ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                className={`border transition-all duration-300 rounded-none ${
                  isExpanded
                    ? "border-text-primary bg-background-main shadow-sm"
                    : "border-border-main bg-background-main"
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
                      className={`font-mono text-xs font-bold ${isExpanded ? "text-accent" : "text-text-primary/40"}`}
                    >
                      {step.stage}
                    </span>
                    <h3 className="font-serif text-sm font-bold tracking-wide text-text-primary uppercase">
                      {step.role}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-text-primary/40"
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
                      className="overflow-hidden border-t border-border-main/5"
                    >
                      <div className="p-4 space-y-4 bg-background-secondary/10 text-xs">
                        {/* Skills Track Segment */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-text-primary uppercase tracking-wider block">
                            Skills Learned
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="bg-background-main text-text-primary text-[10px] font-medium px-2 py-0.5 border border-border-main"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Functional Matrix Content Blocks */}
                        <div className="space-y-3 pt-2 border-t border-border-main/5">
                          <div className="flex gap-2.5 items-start">
                            <Compass className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-bold text-text-primary uppercase tracking-wider">
                                Responsibilities
                              </h4>
                              <p className="text-text-secondary leading-relaxed font-normal">
                                {step.responsibilities}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2.5 items-start">
                            <Sparkles className="w-3.5 h-3.5 text-text-primary mt-0.5 flex-shrink-0" />
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-bold text-text-primary uppercase tracking-wider">
                                Growth Opportunity
                              </h4>
                              <p className="text-text-secondary leading-relaxed font-normal">
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
