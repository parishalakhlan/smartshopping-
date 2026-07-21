export interface UniverseNode {
  id: string;
  title: string;
  overview: string;
  purpose: string;
  impact: string;
  vision: string;
  image: string;
  angle: number;
}

export interface EditorialPillar {
  id: string;
  title: string;
  mission: string;
  operations: string[];
  team: string;
  achievements: string[];
  opportunities: string[];
  image: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  outcome: string;
  image: string;
}

export interface JourneyStage {
  id: string;
  stageName: string;
  responsibilities: string[];
  technology: string;
  people: string;
  outcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GrowthLayer {
  title: string;
  desc: string;
  keyMetric: string;
}

export interface VerticalsConfig {
  section: {
    id: string;
    title: string;
    subtitle: string;
  };
  hero: {
    tagline: string;
    heading: string;
    headingLines: string[];
    italicText: string;
    description: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      objectFit: string;
      objectPosition: string;
    };
  };
  universeNodes: UniverseNode[];
  editorialPillars: EditorialPillar[];
  capabilityItems: CapabilityItem[];
  journeyStages: JourneyStage[];
  growthLayers: GrowthLayer[];
  faqs: FAQItem[];
  closingCTA: {
    heading: string;
    headingLines: string[];
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
  };
  metadata: {
    sectionTitles: {
      universe: string;
      pillars: string;
      capabilities: string;
      journey: string;
      growth: string;
      faq: string;
    };
  };
}

