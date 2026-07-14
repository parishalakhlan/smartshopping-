"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const bezierEasing = [0.25, 1, 0.5, 1];

interface PartnerApplicationProps {
  config?: typeof import("@/features/partners/partners.data").partnersConfig;
}

export default function PartnerApplication({
  config,
}: PartnerApplicationProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      id="application"
      className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-background-secondary text-center"
    >
      <div className="max-w-3xl mx-auto">
        {!isRevealed ? (
          <div className="space-y-10 py-16 flex flex-col items-center">
            {/* Minimal Kicker */}
            <span className="text-xs uppercase tracking-[0.4em] text-accent font-medium block">
              Vetting Channels
            </span>

            {/* Premium Header Layout */}
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-text-primary max-w-xl leading-[1.15]">
              Initiate Structural Onboarding
            </h2>

            <p className="text-text-secondary font-light text-base max-w-lg mx-auto leading-relaxed">
              Access the exclusive underwriting desk. Complete structural
              alignment reviews to establish connectivity.
            </p>

            {/* Premium Clean Button Treatment */}
            <button
              onClick={() => setIsRevealed(true)}
              className="mt-4 px-12 py-5 bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 active:scale-[0.99] hover:opacity-90"
            >
              Open Partnership Registry
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: bezierEasing }}
            className="text-left bg-surface p-8 md:p-14 lg:p-16 space-y-10 border border-text-primary/5"
          >
            {/* Form Section Header */}
            <div className="border-b border-text-primary/5 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4">
              <h3 className="text-xl text-text-primary font-extralight tracking-tight">
                Commercial Underwriting Intention Form
              </h3>
              <button
                onClick={() => setIsRevealed(false)}
                className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-300 self-end sm:self-auto"
              >
                Collapse Form
              </button>
            </div>

            {/* Architecture-inspired Form Design */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                  Legal Entity Principle Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julian Vance"
                  className="w-full bg-card-bg border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                  Corporate Nomenclature
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vanguard Retail Ltd"
                  className="w-full bg-card-bg border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                  Targeted Expansion City
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi"
                  className="w-full bg-card-bg border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                  Direct Secure Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. vance@vanguard.com"
                  className="w-full bg-card-bg border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none bg-transparent"
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] uppercase text-text-muted tracking-[0.2em] font-medium block">
                  Luxury Portfolio &amp; Capital Execution Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline high-end operational history and current asset networks..."
                  className="w-full bg-card-bg border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 resize-none rounded-none bg-transparent leading-relaxed"
                />
              </div>

              {/* High-End Execution CTA */}
              <div className="sm:col-span-2 pt-6">
                <button
                  type="submit"
                  className="w-full bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-[0.25em] font-medium py-5 transition-all duration-300 active:scale-[0.99] hover:opacity-90"
                >
                  Transmit Intent Profile
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
