"use client";

import React, { memo } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { navbarConfig } from "./types";

export const NavbarActions = memo(function NavbarActions() {
  const { cta } = navbarConfig;

  return (
    <div className="hidden sm:flex items-center justify-end select-none">
      <Link
        href={cta.href}
        aria-label={cta.ariaLabel}
        className="inline-flex items-center gap-x-2 bg-primary text-text-inverse font-sans text-[15px] font-extrabold px-6 py-3 rounded-full hover:bg-accent hover:text-text-inverse transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-md cursor-pointer"
      >
        <MapPin className="w-4 h-4 stroke-[2]" aria-hidden="true" />
        <span>{cta.label}</span>
      </Link>
    </div>
  );
});
