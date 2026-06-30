// @/components/team/BehindTheStoresMobile.tsx
"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { OperationalWing } from "@/types/team";

interface MobileProps {
  wings: OperationalWing[];
}

export default function BehindTheStoresMobile({ wings }: MobileProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="w-full font-sans bg-transparent lg:hidden">
      <div className="text-left space-y-2 mb-6 px-1">
        <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
          The Makers of the Experience
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#163B65] tracking-tight">
          Behind the Showroom Floor
        </h2>
        <p className="text-[#475569] text-xs font-normal leading-relaxed">
          Our strength lives within the teams who listen, curate, and craft your
          experience every day.
        </p>
      </div>

      <div className="border-t border-b border-[#163B65]/10 divide-y divide-[#163B65]/5">
        {wings.map((wing, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div key={wing.id} className="w-full">
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                aria-expanded={isExpanded}
                className={`w-full px-2 py-4 flex items-center justify-between text-left focus:outline-none min-h-[48px] ${isExpanded ? "bg-[#FFFFFF]/60" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#163B65]/10 bg-[#F5F2EC]">
                    <Image
                      src={wing.image}
                      alt={wing.title}
                      fill
                      sizes="80px"
                      className="object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#163B65] leading-none mb-1">
                      {wing.title}
                    </h3>
                    <p className="text-[#475569] text-[11px] font-normal leading-none">
                      Core Operations
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#F97316] tracking-wider bg-[#F97316]/5 px-2 py-1">
                  {wing.metrics}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden bg-[#FFFFFF]"
                  >
                    <div className="p-5 space-y-4 text-xs">
                      <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#163B65]/5 bg-[#F5F2EC]">
                        <Image
                          src={wing.image}
                          alt={wing.title}
                          fill
                          sizes="100vw"
                          className="object-cover grayscale brightness-95"
                        />
                      </div>
                      <p className="text-[#475569] leading-relaxed text-sm">
                        {wing.description}
                      </p>
                    </div>
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
