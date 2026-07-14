"use client";

import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} space-y-4`}>
      <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
        {badge}
      </span>
      <h2 className="text-4xl font-light tracking-tight text-white">{title}</h2>
      {description && (
        <p className="text-stone-400 font-light text-sm max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
