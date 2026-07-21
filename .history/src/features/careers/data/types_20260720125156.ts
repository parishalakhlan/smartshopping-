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
  postedAt?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
// utils/formatTime.ts
export const formatPostedTime = (dateString?: string): string => {
  if (!dateString) return "Recently";

  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};
