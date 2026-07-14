"use client";

import React from "react";
import { storesConfig } from "@/features/stores/data/stores";
import { MobileStoreStats } from "@/features/stores/components/mobile/MobileStoreStats";
import { DesktopStoreStats } from "@/features/stores/components/desktop/DesktopStoreStats";

export function StoreStats() {
  return (
    <div id="store-stats">
      {/* Serves the 2x2 micro layout matrix explicitly to smaller handheld viewports */}
      <div className="block md:hidden">
        <MobileStoreStats />
      </div>

      {/* Serves the standard fluid row array config to larger tablet and desktop configurations */}
      <div className="hidden md:block">
        <DesktopStoreStats />
      </div>
    </div>
  );
}
