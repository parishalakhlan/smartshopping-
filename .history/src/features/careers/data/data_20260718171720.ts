// components/careers/data.ts

import { WhyJoinItem, JourneyStep, JobOpportunity, FAQItem } from "./types";
export const whyJoinData: WhyJoinItem[] = [
  {
    id: "join-1",
    title: "Where Achievements Are Celebrated",
    paragraph:
      "Success is never taken for granted. We celebrate milestones, recognize contributions and create memorable moments that strengthen our culture and inspire every team member.",
    image: "/employees/employee2.webp",
    insight: "Recognition is part of our culture—not just an annual event.",
  },
  {
    id: "join-2",
    title: "Build A Career With Purpose",
    paragraph:
      "Whether you're starting your professional journey or taking the next step in leadership, we provide opportunities to learn, grow and make a meaningful impact every day.",
    image: "/employees/employee3.webp",
    insight: "Continuous learning and real opportunities to grow from within.",
  },
  {
    id: "join-3",
    title: "People First, Always",
    paragraph:
      "We believe great businesses are built by great people. That's why we foster an environment of collaboration, mutual respect and shared success where everyone feels valued.",
    image: "/employees/employee6.webp",
    insight:
      "A workplace where teamwork, trust and belonging drive everything we do.",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    stage: "01",
    role: "Intern",
    skills: ["Spatial Dynamics", "Clienteling Basics", "Brand Storytelling"],
    responsibilities:
      "Assisting daily floor mapping, managing premium dressing chambers, and executing morning visual curation refreshes.",
    opportunity:
      "Direct 1-on-1 shadow pairing with veteran Cluster Directors during major high-season rollouts.",
  },
  {
    stage: "02",
    role: "Retail Associate",
    skills: [
      "Conversion Metrics",
      "Inventory Optimization",
      "Wardrobe Curation",
    ],
    responsibilities:
      "Owning high-velocity catalog zones, leading private guest tailoring styling loops, and analyzing regional product rotation trends.",
    opportunity:
      "Fast-track sponsorship entrance into our advanced Multi-Brand Visual Merchandising Guild program.",
  },
  {
    stage: "03",
    role: "Senior Associate",
    skills: [
      "Floor Supervision",
      "Team Briefing Execution",
      "Local Micro-Auditing",
    ],
    responsibilities:
      "Driving overall daily category conversions, mentoring raw entry floor personnel, and auditing visual layout guidelines.",
    opportunity:
      "Quarterly review access directly targeting prospective Assistant Store Manager vacancy allocations.",
  },
  {
    stage: "04",
    role: "Store Manager",
    skills: [
      "Complete P&L Mastery",
      "Talent Cultivation",
      "Asset Allocation Architecture",
    ],
    responsibilities:
      "Commanding complete end-to-end multi-million rupee storefront operations, visual governance, and physical ecosystem safety.",
    opportunity:
      "Direct performance bonus matrices linked elegantly with overall gross store performance yield profiles.",
  },
];

export const jobsData: JobOpportunity[] = [
  {
    id: "job-1",
    role: "Visual Merchandising Coordinator",
    department: "Creative & Design",
    location: "Chandigarh",
    type: "Full-Time",
    experience: "Entry Level",
    overview:
      "Synthesize architectural interior layout theories with customer purchase actions inside our signature Elante Mall ecosystem.",
    requirements: [
      "A deep interest in structural interior space design or fashion communication layouts.",
      "Strong understanding of color composition, fabric textures, and premium branding mechanics.",
    ],
  },
  {
    id: "job-2",
    role: "Store Operations Associate",
    department: "Retail Operations",
    location: "New Delhi",
    type: "Full-Time",
    experience: "Entry Level",
    overview:
      "Own your dedicated catalog zone, manage local inventory pipelines, and execute private premium clienteling styling loops.",
    requirements: [
      "Excellent communicative warmth, clarity, and genuine collaborative attitude.",
      "Proactive structural problem-solving posture on the live store floor.",
    ],
  },
  {
    id: "job-3",
    role: "Ecosystem Store Manager",
    department: "Retail Operations",
    location: "Ludhiana",
    type: "Full-Time",
    experience: "Mid Level",
    overview:
      "Command complete end-to-end multi-million rupee storefront operations, visual governance, and physical ecosystem safety.",
    requirements: [
      "2-4 years of verified leadership experience in high-touch guest environments.",
      "Strong command of digital retail inventory platforms and business spreadsheets.",
    ],
  },
];

export const faqData: FAQItem[] = [
  {
    question: "What will I learn during my first month?",
    answer:
      "You will master high-touch retail clienteling, real-world floor conversion mathematics, catalog organization systems, and premium brand storytelling methods.",
  },
  {
    question: "Do I need a formal fashion background to apply?",
    answer:
      "No. We look for high human empathy, collaborative energy, and a clear hunger to master our premium operational style. Your drive matters more than certificates.",
  },
  {
    question: "Can interns transition into full-time careers?",
    answer:
      "Absolutely. Over 40% of our active store leadership initially walked through our doors as summer management trainees or entry-level floor interns.",
  },
];
