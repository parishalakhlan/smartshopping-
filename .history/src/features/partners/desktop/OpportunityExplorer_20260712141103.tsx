import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";
import { partnershipModels } from "@/features/partners/partners.data";
import SectionHeader from "@/features/partners/desktop/SectionHeader";
import { MotionReveal } from "@/features/partners/desktop/MotionWrapper";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function OpportunityExplorer() {
  const [openModel, setOpenModel] = useState<string | null>(
    partnershipModels[0].id,
  );

  return (
    <section
      id="models"
      className="py-32 px-24 bg-black border-b border-white/5"
    >
      <div className="mb-20 text-center max-w-xl mx-auto">
        <SectionHeader
          badge="Deployment Matrices"
          title="Sculpted Frameworks"
          center
        />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {partnershipModels.map((model) => {
          const isOpen = openModel === model.id;
          return (
            <motion.div
              key={model.id}
              layout
              onClick={() => setOpenModel(isOpen ? null : model.id)}
              className={`cursor-pointer border text-left p-8 transition-all duration-500 bg-[#0E0E0F] relative overflow-hidden flex flex-col justify-between group ${
                isOpen
                  ? "border-[#E25822] col-span-1 ring-1 ring-[#E25822]/20"
                  : "border-white/10 hover:border-white/20"
              }`}
              style={{ transformOrigin: "center center" }}
              whileHover={{
                rotateY: isOpen ? 0 : 1.5,
                scale: isOpen ? 1 : 1.01,
              }}
              transition={{ duration: 0.4, ease: bezierEasing }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-light tracking-wide text-white">
                    {model.title}
                  </h3>
                  <ChevronRight
                    size={20}
                    className={`text-stone-500 transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-[#E25822]" : ""
                    }`}
                  />
                </div>

                <p className="text-sm text-stone-400 font-light leading-relaxed mb-6">
                  {model.suitability}
                </p>

                <MotionReveal isOpen={isOpen}>
                  <div className="space-y-6 pt-6 border-t border-white/10 overflow-hidden">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-2">
                        Prerequisites
                      </span>
                      <ul className="space-y-1.5">
                        {model.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-stone-300 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-[#E25822] rounded-full" />{" "}
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-2">
                        Allocated Benefits
                      </span>
                      <ul className="space-y-1.5">
                        {model.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-stone-300 flex items-center gap-2"
                          >
                            <CheckCircle size={10} className="text-[#E25822]" />{" "}
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-black border border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-[#E25822] block mb-1">
                        Ecosystem Support
                      </span>
                      <p className="text-xs text-stone-400 font-light leading-relaxed">
                        {model.support}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-4 border-t border-white/5 text-left"
                >
                  <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                    Operational Trajectory
                  </span>
                  <p className="text-xs text-[#E25822] font-mono tracking-tight">
                    {model.journey}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
