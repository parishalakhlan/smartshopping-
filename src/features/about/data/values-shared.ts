// features/about/data/values-shared.ts

export interface PillarItem {
  num: string;
  title: string;
  desc: string;
}

export interface ValuesDataProps {
  sectionLabel: string;
  headlineLine1: string;
  headlineLine2: string;
  mobileCtaExpand: string;
  mobileCtaCollapse: string;
  pillars: PillarItem[];
}

export const VALUES_DATA: ValuesDataProps = {
  sectionLabel: "OUR OPERATING CONSTITUTION",
  headlineLine1: "The Real Core Pillars.",
  headlineLine2: "No Corporate Gloss.",
  mobileCtaExpand: "Reveal Operating Value",
  mobileCtaCollapse: "Close Value Archive",
  pillars: [
    {
      num: "01",
      title: "Regional Dignity",
      desc: "We believe a family in a rising tier-2 city deserves the exact same spatial environment, textile integrity, and personal respect as a buyer in a state capital.",
    },
    {
      num: "02",
      title: "Generational Patience",
      desc: "We reject short-term market speculation. We build retail hubs intended to anchor local high streets for decades, investing deeply in local workspace development.",
    },
    {
      num: "03",
      title: "Material Honesty",
      desc: "No compromise on production standards. Every piece in our multi-brand collective is vetted for real durability, clean finishes, and timeless wearability.",
    },
  ],
};