export const verticalsConfig: VerticalsConfig = {
  section: {
    id: "verticals",
    title: "Business Verticals",
    subtitle: "Institutional Infrastructure Matrix",
  },
  hero: {
    tagline: "Institutional Infrastructure Matrix",
    heading: "Our Business Ecosystem.",
    headingLines: ["Our Business", "Ecosystem."],
    italicText: "Ecosystem",
    description:
      "Smart Shopping is a fully integrated physical retail operating ecosystem. We engineer, scale, and manage the critical logistics, technology layers, and spatial properties behind modern luxury retail.",
    ctaPrimary: {
      label: "Explore Our Verticals",
      href: "#universe",
    },
    ctaSecondary: {
      label: "Audit Capabilities",
      href: "#capabilities",
    },
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      alt: "Architectural Corporate Hub",
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
  },
  universeNodes: [
    {
      id: "retail-ops",
      title: "Retail Operations",
      overview:
        "We build and manage high-performing retail environments that deliver exceptional customer experiences while maintaining operational consistency across every location.",
      purpose:
        "Operate stores that strengthen both customer trust and brand value.",
      impact: "350+ Stores",
      vision: "Creating exceptional retail experiences across every city.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      angle: 0,
    },
    {
      id: "distribution",
      title: "Distribution Network",
      overview:
        "Our logistics and distribution ecosystem ensures products reach the right stores efficiently, improving availability and business performance.",
      purpose: "Deliver products faster with operational reliability.",
      impact: "42+ Cities",
      vision: "Connecting brands with customers seamlessly.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      angle: 51.4,
    },
    {
      id: "brand-partners",
      title: "Franchise Growth",
      overview:
        "From identifying the right partners to supporting day-to-day operations, we help brands expand through sustainable franchise networks.",
      purpose: "Build long-term partnerships that grow with confidence.",
      impact: "28+ Brand Partners",
      vision: "Expanding premium brands into emerging markets.",
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
      angle: 102.8,
    },
    {
      id: "technology",
      title: "Retail Technology",
      overview:
        "The core algorithmic software layer powering real-time inventory telemetry.",
      purpose:
        "Eliminating stock friction while preserving customer personal privacy layers.",
      impact:
        "Processing 4.2 million micro-transactions daily with zero downtime.",
      vision:
        "Generative ambient store configurations responding to predictive data.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      angle: 154.2,
    },
    {
      id: "franchise-mgmt",
      title: "Franchise Management",
      overview:
        "White-glove structural scaffolding built to upscale high-net-worth commercial profiles.",
      purpose:
        "To guarantee master brand execution continuity across worldwide segments.",
      impact: "Average franchise setup optimization timeline reduced by 40%.",
      vision: "Global interactive commercial syndication platform deployment.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      angle: 205.6,
    },
    {
      id: "regional-growth",
      title: "Regional Growth",
      overview:
        "Securing tier-1 premium physical land banks and urban retail allocations.",
      purpose:
        "To position physical assets in high-yield demographic epicenters.",
      impact:
        "1.2M square meters of high-street commercial land banks under control.",
      vision:
        "Pioneering sustainable architectural master-planned luxury retail ecosystems.",
      image:
        "https://images.unsplash.com/photo-1542744094-2ab25be78b90?q=80&w=1200&auto=format&fit=crop",
      angle: 257.0,
    },
    {
      id: "future-exp",
      title: "Future Expansion",
      overview:
        "Researching the integration of clean materials and dynamic experimental formats.",
      purpose:
        "To redefine consumer engagement parameters for upcoming generations.",
      impact: "7 experimental design labs operating across 3 continents.",
      vision:
        "Circular, zero-waste luxury lifestyle structures built from biological polymers.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      angle: 308.4,
    },
  ],
  editorialPillars: [
    {
      id: "pillar-commerce",
      title: "Ecosystem Flagships",
      mission:
        "To turn traditional static commerce spaces into high-fidelity tactile design institutions.",
      operations: [
        "Hyper-curated seasonal spatial transformations",
        "Private client sensory layout suites",
        "Biometric checkoutless transactional architecture",
      ],
      team: "Led by internationally acclaimed architectural designers and premium service operational specialists.",
      achievements: [
        "Architectural Review Design Space Award 2025",
        "Consistent Net Promoter Score of 94 across global clusters",
      ],
      opportunities: [
        "Flagship deployment rights available for primary metropolitan corridors.",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "pillar-logistics",
      title: "Predictive Distribution",
      mission:
        "Operating a frictionless global supply apparatus that outpaces fast-moving market demands.",
      operations: [
        "Automated custom clearance routing algorithms",
        "Climate-stable luxury textile storage nodes",
        "Dynamic real-time stock redistribution matrix",
      ],
      team: "Engineered by leading systems architects, international maritime experts, and analytics researchers.",
      achievements: [
        "Average global transit timeline reduced to 36 hours",
        "Zero product degradation metrics reached across multi-year cycles",
      ],
      opportunities: [
        "Integration interfaces open for strategic localized enterprise delivery networks.",
      ],
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "pillar-intelligence",
      title: "Ecosystem Intelligence",
      mission:
        "Creating the underlying operational OS for high-performance physical retail commerce.",
      operations: [
        "Ambient room data tracking frameworks",
        "Localized demand forecasting models",
        "Secured decentralized client data ledgers",
      ],
      team: "Supervised by computer vision engineers, cognitive data specialists, and cybersecurity professionals.",
      achievements: [
        "Predictive stock allocation accuracy optimized to 96.4%",
        "Mitigated regional inventory overstocking overhead by 32%",
      ],
      opportunities: [
        "Proprietary hardware API access for verified tier-1 global brand partners.",
      ],
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  capabilityItems: [
    {
      id: "cap-retail",
      title: "Spatial Architecture",
      description:
        "Curating spatial design languages that evoke deep sensory resonance rather than standard product viewing.",
      outcome: "92-minute average dwell time optimization matrix.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "cap-ops",
      title: "Operational Infrastructure",
      description:
        "Deploying fully unified retail workflows that seamlessly bridge physical storefront execution with digital logistics backend structures.",
      outcome: "99.98% operational uptime across all physical global nodes.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "cap-supply",
      title: "Supply Network",
      description:
        "Direct supply layer linking global luxury manufacturing hubs straight to individual metropolitan retail endpoints.",
      outcome: "Eliminated regional distribution center dependencies.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "cap-analytics",
      title: "Behavioral Analytics",
      description:
        "Decentralized behavioral telemetry that tracks retail layout efficiency while maintaining anonymized identity protocols.",
      outcome: "Dynamic layout reconfiguration modeling generated weekly.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    },
  ],
  journeyStages: [
    {
      id: "stage-1",
      stageName: "Brand Alignment",
      responsibilities: [
        "Evaluating brand identity compatibility matrix",
        "Analyzing ethical supply line certifications",
        "Predicting localized regional consumer demographic appeal",
      ],
      technology: "Proprietary Brand Affinity Curation Index Engine",
      people: "Ecosystem Curation Board & Luxury Portfolio Directors",
      outcome: "Curated selection of forward-thinking elite brand expressions.",
    },
    {
      id: "stage-2",
      stageName: "Predictive Curation",
      responsibilities: [
        "Simulating localized demand models using historical region metrics",
        "Structuring seasonal product allocation frameworks",
        "Formulating custom boutique spatial themes",
      ],
      technology: "Predictive Asset Telemetry Software",
      people: "Data Science Teams & Spatial Experience Designers",
      outcome:
        "Frictionless regional stock curation plans with minimal overhead risk.",
    },
    {
      id: "stage-3",
      stageName: "Spatial Evolution",
      responsibilities: [
        "Executing precision architectural building configurations",
        "Deploying advanced ambient computing telemetry arrays",
        "Sourcing localized premium structural materials",
      ],
      technology: "Spatial CAD Simulation Tooling & IoT Sensor Systems",
      people: "Architectural Craftsmen & Ambient Integration Specialists",
      outcome:
        "High-end sensory spaces fully configured for interactive experiences.",
    },
    {
      id: "stage-4",
      stageName: "Unified Execution",
      responsibilities: [
        "Synchronizing local operations with our international fulfillment network",
        "Activating localized omnichannel client engagement platforms",
        "Launching continuous physical-to-digital inventory telemetry tracking",
      ],
      technology: "Unified Core Retail Operating System Layer",
      people: "Showroom Directors & Omnichannel Support Crews",
      outcome: "Self-correcting, high-yielding premium retail operations.",
    },
  ],
  growthLayers: [
    {
      title: "Discover",
      desc: "We understand your brand, business goals, and target audience to create a tailored expansion strategy.",
      keyMetric: "Growth Strategy",
    },
    {
      title: "Launch",
      desc: "Our team supports store setup, franchise onboarding, and operational planning to ensure a successful market entry.",
      keyMetric: "Successful Launch",
    },
    {
      title: "Operate",
      desc: "Through standardized retail operations and continuous business support, we help every location perform consistently.",
      keyMetric: "Operational Excellence",
    },
    {
      title: "Expand",
      desc: "Using market insights and proven business systems, we help brands confidently enter new cities and regions.",
      keyMetric: "Regional Expansion",
    },
    {
      title: "Lead",
      desc: "The result is a stronger brand presence, loyal customers, and sustainable long-term growth across multiple markets.",
      keyMetric: "Market Leadership",
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "How does Smart Shopping help brands expand?",
      answer:
        "We provide end-to-end support including franchise development, retail operations, distribution, and strategic market expansion to help brands grow with confidence.",
    },
    {
      id: "faq-2",
      question: "Can established brands partner with Smart Shopping?",
      answer:
        "Yes. We work with both established and emerging fashion and lifestyle brands looking to strengthen their regional presence and reach new customers.",
    },
    {
      id: "faq-3",
      question: "Do you support franchise partners after launch?",
      answer:
        "Absolutely. Our partnership continues beyond launch through operational guidance, training, business reviews, and continuous performance support.",
    },
    {
      id: "faq-4",
      question: "Which regions does Smart Shopping currently serve?",
      answer:
        "Our network continues to expand across North India, helping brands build a strong presence in both metropolitan and emerging markets.",
    },
  ],
  closingCTA: {
    heading: "Partner with a Complete Retail Ecosystem Operating Matrix.",
    headingLines: [
      "Partner with a Complete",
      "Retail Ecosystem Operating Matrix.",
    ],
    ctaPrimary: {
      label: "Partner With Smart Shopping",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Contact Our Team",
      href: "/contact",
    },
  },
  metadata: {
    sectionTitles: {
      universe: "Consolidated Networks",
      pillars: "Structural Anchors",
      capabilities: "Institutional Infrastructure",
      journey: "Procedural Mechanics",
      growth: "Compounded Velocity",
      faq: "Structural Intelligence",
    },
  },
};
