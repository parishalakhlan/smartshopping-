"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { pathsData } from "@/features/contact/data/pathsData";
import { MagneticButton } from "@/features/contact/MagneticButton";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

export const PathSelectionSectionDesktop: React.FC = () => {
  const [activePathId, setActivePathId] = useState<string | null>(null);

  return (
    <section
      id="paths-desktop"
      className="py-20 bg-[#FFFFFF] border-b border-[#163B65]/10 hidden lg:block"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FloatingSectionLabel num="01" text="Choose Your Path" />

        <div className="text-left space-y-3 mb-12">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#163B65]">
            Select Your Need
          </h2>
          <p className="text-[#475569] text-sm max-w-md leading-relaxed">
            Identify your purpose below. We expose direct channels to save your
            time.
          </p>
        </div>

        <div className="border-t border-[#163B65]/10 divide-y divide-[#163B65]/10">
          {pathsData.map((path) => {
            const isSelected = activePathId === path.id;
            return (
              <div key={path.id} className="w-full text-left">
                <button
                  onClick={() => setActivePathId(isSelected ? null : path.id)}
                  className="w-full py-6 flex items-center justify-between group focus:outline-none select-none text-left"
                >
                  <div className="max-w-2xl pr-4">
                    <h3 className="font-serif text-xl font-bold text-[#163B65] group-hover:text-[#F97316] transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-[#475569] text-xs font-normal mt-1">
                      {path.oneLiner}
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-[#163B65]/10 group-hover:border-[#163B65]/40 transition-colors shrink-0">
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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-[#F5F2EC]/40 border-l-2 border-[#F97316]"
                    >
                      <div className="p-6 grid grid-cols-2 gap-6 text-xs items-center">
                        <div className="space-y-2">
                          <div>
                            <span className="text-[10px] text-[#475569] uppercase tracking-wider block">
                              Contact:
                            </span>
                            <span className="font-serif font-bold text-[#163B65] text-sm">
                              {path.contactPerson}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                Method:
                              </span>
                              <span className="font-medium text-[#163B65]">
                                {path.method}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                Response:
                              </span>
                              <span className="font-mono text-[#F97316] font-bold">
                                {path.responseTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <MagneticButton className="px-6 py-3.5 bg-[#163B65] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-widest hover:bg-[#112F52] flex items-center gap-1.5 rounded-none">
                            {path.ctaText}
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                          </MagneticButton>
                        </div>
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
