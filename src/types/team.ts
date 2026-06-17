export interface MilestoneMetric {
  value: string;
  label: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  philosophy: string;
  story: string[];
  signatureQuote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  philosophy: string;
  experience: string;
  education: string;
  responsibilities: string[];
  image: string;
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  accentPhrase: string;
}

export interface OperationalWing {
  id: string;
  title: string;
  description: string;
  image: string;
  metrics: string;
}
