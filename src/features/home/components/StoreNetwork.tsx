// features/home/components/StoreNetwork.tsx
"use client";

import { networkConfig } from "../data/networkData";
import StoreNetworkDesktop from "@/features/home/components/desktop/StoreNetworkDesktop";
import StoreNetworkMobile from "@/features/home/components/mobile/StoreNetworkMobile";

export default function StoreNetwork() {
  return (
    <>
      <div id="discover-store">
        <StoreNetworkDesktop config={networkConfig} />
        <StoreNetworkMobile config={networkConfig} />
      </div>
    </>
  );
}
