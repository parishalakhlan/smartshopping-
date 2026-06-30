// @/components/team/BehindTheStoresDesktop.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Store, Layers, ClipboardCheck, Sparkles } from "lucide-react";
import { OperationalWing } from "@/types/team";

interface DesktopProps {
  wings: OperationalWing[];
}

export default function BehindTheStoresDesktop({ wings }: DesktopProps) {
  const [selectedWing, setSelectedWing] = useState<number>(0);

  const getIcon = (idx: number) => {
    if (idx === 0) return <Store className="w-4 h-4" />;
    if (idx === 1) return <Layers className="w-4 h-4" />;
    return <ClipboardCheck className="w-4 h-4" />;
  };

  return (
    <div className="space-y-12 font-sans hidden lg:block">
      <div className="text-left space-y-3 max-w-2xl">
        <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase">
          The Makers of the Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
          Behind the Showroom Floor
        </h2>
        <p className="text-[#475569] text-sm font-normal leading-relaxed">
          Our real strength doesn&apos;t live in square footage or structural
          brick and mortar—it lives within the teams who listen, curate, and
          craft your experience every single day.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="col-span-5 space-y-3">
          {wings.map((wing, idx) => {
            const isSelected = selectedWing === idx;
            return (
              <button
                key={wing.id}
                onClick={() => setSelectedWing(idx)}
                className={`w-full text-left p-6 transition-all duration-300 relative flex gap-4 items-start rounded-none ${
                  isSelected
                    ? "bg-[#FFFFFF] border-l border-[#163B65] shadow-sm"
                    : "bg-transparent hover:bg-[#F5F2EC]/40 border-l border-transparent"
                }`}
              >
                <div
                  className={`p-2.5 rounded-none mt-0.5 transition-colors duration-300 ${
                    isSelected
                      ? "bg-[#163B65] text-[#FFFFFF]"
                      : "bg-[#F5F2EC] text-[#163B65]"
                  }`}
                >
                  {getIcon(idx)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#163B65]">
                    {wing.title}
                  </h3>
                  <p className="text-[#475569] text-xs font-normal line-clamp-2 leading-relaxed">
                    {wing.description}
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <Sparkles className="w-3 h-3 text-[#F97316]" />
                    <span className="text-[10px] font-bold text-[#F97316] tracking-widest uppercase">
                      {wing.metrics}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#163B65]/10 bg-[#F5F2EC] rounded-none">
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
                  src={wings[selectedWing].image}
                  alt={wings[selectedWing].title}
                  fill
                  sizes="50vw"
                  className="object-cover grayscale contrast-[1.02] brightness-95"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-[#FFFFFF] px-4 py-2.5 border border-[#163B65]/10 rounded-none shadow-sm text-left">
              <span className="text-[9px] text-[#475569]/80 block font-bold tracking-wider uppercase leading-none mb-0.5">
                Core Purpose
              </span>
              <span className="text-xs font-bold text-[#163B65] tracking-tight block">
                {wings[selectedWing].metrics}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
