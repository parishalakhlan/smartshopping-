"use client";

import React from "react";
import PartnersHeroMobile from "@/features/partners/mobile/PartnersHeroMobile";

import ModelsStack from "@/features/partners/mobile/ModelsStack";

import JourneySteps from "@/features/partners/mobile/JourneySteps";
import StoriesCarousel from "@/features/partners/mobile/StoriesCarousel";
import FAQReveal from "@/features/partners/mobile/FAQReaveal";
import ClosingCTA from "@/features/partners/mobile/ClosingCTA";
import PartnerFormDrawer from "@/features/partners/mobile/PartnerFormDrawer";

export default function PartnersMobile() {
  return (
    <div className="font-sans antialiased overflow-x-hidden ">
      <PartnersHeroMobile />

      <ModelsStack />

      <JourneySteps />
      <StoriesCarousel />
      <FAQReveal />
      <ClosingCTA />
      <PartnerFormDrawer />
    </div>
  );
}
