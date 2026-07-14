"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

export const WhyJoinSectionDesktop: React.FC = () => {
  const [activeWhyBlock, setActiveWhyBlock] = useState<string>("join-1");

  return (
    <section className="py-20 bg-background-main border-b border-border-main hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border-main pb-8 mb-12">
          <div className="space-y-3 text-left">
            <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
              Why Join Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Why Ambitious People Flourish Here
            </h2>
          </div>
          <p className="text-text-secondary text-xs font-normal max-w-sm lg:text-right leading-relaxed">
            We build continuous professional loops where taste, operational
            independence, and brand understanding guide execution.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-5 flex flex-col justify-center space-y-2">
            {whyJoinData.map((block) => (
              <button
                key={block.id}
                onClick={() => setActiveWhyBlock(block.id)}
                className={`w-full text-left p-5 border transition-all duration-300 relative rounded-none flex flex-col space-y-1 group ${
                  activeWhyBlock === block.id
                    ? "bg-background-secondary/50 border-text-primary pl-8"
                    : "bg-background-main border-border-main hover:border-border-hover pl-6"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-text-primary">
                    {block.title}
                  </h3>
                  <ChevronRight
                    className={`w-4 h-4 text-accent transition-transform duration-300 ${
                      activeWhyBlock === block.id
                        ? "translate-x-1"
                        : "opacity-30"
                    }`}
                  />
                </div>
                <p className="text-text-secondary text-xs font-normal leading-relaxed line-clamp-2">
                  {block.paragraph}
                </p>
              </button>
            ))}
          </div>

          <div className="col-span-7 bg-background-secondary/20 border border-border-main p-6 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              {whyJoinData.map(
                (block) =>
                  block.id === activeWhyBlock && (
                    <motion.div
                      key={block.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between space-y-6"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden border border-border-main/5">
                        <Image
                          src={block.image}
                          alt={block.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-3 text-left">
                        <h4 className="font-serif text-xl font-bold text-text-primary">
                          {block.title}
                        </h4>
                        <p className="text-sm text-text-secondary font-normal leading-relaxed">
                          {block.paragraph}
                        </p>
                        <div className="pt-4 border-t border-border-main flex items-start gap-3 bg-background-main p-4 border-l-2 border-accent">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mt-0.5">
                            Insight:
                          </span>
                          <p className="text-xs text-text-primary font-medium leading-relaxed">
                            {block.insight}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
