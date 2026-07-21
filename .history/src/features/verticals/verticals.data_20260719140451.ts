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
    subtitle: "Retail Growth Ecosystem",
  },

  hero: {
    tagline: "Retail Growth Ecosystem",

    heading: "Everything Your Brand Needs To Grow.",

    headingLines: ["Everything Your Brand", "Needs To"],

    italicText: "Grow",

    description:
      "From retail operations and franchise management to distribution and market expansion, Smart Shopping provides an end-to-end ecosystem that helps fashion and lifestyle brands scale confidently across North India.",

    ctaPrimary: {
      label: "Explore Our Verticals",
      href: "#universe",
    },

    ctaSecondary: {
      label: "Partner With Us",
      href: "/partners",
    },

    image: {
      src: "/interior/interiro7.jpeg",
      alt: "Modern Smart Shopping Retail Store",
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
  },
  universeNodes: [
    {
      id: "retail-operations",
      title: "Retail Operations",
      overview:
        "We operate premium multi-brand retail stores with standardized processes, experienced teams, and customer-first experiences that strengthen both brands and long-term business performance.",
      purpose:
        "Deliver consistent retail excellence across every Smart Shopping location.",
      impact: "350+ Retail Stores",
      vision:
        "Building shopping destinations customers love to visit and brands trust to grow with.",
      image: "/interior/interior4.jpeg",
      angle: 0,
    },

    {
      id: "brand-partnerships",
      title: "Brand Partnerships",
      overview:
        "We collaborate with leading fashion and lifestyle brands to expand their presence through reliable retail operations and long-term strategic partnerships.",
      purpose:
        "Create partnerships that generate sustainable growth for every brand.",
      impact: "28+ Brand Partners",
      vision:
        "Helping premium brands reach new customers across emerging markets.",
      image: "/interior/interior1.webp",
      angle: 51.4,
    },

    {
      id: "franchise-management",
      title: "Franchise Management",
      overview:
        "From onboarding new partners to operational guidance and continuous support, we help build successful franchise businesses that grow with confidence.",
      purpose: "Support franchise partners with proven retail expertise.",
      impact: "Growing Franchise Network",
      vision:
        "Creating strong franchise relationships built on trust and shared success.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      angle: 102.8,
    },

    {
      id: "distribution",
      title: "Distribution & Logistics",
      overview:
        "Our distribution network ensures products reach the right stores efficiently, maintaining product availability while supporting smooth retail operations.",
      purpose:
        "Keep every store supplied with the right products at the right time.",
      impact: "42+ Cities Connected",
      vision:
        "Building an efficient supply chain that supports long-term business growth.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      angle: 154.2,
    },

    {
      id: "market-expansion",
      title: "Market Expansion",
      overview:
        "We help brands expand into promising Tier-2 and Tier-3 cities through careful market selection, operational planning, and local business expertise.",
      purpose: "Unlock new markets with confidence and reduced expansion risk.",
      impact: "Expanding Across North India",
      vision: "Making premium fashion accessible beyond metro cities.",
      image:
        "https://images.unsplash.com/photo-1542744094-2ab25be78b90?q=80&w=1200&auto=format&fit=crop",
      angle: 205.6,
    },

    {
      id: "customer-experience",
      title: "Customer Experience",
      overview:
        "Every Smart Shopping store is designed to deliver welcoming environments, knowledgeable service, and memorable shopping experiences that encourage repeat visits.",
      purpose:
        "Build lasting customer relationships through exceptional retail experiences.",
      impact: "Experience-Driven Retail",
      vision: "Creating stores customers choose again and again.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4?q=80&w=1200&auto=format&fit=crop",
      angle: 257.0,
    },

    {
      id: "future-growth",
      title: "Future Growth",
      overview:
        "We continue to strengthen our retail ecosystem through new partnerships, wider regional presence, and innovative business opportunities for brands and franchise partners.",
      purpose:
        "Grow together through long-term collaboration and continuous improvement.",
      impact: "Growing Every Year",
      vision: "Becoming North India's most trusted retail growth partner.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      angle: 308.4,
    },
  ],
  editorialPillars: [
    {
      id: "pillar-retail",
      title: "Retail Operations",
      mission:
        "Creating modern retail destinations that deliver exceptional customer experiences while helping brands grow with confidence.",
      operations: [
        "End-to-end store operations management",
        "Visual merchandising and customer experience standards",
        "Performance monitoring and retail excellence programs",
      ],
      team: "Driven by experienced retail professionals, store leaders, and customer experience specialists committed to operational excellence.",
      achievements: [
        "Successfully operating multiple premium retail stores across North India",
        "Trusted by leading national and international fashion brands",
      ],
      opportunities: [
        "Partner with an experienced retail team to expand your brand presence across emerging markets.",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "pillar-franchise",
      title: "Franchise Management",
      mission:
        "Helping brands expand through structured franchise partnerships backed by operational expertise and long-term support.",
      operations: [
        "Franchise onboarding and operational setup",
        "Business process standardization",
        "Continuous training and performance support",
      ],
      team: "Supported by franchise consultants, business development professionals, and experienced operations managers.",
      achievements: [
        "Strong partnerships with multiple fashion and lifestyle brands",
        "A scalable franchise model focused on sustainable business growth",
      ],
      opportunities: [
        "Expand into new cities with a trusted franchise partner that understands regional markets.",
      ],
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "pillar-distribution",
      title: "Distribution & Logistics",
      mission:
        "Building an efficient supply chain that ensures products reach the right stores at the right time with complete reliability.",
      operations: [
        "Inventory planning and stock movement",
        "Regional distribution coordination",
        "Supply chain and logistics management",
      ],
      team: "Managed by logistics professionals, supply chain experts, and operations teams working together to keep business moving.",
      achievements: [
        "Reliable product availability across our retail network",
        "Efficient logistics supporting consistent retail operations",
      ],
      opportunities: [
        "Strengthen your supply chain with an established retail and distribution ecosystem.",
      ],
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  capabilityItems: [
    {
      id: "cap-retail",
      title: "Retail Operations",
      description:
        "We manage day-to-day retail operations with standardized processes, trained teams, and customer-focused experiences that strengthen your brand across every location.",
      outcome:
        "Consistent operations that build customer trust and business performance.",
      image: "/interior/interior3.webp",
    },
    {
      id: "cap-franchise",
      title: "Franchise Management",
      description:
        "From onboarding new franchise partners to providing continuous operational support, we help build a reliable and scalable franchise network.",
      outcome:
        "Sustainable franchise growth backed by experienced operational support.",
      image: "/interior/interiro6.webp",
    },
    {
      id: "cap-distribution",
      title: "Distribution & Logistics",
      description:
        "Our distribution network ensures efficient inventory movement, timely product availability, and smooth supply chain operations across every retail location.",
      outcome:
        "Reliable product availability with streamlined logistics management.",
      image: "/interior/interiro4.webp",
    },
    {
      id: "cap-consulting",
      title: "Market Expansion",
      description:
        "We help brands identify growth opportunities, choose strategic locations, and successfully expand into emerging markets with confidence.",
      outcome: "Faster expansion into high-potential regional markets.",
      image: "/interior/interiro7.webp",
    },
  ],
  journeyStages: [
    {
      id: "stage-1",
      stageName: "Understanding Your Brand",
      responsibilities: [
        "Learning your brand vision, values, and growth objectives",
        "Evaluating product categories and target customer segments",
        "Identifying the best opportunities across our retail network",
      ],
      technology: "Market Research & Regional Business Insights",
      people: "Brand Partnership Team & Business Development Experts",
      outcome:
        "A customized expansion strategy built around your brand's goals.",
    },
    {
      id: "stage-2",
      stageName: "Planning The Expansion",
      responsibilities: [
        "Selecting the right cities and store locations",
        "Designing an operational roadmap for successful launch",
        "Preparing inventory, merchandising, and franchise support",
      ],
      technology: "Retail Analytics & Expansion Planning Framework",
      people: "Operations Team & Expansion Specialists",
      outcome:
        "A structured launch plan that minimizes risk and maximizes opportunity.",
    },
    {
      id: "stage-3",
      stageName: "Launching Together",
      responsibilities: [
        "Setting up stores with consistent brand standards",
        "Training retail teams for exceptional customer experiences",
        "Coordinating marketing and launch activities",
      ],
      technology: "Retail Operations Management Platform",
      people: "Store Operations Team & Marketing Professionals",
      outcome:
        "A successful market launch backed by experienced retail professionals.",
    },
    {
      id: "stage-4",
      stageName: "Growing Long-Term",
      responsibilities: [
        "Monitoring store performance and customer insights",
        "Providing continuous operational and franchise support",
        "Expanding into new markets as your business grows",
      ],
      technology: "Business Performance Analytics & Growth Dashboard",
      people: "Dedicated Account Managers & Leadership Team",
      outcome:
        "Long-term business growth through a trusted retail partnership.",
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
    heading: "Where Ambitious Brands Find Their Next Market.",
    headingLines: ["Where Ambitious Brands", "Find Their Next Market."],
    ctaPrimary: {
      label: "Partner With Smart Shopping",
      href: "/partners",
    },
    ctaSecondary: {
      label: "Start A Conversation",
      href: "/contact",
    },
  },

  metadata: {
    sectionTitles: {
      universe: "Our Ecosystem",
      pillars: "Why Brands Choose Us",
      capabilities: "What We Deliver",
      journey: "Expansion Journey",
      growth: "Growth Framework",
      faq: "Frequently Asked Questions",
    },
  },
};
