// constants/impact-shared.ts
export interface ImpactNarrative {
  metric: string;
  heading: string;
  label: string;
  story: string;
}

export const IMPACT_DATA = {
  sectionLabel: "THE IMPACT // REALIZED PARITY",
  sectionTitleFirstLine: "What Changed When Quality",
  sectionTitleSecondLine: "Became Proximity.",
};

export const IMPACT_NARRATIVES: ImpactNarrative[] = [
  {
    metric: "01",
    heading: "Fashion Gained Local Presence",
    label: "ACCESS EVOLUTION",
    story:
      "Young people who previously spent entire weekends traveling hours to primary metro hubs now discover the latest global collection drops dropping natively in their own neighborhood coordinates the exact same hour they enter elite flagships.",
  },
  {
    metric: "02",
    heading: "Communities Gained Real Choice",
    label: "PORTFOLIO CULTIVATION",
    story:
      "By entirely replacing the outdated logistics paradigm of generic retail clearance portals, we introduced an uncompromised multi-brand pipeline. Regional cities now cultivate their personal and cultural identity through authentic global design access.",
  },
  {
    metric: "03",
    heading: "Families Discovered New Experiences",
    label: "ARCHITECTURAL RESPECT",
    story:
      "True scale isn't measured in square footage but in localized pride. Elevating regional infrastructure with clean gallery lighting and refined material textures signals a deep respect for the communities choosing to spend their life milestones here.",
  },
];
