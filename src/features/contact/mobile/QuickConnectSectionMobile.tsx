"use client";

import React from "react";
import { connectTiles } from "@/features/contact/data/connectData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

export const QuickConnectSectionMobile: React.FC = () => {
  return (
    <section
      id="connect-mobile"
      className="py-12 bg-[#F5F2EC]/30 border-b border-[#163B65]/10 lg:hidden"
    >
      <div className="w-full px-4">
        <FloatingSectionLabel num="02" text="Quick Connect" />

        <div className="text-left space-y-2 mb-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#163B65]">
            Direct Communication
          </h2>
          <p className="text-[#475569] text-xs leading-relaxed font-normal">
            Skip hierarchies. Use these direct touch targets to link directly
            with our team instantly.
          </p>
        </div>

        {/* Stacked Layout preventing side-scroll or tight labels on narrow screens */}
        <div className="flex flex-col gap-4">
          {connectTiles.map((tile) => (
            <a
              href={tile.actionUrl}
              key={tile.id}
              className="bg-[#FFFFFF] border border-[#163B65]/10 p-4.5 flex flex-col justify-between min-h-[150px] transition-all active:border-[#163B65]/40"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-[#475569]/60 font-mono tracking-wider block">
                    Channel
                  </span>
                  <h3 className="font-serif text-sm font-bold text-[#163B65]">
                    {tile.channel}
                  </h3>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F5F2EC] text-[#163B65] font-bold">
                  {tile.responseTime}
                </span>
              </div>

              <div className="space-y-0.5 my-2">
                <p className="text-sm font-serif font-bold text-[#163B65] tracking-tight break-all">
                  {tile.value}
                </p>
                <p className="text-[#475569] text-[11px] font-normal leading-normal pr-2">
                  {tile.purpose}
                </p>
              </div>

              <div className="border-t border-[#163B65]/5 pt-2 flex items-center justify-between text-[9px] text-[#475569]/60 font-bold uppercase tracking-wider">
                <span>{tile.availability}</span>
                <span className="text-[#F97316] font-mono text-xs">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
