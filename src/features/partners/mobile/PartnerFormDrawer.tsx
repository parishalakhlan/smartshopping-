"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PartnerFormDrawerProps {
  config?: typeof import("@/features/partners/partners.data").partnersConfig;
}

export default function PartnerFormDrawer({ config }: PartnerFormDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Bottom Bar Trigger */}
      <div className="sticky bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-background-main to-transparent border-t border-text-primary/5 backdrop-blur-sm">
        <button
          onClick={() => setIsOpen(true)}
          id="apply-drawer"
          className="w-full bg-button-primary-bg text-button-primary-text text-xs font-medium uppercase tracking-[0.25em] py-5 text-center block transition-all duration-300 active:scale-[0.99] hover:opacity-90"
        >
          Initialize Underwriting Form
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            {/* Minimalist Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background-main"
            />

            {/* Context Canvas Drawer Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative bg-surface p-8 space-y-8 max-h-[85vh] overflow-y-auto z-10 border-t border-text-primary/10 rounded-t-xl shadow-2xl"
            >
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center border-b border-text-primary/5 pb-4">
                <span className="text-[10px] uppercase text-text-muted tracking-[0.25em] font-medium">
                  Intent Assessment
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  Close
                </button>
              </div>

              {/* Architecture-inspired Form Layout */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block">
                    Legal Entity Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
                    placeholder="e.g. Sterling Holdings"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block">
                    Target Segment Corridor
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
                    placeholder="e.g. West Zone Core Cities"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block">
                    Secure Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 rounded-none"
                    placeholder="e.g. contact@sterling.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block">
                    Commercial Footprint / Narrative
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-b border-text-primary/10 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-300 resize-none rounded-none leading-relaxed"
                    placeholder="Brief outline of operations..."
                  />
                </div>

                {/* Submit Action Block */}
                <button
                  type="submit"
                  className="w-full bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-[0.25em] font-medium py-5 mt-4 transition-all duration-300 active:scale-[0.99] hover:opacity-90"
                >
                  Transmit Intent Profile
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
