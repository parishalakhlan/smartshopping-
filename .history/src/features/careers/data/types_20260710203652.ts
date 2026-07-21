// components/careers/types.ts

export interface WhyJoinItem {
  id: string;
  title: string;
  paragraph: string;
  image: string;
  insight: string;
}

export interface JourneyStep {
  stage: string;
  role: string;
  skills: string[];
  responsibilities: string;
  opportunity: string;
}

export interface JobOpportunity {
  id: string;
  role: string;
  department: "Retail Operations" | "Creative & Design" | "Brand Strategy";
  location: "Chandigarh" | "New Delhi" | "Ludhiana" | "Gurugram";
  type: "Full-Time" | "Internship";
  experience: "Entry Level" | "Mid Level" | "Senior";
  overview: string;
  requirements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
