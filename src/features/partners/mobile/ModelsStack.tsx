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
    config.partnershipModels[0]?.id || null,
  );

  return (
    <section className="py-20 px-8 bg-background-main flex flex-col space-y-10">
      {/* Editorial Header Block */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-medium">
          Strategic Arrays
        </span>
        <h2 className="text-3xl font-extralight text-text-primary tracking-tight leading-tight">
          Partnership Formats
        </h2>
      </div>

      {/* Luxury Minimalist Format List */}
      <div className="flex flex-col border-t border-text-primary/5">
        {config.partnershipModels.map((model) => {
          const isOpen = activeModel === model.id;
          return (
            <div
              key={model.id}
              className={`border-b border-text-primary/5 py-6 transition-all duration-500 ease-out select-none cursor-pointer group relative ${
                isOpen ? "bg-surface/30 px-4 -mx-4" : "bg-transparent"
              }`}
              onClick={() => setActiveModel(isOpen ? null : model.id)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base md:text-lg font-light text-text-primary tracking-tight transition-colors duration-300 group-hover:text-text-primary/80">
                  {model.title}
                </h3>
                <span
                  className={`text-text-muted text-sm transition-transform duration-500 ease-out flex items-center justify-center w-5 h-5 ${
                    isOpen
                      ? "rotate-90 text-accent"
                      : "group-hover:text-text-secondary"
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
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pt-4 space-y-5"
                  >
                    <p className="text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                      {model.suitability}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                        Allocations
                      </span>
                      {model.benefits.slice(0, 2).map((b, i) => (
                        <div
                          key={i}
                          className="text-sm text-text-secondary font-light flex items-center gap-2.5"
                        >
                          <CheckCircle
                            size={12}
                            className="text-accent stroke-[1.5]"
                          />{" "}
                          <span>{b}</span>
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
