// src/features/stores/components/StoreCTA.tsx
import React from "react";

export function StoreCTA() {
  return (
    <section className="bg-[#163B65] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-2xl mx-auto space-y-6 z-10">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
          Visit Your Nearest Fashion Destination
        </h2>
        <p className="text-slate-200 text-sm font-normal max-w-lg mx-auto leading-relaxed">
          Experience world-class apparel distribution spaces and personal
          consultation workflows live at any physical location across India
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
          <a
            href="#locator-workspace"
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-bold uppercase tracking-wider rounded transition-all"
          >
            Open Map Matrix
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-wider rounded transition-all"
          >
            Contact Franchise Head
          </a>
        </div>
      </div>
    </section>
  );
}
