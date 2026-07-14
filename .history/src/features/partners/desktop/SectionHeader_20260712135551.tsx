import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
        {badge}
      </span>
      <h2 className="text-4xl font-light tracking-tight text-white mt-2">
        {title}
      </h2>
      {description && (
        <p className="text-stone-400 font-light text-sm leading-relaxed mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
