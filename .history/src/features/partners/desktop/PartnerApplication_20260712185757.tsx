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
      className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5 text-center"
    >
      <div className="max-w-2xl mx-auto">
        {!isRevealed ? (
          <div className="space-y-8 py-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
              Vetting Channels
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white">
              Initiate Structural Onboarding
            </h2>
            <p className="text-stone-400 font-light text-sm max-w-md mx-auto leading-relaxed">
              Access the exclusive underwriting desk. Complete structural
              alignment reviews to establish connectivity.
            </p>
            <button
              onClick={() => setIsRevealed(true)}
              className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors duration-300"
            >
              Open Partnership Registry
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: bezierEasing }}
            className="text-left bg-black border border-white/5 p-10 space-y-8"
          >
            <div className="border-b border-white/10 pb-4 flex justify-between items-baseline">
              <h3 className="text-lg text-white font-light tracking-wide">
                Commercial Underwriting Intention Form
              </h3>
              <button
                onClick={() => setIsRevealed(false)}
                className="text-xs text-stone-500 hover:text-white"
              >
                Collapse Form
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Legal Entity Principle Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julian Vance"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Corporate Nomenclature
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vanguard Retail Ltd"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Targeted Expansion City
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Direct Secure Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. vance@vanguard.com"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Luxury Portfolio &amp; Capital Execution Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline high-end operational history and current asset networks..."
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors resize-none"
                />
              </div>
              <div className="col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#E25822] text-white text-xs uppercase tracking-widest font-semibold py-4 hover:bg-[#c94b1b] transition-colors duration-300"
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
