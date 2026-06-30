// components/contact/types.ts

export interface PathOption {
  id: string;
  title: string;
  oneLiner: string;
  contactPerson: string;
  method: string;
  responseTime: string;
  ctaText: string;
}

export interface ConnectTile {
  id: string;
  channel: string;
  value: string;
  purpose: string;
  availability: string;
  responseTime: string;
  icon: React.ReactNode;
}

export interface PartnershipItem {
  id: string;
  title: string;
  description: string;
  focus: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
