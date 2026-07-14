// src/app/stores/page.tsx
import React from "react";
import { Metadata } from "next";

// Safe explicit relative paths to avoid build path alias compilation blocks
import { StoreLocatorHero } from "../../features/stores/components/StoreLocatorHero";
import { InteractiveStoreLocator } from "../../features/stores/components/InteractiveStoreLocator";

import { StoreStats } from "../../features/stores/components/StoreStats";

import { StoreCTA } from "../../features/stores/components/StoreCTA";

export const metadata: Metadata = {
  title: "Official Multi-Brand Showroom Finder | Corporate Retail Group",
  description:
    "Explore our verified multi-brand showroom footprint map across North India. Locate authentic retail channels effortlessly.",
};

export default function StoreLocatorPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-100 antialiased">
      {/* Hero Section with Quick High-Level Stats */}
      <StoreLocatorHero />

      {/* Dominant 60/40 Locator & Advanced Choropleth Vector Map Interface */}
      <InteractiveStoreLocator />

      {/* Numerical Metrics Summary Block */}
      <StoreStats />

      {/* Showroom Infrastructure Grid Presentation */}

      {/* Strategic Bottom Conversion Channel */}
      <StoreCTA />
    </main>
  );
}
