import {
  MilestoneMetric,
  Founder,
  TeamMember,
  CultureItem,
  OperationalWing,
} from "@/types/team";

export const HERO_METRICS: MilestoneMetric[] = [
  { value: "200+", label: "Team Members" },
  { value: "26", label: "Average Age" },
  { value: "27+", label: "Store Managers" },
  { value: "15+", label: "Years of Retail Excellence" },
];

export const FOUNDERS: Founder[] = [
  {
    id: "founder-1",
    name: "Devendra Malhotra",
    role: "Co-Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    philosophy: "Retail is detail, powered by real human relationships.",
    signatureQuote:
      "Scaling brick-and-mortar luxury in North India requires marrying operational rigor with localized consumer trust.",
    story: [
      "With over two decades of experience establishing international premium brands across Tier-1 and Tier-2 landscapes, Devendra oversees the group's strategic growth, real estate acquisitions, and brand alliances.",
      "Under his leadership, the franchise network transitioned from a single multi-brand store in Chandigarh into an enterprise managing footprints across 4 states, consistently breaking operational milestones.",
    ],
  },
  {
    id: "founder-2",
    name: "Ananya Mehra Kapoor",
    role: "Co-Founder & Chief Creative Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
    philosophy:
      "The modern showroom is a theater; our teams are the orchestrators.",
    signatureQuote:
      "We aren't just selling premium apparel; we are crafting the visual and sensory culture of North Indian shopping.",
    story: [
      "Ananya guides the creative direction, front-end retail experiences, and human capital architecture of the company. She ensures that every retail space communicates the upscale heritage of our brand partners.",
      "She pioneered the group's internal 'Retail Excellence Academy' program, which transforms store advisory associates into highly proficient fashion consultants, keeping retention rates at an industry-high.",
    ],
  },
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "lead-1",
    name: "Vikram Sheoran",
    designation: "Audit & Risk Management Manager",
    philosophy: "Building strong systems for sustainable, bulletproof growth.",
    experience: "11 Years in Retail Compliance & Financial Forensics",
    education: "FCA, Institute of Chartered Accountants of India",
    responsibilities: [
      "Loss prevention architecture across all high-street and mall-format showrooms.",
      "Inventory precision control pipelines and internal auditing metrics.",
      "Regulatory alignment across North Indian multi-state operational borders.",
    ],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-2",
    name: "Rohan Varma",
    designation: "Head of Visual Merchandising",
    philosophy:
      "Transforming square footage into highly immersive brand narratives.",
    experience: "9 Years in Premium Fashion Layout Design",
    education: "Master's in Luxury Brand Management, NIFT Delhi",
    responsibilities: [
      "Seasonal storefront overhauls across all regional franchise hubs.",
      "Cross-brand alignment strategy ensuring compliance with premium global standards.",
      "Spatial choreography to maximize consumer footprints and conversion rates.",
    ],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-3",
    name: "Simran Kaur",
    designation: "Director of Talent & Culture",
    philosophy:
      "Nurturing modern retail leaders through continuous learning pipelines.",
    experience: "12 Years in Hospitality & Premium Retail HR Systems",
    education: "MBA in Human Resource Management, IMT Ghaziabad",
    responsibilities: [
      "Architecting the progressive career acceleration blueprint for store staff.",
      "Sourcing executive leadership for upcoming expansion hubs.",
      "Overseeing performance incentives that sustain our 98% retention rate.",
    ],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-4",
    name: "Amitesh Srivastava",
    designation: "Chief of Retail Operations",
    philosophy:
      "Flawless daily execution is the foundation of premium hospitality.",
    experience: "16 Years managing Tier-1 Fashion Showrooms",
    education: "B.Sc. in Hospitality Administration, PUSA Delhi",
    responsibilities: [
      "Daily cross-store operational synchronization across 27+ locations.",
      "Supply chain distribution and fulfillment center logistics synchronization.",
      "Customer experience standardizations and customer feedback metrics.",
    ],
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-5",
    name: "Meenakshi Joshi",
    designation: "Senior Brand Allocations Specialist",
    philosophy:
      "Sourcing and allocating the precise inventory for localized regional demands.",
    experience: "8 Years in Fashion Buying & Analytics",
    education: "B.FTech, National Institute of Fashion Technology",
    responsibilities: [
      "Analyzing micro-market demand dynamics across North Indian cities.",
      "Curating distinct inventory models for high-street vs shopping mall configurations.",
      "Direct communication links with global brand supply networks.",
    ],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-6",
    name: "Gaurav Malhotra",
    designation: "Head of Infrastructure & Expansion",
    philosophy:
      "Constructing luxury storefronts with speed, precision, and architectural character.",
    experience: "14 Years in Commercial Real Estate Rollouts",
    education: "B.Arch, IIT Roorkee",
    responsibilities: [
      "Site selection analytics and commercial contract evaluations.",
      "Showroom engineering, structural adaptations, and spatial rollouts.",
      "Sustainable build setups optimizing power and light footprints.",
    ],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-7",
    name: "Kriti Dhillon",
    designation: "Lead Omni-Channel Architect",
    philosophy:
      "Blurring the lines between modern digital ease and luxury in-store reality.",
    experience: "7 Years in Next-Gen Retail Engineering",
    education: "B.Tech in Computer Science, DTU",
    responsibilities: [
      "In-store digital touchpoint rollouts and smart-fitting room tracking.",
      "Sanity CMS orchestration powering localized store inventory updates.",
      "Clienteling systems implementation for our high-net-worth VIP buyers.",
    ],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lead-8",
    name: "Rajeshwar Singh",
    designation: "Regional Logistics Director",
    philosophy:
      "Velocity and care within the supply line keeps the showroom floor flawless.",
    experience: "15 Years Supply Chain Optimization",
    education: "Post Graduate Diploma in Supply Chain, IIFT New Delhi",
    responsibilities: [
      "Centralized warehousing operations serving North Indian hubs.",
      "Express secure transit systems ensuring delicate garments arrive pristine.",
      "Predictive stock reorder models responding dynamically to seasonal demands.",
    ],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
  },
];

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: "cult-1",
    title: "Continuous Learning",
    description:
      "Our workforce undergoes rigorous masterclasses in consumer behavior, textile science, and luxury management.",
    accentPhrase: "Academy Powered",
  },
  {
    id: "cult-2",
    title: "Structured Career Growth",
    description:
      "Every floor associate is mapped onto a multi-year trajectory capable of scaling into regional corporate leadership.",
    accentPhrase: "Zero Ceiling Paths",
  },
  {
    id: "cult-3",
    title: "Recognition & Merits",
    description:
      "Performance metrics are celebrated through real, uncapped growth, premium travel stipends, and enterprise awards.",
    accentPhrase: "Value Metric Visibility",
  },
  {
    id: "cult-4",
    title: "Young Dynamic Workforce",
    description:
      "With an average age of 26, our teams infuse high energy, tech literacy, and cultural trends directly onto our floors.",
    accentPhrase: "Generational Pulse",
  },
  {
    id: "cult-5",
    title: "Leadership Development",
    description:
      "We proactively delegate operational ownership to young talents, building high autonomy within decentralized ecosystems.",
    accentPhrase: "Early Ownership",
  },
  {
    id: "cult-6",
    title: "Work-Life Equilibrium",
    description:
      "Structured roster planning guarantees sustainable retail shifts, prioritizing physical wellness and mental rest.",
    accentPhrase: "Sustained Excellence",
  },
];

export const OPERATIONAL_WINGS: OperationalWing[] = [
  {
    id: "wing-1",
    title: "The Showroom Floor Teams",
    description:
      "The face of our organization. Highly trained fashion advisors who cultivate absolute retail trust, understanding individual aesthetics and consumer heritage.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    metrics: "200+ Advisors Active Daily",
  },
  {
    id: "wing-2",
    title: "Visual Merchandising & Curation",
    description:
      "Orchestrating architectural space, luxury illumination, and product placement structures that make our multi-brand venues benchmark fashion environments.",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800",
    metrics: "Weekly Structural Re-Imaginations",
  },
  {
    id: "wing-3",
    title: "Inventory Analytics & Control",
    description:
      "The back-end engines optimizing seasonal allocation streams, guaranteeing zero-error asset flow from central hubs to high-street showrooms.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    metrics: "99.9% Stock Placement Accuracy",
  },
];
