"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DiscoverStoreConfig } from "@/features/home/data/discoverStoreData";

interface DiscoverStoreMobileProps {
  config: DiscoverStoreConfig;
}

export default function DiscoverStoreMobile({
  config,
}: DiscoverStoreMobileProps) {
  const { section, cta, destinations, metadata } = config;

  return (
    <section className="py-20 bg-background-secondary md:hidden">
      <div className="px-5">
        {/* Mobile Header Flow */}
        <div className="mb-12">
          <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {section.tagline}
          </span>
          <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2] mb-6">
            {section.headingLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < section.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <a
            href={cta.link}
            aria-label={cta.ariaLabel}
            className="inline-flex items-center gap-x-2.5 font-sans text-xs font-bold tracking-widest uppercase text-text-primary"
          >
            <span>{cta.text}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Flat Stack Layer */}
        <div className="space-y-12">
          {destinations.map((dest, idx) => (
            <div key={idx} className="flex flex-col w-full">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-4">
                <Image
                  src={dest.image.src}
                  alt={dest.image.alt}
                  fill
                  sizes={dest.image.sizes.mobile}
                  className={`${dest.image.objectFit} ${dest.image.objectPosition} ${dest.image.filters.brightness}`}
                />
              </div>

              {/* Identity Footer */}
              <div className="flex flex-col whitespace-normal break-words">
                <h3 className="font-serif text-xl text-text-primary font-bold mb-1 tracking-wide">
                  {dest.city}
                </h3>
                <span className="font-sans text-[11px] text-text-secondary font-normal uppercase tracking-wider">
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
