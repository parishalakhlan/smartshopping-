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
    role: "Start Your Journey",
    skills: ["Customer Service", "Product Knowledge", "Communication"],
    responsibilities:
      "Learn from experienced team members, understand our brands, assist customers with confidence and become part of the Smart Shopping family from your very first day.",
    opportunity:
      "Structured onboarding, practical learning and continuous guidance to build a strong foundation for your career.",
  },

  {
    stage: "02",
    role: "Build Your Expertise",
    skills: ["Sales Excellence", "Team Collaboration", "Store Operations"],
    responsibilities:
      "Take ownership of your responsibilities, contribute to daily store operations and develop the confidence to deliver exceptional customer experiences.",
    opportunity:
      "Regular training sessions, skill development workshops and opportunities to take on greater responsibilities.",
  },

  {
    stage: "03",
    role: "Lead & Inspire",
    skills: ["Leadership", "Problem Solving", "People Management"],
    responsibilities:
      "Support your team, mentor new colleagues and help create an environment where customers and employees enjoy every interaction.",
    opportunity:
      "Leadership development programs and internal promotions based on your dedication and performance.",
  },

  {
    stage: "04",
    role: "Grow With Smart Shopping",
    skills: [
      "Business Leadership",
      "Strategic Thinking",
      "Operational Excellence",
    ],
    responsibilities:
      "Lead teams, drive business growth and play an important role in expanding Smart Shopping while inspiring future leaders.",
    opportunity:
      "Long-term career growth, leadership opportunities and the chance to make a meaningful impact across our growing organization.",
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
