"use client";

import React from "react";
import PartnersHero from "@/features/partners/desktop/PartnersHero";
import WhyPartner from "@/features/partners/desktop/WhyPartner";
import OpportunityExplorer from "@/features/partners/desktop/OpportunityExplorer";
import GrowthNetwork from "@/features/partners/desktop/GrowthNetwork";
import PartnerJourney from "@/features/partners/desktop/PartnerJourney";
import SuccessStories from "@/features/partners/desktop/SuccessStories";
import FAQInteractive from "@/features/partners/desktop/FAQInteractive";
import PartnerApplication from "@/features/partners/desktop/PartnerApplication";
import ClosingCTA from "@/features/partners/desktop/ClosingCTA";

export default function PartnersDesktop() {
  return (
    <div className="bg-[#0D0D0E] text-[#F3F4F6] font-sans antialiased selection:bg-[#E25822] selection:text-white overflow-hidden">
      <PartnersHero />
      <WhyPartner />
      <OpportunityExplorer />
      <GrowthNetwork />
      <PartnerJourney />
      <SuccessStories />
      <FAQInteractive />
      <PartnerApplication />
      <ClosingCTA />
    </div>
  );
}
