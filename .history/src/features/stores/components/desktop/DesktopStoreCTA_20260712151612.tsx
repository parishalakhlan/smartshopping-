// src/features/stores/components/DesktopStoreCTA.tsx
import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export function DesktopStoreCTA() {
  return (
    <section className="hidden md:block bg-navbar-bg py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden font-sans border-t border-border-main">
      {/* Subtle Editorial Geometry Underlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-3xl mx-auto space-y-8 z-10">
        {/* Meta Tag Framework */}
        <span className="text-accent font-semibold tracking-[0.25em] text-xs uppercase block">
          IN-STORE EXPERIENCE // PRIVATE APPOINTMENTS
        </span>

        {/* Premium Typographic Headers */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-text-primary max-w-2xl mx-auto leading-tight">
          Visit Your Nearest Showroom Destination
        </h2>

        <p className="text-text-secondary/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
          Immerse yourself in our architectural spaces and explore the
          collections firsthand with dedicated styling curation across any of
          our flagship storefronts.
        </p>

        {/* Geometric Sharp Layout Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <a
            href="#locator-workspace-desktop"
            className="w-full sm:w-auto px-8 py-4 bg-button-primary-bg hover:bg-primary-hover text-button-primary-text text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-sm"
          >
            Locate Showroom <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border-main hover:border-text-primary text-text-primary text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Client Services
          </a>
        </div>
      </div>
    </section>
  );
}
