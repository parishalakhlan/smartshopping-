// features/home/components/DiscoverStoreMobile.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DiscoverStoreConfig } from "@/features/home/data/discoverStoreData";

export default function DiscoverStoreMobile({
  config,
}: {
  config: DiscoverStoreConfig;
}) {
  return (
    <section className="py-20 bg-[#F5F2EC] md:hidden">
      <div className="px-5">
        {/* Mobile Header Flow */}
        <div className="mb-12">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {config.tagline}
          </span>
          <h2 className="font-serif text-3xl text-[#163B65] font-bold tracking-tight leading-[1.2] mb-6">
            Destinations Designed <br />
            For Exploration.
          </h2>

          <a
            href={config.ctaLink}
            className="inline-flex items-center gap-x-2.5 font-sans text-xs font-bold tracking-widest uppercase text-[#163B65]"
          >
            <span>{config.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Flat Stack Layer */}
        <div className="space-y-12">
          {config.destinations.map((dest, idx) => (
            <div key={idx} className="flex flex-col w-full">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-4">
                <Image
                  src={dest.imageSrc}
                  alt={`${dest.city} Architectural Showroom`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.95]"
                />
              </div>

              {/* Identity Footer */}
              <div className="flex flex-col whitespace-normal break-words">
                <h3 className="font-serif text-xl text-[#163B65] font-bold mb-1 tracking-wide">
                  {dest.city}
                </h3>
                <span className="font-sans text-[11px] text-[#475569] font-normal uppercase tracking-wider">
                  {dest.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
