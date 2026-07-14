"use client";

import React from "react";
import PartnersHero from "./sections/PartnersHero";
import WhyPartner from "./sections/WhyPartner";
import OpportunityExplorer from "./sections/OpportunityExplorer";
import GrowthNetwork from "./sections/GrowthNetwork";
import PartnerJourney from "./sections/PartnerJourney";
import SuccessStories from "./sections/SuccessStories";
import FAQInteractive from "./sections/FAQInteractive";
import PartnerApplication from "./sections/PartnerApplication";
import ClosingCTA from "./sections/ClosingCTA";

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
