// src/features/stores/components/StoreStats.tsx
import React from "react";
import { Milestone, Users2, Layers3, Globe2 } from "lucide-react";

export function StoreStats() {
  return (
    <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-y border-[var(--color-border-main)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex gap-4 items-start p-2">
          <div className="p-3 bg-orange-50 rounded-lg text-[var(--color-accent)] shrink-0">
            <Milestone className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-3xl font-bold text-[var(--color-accent)] font-serif leading-none">
              25+
            </span>
            <span className="block text-xs font-bold text-[var(--color-primary)] mt-1 uppercase tracking-wider">
              Showrooms Live
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
              Premium physical storefronts.
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-start p-2">
          <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)] shrink-0">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-3xl font-bold text-[var(--color-primary)] font-serif leading-none">
              8
            </span>
            <span className="block text-xs font-bold text-[var(--color-primary)] mt-1 uppercase tracking-wider">
              Global Brands
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
              Authorized direct franchise tier mix.
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-start p-2">
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
            <Users2 className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-3xl font-bold text-emerald-600 font-serif leading-none">
              50,000+
            </span>
            <span className="block text-xs font-bold text-[var(--color-primary)] mt-1 uppercase tracking-wider">
              Clients Served
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
              High volume family demographic base.
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-start p-2">
          <div className="p-3 bg-purple-50 rounded-lg text-purple-600 shrink-0">
            <Layers3 className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-3xl font-bold text-purple-600 font-serif leading-none">
              5 States
            </span>
            <span className="block text-xs font-bold text-[var(--color-primary)] mt-1 uppercase tracking-wider">
              Territory Coverage
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
              Logistical supply chain validation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
