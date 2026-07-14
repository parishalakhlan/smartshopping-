import React, { useState } from "react";
import { Globe } from "lucide-react";
import { regionalRegions } from "@/features/partners/partners.data";

export default function GrowthMapReveal() {
  const [activeZone, setActiveZone] = useState<string | null>(
    regionalRegions[0].id,
  );
  const currentZone = regionalRegions.find((r) => r.id === activeZone);

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Spatial Allocations
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Growth Footprint
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {regionalRegions.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveZone(r.id)}
            className={`py-2 text-[10px] uppercase tracking-widest font-mono border ${
              activeZone === r.id
                ? "border-[#E25822] bg-black text-white"
                : "border-white/5 text-stone-500"
            }`}
          >
            {r.name.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-black p-5 border border-white/5 min-h-[180px] flex flex-col justify-between">
        {currentZone ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white border-b border-white/5 pb-2">
              <Globe size={14} className="text-[#E25822]" />
              <span className="text-xs uppercase tracking-wider">
                {currentZone.name} Matrix
              </span>
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              <span className="text-stone-500 block text-[9px] uppercase tracking-widest mb-0.5">
                Presence
              </span>
              {currentZone.presence}
            </p>
            <p className="text-xs text-[#E25822] font-light leading-relaxed">
              <span className="text-stone-500 block text-[9px] uppercase tracking-widest mb-0.5">
                Pipeline Corridor
              </span>
              {currentZone.opportunities}
            </p>
          </div>
        ) : (
          <p className="text-xs text-stone-500 italic">
            Select deployment tier grid above...
          </p>
        )}
      </div>
    </section>
  );
}
