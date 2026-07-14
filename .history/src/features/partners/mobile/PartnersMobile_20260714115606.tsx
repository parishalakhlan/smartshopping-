"use client";

import React from "react";
import PartnersHeroMobile from "@/features/partners/mobile/PartnersHeroMobile";
import OpportunityWheel from "@/features/partners/mobile/OpportunityWheel";
import ModelsStack from "@/features/partners/mobile/ModelsStack";

import JourneySteps from "@/features/partners/mobile/JourneySteps";
import StoriesCarousel from "@/features/partners/mobile/StoriesCarousel";
import FAQReveal from "@/features/partners/mobile/FAQReaveal";
import ClosingCTA from "@/features/partners/mobile/ClosingCTA";
import PartnerFormDrawer from "@/features/partners/mobile/PartnerFormDrawer";

export default function PartnersMobile() {
  return (
    <div className="bg-[#0D0D0E] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#E25822]">
      <PartnersHeroMobile />
      <OpportunityWheel />
      <ModelsStack />

      <JourneySteps />
      <StoriesCarousel />
      <FAQReveal />
      <ClosingCTA />
      <PartnerFormDrawer />
    </div>
  );
}
