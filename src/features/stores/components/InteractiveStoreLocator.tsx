// src/features/stores/components/InteractiveStoreLocator.tsx
"use client";

import React from "react";
import { MobileStoreLocator } from "@/features/stores/components/mobile/MobileStoreLocator";
import { DesktopStoreLocator } from "@/features/stores/components/desktop/DesktopStoreLocator";

export function InteractiveStoreLocator() {
  return (
    <>
      {/* 
        Mobile Engine Canvas Container:
        Strict progressive disclosure framework mapped solely to mobile screens.
        Hidden at md (768px) breakpoint to eliminate dual rendering tracks.
      */}
      <div className="block md:hidden">
        <MobileStoreLocator />
      </div>

      {/* 
        Desktop Engine Canvas Container:
        Restores full interactive geographic dashboard framework for pointer navigation.
        Hidden by default, unmounted or suppressed below md breakpoint.
      */}
      <div className="hidden md:block">
        <DesktopStoreLocator />
      </div>
    </>
  );
}
