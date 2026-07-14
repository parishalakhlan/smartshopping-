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
    <div
      className={`${center ? "text-center mx-auto items-center" : "text-left"} flex flex-col space-y-6 max-w-4xl`}
    >
      {/* Editorial Kicker / Badge */}
      <span className="text-xs uppercase tracking-[0.4em] text-accent font-medium block">
        {badge}
      </span>

      {/* Architectonic Headline */}
      <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
        {title}
      </h2>

      {/* Sophisticated Body Paragraph */}
      {description && (
        <p
          className={`text-text-secondary font-light text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
