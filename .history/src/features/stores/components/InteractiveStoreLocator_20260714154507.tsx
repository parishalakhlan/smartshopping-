"use client";
import type { Store, StateFootprint } from "@/features/stores/data/stores";
import { MobileStoreLocator } from "@/features/stores/components/mobile/MobileStoreLocator";
import { DesktopStoreLocator } from "@/features/stores/components/desktop/DesktopStoreLocator";

interface Props {
  data: StoreLocatorData;
}

export function InteractiveStoreLocator({ data }: Props) {
  return (
    <div id="locator-workspace">
      {/* 
        Mobile Engine Canvas Container:
        Strict progressive disclosure framework mapped solely to mobile screens.
        Hidden at md (768px) breakpoint to eliminate dual rendering tracks.
      */}
      <div className="block md:hidden">
        <MobileStoreLocator data={data} />
      </div>

      {/* 
        Desktop Engine Canvas Container:
        Restores full interactive geographic dashboard framework for pointer navigation.
        Hidden by default, unmounted or suppressed below md breakpoint.
      */}
      <div className="hidden md:block">
        <DesktopStoreLocator data={data} />
      </div>
    </div>
  );
}
