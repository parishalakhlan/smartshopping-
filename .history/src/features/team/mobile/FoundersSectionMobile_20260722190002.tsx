// @/components/team/FoundersSectionMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Founder } from "@/features/team/data/foundersData";

interface MobileProps {
  founders: Founder[];
}

const CUSTOM_EASE = [0.25, 1, 0.5, 1] as const;

export default function FoundersSectionMobile({ founders }: MobileProps) {
  const [expandedFounderId, setExpandedFounderId] = useState<string | null>(
    founders[0]?.id || null,
  );

  return (
    <div className="w-full font-sans bg-transparent lg:hidden space-y-8">
      {/* Editorial Title Block */}
      <div className="text-left space-y-2 border-b-2 border-border-main pb-6 px-1">
        <span className="text-xs text-accent font-bold tracking-widest uppercase block">
          The Foundation
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
          The Genesis of Our Craft
        </h2>
        <p className="text-text-secondary text-sm font-normal leading-relaxed">
          Our collective was born from a simple evening conversation regarding
          human utility, sustainable beauty, and structural space.
        </p>
      </div>

      {/* Album Portrait Frames Grid Block */}
      <div className="space-y-6">
        {founders.map((founder) => {
          const isExpanded = expandedFounderId === founder.id;
          const panelId = `founder-panel-${founder.id}`;

          return (
            <div
              key={founder.id}
              className="w-full border-b-2 border-border-main last:border-none pb-6 last:pb-0"
            >
              {/* Trigger Header Row */}
              <div
                onClick={() =>
                  setExpandedFounderId(isExpanded ? null : founder.id)
                }
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                aria-controls={panelId}
                className="flex gap-4 items-center cursor-pointer select-none min-h-[52px]"
              >
                {/* Premium Lifted Portrait Thumbnail Frame */}
                <motion.div
                  animate={{
                    scale: isExpanded ? 1.03 : 1,
                    y: isExpanded ? -2 : 0,
                    boxShadow: isExpanded
                      ? "0 4px 14px rgba(0,0,0,0.12)"
                      : "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                  transition={{ duration: 0.4, ease: CUSTOM_EASE }}
                  className="relative w-20 h-24 shrink-0 bg-background-secondary overflow-hidden border-2 border-border-main"
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>

                <div className="space-y-1 flex-1 text-left">
                  <h3 className="font-serif text-lg font-bold text-text-primary">
                    {founder.name}
                  </h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider">
                    {founder.role}
                  </p>
                  <p className="text-text-secondary text-xs font-medium line-clamp-1 italic">
                    &ldquo;{founder.signatureQuote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Unfolding Downward Album Sheet */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: CUSTOM_EASE }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      className="pt-5 space-y-5 text-left"
                    >
                      {/* Premium Portrait Enlargement Frame */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary border-2 border-border-main shadow-sm">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} comprehensive portrait`}
                          fill
                          sizes="(max-width: 768px) 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
                      </div>

                      {/* Micro Accent Growing Line Trigger */}
                      <div className="flex items-center gap-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 32 }}
                          className="h-0.5 bg-accent"
                        />
                        <span className="text-xs font-bold tracking-widest text-accent uppercase">
                          The Philosophy
                        </span>
                      </div>

                      {/* Premium Styled Callout Quote */}
                      <div className="relative bg-background-secondary p-4 border-l-4 border-accent shadow-sm">
                        <Quote className="w-6 h-6 text-primary/15 absolute -top-1 -right-1 pointer-events-none" />
                        <p className="font-serif italic text-sm font-medium text-text-primary leading-relaxed">
                          &ldquo;{founder.signatureQuote}&rdquo;
                        </p>
                      </div>

                      {/* Biographical Narrative Stack */}
                      <div className="space-y-4 pt-1">
                        <p className="text-text-secondary leading-relaxed text-sm font-normal">
                          {founder.narrativeBiography}
                        </p>
                        <div className="pt-3 border-t border-border-main flex flex-col gap-1">
                          <span className="text-xs font-bold tracking-wider text-text-primary uppercase">
                            Core Blueprint Assignment:
                          </span>
                          <span className="text-xs font-semibold text-text-muted">
                            {founder.focusArea}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
