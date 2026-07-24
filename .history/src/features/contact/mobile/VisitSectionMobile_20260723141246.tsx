"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Compass, Info, ArrowUpRight } from "lucide-react";
import { flagshipLocation } from "@/features/contact/data/visitData";

export const VisitSectionMobile: React.FC = () => {
  return (
    <section
      id="visit-mobile"
      className="py-12 bg-surface border-t-2 border-b-2 border-border-main lg:hidden transition-colors duration-300"
    >
      <div className="w-full px-5 space-y-6">
        {/* Text Section */}
        <div className="space-y-2 text-left">
          <span className="text-[10px] font-mono font-extrabold text-accent uppercase tracking-widest block">
            {flagshipLocation.tag}
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary">
            {flagshipLocation.title}
          </h2>
          <p className="text-text-primary text-sm font-medium leading-relaxed">
            {flagshipLocation.description}
          </p>
        </div>

        {/* High-Contrast Map Preview Graphic */}
        <div className="relative h-[250px] w-full border-2 border-border-main p-1.5 bg-card-bg shadow-sm">
          <div className="relative w-full h-full border border-border-main overflow-hidden">
            <Image
              src={flagshipLocation.featureImage}
              alt="Smart Shopping Interior"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent pointer-events-none" />

            {/* Pulsing Pin Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent border-2 border-card-bg"></span>
              </span>
              <div className="bg-card-bg text-text-primary border-2 border-border-main text-[9px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 shadow-md mt-1.5">
                {flagshipLocation.mapLabel}
              </div>
            </div>
          </div>
        </div>

        {/* High-Contrast Metadata Details Stack */}
        <div className="space-y-4 pt-1">
          <div className="flex items-start gap-3 bg-card-bg p-3.5 border-2 border-border-main shadow-sm">
            <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-accent uppercase tracking-wider text-[10px] block mb-0.5">
                Address
              </span>
              <p className="text-text-primary font-bold text-xs leading-normal">
                {flagshipLocation.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-card-bg p-3.5 border-2 border-border-main shadow-sm">
            <Compass className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-accent uppercase tracking-wider text-[10px] block mb-0.5">
                Landmarks
              </span>
              <p className="text-text-primary font-bold text-xs leading-normal">
                {flagshipLocation.landmark}
              </p>
            </div>
          </div>
        </div>

        {/* Info Footnote Box */}
        <div className="bg-card-bg p-3.5 border-2 border-border-main border-l-4 border-l-accent text-left flex items-center gap-2.5 shadow-sm">
          <Info className="w-4 h-4 text-accent shrink-0" />
          <span className="text-xs text-text-primary font-bold leading-normal">
            Flagship stores open across key regional hubs.
          </span>
        </div>

        {/* High-Contrast Action CTA */}
        <a
          href="https://www.google.com/maps?q=29.1346621,75.7419293&q=Smart+Shopping+Gurudwara+Rd+Model+Town+Hisar+Haryana&zoom=17"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-button-primary-bg text-button-primary-text border-2 border-border-main font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-95 hover:border-accent"
        >
          Open In Maps
          <ArrowUpRight className="w-4 h-4 text-accent" />
        </a>
      </div>
    </section>
  );
};
