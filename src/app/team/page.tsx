import React from "react";
import FoundersSection from "@/features/team/FoundersSection";
import LeadershipGrid from "@/features/team/LeadershipGrid";
import BehindTheStores from "@/features/team/BehindTheStores";
import { TeamMember, OperationalWing } from "@/types/team";

const mockTeamData: TeamMember[] = [
  {
    id: "1",
    name: "Evelyn Vance",
    designation: "Chief Creative Director",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "Design is not about covering space; it is about creating breathing room for human identity to stand out.",
    experience:
      "Spent over a decade directing architectural retail experiences across Milan and Paris before establishing our premium lifestyle visual matrix.",
    education: "Master of Fine Arts in Spatial Design — Domus Academy, Milan",
    responsibilities: [
      "Overseeing the architectural footprint and visual consistency across all premium physical environments.",
      "Curating seasonal structural textures and matching ambient spatial layout directions.",
      "Mentoring local storefront visual designers to protect creative continuity.",
    ],
  },
  {
    id: "2",
    name: "Marcus Thorne",
    designation: "Principal Fabric Architect",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "Sustainability is structural. If a garment does not carry structural resilience, it fails its artistic purpose.",
    experience:
      "Pioneered low-impact natural textile weave development inside heritage wool mills across Northern England.",
    education:
      "B.Sc. in Textile Engineering & Technology — University of Leeds",
    responsibilities: [
      "Vetting alternative ethical supply facilities to secure carbon-neutral materials.",
      "Testing raw physical fiber structural resistance metrics against environmental wear.",
      "Aligning manufacturing output loops directly with regional distribution timelines.",
    ],
  },
  {
    id: "3",
    name: "Siddharth Mehta",
    designation: "Head of Guest Experience",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "Hospitality shouldn't feel engineered. A truly luxurious welcome is quiet, observational, and completely organic.",
    experience:
      "Managed tailored boutique concierge service pipelines for luxury hospitality estates throughout East Asia.",
    education:
      "B.A. in International Hospitality Management — SHMS, Switzerland",
    responsibilities: [
      "Refining the frontline behavioral playbook for all flagship retail team operators.",
      "Analyzing guest spatial tracking patterns to simplify storefront friction points.",
      "Structuring ongoing cultural empathy development projects for customer-facing advocates.",
    ],
  },
  {
    id: "4",
    name: "Clara Zhang",
    designation: "Director of Digital Spaces",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "The pixel is the new storefront brick. It must feel just as tactile, smooth, and deliberate as polished stone.",
    experience:
      "Designed highly interactive luxury e-commerce interfaces for premium independent fashion publications.",
    education:
      "B.Des. in Interaction Design — Emily Carr University of Art + Design",
    responsibilities: [
      "Directing next-generation component architecture across all interactive web touchpoints.",
      "Ensuring seamless text-wrapping, asset rendering, and high-fidelity views on smaller mobile screens.",
      "Bridging the physical retail ecosystem with immersive, dynamic web applications.",
    ],
  },
];

const mockWingsData: OperationalWing[] = [
  {
    id: "1",
    title: "The Curation Floor",
    description:
      "Our storefront advocates who translate incoming customer sensibilities into curated personal wardrobes, ensuring every individual finds their exact physical fit.",
    metrics: "1-on-1 Dedicated Tailoring",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Textile & Supply Atelier",
    description:
      "The structural supply engine sourcing sustainable linen, organic cotton blends, and premium heritage wools from verified family-owned mills.",
    metrics: "100% Traceable Materials",
    image:
      "https://images.unsplash.com/photo-1558583055-d74f67d86296?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Spatial Experience Guild",
    description:
      "Architectural designers mapping ambient lighting paths, acoustic dampening panels, and minimalistic clothing displays to build an oasis of absolute calm.",
    metrics: "Zero-Stress Layout Design",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#163B65] selection:bg-[#F97316]/10 selection:text-[#F97316]">
      {/* Editorial Hero Layout Block */}
      <section className="relative bg-[#F5F2EC]/40 border-b border-[#163B65]/10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
            Our Shared Manifesto
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-none">
            We are built on the passion of deliberate craft.
          </h1>
          <p className="text-[#475569] text-sm sm:text-base font-normal max-w-xl leading-relaxed pt-2">
            Meet the collection of visual architects, textile developers, and
            community designers working in unison to turn everyday retail into
            an inspiring, slow-paced ritual.
          </p>
        </div>
      </section>

      {/* Structural Content Blocks Organizer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* Module Alpha: The Founders Spread */}
        <section aria-label="Founding Partners Overview">
          <FoundersSection />
        </section>

        {/* Separator Divider Line */}
        <hr className="border-[#163B65]/10" />

        {/* Module Beta: Creative Leadership Pipeline */}
        <section aria-label="Creative Leadership Pipeline">
          <LeadershipGrid team={mockTeamData} />
        </section>

        {/* Separator Divider Line */}
        <hr className="border-[#163B65]/10" />

        {/* Module Gamma: Department Visual Showcase Layout */}
        <section aria-label="Operational Wings Showcase">
          <BehindTheStores wings={mockWingsData} />
        </section>
      </div>
    </main>
  );
}
