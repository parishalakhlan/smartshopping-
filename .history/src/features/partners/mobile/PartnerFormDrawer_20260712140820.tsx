import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnerFormDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-black to-transparent border-t border-white/5">
        <button
          onClick={() => setIsOpen(true)}
          id="apply-drawer"
          className="w-full bg-white text-black text-xs font-semibold uppercase tracking-widest py-4 text-center block"
        >
          Initialize Underwriting Form
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black"
            />
            {/* Context Canvas Drawer Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-[#0D0D0E] border-t border-white/10 p-6 space-y-6 max-h-[85vh] overflow-y-auto z-10"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs uppercase text-stone-400 tracking-widest font-mono">
                  Intent Assessment
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-[#E25822] font-semibold"
                >
                  Close
                </button>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Legal Entity Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. Sterling Holdings"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Target Segment Corridor
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. West Zone Core Cities"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Secure Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. contact@sterling.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Commercial Footprint / Narrative
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] resize-none"
                    placeholder="Brief outline of operations..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E25822] text-white text-xs uppercase tracking-widest font-semibold py-3.5 mt-2"
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
