"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Layers } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

export const WhyJoinSectionMobile: React.FC = () => {
  // First fold open by default
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(
    whyJoinData[0]?.id || null,
  );

  return (
    <section className="w-full bg-background-main py-10 px-5 sm:px-6 border-b-2 border-border-main font-sans lg:hidden">
      {/* Editorial Header Section */}
      <div className="text-left space-y-2 pb-5 border-b border-border-main mb-6">
        <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
          Growth Paths
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Select Your Fabric Track
        </h2>
        <p className="text-text-secondary text-xs sm:text-sm font-medium leading-relaxed">
          Tap a focus track to open its portfolio and trace your specific
          creative path forward.
        </p>
      </div>

      {/* Accordion Fold Stack */}
      <div className="space-y-3">
        {whyJoinData.map((track) => {
          const isOpen = expandedTrackId === track.id;
          const folderPanelId = `portfolio-fold-${track.id}`;

          return (
            <div
              key={track.id}
              className={`border-2 transition-colors duration-200 ${
                isOpen
                  ? "border-text-primary bg-card-bg shadow-sm"
                  : "border-border-main bg-card-bg/60 active:bg-card-bg"
              }`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => setExpandedTrackId(isOpen ? null : track.id)}
                aria-expanded={isOpen}
                aria-controls={folderPanelId}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                style={{ minHeight: "52px" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border transition-colors ${
                      isOpen
                        ? "bg-text-primary text-background-main border-text-primary"
                        : "bg-background-secondary text-text-primary border-border-main"
                    }`}
                  >
                    <Layers className="w-4 h-4 shrink-0" />
                  </div>
                  <h3 className="font-serif text-base font-extrabold text-text-primary tracking-tight">
                    {track.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-text-primary shrink-0 ml-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Fold Expansion Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={folderPanelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 space-y-4 border-t border-border-main/50">
                      {/* Hero Image Frame */}
                      <div className="relative aspect-[16/9] w-full bg-background-secondary overflow-hidden border border-border-main">
                        <Image
                          src={track.image}
                          alt={track.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-main/40 via-transparent to-transparent" />
                      </div>

                      {/* Paragraph & Insight Card */}
                      <div className="space-y-3">
                        <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                          {track.paragraph}
                        </p>

                        {/* High Contrast Insight Block */}
                        <div className="p-3.5 bg-background-secondary border-l-2 border-accent space-y-1">
                          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-accent block">
                            Mentorship & Future Path
                          </span>
                          <p className="text-xs font-semibold text-text-primary leading-relaxed">
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
