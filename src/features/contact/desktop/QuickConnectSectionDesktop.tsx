"use client";

import React from "react";
import { connectTiles } from "@/features/contact/data/connectData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

export const QuickConnectSectionDesktop: React.FC = () => {
  return (
    <section
      id="connect-desktop"
      className="py-20 bg-[#F5F2EC]/30 border-b border-[#163B65]/10 hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FloatingSectionLabel num="02" text="Quick Connect" />

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 text-left space-y-3">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#163B65]">
              Direct Communication Tiles
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed max-w-sm">
              Skip hierarchies. Use these direct channels to reach our team
              instantly.
            </p>
          </div>

          <div className="col-span-8 grid grid-cols-2 gap-4">
            {connectTiles.map((tile) => (
              <div
                key={tile.id}
                className="bg-[#FFFFFF] border border-[#163B65]/10 p-5 flex flex-col justify-between h-[170px] hover:shadow-md hover:border-[#163B65]/30 transition-all duration-300 relative group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#475569]/60 font-mono tracking-wider block">
                      Channel
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#163B65]">
                      {tile.channel}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F5F2EC] text-[#163B65] border border-[#163B65]/5">
                    {tile.responseTime}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-serif font-bold text-[#163B65] select-all">
                    {tile.value}
                  </p>
                  <p className="text-[#475569] text-xs font-normal">
                    {tile.purpose}
                  </p>
                </div>

                <div className="border-t border-[#163B65]/5 pt-2 flex items-center justify-between text-[9px] text-[#475569]/60 font-bold uppercase tracking-wider">
                  <span>{tile.availability}</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#F97316] transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
