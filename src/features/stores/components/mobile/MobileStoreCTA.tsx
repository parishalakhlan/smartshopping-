// src/features/stores/components/MobileStoreCTA.tsx
"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export function MobileStoreCTA() {
  return (
    <section className="bg-[#163B65] py-16 px-6 text-left relative overflow-hidden font-sans border-t border-[#163B65]/10 md:hidden">
      {/* Subtle Editorial Geometry Underlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative space-y-6 z-10 w-full">
        {/* Meta Tag Framework */}
        <span className="text-[#F97316] font-mono tracking-[0.2em] text-[10px] font-bold uppercase block">
          IN-STORE EXPERIENCE // APPOINTMENTS
        </span>

        {/* Premium Typographic Headers */}
        <h2 className="text-3xl font-serif font-extrabold tracking-tight text-[#FFFFFF] leading-[1.15]">
          Visit Your Nearest Showroom
        </h2>

        <p className="text-[#F5F2EC]/80 text-xs font-medium leading-relaxed max-w-xs">
          Immerse yourself in our architectural spaces and explore the
          collections firsthand with dedicated styling curation.
        </p>

        {/* Full-Width Stacked High-Utility Tap Targets */}
        <div className="flex flex-col gap-3 pt-4 w-full">
          <a
            href="#locator-workspace-mobile"
            className="w-full py-4 bg-[#F97316] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest rounded-none transition-transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
          >
            Locate Showroom <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/contact"
            className="w-full py-4 bg-transparent border border-[#FFFFFF]/20 active:border-[#FFFFFF] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest rounded-none transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Client Services
          </a>
        </div>
      </div>
    </section>
  );
}
