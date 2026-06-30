// src/features/stores/components/StoreStats.tsx
"use client";

import React from "react";
import { MobileStoreStats } from "@/features/stores/components/mobile/MobileStoreStats";
import { DesktopStoreStats } from "@/features/stores/components/desktop/DesktopStoreStats";

export function StoreStats() {
  return (
    <>
      {/* Serves the 2x2 micro layout matrix explicitly to smaller handheld viewports */}
      <div className="block md:hidden">
        <MobileStoreStats />
      </div>

      {/* Serves the standard fluid row array config to larger tablet and desktop configurations */}
      <div className="hidden md:block">
        <DesktopStoreStats />
      </div>
    </>
  );
}
