// @/components/team/FoundersSectionMobile.tsx
"use client";

import React, { useState } from "react"; // Fixed: Removed unused 'useId'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Founder } from "@/features/team/data/foundersData";

interface MobileProps {
  founders: Founder[];
}

// Fixed: Added 'as const' for proper TypeScript literal type
const CUSTOM_EASE = [0.25, 1, 0.5, 1] as const;

export default function FoundersSectionMobile({ founders }: MobileProps) {
  // Exclusivity hook: Aria opens by default on mobile interaction footprint
  const [expandedFounderId, setExpandedFounderId] = useState<string | null>(
    founders[0]?.id || null,
  );

  return (
    <div className="w-full font-sans bg-transparent lg:hidden space-y-8">
      {/* Editorial Title Block */}
      <div className="text-left space-y-2 border-b border-border-main pb-6 px-1">
        <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
          The Foundation
        </span>
        <h2 className="font-serif text-2xl font-bold text-button-primary-bg tracking-tight">
          The Genesis of Our Craft
        </h2>
        <p className="text-text-secondary text-xs font-normal leading-relaxed">
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
              className="w-full border-b border-border-main last:border-none pb-6 last:pb-0"
            >
              {/* Trigger Header Row */}
              <div
                onClick={() =>
                  setExpandedFounderId(isExpanded ? null : founder.id)
                }
                role="button"
                aria-expanded={isExpanded ? "true" : "false"} // Fixed: Proper boolean string value
                aria-controls={panelId}
                className="flex gap-4 items-center cursor-pointer select-none min-h-[48px]" // Fixed: Replaced inline style with Tailwind
              >
                {/* Premium Lifted Portrait Thumbnail Frame */}
                <motion.div
                  animate={{
                    scale: isExpanded ? 1.03 : 1,
                    y: isExpanded ? -2 : 0,
                    boxShadow: isExpanded
                      ? "0 4px 12px rgba(22,59,101,0.06)"
                      : "0 1px 2px rgba(0,0,0,0.02)",
                  }}
                  transition={{ duration: 0.4, ease: CUSTOM_EASE }}
                  className="relative w-20 h-24 shrink-0 bg-background-secondary overflow-hidden border border-border-main"
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="160px"
                    className="object-cover grayscale contrast-[1.02]"
                    loading="lazy"
                  />
                </motion.div>

                <div className="space-y-0.5 flex-1">
                  <h3 className="font-serif text-base font-bold text-button-primary-bg">
                    {founder.name}
                  </h3>
                  <p className="text-accent text-[10px] font-mono font-bold uppercase tracking-wider">
                    {founder.role}
                  </p>
                  <p className="text-text-secondary text-[11px] font-normal line-clamp-1 italic text-text-secondary/80">
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
                      className="pt-5 pl-2 pr-1 space-y-4 text-xs"
                    >
                      {/* Premium Portrait Enlargement Frame */}
                      <div className="relative aspect-4/5 w-full overflow-hidden bg-background-secondary border border-border-main">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} comprehensive portrait`}
                          fill
                          sizes="(max-w-md) 100vw"
                          className="object-cover grayscale contrast-[1.03]"
                        />
                      </div>

                      {/* Micro Accent Growing Line Trigger */}
                      <div className="flex items-center gap-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 32 }}
                          className="h-px bg-accent"
                        />
                        <span className="text-[9px] font-mono font-bold tracking-widest text-accent uppercase">
                          The Philosophy
                        </span>
                      </div>

                      {/* Premium Styled Callout Quote */}
                      <div className="relative bg-card-bg p-4 border-l-2 border-button-primary-bg shadow-sm">
                        <Quote className="w-6 h-6 text-button-primary-bg/5 absolute -top-1 -right-1 pointer-events-none" />
                        <p className="font-serif italic text-xs text-button-primary-bg leading-relaxed">
                          &ldquo;{founder.signatureQuote}&rdquo;
                        </p>
                      </div>

                      {/* Biographical Narrative Stack */}
                      <div className="space-y-3 pt-1">
                        <p className="text-text-secondary leading-relaxed text-xs font-normal">
                          {founder.narrativeBiography}
                        </p>
                        <div className="pt-2 border-t border-border-main flex flex-col gap-0.5">
                          <span className="text-[9px] font-mono uppercase font-bold text-button-primary-bg">
                            Core Blueprint Assignment
                          </span>
                          <span className="text-xs text-text-secondary font-medium">
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
