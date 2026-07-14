"use client";

import React, { memo } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { navbarConfig } from "./types";

export const NavbarActions = memo(function NavbarActions() {
  const { cta } = navbarConfig;

  return (
    <div className="hidden sm:flex items-center justify-end select-none">
      {/* 
        BUTTON SYSTEM: Primary CTA
        Background: #163B65 | Shape: Rounded Full | Text: White | Font: Inter 15px Medium
        Padding: px-6 py-3 | Hover: Transitions to #214F84 with subtle lift 
      */}
      <Link
        href={cta.href}
        aria-label={cta.ariaLabel}
        className="inline-flex items-center gap-x-2 bg-[#163B65] text-white font-sans text-[15px] font-medium px-6 py-3 rounded-full hover:bg-[#214F84] transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163B65] focus-visible:ring-offset-2 shadow-sm cursor-pointer"
      >
        <MapPin className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
        <span>{cta.label}</span>
      </Link>
    </div>
  );
});
