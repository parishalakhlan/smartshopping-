"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Compass, Info, ArrowUpRight } from "lucide-react";
import { flagshipLocation } from "@/features/contact/data/visitData";

export const VisitSectionMobile: React.FC = () => {
  return (
    <section
      id="visit-mobile"
      className="py-12 bg-background-main border-b border-border-main lg:hidden"
    >
      <div className="w-full px-4 space-y-6">
        {/* Text Section */}
        <div className="space-y-2 text-left">
          <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest block">
            {flagshipLocation.tag}
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary">
            {flagshipLocation.title}
          </h2>
          <p className="text-text-secondary text-xs font-normal leading-relaxed">
            {flagshipLocation.description}
          </p>
        </div>

        {/* Map Preview Graphic */}
        <div className="relative h-[240px] w-full border border-border-main p-1 bg-background-secondary/30">
          <div className="relative w-full h-full bg-background-secondary overflow-hidden">
            <Image
              src={flagshipLocation.featureImage}
              alt="Smart Shopping Interior"
              fill
              className="object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-text-primary/5 mix-blend-multiply" />

            {/* Pulsing Pin Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <div className="bg-text-primary text-white text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 shadow-md mt-1.5">
                {flagshipLocation.mapLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Details Stack */}
        <div className="space-y-3.5 text-xs pt-1">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-text-primary uppercase tracking-wider text-[9px] block">
                Address
              </span>
              <p className="text-text-secondary font-normal text-[11px] leading-normal">
                {flagshipLocation.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Compass className="w-3.5 h-3.5 text-text-primary/60 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-text-primary uppercase tracking-wider text-[9px] block">
                Landmarks
              </span>
              <p className="text-text-secondary font-normal text-[11px] leading-normal">
                {flagshipLocation.landmark}
              </p>
            </div>
          </div>
        </div>

        {/* Info Footnote Box */}
        <div className="bg-background-secondary/30 p-3 border border-border-main text-left flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
          <span className="text-[10px] text-text-secondary font-normal leading-normal">
            Flagship stores open across key regional hubs.
          </span>
        </div>

        {/* Native Touch CTA Link */}
        <a
          href="https://www.google.com/maps?q=29.1346621,75.7419293&q=Smart+Shopping+Gurudwara+Rd+Model+Town+Hisar+Haryana&zoom=17"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-button-primary-bg text-button-primary-text font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors active:bg-primary-hover"
        >
          Open In Maps
          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
        </a>
      </div>
    </section>
  );
};
