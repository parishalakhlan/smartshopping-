// src/features/stores/components/StateDiscovery.tsx
"use client";

import React from "react";
import { MobileStateDiscovery } from "@/features/stores/components/mobile/MobileStateDiscovery";
import { DesktopStateDiscovery } from "@/features/stores/components/desktop/DesktopStateDiscovery";

export function StateDiscovery() {
  return (
    <>
      {/* Serves the touch-friendly, horizontal swiping strip to mobile viewports */}
      <div className="block md:hidden">
        <MobileStateDiscovery />
      </div>

      {/* Serves the traditional full 4-column balanced tile matrix layout to tablets/desktops */}
      <div className="hidden md:block">
        <DesktopStateDiscovery />
      </div>
    </>
  );
}
