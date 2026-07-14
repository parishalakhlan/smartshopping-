"use client";

import React from "react";

interface FloatingSectionLabelDesktopProps {
  num: string;
  text: string;
}

export const FloatingSectionLabelDesktop: React.FC<
  FloatingSectionLabelDesktopProps
> = ({ num, text }) => {
  return (
    <div className="hidden lg:flex items-center space-x-3 absolute left-8 xl:left-12 transform -translate-x-full pr-4 select-none pointer-events-none">
      <span className="font-mono text-[10px] font-bold text-[#F97316] tracking-wider">
        {num}
      </span>
      <div className="w-8 h-[1px] bg-[#163B65]/20" />
      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#163B65]/40 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};
