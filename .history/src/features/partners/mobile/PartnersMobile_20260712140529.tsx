"use client";

import React from "react";
import PartnersHeroMobile from "./sections/mobile/PartnersHeroMobile";
import OpportunityWheel from "./sections/mobile/OpportunityWheel";
import ModelsStack from "./sections/mobile/ModelsStack";
import GrowthMapReveal from "./sections/mobile/GrowthMapReveal";
import JourneySteps from "./sections/mobile/JourneySteps";
import StoriesCarousel from "./sections/mobile/StoriesCarousel";
import FAQReveal from "./sections/mobile/FAQReveal";
import ClosingCTA from "./sections/mobile/ClosingCTA";
import PartnerFormDrawer from "./sections/mobile/PartnerFormDrawer";

export default function PartnersMobile() {
  return (
    <div className="bg-[#0D0D0E] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#E25822]">
      <PartnersHeroMobile />
      <OpportunityWheel />
      <ModelsStack />
      <GrowthMapReveal />
      <JourneySteps />
      <StoriesCarousel />
      <FAQReveal />
      <ClosingCTA />
      <PartnerFormDrawer />
    </div>
  );
}
