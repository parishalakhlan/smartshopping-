import React from "react";
import { Metadata } from "next";
import { CorporateWholeLetterSchema } from "./schema";
import { AboutHero } from "@/features/about/AboutHero";
import { FoundersStory } from "@/features/about/FounderStory";
import { JourneyTimeline } from "@/features/about/JourneyTimeline";
import { CompanyStats } from "@/features/about/CompanyStats";
import { ValuesWall } from "@/features/about/ValuesWalls";
import { CultureSection } from "@/features/about/CultureSection";
import { WhyPeopleStay } from "@/features/about/WhyPeopleStay";
import { FinalCTA } from "@/features/about/FinalCTA";

export const metadata: Metadata = {
  title: "About Our Group | Smart Shopping Corporate",
  description:
    "Discover the journey of Smart Shopping from a single storefront in 2009 to North India's benchmark fashion collective across 7 states.",
  keywords: [
    "Smart Shopping",
    "Fashion Retail Group",
    "Vikram Singh",
    "Vinod Kumar",
    "North India Fashion",
  ],
  openGraph: {
    title: "About Our Group | Smart Shopping Corporate",
    description:
      "Discover the journey of Smart Shopping from a single storefront in 2009 to North India's benchmark fashion collective across 7 states.",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Structural JSON-LD Schema Mapper injection */}
      <CorporateWholeLetterSchema />

      <main className="bg-white min-h-screen selection:bg-[#1F4D45]/10 selection:text-[#1F4D45]">
        <AboutHero />
        <CompanyStats />
        <FoundersStory />
        <JourneyTimeline />
        <ValuesWall />
        <CultureSection />
        <WhyPeopleStay />
        <FinalCTA />
      </main>
    </>
  );
}
