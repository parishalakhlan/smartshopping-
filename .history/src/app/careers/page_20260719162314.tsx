import React from "react";
import { HeroSection } from "@/features/careers/HeroSection";
import { WhyJoinSection } from "@/features/careers/WhyJoinSection";
import { JourneySection } from "@/features/careers/JourneySection";
import { OpportunitiesSection } from "@/features/careers/OpportunitiesSection";
import { FAQSection } from "@/features/careers/FAQSection";
import { FinalInvitationSection } from "@/features/careers/FinalInvitationSection";
import { client } from "@/sanity/lib/client";
import { CAREERS_QUERY } from "@/sanity/lib/queries/careers";
export default async function CareersPage() {
  const careers = await client.fetch(CAREERS_QUERY);
  console.log("Raw Sanity Data:", JSON.stringify(careers, null, 2));

  const careersData = Array.isArray(careers) ? careers : [];
  console.log("Careers Data Array:", careersData);
  console.log("Number of jobs:", careersData.length);
  return (
    <div className="w-full  font-sans antialiased  overflow-x-hidden min-h-screen">
      {/* Hero Section:
        Accepts the anchor event to handle dynamic jumping to active job listings
      */}
      <HeroSection />

      {/* Core Value Propositions:
        Handles cultural pillars and core workspace benefits
      */}
      <WhyJoinSection />

      {/* Career Ladder Pipeline:
        Desktop Interactive Tab Matrix vs Mobile Accordion Milestone Step Ladder
      */}
      <JourneySection />

      {/* Live Opportunities Table:
        Desktop Multi-Dropdown Row Filters vs Mobile Stacked Filters & Accordion Cards
      */}
      <OpportunitiesSection data={careers} />

      {/* Commonly Asked Questions:
        Centered Desktop Accordions vs Compact Left-Aligned Touch Cards
      */}
      <FAQSection />

      {/* Call-To-Action Finale:
        Premium Magnetic Desktop Interaction vs Full-Width Direct Active Toggles
      */}
      <FinalInvitationSection />
    </div>
  );
}
