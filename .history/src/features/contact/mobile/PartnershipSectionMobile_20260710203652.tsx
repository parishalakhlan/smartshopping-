"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { partnershipsData } from "@/features/contact/data/partnershipsData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

interface PartnershipSectionMobileProps {
  onStartPartnership: () => void;
}

export const PartnershipSectionMobile: React.FC<
  PartnershipSectionMobileProps
> = ({ onStartPartnership }) => {
  const [activePartnerId, setActivePartnerId] = useState<string>("part-1");

  return (
    <section
      id="partnerships-mobile"
      className="py-12 bg-[#FFFFFF] border-b border-[#163B65]/10 lg:hidden"
    >
      <div className="w-full px-4">
        <FloatingSectionLabel num="04" text="Partnerships" />

        {/* Headings optimized for simple vertical flow */}
        <div className="text-left space-y-2 mb-6">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#163B65]">
            Work With Us
          </h2>
          <p className="text-[#475569] text-xs font-normal leading-relaxed">
            We separate consumer inquiries from institutional brand
            developments. Explore our collaboration sectors below.
          </p>
        </div>

        {/* Stacked Row Setup - 1 Card Per Row for ultimate small screen spaciousness */}
        <div className="flex flex-col gap-3.5 text-left">
          {partnershipsData.map((part) => {
            const isSelected = activePartnerId === part.id;
            return (
              <div
                key={part.id}
                onClick={() => setActivePartnerId(part.id)}
                className={`p-5 border transition-all cursor-pointer rounded-none flex flex-col justify-between min-h-[150px] ${
                  isSelected
                    ? "bg-[#F5F2EC]/60 border-[#163B65]"
                    : "bg-[#FFFFFF] border-[#163B65]/10 active:border-[#163B65]/30"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-serif text-base font-bold ${isSelected ? "text-[#163B65]" : "text-[#163B65]/80"}`}
                    >
                      {part.title}
                    </h3>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    )}
                  </div>
                  <p className="text-[#475569] text-[11px] font-normal leading-normal pr-1">
                    {part.description}
                  </p>
                </div>

                <div className="border-t border-[#163B65]/10 pt-2 flex items-center justify-between text-[9px] font-mono tracking-wider uppercase text-[#163B65]/60">
                  <span>Focus: {part.focus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link interaction block - No magnetic delay on ultra smaller mobile units */}
        <div className="mt-6">
          <button
            onClick={onStartPartnership}
            className="w-full py-4 bg-[#163B65] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:bg-[#112F52]"
          >
            Start Discussion
            <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
          </button>
        </div>
      </div>
    </section>
  );
};
