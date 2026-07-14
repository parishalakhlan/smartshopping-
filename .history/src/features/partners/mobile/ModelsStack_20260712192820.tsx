"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { partnersConfig } from "@/features/partners/partners.data";

interface ModelsStackProps {
  config?: typeof partnersConfig;
}

export default function ModelsStack({
  config = partnersConfig,
}: ModelsStackProps) {
  const [activeModel, setActiveModel] = useState<string | null>(
    config.partnershipModels[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Strategic Arrays
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Partnership Formats
        </h2>
      </div>

      <div className="space-y-4">
        {config.partnershipModels.map((model) => {
          const isOpen = activeModel === model.id;
          return (
            <div
              key={model.id}
              className={`border transition-all duration-300 p-5 ${
                isOpen
                  ? "border-[#E25822] bg-[#0E0E0F]"
                  : "border-white/5 bg-[#0D0D0E]"
              }`}
              onClick={() => setActiveModel(isOpen ? null : model.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-light text-white tracking-wide">
                  {model.title}
                </h3>
                <span
                  className={`text-[#E25822] text-xs transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ➔
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-4 mt-4 border-t border-white/10 space-y-4"
                  >
                    <p className="text-xs text-stone-400 font-light leading-relaxed">
                      {model.suitability}
                    </p>

                    <div className="space-y-1">
                      <span className="text-[9px] uppercase text-stone-500 tracking-wider block">
                        Allocations
                      </span>
                      {model.benefits.slice(0, 2).map((b, i) => (
                        <div
                          key={i}
                          className="text-xs text-stone-300 flex items-center gap-2"
                        >
                          <CheckCircle size={10} className="text-[#E25822]" />{" "}
                          {b}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
