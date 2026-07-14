"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Layers } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data"; // Maps directly to your 4 core editorial tracks

const TRANSITION_EASE = [0.25, 1, 0.5, 1];

export const WhyJoinSectionMobile: React.FC = () => {
  // Global Exclusive State Matrix: First portfolio fold open by default
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(
    whyJoinData[0]?.id || null,
  );

  return (
    <section className="w-full bg-background-main py-12 px-4 border-b border-border-main font-sans lg:hidden">
      {/* Structural Minimalist Header Block */}
      <div className="text-left space-y-2 pb-6 border-b border-border-main mb-6">
        <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
          Growth Paths
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
          Select Your Fabric Track
        </h2>
        <p className="text-text-secondary text-xs font-normal leading-relaxed">
          Tap a focus track to open its fashion portfolio and trace your
          specific creative path forward.
        </p>
      </div>

      {/* Editorial Fold Stack */}
      <div className="space-y-4">
        {whyJoinData.map((track) => {
          const isOpen = expandedTrackId === track.id;
          const folderPanelId = `portfolio-fold-${track.id}`;

          return (
            <div
              key={track.id}
              className={`border transition-all duration-300 rounded-none ${
                isOpen
                  ? "border-text-primary"
                  : "border-border-main bg-background-secondary/10"
              }`}
            >
              {/* Closed State Trigger Component */}
              <button
                onClick={() => setExpandedTrackId(isOpen ? null : track.id)}
                aria-expanded={isOpen}
                aria-controls={folderPanelId}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                style={{ minHeight: "48px" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-text-primary/5 flex items-center justify-center border border-border-main">
                    <Layers
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? "text-accent" : "text-text-primary/70"}`}
                    />
                  </div>
                  <h3 className="font-serif text-base font-bold text-text-primary">
                    {track.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-text-primary/50"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Editorial Portfolio Fold Spread Expansion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={folderPanelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 space-y-4">
                      {/* Asymmetric Micro-Scaled Hero Frame */}
                      <div className="relative aspect-[16/10] w-full bg-background-secondary overflow-hidden border border-border-main/5">
                        <Image
                          src={track.image}
                          alt={track.title}
                          fill
                          sizes="(max-w-768px) 100vw"
                          className="object-cover grayscale scale-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 to-transparent" />
                      </div>

                      {/* Content Composition */}
                      <div className="space-y-3">
                        <p className="text-xs text-text-secondary font-normal leading-relaxed">
                          {track.paragraph}
                        </p>

                        {/* Immersive Insight Blockout */}
                        <div className="p-3.5 bg-background-secondary/40 border-l-2 border-accent space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-accent block">
                            Mentorship & Future Path
                          </span>
                          <p className="text-xs font-medium text-text-primary leading-relaxed">
                            {track.insight}
                          </p>
                        </div>
                      </div>
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
};
