// src/features/stores/components/StoreCTA.tsx
"use client";

import React from "react";
import { MobileStoreCTA } from "@/features/stores/components/mobile/MobileStoreCTA";
import { DesktopStoreCTA } from "@/features/stores/components/desktop/DesktopStoreCTA";

export function StoreCTA() {
  return (
    <>
      {/* Serves stacked, full-width actions for streamlined mobile interactions */}
      <div className="block md:hidden">
        <MobileStoreCTA />
      </div>

      {/* Serves the traditional centered inline geometric layout on tablet and desktop viewports */}
      <div className="hidden md:block">
        <DesktopStoreCTA />
      </div>
    </>
  );
}
