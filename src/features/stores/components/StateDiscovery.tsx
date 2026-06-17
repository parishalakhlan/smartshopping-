// src/features/stores/components/StateDiscovery.tsx
import React from "react";
import { ArrowUpRight, Building2, Map } from "lucide-react";
import { REGIONAL_FOOTPRINTS } from "../data/stores";

export function StateDiscovery() {
  return (
    <section
      id="state-expansion"
      className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border-main)]"
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
            Corporate Roadmap
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-[var(--color-text-primary)]">
            Regional Franchise Coverage
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-xl font-normal">
            Strategic retail distribution footprint ensuring logistical support
            and tier-1 scale multi-brand spaces across major economic trade
            zones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {REGIONAL_FOOTPRINTS.map((footprint) => (
            <div
              key={footprint.id}
              className="bg-white p-6 rounded-xl border border-[var(--color-border-main)] shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[var(--color-primary)] group-hover:bg-orange-50 group-hover:text-[var(--color-accent)] transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text-primary)]">
                    {footprint.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {footprint.count} Active Operational Showrooms
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {footprint.cities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-50 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded border border-slate-100"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#locator-workspace"
                className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors"
              >
                <span>View State Directory</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
