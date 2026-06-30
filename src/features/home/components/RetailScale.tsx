// features/home/components/DiscoverStore.tsx
"use client";

import { discoverStoreConfig } from "../data/discoverStoreData";
import DiscoverStoreDesktop from "@/features/home/components/desktop/DiscoverStoreDesktop";
import DiscoverStoreMobile from "@/features/home/components/mobile/DiscoverStoreMobile";

export default function DiscoverStore() {
  return (
    <>
      <DiscoverStoreDesktop config={discoverStoreConfig} />
      <DiscoverStoreMobile config={discoverStoreConfig} />
    </>
  );
}
