// src/features/stores/components/StoreExperience.tsx
"use client";

import React from "react";
import { MobileStoreExperience } from "@/features/stores/components/mobile/MobileStoreExperience";
import { DesktopStoreExperience } from "@/features/stores/components/desktop/DesktopStoreExperience";

export function StoreExperience() {
  return (
    <>
      {/* Serves horizontal swipe strip layout to native mobile browsers */}
      <div className="block md:hidden">
        <MobileStoreExperience />
      </div>

      {/* Serves standard 4-column spatial layout configuration to tablet/desktop viewports */}
      <div className="hidden md:block">
        <DesktopStoreExperience />
      </div>
    </>
  );
}
