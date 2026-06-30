"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Compass, Info, ArrowUpRight } from "lucide-react";
import { flagshipLocation } from "@/features/contact/data/visitData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

export const VisitSectionMobile: React.FC = () => {
  return (
    <section
      id="visit-mobile"
      className="py-12 bg-[#FFFFFF] border-b border-[#163B65]/10 lg:hidden"
    >
      <div className="w-full px-4 space-y-6">
        <FloatingSectionLabel num="03" text="Visit Us" />

        {/* Text Section */}
        <div className="space-y-2 text-left">
          <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">
            {flagshipLocation.tag}
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#163B65]">
            {flagshipLocation.title}
          </h2>
          <p className="text-[#475569] text-xs font-normal leading-relaxed">
            {flagshipLocation.description}
          </p>
        </div>

        {/* Map Preview Graphic */}
        <div className="relative h-[240px] w-full border border-[#163B65]/10 p-1 bg-[#F5F2EC]/30">
          <div className="relative w-full h-full bg-[#E5E1D8] overflow-hidden">
            <Image
              src={flagshipLocation.featureImage}
              alt="Smart Shopping Interior"
              fill
              className="object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-[#163B65]/5 mix-blend-multiply" />

            {/* Pulsing Pin Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F97316]"></span>
              </span>
              <div className="bg-[#163B65] text-[#FFFFFF] text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 shadow-md mt-1.5">
                {flagshipLocation.mapLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Details Stack */}
        <div className="space-y-3.5 text-xs pt-1">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#163B65] uppercase tracking-wider text-[9px] block">
                Address
              </span>
              <p className="text-[#475569] font-normal text-[11px] leading-normal">
                {flagshipLocation.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Compass className="w-3.5 h-3.5 text-[#163B65]/60 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#163B65] uppercase tracking-wider text-[9px] block">
                Landmarks
              </span>
              <p className="text-[#475569] font-normal text-[11px] leading-normal">
                {flagshipLocation.landmark}
              </p>
            </div>
          </div>
        </div>

        {/* Info Footnote Box */}
        <div className="bg-[#F5F2EC]/30 p-3 border border-[#163B65]/10 text-left flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
          <span className="text-[10px] text-[#475569] font-normal leading-normal">
            Flagship stores open across key regional hubs.
          </span>
        </div>

        {/* Native Touch CTA Link */}
        <a
          href={flagshipLocation.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-[#163B65] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors active:bg-[#112F52]"
        >
          Open In Maps
          <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
        </a>
      </div>
    </section>
  );
};
