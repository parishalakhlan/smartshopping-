"use client";

import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Store, Layers, ClipboardCheck } from "lucide-react";
import { OperationalWing } from "@/types/team";

interface BehindProps {
  wings: OperationalWing[];
}

export default function BehindTheStores({ wings }: BehindProps) {
  const [selectedWing, setSelectedWing] = useState<number>(0);

  // Icon indexing matrix wrapper
  const getIcon = (idx: number) => {
    if (idx === 0) return <Store className="w-4 h-4" />;
    if (idx === 1) return <Layers className="w-4 h-4" />;
    return <ClipboardCheck className="w-4 h-4" />;
  };

  return (
    <div className="space-y-12">
      {/* Structural Header Row */}
      <div className="text-left space-y-3 max-w-2xl">
        <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
          GROUND OPERATIONS CHOREOGRAPHY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#163b65] tracking-tight">
          Behind the Showroom Floor
        </h2>
        <p className="text-[#475569] text-sm font-light leading-relaxed">
          The ultimate asset powering our network isn't real estate—it is our
          hyper-synchronized human infrastructure. Explore how our wings
          interface dynamically.
        </p>
      </div>

      {/* Main Structural Interactive Split-Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Control Navigation Pipeline */}
        <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
          {wings.map((wing, idx) => {
            const isSelected = selectedWing === idx;
            return (
              <button
                key={wing.id}
                onClick={() => setSelectedWing(idx)}
                className={`w-full text-left p-6 transition-all duration-300 relative flex gap-4 items-start ${
                  isSelected
                    ? "bg-white shadow-md border-l-2 border-[#163b65]"
                    : "bg-transparent hover:bg-white/50 border-l-2 border-transparent"
                }`}
              >
                <div
                  className={`p-2.5 rounded-none mt-0.5 ${isSelected ? "bg-[#163b65] text-white" : "bg-slate-200 text-[#0f172a]"}`}
                >
                  {getIcon(idx)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#0f172a]">
                    {wing.title}
                  </h3>
                  <p className="text-[#475569] text-xs font-light line-clamp-1">
                    {wing.description}
                  </p>
                  <span className="text-[10px] font-luxury-meta font-bold text-[#f97316] tracking-wider block pt-1">
                    {wing.metrics}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Fluid Showcase Visualizer Image */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#e2e8f0] bg-slate-100 shadow-lg">
            {/* Smooth transition mapping via Framer Motion for premium execution feel */}
            <motion.img
              key={selectedWing}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={wings[selectedWing].image}
              alt={wings[selectedWing].title}
              className="w-full h-full object-cover grayscale brightness-90 contrast-[1.01]"
            />
            {/* Visual protective edge frame overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Floating Visual Metric Badge inside image context frame */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 border border-[#e2e8f0] shadow-sm">
              <span className="text-[9px] font-luxury-meta text-[#94a3b8] block leading-none">
                AUDITED METRIC
              </span>
              <span className="text-xs font-semibold text-[#163b65]">
                {wings[selectedWing].metrics}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
