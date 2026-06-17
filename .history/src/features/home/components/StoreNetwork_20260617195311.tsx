import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export default function StoreNetwork() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Map Visual Container Representation */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between rounded-sm">
            <div>
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#163B65] font-bold block mb-4">
                REGIONAL COVERAGE VISUALIZATION
              </span>

              {/* Coverage Lists */}
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-sans font-medium text-slate-800">
                    Punjab
                  </span>
                  <span className="font-mono text-xs bg-[#163B65]/10 text-[#163B65] px-2 py-1 rounded-sm">
                    11 Hubs
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-sans font-medium text-slate-800">
                    Haryana
                  </span>
                  <span className="font-mono text-xs bg-[#163B65]/10 text-[#163B65] px-2 py-1 rounded-sm">
                    8 Hubs
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-sans font-medium text-slate-800">
                    Rajasthan
                  </span>
                  <span className="font-mono text-xs bg-[#163B65]/10 text-[#163B65] px-2 py-1 rounded-sm">
                    5 Hubs
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-sans font-medium text-slate-800">
                    Other Territories
                  </span>
                  <span className="font-mono text-xs bg-[#163B65]/10 text-[#163B65] px-2 py-1 rounded-sm">
                    3 Hubs
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 font-sans text-xs text-slate-400 italic">
              * Fully managed corporate high-street locations & premier premium
              mall spaces.
            </div>
          </div>

          {/* Right Column: Text Information & Actions */}
          <div className="lg:col-span-6">
            <span className="text-[#F97316] font-sans font-semibold tracking-wider text-sm uppercase block mb-3">
              RETAIL FOOTPRINT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0F172A] font-normal mb-4">
              Find Your Nearest Store
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-lg mb-8 font-light leading-relaxed">
              Explore our growing network of fashion destinations across North
              India. Experience international brand standards directly inside
              your local city ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 font-sans">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wider mb-1">
                  Key Hubs
                </h4>
                <p className="text-sm text-slate-500 font-light">
                  Amritsar, Jalandhar, Ludhiana, Udaipur, Kota
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wider mb-1">
                  Indicators
                </h4>
                <p className="text-sm text-slate-500 font-light">
                  100% Client satisfaction across verified touchpoints
                </p>
              </div>
            </div>

            {/* CTAs connecting core workflow paths */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/store-locator"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#163B65] hover:bg-[#214f84] text-white font-sans text-sm font-medium tracking-wider uppercase transition-colors rounded-sm"
              >
                <MapPin className="w-4 h-4 mr-2 text-[#F97316]" />
                Explore Store Locator
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#0F172A] font-sans text-sm font-medium tracking-wider uppercase transition-colors rounded-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-slate-400" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
