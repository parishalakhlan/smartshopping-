"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Compass, Info, ArrowUpRight } from "lucide-react";
import { flagshipLocation } from "@/features/contact/data/visitData";
import { MagneticButton } from "@/features/contact/MagneticButton";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

export const VisitSectionDesktop: React.FC = () => {
  return (
    <section
      id="visit-desktop"
      className="py-20 bg-background-main border-b border-border-main hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FloatingSectionLabel num="03" text="Visit Us" />

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-widest block">
                {flagshipLocation.tag}
              </span>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
                {flagshipLocation.title}
              </h2>
              <p className="text-text-secondary text-sm font-normal leading-relaxed">
                {flagshipLocation.description}
              </p>
            </div>

            <div className="space-y-4 border-t border-border-main pt-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text-primary uppercase tracking-wider text-[10px] block">
                    Address
                  </span>
                  <p className="text-text-secondary font-medium">
                    {flagshipLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-text-primary/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text-primary uppercase tracking-wider text-[10px] block">
                    Landmarks
                  </span>
                  <p className="text-text-secondary">
                    {flagshipLocation.landmark}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={flagshipLocation.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <MagneticButton className="px-6 py-3.5 bg-button-primary-bg text-button-primary-text hover:bg-primary-hover flex items-center gap-2 rounded-none">
                  Open In Maps{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </MagneticButton>
              </a>
            </div>
          </div>

          <div className="relative h-[350px] w-full border border-border-main p-2 bg-background-secondary/30">
            <div className="relative w-full h-full bg-background-secondary overflow-hidden">
              <Image
                src={flagshipLocation.featureImage}
                alt="Smart Shopping Interior"
                fill
                className="object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-text-primary/5 mix-blend-multiply" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <div className="bg-text-primary text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 shadow-md mt-2">
                  {flagshipLocation.mapLabel}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-background-main p-3 border border-border-main text-left flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-[10px] text-text-secondary font-medium">
                  Flagship stores open across key regional hubs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
