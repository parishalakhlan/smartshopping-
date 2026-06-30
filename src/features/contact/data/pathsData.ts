export interface PathItem {
  id: string;
  title: string;
  oneLiner: string;
  contactPerson: string;
  method: string;
  responseTime: string;
  ctaText: string;
  actionUrl: string;
}

export const pathsData: PathItem[] = [
  {
    id: "concierge",
    title: "Personal Shopping Concierge",
    oneLiner:
      "Bespoke styling appointments, inventory checks, and private collection access.",
    contactPerson: "Private Client Relations Group",
    method: "Direct Private Line & Chat",
    responseTime: "< 15 Mins",
    ctaText: "Connect to Stylist",
    actionUrl: "tel:+18005557467",
  },
  {
    id: "careers",
    title: "Career & Talent Acquisition",
    oneLiner:
      "Explore active studio vacancies, apprenticeship openings, and application updates.",
    contactPerson: "Global Talent Experience Team",
    method: "Secure Portal Submission",
    responseTime: "< 48 Hours",
    ctaText: "View Open Positions",
    actionUrl: "/careers",
  },
  {
    id: "partnerships",
    title: "Wholesale & Business Partnerships",
    oneLiner:
      "Inquire regarding retail space optimization, franchise placement, and brand curation.",
    contactPerson: "Corporate Operations Office",
    method: "Encrypted Document Drop",
    responseTime: "1 Business Day",
    ctaText: "Submit Proposal",
    actionUrl: "mailto:partnerships@smartshopping.com",
  },
];
