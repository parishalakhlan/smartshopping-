// src/app/stores/page.tsx

import React from "react";
import { Metadata } from "next";

import { sanityFetch } from "@/sanity/lib/live";
import { STORE_LOCATOR_QUERY } from "@/sanity/lib/queries/store";

import { StoreLocatorHero } from "../../features/stores/components/StoreLocatorHero";
import { InteractiveStoreLocator } from "../../features/stores/components/InteractiveStoreLocator";
import { StoreStats } from "../../features/stores/components/StoreStats";
import { StoreCTA } from "../../features/stores/components/StoreCTA";

export const metadata: Metadata = {
  title: "Official Multi-Brand Showroom Finder | Corporate Retail Group",
  description:
    "Explore our verified multi-brand showroom footprint map across North India. Locate authentic retail channels effortlessly.",
};

export default async function StoreLocatorPage() {
  const { data: storeLocator } = await sanityFetch({
    query: STORE_LOCATOR_QUERY,
  });

  return (
    <main className="min-h-screen antialiased">
      <StoreLocatorHero data={storeLocator} />

      <InteractiveStoreLocator data={storeLocator} />

      <StoreStats data={storeLocator} />

      <StoreCTA />
    </main>
  );
}
