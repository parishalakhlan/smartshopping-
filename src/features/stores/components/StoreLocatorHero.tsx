// src/features/stores/components/StoreLocatorHero.tsx
import React from "react";
import { Search, MapPin, ShieldCheck, Award } from "lucide-react";

export function StoreLocatorHero() {
  return (
    <section className="bg-white border-b border-[var(--color-border-main)] py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Block */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-[var(--color-primary)] px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase font-sans">
            <Award className="w-3.5 h-3.5 text-[var(--color-accent)]" /> 8
            International Fashion Brands
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--color-text-primary)] font-bold tracking-tight leading-none">
            Find Your Nearest <br />
            <span className="text-[var(--color-primary)]">
              Fashion Destination
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-normal max-w-xl leading-relaxed">
            Bringing authentic international retail environments to Tier 2 &
            Tier 3 hubs across North India. Experience live seasonal
            collections.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#locator-workspace"
              className="px-6 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all"
            >
              Find Store Now
            </a>
            <a
              href="#state-expansion"
              className="px-6 py-3.5 bg-white border border-slate-200 text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider rounded-md hover:border-slate-400 transition-all"
            >
              Explore Regional Network
            </a>
          </div>

          {/* Core Trust Anchors */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
            <div>
              <span className="block text-2xl font-bold text-[var(--color-accent)] font-serif">
                25+
              </span>
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                Flagship Stores
              </span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[var(--color-primary)] font-serif">
                8
              </span>
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                Global Brands
              </span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-600 font-serif">
                5
              </span>
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                States Covered
              </span>
            </div>
          </div>
        </div>

        {/* Right Column Commercial Presence Map Artwork Box */}
        <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-md h-[340px] sm:h-[420px] group border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Multi Brand Store Showroom Frontage"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/90 to-slate-900/95 mix-blend-linear" />

          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-300 font-semibold">
                  Corporate Footprint
                </p>
                <h3 className="text-2xl font-serif tracking-wide mt-1">
                  North India Logistics
                </h3>
              </div>
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] shrink-0" />
            </div>

            <div className="space-y-2 max-w-sm">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs font-semibold">
                    Central Distribution Node
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Hubs optimized for high-volume family shopping spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
