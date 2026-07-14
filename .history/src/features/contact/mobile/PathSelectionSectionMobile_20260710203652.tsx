"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { pathsData } from "@/features/contact/data/pathsData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

const V3_EASE = [0.25, 1, 0.5, 1];

export const PathSelectionSectionMobile: React.FC = () => {
  const [activePathId, setActivePathId] = useState<string | null>(null);

  return (
    <section
      id="paths-mobile"
      className="py-12 bg-[#FFFFFF] border-b border-[#163B65]/10 lg:hidden"
    >
      <div className="w-full px-4">
        <FloatingSectionLabel num="01" text="Choose Your Path" />

        <div className="text-left space-y-2 mb-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#163B65]">
            Select Your Need
          </h2>
          <p className="text-[#475569] text-xs font-normal leading-relaxed">
            Identify your purpose below. We expose direct channels to save your
            time.
          </p>
        </div>

        <div className="border-t border-[#163B65]/10 divide-y divide-[#163B65]/10">
          {pathsData.map((path) => {
            const isSelected = activePathId === path.id;
            return (
              <div key={path.id} className="w-full text-left">
                {/* Optimized Mobile Touch Target */}
                <button
                  onClick={() => setActivePathId(isSelected ? null : path.id)}
                  className="w-full py-4.5 flex items-center justify-between focus:outline-none select-none text-left"
                >
                  <div className="max-w-[85%] pr-2">
                    <h3
                      className={`font-serif text-base font-bold transition-colors ${isSelected ? "text-[#F97316]" : "text-[#163B65]"}`}
                    >
                      {path.title}
                    </h3>
                    <p className="text-[#475569] text-[11px] font-normal mt-0.5 leading-normal">
                      {path.oneLiner}
                    </p>
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center border border-[#163B65]/10 shrink-0">
                    <ChevronRight
                      className={`w-3.5 h-3.5 text-[#163B65] transition-transform duration-300 ${
                        isSelected ? "rotate-90 text-[#F97316]" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#F5F2EC]/30 border-l-2 border-[#F97316]"
                    >
                      <div className="p-4 space-y-4 text-xs">
                        <div className="space-y-2.5">
                          <div>
                            <span className="text-[9px] text-[#475569] uppercase tracking-wider block">
                              Contact Office:
                            </span>
                            <span className="font-serif font-bold text-[#163B65] text-xs">
                              {path.contactPerson}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                Method:
                              </span>
                              <span className="font-medium text-[#163B65] text-[11px]">
                                {path.method}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                Response Target:
                              </span>
                              <span className="font-mono text-[#F97316] font-bold text-[11px]">
                                {path.responseTime}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Native touch interaction: No magnetic button delays */}
                        <a
                          href={path.actionUrl}
                          className="w-full py-3 bg-[#163B65] text-[#FFFFFF] text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition-colors active:bg-[#112F52]"
                        >
                          {path.ctaText}
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
