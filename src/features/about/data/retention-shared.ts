// features/about/data/retention-shared.ts

export interface NarrativeFieldItem {
  num: string;
  label: string;
  title: string;
  story: string;
}

export interface RetentionDataProps {
  sectionLabel: string;
  headlineLine1: string;
  headlineLine2: string;
  retentionFields: NarrativeFieldItem[];
}

export const RETENTION_DATA: RetentionDataProps = {
  sectionLabel: "WORKSPACE LIFE // CORE RETENTION",
  headlineLine1: "Why Our Collective Builds",
  headlineLine2: "Long-Term Careers Here.",
  retentionFields: [
    {
      num: "01",
      label: "PROPULSION FROM WITHIN",
      title: "Organic Expansion Paths",
      story:
        "Our leadership team isn't imported from corporate boardrooms. The voices directing our multi-store collective started their careers directly inside our retail floor spaces, building actual localized expertise.",
    },
    {
      num: "02",
      label: "CREATIVE AUTONOMY",
      title: "True Ownership Systems",
      story:
        "We reject typical retail micromanagement. Each regional branch operates with real independent agency—coordinating layout choices and collection balances using direct community insights.",
    },
    {
      num: "03",
      label: "SHARED PURPOSE",
      title: "Cultural Equalization",
      story:
        "Our teams stay because the work carries immediate regional importance. We are actively dismantling the geographic tax on fashion, elevating local high street dignity every single day.",
    },
  ],
};
