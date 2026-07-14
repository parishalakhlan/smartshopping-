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
      className="py-20 bg-[#FFFFFF] border-b border-[#163B65]/10 hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FloatingSectionLabel num="03" text="Visit Us" />

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">
                {flagshipLocation.tag}
              </span>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#163B65]">
                {flagshipLocation.title}
              </h2>
              <p className="text-[#475569] text-sm font-normal leading-relaxed">
                {flagshipLocation.description}
              </p>
            </div>

            <div className="space-y-4 border-t border-[#163B65]/10 pt-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#163B65] uppercase tracking-wider text-[10px] block">
                    Address
                  </span>
                  <p className="text-[#475569] font-medium">
                    {flagshipLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#163B65]/60 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#163B65] uppercase tracking-wider text-[10px] block">
                    Landmarks
                  </span>
                  <p className="text-[#475569]">{flagshipLocation.landmark}</p>
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
                <MagneticButton className="px-6 py-3.5 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] flex items-center gap-2 rounded-none">
                  Open In Maps{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                </MagneticButton>
              </a>
            </div>
          </div>

          <div className="relative h-[350px] w-full border border-[#163B65]/10 p-2 bg-[#F5F2EC]/30">
            <div className="relative w-full h-full bg-[#E5E1D8] overflow-hidden">
              <Image
                src={flagshipLocation.featureImage}
                alt="Smart Shopping Interior"
                fill
                className="object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-[#163B65]/5 mix-blend-multiply" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F97316]"></span>
                </span>
                <div className="bg-[#163B65] text-[#FFFFFF] text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 shadow-md mt-2">
                  {flagshipLocation.mapLabel}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF] p-3 border border-[#163B65]/10 text-left flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span className="text-[10px] text-[#475569] font-medium">
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
