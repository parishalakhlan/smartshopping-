// constants/culture-shared.ts
export interface BeliefPillar {
  id: string;
  num: string;
  title: string;
  excerpt: string;
  extended: string;
}

export const CULTURE_DATA = {
  sectionLabel: "FOUNDATIONAL GROUNDING",
  sectionTitleFirstLine: "Four Belief Pillars",
  sectionTitleSecondLine: "Governing Our Action.",
};

export const BELIEF_PILLARS: BeliefPillar[] = [
  {
    id: "belonging",
    num: "01",
    title: "Inherent Belonging",
    excerpt:
      "True style is not an exclusive club reserved for tier-one environments. Every community deserves a seat at the global cultural table.",
    extended:
      "We build environments that serve as local neighborhood anchors. When an individual steps through our doors, they are not just entering a retail footprint—they are claiming their rightful space within the modern global fashion dialogue.",
  },
  {
    id: "accessibility",
    num: "02",
    title: "Radical Access",
    excerpt:
      "Proximity should never dictate the boundaries of individual self-expression or personal style.",
    extended:
      "We eliminate the geographical tax on fashion. By establishing authentic premium environments directly within emerging clusters, we make high-tier craftsmanship an immediate, everyday local reality.",
  },
  {
    id: "trust",
    num: "03",
    title: "Absolute Trust",
    excerpt:
      "Honoring relationships through uncompromised brand authenticity and highly considered structural designs.",
    extended:
      "We refuse to offer watered-down selections for regional audiences. Every textile, layout, and collection is delivered to the exact same rigorous global standards found in fashion capitals worldwide.",
  },
  {
    id: "confidence",
    num: "04",
    title: "Everyday Confidence",
    excerpt:
      "Fashion is simply the medium; the ultimate objective is the realization of individual agency.",
    extended:
      "The correct clothing changes how a person stands, speaks, and occupies a room. We exist to provide the premium armor required for individuals to step into their daily ambitions with absolute certainty.",
  },
];
