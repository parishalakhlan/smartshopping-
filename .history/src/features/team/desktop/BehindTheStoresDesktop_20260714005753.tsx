// @/components/team/BehindTheStoresDesktop.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Store, Layers, ClipboardCheck, Sparkles } from "lucide-react";
import { OPERATIONAL_WINGS } from "@/data/team";

interface DesktopProps {
  wings?: OperationalWing[];
}

export default function BehindTheStoresDesktop({ wings }: DesktopProps) {
  const [selectedWing, setSelectedWing] = useState<number>(0);

  // Use mockup data if wings prop is not provided
  const displayWings = wings || OPERATIONAL_WINGS;

  const getIcon = (idx: number) => {
    if (idx === 0) return <Store className="w-4 h-4" />;
    if (idx === 1) return <Layers className="w-4 h-4" />;
    return <ClipboardCheck className="w-4 h-4" />;
  };

  return (
    <div className="space-y-12 font-sans hidden lg:block">
      <div className="text-left space-y-3 max-w-2xl">
        <span className="text-[10px] text-accent font-bold tracking-widest uppercase">
          The Makers of the Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-button-primary-bg tracking-tight">
          Behind the Showroom Floor
        </h2>
        <p className="text-text-secondary text-sm font-normal leading-relaxed">
          Our real strength doesn&apos;t live in square footage or structural
          brick and mortar—it lives within the teams who listen, curate, and
          craft your experience every single day.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="col-span-5 space-y-3">
          {displayWings.map((wing, idx) => {
            const isSelected = selectedWing === idx;
            return (
              <button
                key={wing.id}
                onClick={() => setSelectedWing(idx)}
                className={`w-full text-left p-6 transition-all duration-300 relative flex gap-4 items-start rounded-none ${
                  isSelected
                    ? "bg-background-main border-l border-button-primary-bg shadow-sm"
                    : "bg-transparent hover:bg-background-secondary/40 border-l border-transparent"
                }`}
              >
                <div
                  className={`p-2.5 rounded-none mt-0.5 transition-colors duration-300 ${
                    isSelected
                      ? "bg-button-primary-bg text-button-primary-text"
                      : "bg-background-secondary text-button-primary-bg"
                  }`}
                >
                  {getIcon(idx)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-button-primary-bg">
                    {wing.title}
                  </h3>
                  <p className="text-text-secondary text-xs font-normal line-clamp-2 leading-relaxed">
                    {wing.description}
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-bold text-accent tracking-widest uppercase">
                      {wing.metrics}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-border-main bg-background-secondary rounded-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWing}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={displayWings[selectedWing].image}
                  alt={displayWings[selectedWing].title}
                  fill
                  sizes="50vw"
                  className="object-cover grayscale contrast-[1.02] brightness-95"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-background-main px-4 py-2.5 border border-border-main rounded-none shadow-sm text-left">
              <span className="text-[9px] text-text-secondary/80 block font-bold tracking-wider uppercase leading-none mb-0.5">
                Core Purpose
              </span>
              <span className="text-xs font-bold text-button-primary-bg tracking-tight block">
                {displayWings[selectedWing].metrics}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
