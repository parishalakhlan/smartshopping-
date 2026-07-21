"use client";

import React from "react";
import { connectTiles } from "@/features/contact/data/connectData";

export const QuickConnectSectionMobile: React.FC = () => {
  return (
    <section
      id="connect-mobile"
      className="py-12 bg-background-secondary/30 border-b border-border-main lg:hidden"
    >
      <div className="w-full px-4">
        <div className="text-left space-y-2 mb-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary">
            Direct Communication
          </h2>
          <p className="text-text-secondary text-xs leading-relaxed font-normal">
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
              className="bg-background-main border border-border-main p-4.5 flex flex-col justify-between min-h-[150px] transition-all active:border-border-hover"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-text-secondary/60 font-mono tracking-wider block">
                    Channel
                  </span>
                  <h3 className="font-serif text-sm font-bold text-text-primary">
                    {tile.channel}
                  </h3>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-background-secondary text-text-primary font-bold">
                  {tile.responseTime}
                </span>
              </div>

              <div className="space-y-0.5 my-2">
                <p className="text-sm font-serif font-bold text-text-primary tracking-tight break-all">
                  {tile.value}
                </p>
                <p className="text-text-secondary text-[11px] font-normal leading-normal pr-2">
                  {tile.purpose}
                </p>
              </div>

              <div className="border-t border-border-main/5 pt-2 flex items-center justify-between text-[9px] text-text-secondary/60 font-bold uppercase tracking-wider">
                <span>{tile.availability}</span>
                <span className="text-accent font-mono text-xs">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
