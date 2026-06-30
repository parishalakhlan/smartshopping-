export interface PartnershipItem {
  id: string;
  title: string;
  description: string;
  focus: string;
}

export const partnershipsData: PartnershipItem[] = [
  {
    id: "part-1",
    title: "Brand Curation",
    description:
      "Align your seasonal collection trajectory with our spatial distribution framework.",
    focus: "Retail Placements",
  },
  {
    id: "part-2",
    title: "Logistics Optimization",
    description:
      "Integrate into our high-performance warehousing and automated localized fulfilment matrix.",
    focus: "Supply Chain",
  },
  {
    id: "part-3",
    title: "Artistic Collabs",
    description:
      "Commissioning restricted, studio-exclusive drops with contemporary global visual artists.",
    focus: "Creative Studio",
  },
];
