export interface pillar {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    sizes: {
      desktop: string;
      mobile: string;
    };
    objectFit: string;
    objectPosition: string;
  };
  impact: string;
  example: string;
}

export interface PartnershipModel {
  id: string;
  title: string;
  suitability: string;
  requirements: string[];
  benefits: string[];
  support: string;
  journey: string;
}

export interface RegionData {
  id: string;
  name: string;
  presence: string;
  opportunities: string;
  vision: string;
  coordinates: { x: number; y: number };
}

export interface JourneyStation {
  id: string;
  step: string;
  phase: string;
  process: string;
  timeline: string;
  supportOffered: string;
}

export interface SuccessStory {
  id: string;
  partner: string;
  role: string;
  challenge: string;
  journey: string;
  outcome: string;
  image: {
    src: string;
    alt: string;
    sizes: {
      desktop: string;
      mobile: string;
    };
    objectFit: string;
    objectPosition: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClosingCTA {
  id: string;
  heading: string;
  headingLines: string[];
  subText: string;
  mobileHeading: string;
  mobileHeadingLines: string[];
  mobileSubText: string;
}

export interface Hero {
  tagline: string;
  heading: string;
  headingLines: string[];
  italicText: string;
  description: string;
  image: {
    src: string;
    alt: string;
    objectFit: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface PartnersConfig {
  section: {
    id: string;
    title: string;
    subtitle: string;
  };
  hero: Hero;
  pillars: Pillar[];
  partnershipModels: PartnershipModel[];
  regionalRegions: RegionData[];
  journeyStations: JourneyStation[];
  successStories: SuccessStory[];
  faqs: FAQItem[];
  closingCTA: ClosingCTA;
  metadata: {
    sectionTitles: {
      pillars: string;
      models: string;
      regions: string;
      journey: string;
      stories: string;
      faq: string;
      application: string;
      closingCTA: string;
    };
  };
}

export const partnersConfig: PartnersConfig = {
  section: {
    id: "partners",
    title: "Partners Section",
    subtitle: "Strategic Partnership Ecosystem",
  },
  hero: {
    tagline: "Commercial Integration",
    heading: "Shape Retail",
    headingLines: ["Shape Retail"],
    italicText: "Together",
    description:
      "Align with an enterprise operational canvas built exclusively for luxury boutique deployment and regional market control.",
    image: {
      src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop",
      alt: "Retail Design",
      objectFit: "object-cover",
    },
    cta: {
      label: "Become A Partner",
      href: "#apply-drawer",
    },
  },
  pillars: [
    {
      id: "expertise",
      title: "Retail Expertise",
      description:
        "Accelerate market entry leveraging two decades of high-fashion operational data, predictive algorithmic curation, and hyper-localized consumer demand models.",
      image: {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        alt: "Retail Expertise Showroom",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      impact: "+34% YoY Store LfL Growth",
      example:
        "Our flagship metropolitan hubs achieved operational profitability within 110 days post-launch via automated micro-inventory systems.",
    },
    {
      id: "brands",
      title: "Premium Brands",
      description:
        "Gain direct, authorized allocations from the world's most coveted luxury maisons and avant-garde contemporary designers under exclusive distribution layers.",
      image: {
        src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium Brands Collection",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      impact: "Exclusive Global Supply Lines",
      example:
        "Direct API inventory syncing reduces localized stockouts to near-zero levels across 85+ design houses.",
    },
    {
      id: "support",
      title: "Operational Support",
      description:
        "Deploy white-glove infrastructural frameworks spanning architectural store layout engineering, concierge real-estate acquisition, and end-to-end cold chain logistics.",
      image: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        alt: "Operational Support Infrastructure",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      impact: "Turnkey Operational Readiness",
      example:
        "Fully integrated POS and omnichannel fulfillment frameworks route digital local orders through your retail showroom automatically.",
    },
    {
      id: "network",
      title: "Growth Network",
      description:
        "Plugin to an elite consortium of high-net-worth real estate syndicates, localized regulatory experts, and high-conversion co-marketing platforms.",
      image: {
        src: "https://images.unsplash.com/photo-1542744094-2ab25be78b90?q=80&w=1200&auto=format&fit=crop",
        alt: "Growth Network Ecosystem",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
      impact: "Compounded Regional Scale",
      example:
        "Cross-regional partner alliances facilitated three multi-city brand expansion rollouts last year alone.",
    },
  ],
  partnershipModels: [
    {
      id: "franchise",
      title: "Franchise Partner",
      suitability:
        "High-net-worth individuals and established retail operators seeking market-dominant omni-channel luxury showrooms.",
      requirements: [
        "Premium commercial real estate footprint >250sqm",
        "Proven luxury brand retail management history",
        "Minimum Capital allocation framework",
      ],
      benefits: [
        "Full localized inventory exclusivity",
        "Architectural buildout blueprints & material curation",
        "Regional programmatic ad-spend matching",
      ],
      support:
        "Bi-weekly operational audits, dedicated staff training academies, and real-time smart replenishment systems.",
      journey:
        "Discovery Room → Location Sign-off → Architectural Transformation → VIP Grand Opening Launch (Approx. 90-120 days)",
    },
    {
      id: "regional",
      title: "Regional Expansion",
      suitability:
        "Enterprise logistics networks and diversified retail conglomerates capable of scaling entire territorial segments.",
      requirements: [
        "Multi-city operational capacities",
        "In-house localized customs & regulatory handling structures",
        "Strategic domestic real-estate land banks",
      ],
      benefits: [
        "Master territorial operational rights",
        "Shared algorithmic logistics networks",
        "Direct board-level corporate integration",
      ],
      support:
        "Embedded regional transition team, specialized supply-chain nodes, and exclusive portfolio asset rights.",
      journey:
        "Executive Board Alignment → Multi-Year Master Plan Approval → Infrastructure Setup → Tier-1 Rollout Phase",
    },
    {
      id: "strategic",
      title: "Strategic Collaboration",
      suitability:
        "Fintech platforms, lifestyle service institutions, and high-end digital lifestyle services looking to fuse ecosystems.",
      requirements: [
        "Audited audience demographic alignment",
        "Secure open API integration frameworks",
        "Mutual long-term brand equity commitment",
      ],
      benefits: [
        "Co-branded experiential spaces",
        "Cross-platform data sharing & client tier mapping",
        "Joint innovation laboratory priority access",
      ],
      support:
        "Dedicated Devops architecture, combined public relations agencies, and cross-channel marketing frameworks.",
      journey:
        "Synergy Ideation → API & Architecture Sandboxing → Beta Activation → Global Strategic Launch",
    },
  ],
  regionalRegions: [
    {
      id: "north",
      name: "North Zone",
      presence: "14 Flagships, 3 Distribution Hubs",
      opportunities: "Tier-2 Luxury Market Greenfield Spaces",
      vision: "Establishing 5 sustainable micro-hubs by 2028.",
      coordinates: { x: 45, y: 30 },
    },
    {
      id: "west",
      name: "West Zone",
      presence: "22 Flagships, 5 High-Street Lounges",
      opportunities: "Ultra-Premium Experiential Retail Expansion",
      vision: "Hyper-personalized private-client boutiques.",
      coordinates: { x: 30, y: 55 },
    },
    {
      id: "south",
      name: "South Zone",
      presence: "18 Flagships, 2 Automated Distribution Nodes",
      opportunities: "Omnichannel Local Fulfillment Scaling",
      vision: "Complete carbon-neutral delivery networks across the sector.",
      coordinates: { x: 50, y: 80 },
    },
    {
      id: "east",
      name: "East Zone",
      presence: "6 Flagships, 1 Emerging Logistics Node",
      opportunities: "Early Pioneer Market Domination",
      vision:
        "Capturing high-growth metropolitan centers through rapid deployments.",
      coordinates: { x: 75, y: 45 },
    },
  ],
  journeyStations: [
    {
      id: "01",
      step: "01",
      phase: "Interest",
      process:
        "Submit an encrypted structural portfolio outlining your commercial footprint and business vision.",
      timeline: "Immediate Review (48 Hours)",
      supportOffered:
        "Dedicated relationship concierge assigned upon submission.",
    },
    {
      id: "02",
      step: "02",
      phase: "Conversation",
      process:
        "Convene for an executive discovery brief to evaluate regional synergies and operational fit.",
      timeline: "1-2 Weeks",
      supportOffered:
        "Deep-dive analytical data presentation on targeted territories provided to your team.",
    },
    {
      id: "03",
      step: "03",
      phase: "Planning",
      process:
        "Co-author custom commercial blueprints, floor layouts, and financial multi-year projection modeling maps.",
      timeline: "3-4 Weeks",
      supportOffered:
        "Architectural, technical, and compliance teams fully deployed to evaluate local structures.",
    },
    {
      id: "04",
      step: "04",
      phase: "Launch",
      process:
        "Execute seamless inventory deployment, staff immersion academies, and dynamic premium media campaigns.",
      timeline: "2 Weeks",
      supportOffered:
        "On-site activation task force embedded at your physical location for 30 days post-launch.",
    },
  ],
  successStories: [
    {
      id: "story-1",
      partner: "Vanguard Retail Group",
      role: "Regional Franchise Partner",
      challenge:
        "Traditional brick-and-mortar retail setups were experiencing footfall stagnation and inventory decoupling across tier-1 cities.",
      journey:
        "Migrated infrastructure to the Smart Shopping Master System within 90 days, deploying algorithmic micro-curations directly tailored to regional luxury buyer data.",
      outcome:
        "Achieved a 42% spike in localized asset monetization within two fiscal quarters and expanded to 4 separate physical layouts.",
      image: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Vanguard Retail Group Success Story",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
    },
    {
      id: "story-2",
      partner: "Meridian Luxury Holdings",
      role: "Strategic Multi-Unit Operator",
      challenge:
        "High cost-of-acquisition models and legacy supply distribution blocks limited multi-city premium expansions.",
      journey:
        "Utilized Smart Shopping's exclusive distribution network and direct API automated supply lines to seamlessly transition inventory management.",
      outcome:
        "Reduced multi-city store rollout cycles from 9 months to 75 days, capturing dominant luxury market share.",
      image: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        alt: "Meridian Luxury Holdings Success Story",
        sizes: {
          desktop: "1200px",
          mobile: "600px",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
      },
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question:
        "How does the inventory allocation system mitigate partner risk?",
      answer:
        "Our dynamic predictive models dynamically adjust asset distribution based on localized, real-time demand signals. This minimizes dead-stock accumulation and automatically routes slower-moving high-end SKUs back through the centralized global fulfillment framework without penalizing regional operational margins.",
    },
    {
      id: "faq-2",
      question:
        "What are the structural real estate criteria required for physical boutiques?",
      answer:
        "Locations must feature premier high-street positions, A-grade commercial shopping centers, or verified luxury enclaves. Architectural prerequisites demand a minimum of 200 square meters of net internal space, high ceilings (>3.8 meters), and structurally capable facades for luxury architectural installations.",
    },
    {
      id: "faq-3",
      question:
        "Can existing retail showrooms transition into the Smart Shopping network?",
      answer:
        "Yes. Through our Architectural Retrofitting Protocol, we assess existing spaces, re-engineer digital points-of-sale, update telemetry nodes, and refresh aesthetics to align with the Smart Shopping Master Design System.",
    },
  ],
  closingCTA: {
    id: "closing-cta",
    heading: "Let's Curate the Next Epoch of Global Commerce.",
    headingLines: ["Let's Curate the Next Epoch", "of Global Commerce."],
    subText: "Substantial opportunities require rigorous alignment.",
    mobileHeading: "Curate the Next Epoch of Luxury Commerce.",
    mobileHeadingLines: ["Curate the Next Epoch", "of Luxury Commerce"],
    mobileSubText: "Rigorous Executive Alignment Required.",
  },
  metadata: {
    sectionTitles: {
      pillars: "Strategic Pillars",
      models: "Partnership Models",
      regions: "Regional Presence",
      journey: "Partner Journey",
      stories: "Success Stories",
      faq: "FAQ",
      application: "Partner Application",
      closingCTA: "Closing CTA",
    },
  },
};
