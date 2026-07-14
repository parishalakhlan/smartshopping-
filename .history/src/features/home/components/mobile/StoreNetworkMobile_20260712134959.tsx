// features/home/components/StoreNetworkMobile.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { NetworkConfig } from "@/features/home/data/networkData";

export default function StoreNetworkMobile({
  config,
}: {
  config: NetworkConfig;
}) {
  return (
    <section className="py-20 bg-background-main md:hidden">
      <div className="px-5">
        {/* Mobile Header Block */}
        <div className="mb-10">
          <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {config.tagline}
          </span>
          <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2]">
            Find Your Nearest <br />
            Fashion Destination.
          </h2>
        </div>

        {/* Compact Physical Canvas Block */}
        <div className="relative aspect-[4/3] w-full bg-background-secondary mb-10 overflow-hidden">
          <Image
            src={config.imageSrc}
            alt="Premium Concept Store Architecture"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.94]"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 shadow-sm inline-flex items-center gap-x-2">
            <MapPin className="w-3 h-3 text-accent shrink-0" />
            <p className="font-sans text-[10px] font-bold tracking-wider uppercase text-text-primary">
              {config.flagshipLabel}
            </p>
          </div>
        </div>

        {/* Text Description Block */}
        <p className="font-sans text-text-secondary text-sm sm:text-base leading-relaxed mb-10 whitespace-normal break-words">
          {config.description}
        </p>

        {/* Regional Focus Stack */}
        <div className="border-t border-background-secondary pt-8 mb-10 flex flex-col gap-y-6 w-full font-sans">
          {config.highlights.map((highlight, idx) => (
            <div key={idx} className="w-full whitespace-normal break-words">
              <h4 className="font-bold text-text-primary text-[11px] uppercase tracking-widest mb-1.5">
                {highlight.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {highlight.body}
              </p>
            </div>
          ))}
        </div>

        {/* High-Tactility Full Width Triggers */}
        <div className="flex flex-col gap-y-4 w-full">
          <Link
            href="/store-locator"
            className="inline-flex items-center justify-between w-full p-4 bg-button-primary-bg text-white font-sans text-xs font-bold tracking-widest uppercase"
          >
            <span>Launch Store Locator</span>
            <ArrowRight className="w-4 h-4 shrink-0 text-accent" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-between w-full p-4 bg-background-secondary text-text-secondary font-sans text-xs font-bold tracking-widest uppercase"
          >
            <span>Private Appointments</span>
            <ArrowRight className="w-4 h-4 shrink-0 opacity-40" />
          </Link>
        </div>
      </div>
    </section>
  );
}
