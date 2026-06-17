"use client";

import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight01Icon } from "hugeicons-react";
import { corporateConfig } from "@/config/navigation";

export const NavbarActions = memo(function NavbarActions() {
  return (
    <div className="hidden lg:flex items-center justify-end">
      <Button
        onClick={() => {
          window.location.href = corporateConfig.ctaHref;
        }}
        className="h-11 bg-[#111111] hover:bg-[#E65100] text-white font-luxury-nav px-7 transition-all duration-300 rounded-none shadow-none cursor-pointer group flex items-center gap-2 border-0"
      >
        <span>{corporateConfig.ctaLabel}</span>
        <ArrowUpRight01Icon
          size={15}
          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 stroke-[1.8]"
        />
      </Button>
    </div>
  );
});
