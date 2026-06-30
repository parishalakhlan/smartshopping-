// @/data/wingsData.ts
import { OperationalWing } from "@/types/team";

export const SHARED_WINGS_DATA: Omit<OperationalWing, "id">[] = [
  {
    title: "The Showroom Floor",
    description:
      "Our real strength doesn't live in square footage or structural brick and mortar—it lives within the teams who listen, curate, and craft your experience every single day.",
    metrics: "12 Global Lounges",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Curation & Logistics",
    description:
      "Behind every physical coordinate moves a silent pipeline of provenance verification, tactile auditing, and sustainable material distribution engineering.",
    metrics: "48hr Curated Delivery",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Operations & Systems",
    description:
      "The computational bedrock supporting global localized retail platforms with sensory, context-aware interface mechanisms and low-latency networks.",
    metrics: "99.98% System Uptime",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
  },
];
