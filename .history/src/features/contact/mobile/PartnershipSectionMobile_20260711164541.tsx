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
      className="py-12 bg-background-main border-b border-border-main lg:hidden"
    >
      <div className="w-full px-4">
        <FloatingSectionLabel num="04" text="Partnerships" />

        {/* Headings optimized for simple vertical flow */}
        <div className="text-left space-y-2 mb-6">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary">
            Work With Us
          </h2>
          <p className="text-text-secondary text-xs font-normal leading-relaxed">
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
                    ? "bg-background-secondary/60 border-text-primary"
                    : "bg-background-main border-border-main active:border-border-hover"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-serif text-base font-bold ${isSelected ? "text-text-primary" : "text-text-primary/80"}`}
                    >
                      {part.title}
                    </h3>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </div>
                  <p className="text-text-secondary text-[11px] font-normal leading-normal pr-1">
                    {part.description}
                  </p>
                </div>

                <div className="border-t border-border-main pt-2 flex items-center justify-between text-[9px] font-mono tracking-wider uppercase text-text-primary/60">
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
            className="w-full py-4 bg-button-primary-bg text-button-primary-text font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:bg-primary-hover"
          >
            Start Discussion
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};
