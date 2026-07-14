// src/features/stores/components/MobileStoreCTA.tsx
"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export function MobileStoreCTA() {
  return (
    <section className="bg-button-primary-bg py-16 px-6 text-left relative overflow-hidden font-sans border-t border-border-main md:hidden">
      {/* Subtle Editorial Geometry Underlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative space-y-6 z-10 w-full">
        {/* Meta Tag Framework */}
        <span className="text-accent font-mono tracking-[0.2em] text-[10px] font-bold uppercase block">
          IN-STORE EXPERIENCE // APPOINTMENTS
        </span>

        {/* Premium Typographic Headers */}
        <h2 className="text-3xl font-serif font-extrabold tracking-tight text-button-primary-text leading-[1.15]">
          Visit Your Nearest Showroom
        </h2>

        <p className="text-button-primary-text/80 text-xs font-medium leading-relaxed max-w-xs">
          Immerse yourself in our architectural spaces and explore the
          collections firsthand with dedicated styling curation.
        </p>

        {/* Full-Width Stacked High-Utility Tap Targets */}
        <div className="flex flex-col gap-3 pt-4 w-full">
          <a
            href="#locator-workspace-mobile"
            className="w-full py-4 bg-accent text-button-primary-text text-xs font-bold uppercase tracking-widest rounded-none transition-transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
          >
            Locate Showroom <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/contact"
            className="w-full py-4 bg-transparent border border-button-primary-text/20 active:border-button-primary-text text-button-primary-text text-xs font-bold uppercase tracking-widest rounded-none transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Client Services
          </a>
        </div>
      </div>
    </section>
  );
}
