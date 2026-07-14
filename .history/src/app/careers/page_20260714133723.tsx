"use client";

import React from "react";
import { HeroSection } from "@/features/careers/HeroSection";
import { WhyJoinSection } from "@/features/careers/WhyJoinSection";
import { JourneySection } from "@/features/careers/JourneySection";
import { OpportunitiesSection } from "@/features/careers/OpportunitiesSection";
import { FAQSection } from "@/features/careers/FAQSection";
import { FinalInvitationSection } from "@/features/careers/FinalInvitationSection";

export default function CareersPage() {
  /**
   * Smooth scrolls to specific section dynamic anchors.
   * On responsive mobile layouts, targets are dynamically routed
   * to matching '-mobile' elements safely if they exist.
   */
  const scrollToSection = (id: string) => {
    // Detect viewport size dynamically during the click event trace
    const isMobileLayout = window.innerWidth < 1024;
    const targetId = isMobileLayout ? `${id}-mobile` : id;

    let el = document.getElementById(targetId);

    // Fallback block if a unique mobile id variant doesn't exist
    if (!el) {
      el = document.getElementById(id);
    }

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full  font-sans antialiased  overflow-x-hidden min-h-screen">
      {/* Hero Section:
        Accepts the anchor event to handle dynamic jumping to active job listings
      */}
      <HeroSection scrollToSection={scrollToSection} />

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
      <OpportunitiesSection />

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
