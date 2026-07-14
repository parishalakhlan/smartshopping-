import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { journeyStations } from "@/features/partners/partners.data";

export default function JourneySteps() {
  const [openStep, setOpenStep] = useState<string | null>(
    journeyStations[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Onboarding Pipelines
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Sequential Stations
        </h2>
      </div>

      <div className="space-y-2">
        {journeyStations.map((station) => {
          const isOpen = openStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setOpenStep(isOpen ? null : station.id)}
              className="bg-[#0D0D0E] border border-white/5 p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-stone-600">
                  {station.step}
                </span>
                <span className="text-xs text-stone-200 font-light tracking-wide">
                  {station.phase}
                </span>
                <ChevronRight
                  size={14}
                  className={`text-[#E25822] transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-4 mt-3 border-t border-white/5 space-y-2"
                >
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {station.process}
                  </p>
                  <div className="text-[10px] font-mono text-[#E25822] pt-1">
                    Window: {station.timeline}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
