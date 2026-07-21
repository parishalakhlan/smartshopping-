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

  const careersData = Array.isArray(careers)
    ? careers.map((job: any, index: number) => ({
        ...job,
        id: (index + 1).toString(), // ✅ Assign numeric ID: "1", "2", "3"...
        requirements: job.requirements || [], // Ensure requirements is always an array
        overview: job.overview || "No overview provided", // Fallback for overview
      }))
    : [];

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
      <OpportunitiesSection data={careersData} />

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
