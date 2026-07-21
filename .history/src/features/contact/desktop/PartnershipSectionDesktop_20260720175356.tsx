"use client";

import React, { useState } from "react";

import { partnershipsData } from "@/features/contact/data/partnershipsData";

interface PartnershipSectionDesktopProps {
  onStartPartnership: () => void;
}

export const PartnershipSectionDesktop: React.FC<
  PartnershipSectionDesktopProps
> = ({ onStartPartnership }) => {
  const [activePartnerId, setActivePartnerId] = useState<string>("part-1");

  return (
    <section
      id="partnerships-desktop"
      className="py-20 bg-background-main border-b border-border-main hidden lg:block"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-start mb-12 text-left">
          <div className="col-span-5 space-y-2">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
              Work With Us
            </h2>
          </div>
          <div className="col-span-7">
            <p className="text-text-secondary text-sm leading-relaxed">
              We separate consumer inquiries from institutional brand
              developments. Explore our collaboration sectors below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-left">
          {partnershipsData.map((part) => {
            const isSelected = activePartnerId === part.id;
            return (
              <div
                key={part.id}
                onClick={() => setActivePartnerId(part.id)}
                className={`p-6 border transition-all duration-300 cursor-pointer rounded-none flex flex-col justify-between h-[180px] ${
                  isSelected
                    ? "bg-background-secondary/60 border-text-primary"
                    : "bg-background-main border-border-main hover:border-border-hover"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-text-primary">
                      {part.title}
                    </h3>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </div>
                  <p className="text-text-secondary text-xs font-normal leading-relaxed">
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
      </div>
    </section>
  );
};
