"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Clock,
  SlidersHorizontal,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

// ==========================================
// TYPES & DATA TYPE SCHEMAS
// ==========================================

interface WhyJoinItem {
  id: string;
  title: string;
  paragraph: string;
  image: string;
  insight: string;
}

interface JourneyStep {
  stage: string;
  role: string;
  skills: string[];
  responsibilities: string;
  opportunity: string;
  employeeStory: {
    name: string;
    quote: string;
    location: string;
  };
}

interface ProgramItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

interface WeekDay {
  day: string;
  title: string;
  image: string;
  details: string;
}

interface CulturePanel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface JobOpportunity {
  id: string;
  role: string;
  department:
    | "Retail Operations"
    | "Creative & Design"
    | "Brand Strategy"
    | "Logistics";
  location: "Chandigarh" | "New Delhi" | "Ludhiana" | "Gurugram";
  type: "Full-Time" | "Internship";
  experience: "Entry Level" | "Mid Level" | "Senior";
  overview: string;
  responsibilities: string[];
  requirements: string[];
  growthPath: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ==========================================
// DATA MOCK CONSTANTS (2026 PREMIUM MATRIX)
// ==========================================

const whyJoinData: WhyJoinItem[] = [
  {
    id: "join-1",
    title: "Learning Every Day",
    paragraph:
      "We discard passive orientation manuals. From day one, you run spatial floor environments alongside luxury coordinators, understanding customer psychological trends in real time.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
    insight:
      "Deep immersive sessions with global textile mills, tracking layout conversions across dynamic premium flagships.",
  },
  {
    id: "join-2",
    title: "Growing With Responsibility",
    paragraph:
      "Age is secondary to execution. We hand real inventory parameters, campaign layouts, and multi-lakh performance budgets to young managers who prove their strategic taste.",
    image:
      "https://images.unsplash.com/photo-1558583055-d74f67d86296?auto=format&fit=crop&q=80&w=1000",
    insight:
      "Structured leadership pathways tracking promotion metrics on a clear quarterly cycle, with zero corporate gatekeeping.",
  },
  {
    id: "join-3",
    title: "Working With Premium Brands",
    paragraph:
      "Elevate your visual pedigree. Curate layout standards, collection launches, and strictly managed sensory merchandising matrices for globally respected apparel houses.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    insight:
      "Direct execution pipelines interacting with international distribution managers and high-end seasonal collection coordinators.",
  },
  {
    id: "join-4",
    title: "Making Fashion Accessible",
    paragraph:
      "Democratize luxurious environments across North India. Deliver premium spatial retail experiences, meticulous tailoring access, and curated high-fashion consultations.",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=1000",
    insight:
      "Bridging the delicate line between global fashion concepts and local regional lifestyle preferences.",
  },
];

const journeySteps: JourneyStep[] = [
  {
    stage: "01",
    role: "Intern",
    skills: ["Spatial Dynamics", "Clienteling Basics", "Brand Storytelling"],
    responsibilities:
      "Assisting daily floor mapping, managing premium dressing chambers, and executing morning visual curation refreshes.",
    opportunity:
      "Direct 1-on-1 shadow pairing with veteran Cluster Directors during major high-season rollouts.",
    employeeStory: {
      name: "Rohan Malhotra",
      quote:
        "I wasn't fetchting tea. On week two, I managed the premium luxury denim catalog allocation for Chandigarh's Elante Store.",
      location: "Chandigarh Hub",
    },
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
    employeeStory: {
      name: "Simran Kaur",
      quote:
        "Learning client retention frameworks taught me how to analyze customer psychographics like an absolute business operator.",
      location: "New Delhi (South Ex)",
    },
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
    employeeStory: {
      name: "Kabir Mehta",
      quote:
        "You transition from managing garments to leading people. The operational energy on a high-velocity Saturday is incomparable.",
      location: "Ludhiana Estate",
    },
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
    employeeStory: {
      name: "Ananya Sharma",
      quote:
        "I took ownership of a flagship store at 25. Smart Shopping looks at your execution speed, never a timestamp on your resume.",
      location: "Gurugram Flagship",
    },
  },
  {
    stage: "05",
    role: "Cluster Leadership",
    skills: [
      "Cross-Store Governance",
      "Macro Supply Optimization",
      "Market Expansion Strategies",
    ],
    responsibilities:
      "Supervising multi-hub conversion alignment, coordinating regional launch calendars, and deploying premium talent buffers.",
    opportunity:
      "Steering geographic entry studies for upcoming high-tier capital cities across Northern Indian regions.",
    employeeStory: {
      name: "Vikramjit Singh",
      quote:
        "We ensure our shared brand manifesto remains uncompromised across multiple high-stakes, ultra-premium locations.",
      location: "North India Territory",
    },
  },
];

const weekDays: WeekDay[] = [
  {
    day: "Mon",
    title: "Training & Alignment",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    details:
      "Morning brief with regional operations directors analyzing seasonal conversion velocity maps.",
  },
  {
    day: "Tue",
    title: "Customer Experience Focus",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800",
    details:
      "Executing private high-tier styling sessions and curating custom luxury wardrobe requests.",
  },
  {
    day: "Wed",
    title: "Visual Merchandising Sync",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    details:
      "Reconfiguring structural storefront assets to match fast-changing inventory movements perfectly.",
  },
  {
    day: "Thu",
    title: "Inventory & Operations Optimization",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    details:
      "Auditing internal tracking architectures alongside regional logistics and tech supply networks.",
  },
  {
    day: "Fri",
    title: "Team Collaboration Rituals",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    details:
      "Cross-functional insights workshops where associates pitch design tweaks directly to regional leaders.",
  },
  {
    day: "Sat",
    title: "High-Velocity Retail Energy",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    details:
      "Experiencing active premium commerce at peak velocity across our signature storefront environments.",
  },
  {
    day: "Sun",
    title: "Celebration & Creative Reflection",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    details:
      "Acknowledging weekly store winners and gathering qualitative insights for the coming cycle.",
  },
];

const culturePanels: CulturePanel[] = [
  {
    id: "cult-1",
    title: "Learning Together",
    subtitle: "Continuous Upskilling",
    description:
      "Weekly deep dives covering high-end fabrics, sustainable sourcing matrices, and customer psychology frameworks.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cult-2",
    title: "Real Floor Recognition",
    subtitle: "Value Performance",
    description:
      "Monthly awards that highlight individual initiative, cross-team assistance, and pure operational craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cult-3",
    title: "Direct Mentorship Lifelines",
    subtitle: "Unblocked Access",
    description:
      "Every individual is paired directly with a retail veteran, skipping standard hierarchy obstacles to share ideas.",
    image:
      "https://images.unsplash.com/photo-1521791136368-1a46827d0505?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cult-4",
    title: "Radical Floor Ownership",
    subtitle: "Autonomy First",
    description:
      "Our floor leads hold the power to completely tweak product styling blocks on the fly to fit local neighborhood preferences.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
  },
];

const studentPrograms: ProgramItem[] = [
  {
    id: "prog-1",
    title: "Summer Immersive Internships",
    desc: "A rigorous 8-week sprint embedding ambitious university students directly into active high-traffic store ecosystems.",
    tag: "8 WEEKS",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "prog-2",
    title: "Live Retail Exposure Modules",
    desc: "Weekend experiential pathways structured carefully for design, fashion, and business school candidates.",
    tag: "FLEXIBLE",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "prog-3",
    title: "Management Trainee Tracks",
    desc: "A definitive 12-month incubation designed to shape premium business graduates into full-stack Store Managers.",
    tag: "1 YEAR",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600",
  },
];

const faqData: FAQItem[] = [
  {
    question: "What will I genuinely learn during my first month here?",
    answer:
      "You will master high-touch retail clienteling, real-world floor conversion mathematics, catalog organization system layouts, and premium brand storytelling methods. We ensure you gain actual business insights, not static observation loops.",
  },
  {
    question: "Do I need a formal fashion or retail background to apply?",
    answer:
      "No. We look intentionally for high human empathy, collaborative energy, structural organization, and a clear hunger to master our premium operational style. Your intrinsic drive matters infinitely more to us than previous certificates.",
  },
  {
    question:
      "Can high-performing interns transition into permanent full-time careers?",
    answer:
      "Absolutely. Over 40% of our active store leadership and regional cluster coordinators initially walked through our storefront doors as summer management trainees or entry-level floor interns.",
  },
  {
    question:
      "What does the premium selection pathway look like after I submit my story?",
    answer:
      "Our recruitment loop is conversational and transparent. Following your digital submission, you will join an interactive review session with a store leader, followed by an onsite experiential floor visit to see our space firsthand.",
  },
];

const jobsData: JobOpportunity[] = [
  {
    id: "job-1",
    role: "Visual Merchandising Coordinator",
    department: "Creative & Design",
    location: "Chandigarh",
    type: "Full-Time",
    experience: "Entry Level",
    overview:
      "Synthesize architectural interior layout theories with customer purchase actions inside our signature Elante Mall ecosystem.",
    responsibilities: [
      "Executing daily premium presentation frameworks across high-end curation tables.",
      "Analyzing micro-conversion tracking metrics to redesign lighting paths and mannequin layouts.",
      "Collaborating alongside regional brand managers during major seasonal collection updates.",
    ],
    requirements: [
      "A deep interest in structural interior space design or fashion communication layouts.",
      "Strong understanding of color composition, fabric textures, and premium branding mechanics.",
      "Comfort working in fast-paced retail spaces on Saturday afternoon environments.",
    ],
    growthPath:
      "Progresses directly into Regional Visual Merchandising Specialist within 12–18 months.",
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
    responsibilities: [
      "Delivering unhurried, insightful wardrobe guidance to high-end boutique visitors.",
      "Tracking inventory flow rates and flagging optimal restocking markers.",
      "Leading morning floor brief insights regarding local customer trend shifts.",
    ],
    requirements: [
      "Excellent communicative warmth, clarity, and genuine collaborative attitude.",
      "Proactive structural problem-solving posture on the live store floor.",
      "Eagerness to participate in intense weekly cross-training development setups.",
    ],
    growthPath:
      "Prepares you for fast-track progression toward Department Team Leader assignments.",
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
    responsibilities: [
      "Directly steering store P&L parameters, regional labor budgets, and overhead ratios.",
      "Cultivating the internal talent pipeline through continuous mentorship blocks.",
      "Ensuring strict compliance with premium international brand merchandising standards.",
    ],
    requirements: [
      "2-4 years of verified leadership experience in high-touch guest environments.",
      "Strong command of digital retail inventory platforms and business spreadsheets.",
      "Proven history of coaching junior personnel into advanced career positions.",
    ],
    growthPath:
      "Feeds directly into prospective Regional Cluster Leadership assignments.",
  },
  {
    id: "job-4",
    role: "Premium Retail Management Trainee",
    department: "Retail Operations",
    location: "Gurugram",
    type: "Internship",
    experience: "Entry Level",
    overview:
      "A highly immersive, comprehensive 12-month incubation structured to build high-potential graduates into capable Store Leaders.",
    responsibilities: [
      "Rotating through catalog management, spatial design, and backend supply cycles.",
      "Pitching an original data-driven floor layout optimization program to cluster leadership.",
      "Executing core customer-facing operations during peak seasonal events.",
    ],
    requirements: [
      "Recent university graduate or final year student demonstrating exceptional drive.",
      "Deep personal interest in premium lifestyle business architectures.",
      "Ability to unpack performance data metrics and apply them to physical store floors.",
    ],
    growthPath:
      "Graduates exit directly into certified Assistant Store Manager positions.",
  },
];

// ==========================================
// CUSTOM INTERACTIVE HOOK COMPONENTS
// ==========================================

const MagneticButton = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative rounded-none font-medium uppercase text-xs tracking-widest transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

// ==========================================
// CORE CAREERS CONTENT PAGE COMPONENT
// ==========================================

export default function CareersPage() {
  // --- Filtering & Expansion States ---
  const [activeWhyBlock, setActiveWhyBlock] = useState<string>("join-1");
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);
  const [activeWeekDay, setActiveWeekDay] = useState<string>("Mon");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Filtering states for openings
  const [deptFilter, setDeptFilter] = useState<string>("All");
  const [locFilter, setLocFilter] = useState<string>("All");
  const [expFilter, setExpFilter] = useState<string>("All");

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Filtered computed jobs matrix
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchDept = deptFilter === "All" || job.department === deptFilter;
      const matchLoc = locFilter === "All" || job.location === locFilter;
      const matchExp = expFilter === "All" || job.experience === expFilter;
      return matchDept && matchLoc && matchExp;
    });
  }, [deptFilter, locFilter, expFilter]);

  return (
    <div className="bg-[#FFFFFF] text-[#163B65] font-sans antialiased selection:bg-[#F97316]/10 selection:text-[#F97316] overflow-x-hidden">
      {/* ================= SECTION 1: EDITORIAL HERO ================= */}
      <section className="relative w-full h-[85vh] min-h-[650px] bg-[#F5F2EC]/30 flex items-center overflow-hidden border-b border-[#163B65]/10">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1800"
            alt="Smart Shopping Editorial Workspace Environment"
            fill
            priority
            className="object-cover opacity-15 scale-105 transform motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    className="text-[10px] text-[#F97316] font-bold tracking-[0.3em] uppercase block"
                  >
                    The Smart Shopping Ecosystem Journey
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163B65] leading-[1.05]"
                  >
                    Build More Than A Career. <br />
                    <span className="italic font-normal text-[#F97316]">
                      Build Your Story.
                    </span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[#475569] text-sm sm:text-base font-normal max-w-xl leading-relaxed pt-2"
                >
                  Every legacy career starts somewhere. At Smart Shopping, you
                  will step onto active multi-brand floors, work alongside
                  global fashion labels, learn from experienced mentors, and
                  cultivate real business intelligence within one of North
                  India&apos;s fastest-growing retail groups.
                </motion.p>
              </div>

              {/* Action Rows */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <MagneticButton
                  onClick={() => scrollToSection("openings")}
                  className="px-8 py-4 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] border border-[#163B65] shadow-sm flex items-center gap-2"
                >
                  Explore Opportunities{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => scrollToSection("life-cycle")}
                  className="px-8 py-4 bg-transparent text-[#163B65] border border-[#163B65]/20 hover:border-[#163B65] transition-all"
                >
                  Life At Smart Shopping
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Layered Editorial Composition Column */}
            <div className="lg:col-span-5 hidden lg:block relative h-[520px] w-full">
              <div className="absolute right-0 top-4 w-[75%] h-[420px] bg-[#F5F2EC] overflow-hidden border border-[#163B65]/10 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                  alt="Store Operations Curation Briefing"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-750 ease-out"
                />
              </div>
              <div className="absolute left-0 bottom-4 w-[60%] h-[260px] bg-[#FFFFFF] overflow-hidden border border-[#163B65]/10 shadow-md p-2">
                <div className="relative w-full h-full bg-[#F5F2EC] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Active Visual Merchandising Planning Sync"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-[40%] right-[-10px] bg-[#FFFFFF] border border-[#163B65]/10 p-4 rounded-none shadow-sm space-y-1 max-w-[180px]">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#F97316]">
                  Active Path
                </p>
                <p className="font-serif text-xs font-bold text-[#163B65] leading-snug">
                  Average team age: 26 years young.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY PEOPLE JOIN ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#163B65]/10 pb-8 mb-12">
            <div className="space-y-3 text-left">
              <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
                The Pillars Of Growth
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
                Why Ambitious People Flourish Here
              </h2>
            </div>
            <p className="text-[#475569] text-xs font-normal max-w-sm lg:text-right leading-relaxed">
              We completely discard static benefit checklists. We build
              continuous professional loops where taste, operational
              independence, and brand understanding guide execution parameters.
            </p>
          </div>

          {/* Asymmetric Expansion Matrix layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Left Menu Links List */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
              {whyJoinData.map((block) => (
                <button
                  key={block.id}
                  onClick={() => setActiveWhyBlock(block.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 relative rounded-none flex flex-col space-y-1 group ${
                    activeWhyBlock === block.id
                      ? "bg-[#F5F2EC]/50 border-[#163B65] pl-8"
                      : "bg-[#FFFFFF] border-[#163B65]/10 hover:border-[#163B65]/40 pl-6"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#163B65]">
                      {block.title}
                    </h3>
                    <ChevronRight
                      className={`w-4 h-4 text-[#F97316] transition-transform duration-300 ${activeWhyBlock === block.id ? "translate-x-1" : "opacity-30"}`}
                    />
                  </div>
                  <p className="text-[#475569] text-xs font-normal leading-relaxed line-clamp-2">
                    {block.paragraph}
                  </p>
                </button>
              ))}
            </div>

            {/* Immersive Right Detail Viewer Frame Display */}
            <div className="lg:col-span-7 bg-[#F5F2EC]/20 border border-[#163B65]/10 p-6 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                {whyJoinData.map(
                  (block) =>
                    block.id === activeWhyBlock && (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col justify-between space-y-6"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#163B65]/5">
                          <Image
                            src={block.image}
                            alt={block.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-3 text-left">
                          <h4 className="font-serif text-xl font-bold text-[#163B65]">
                            {block.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                            {block.paragraph}
                          </p>

                          <div className="pt-4 border-t border-[#163B65]/10 flex items-start gap-3 bg-[#FFFFFF] p-4 border-l-2 border-[#F97316]">
                            <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block mt-0.5">
                              Insight:
                            </span>
                            <p className="text-xs text-[#163B65] font-medium leading-relaxed">
                              {block.insight}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: YOUR GROWTH JOURNEY ================= */}
      <section className="py-24 bg-[#F5F2EC]/30 border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left space-y-3 mb-16">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              Vertical Realization Map
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
              The Architecture of Rapid Progression
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
              Stagnancy is non-existent. Below is a detailed tracking of how a
              self-driven candidate moves linearly from exploratory internships
              right into definitive executive cluster leadership.
            </p>
          </div>

          {/* Premium Vertical Grid Matrix Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Bar (Left Column) */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-3">
              {journeySteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveJourneyStep(index)}
                  className={`p-4 border text-left transition-all rounded-none flex items-center space-x-3 group relative ${
                    activeJourneyStep === index
                      ? "bg-[#163B65] border-[#163B65] text-[#FFFFFF]"
                      : "bg-[#FFFFFF] border-[#163B65]/10 text-[#163B65] hover:border-[#163B65]/40"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold ${activeJourneyStep === index ? "text-[#F97316]" : "text-[#163B65]/40"}`}
                  >
                    {step.stage}
                  </span>
                  <span className="text-xs font-bold tracking-wide uppercase truncate">
                    {step.role}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Visual Expansion Slate Block (Right Column) */}
            <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#163B65]/10 p-6 sm:p-8 shadow-sm text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJourneyStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Step Banner Frame */}
                  <div className="flex items-center justify-between border-b border-[#163B65]/10 pb-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">
                        Operational Phase
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#163B65]">
                        {journeySteps[activeJourneyStep].role}
                      </h3>
                    </div>
                    <span className="font-serif text-4xl font-extrabold text-[#163B65]/10">
                      {journeySteps[activeJourneyStep].stage}
                    </span>
                  </div>

                  {/* Skills Grid Blocks */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                      Acquired Execution Skills:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {journeySteps[activeJourneyStep].skills.map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="bg-[#F5F2EC] text-[#163B65] text-[11px] font-medium px-2.5 py-1 border border-[#163B65]/5"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Core Focus Split Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block">
                        Daily Accountability:
                      </span>
                      <p className="text-xs text-[#475569] font-normal leading-relaxed">
                        {journeySteps[activeJourneyStep].responsibilities}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                        Exposure Pipeline:
                      </span>
                      <p className="text-xs text-[#475569] font-normal leading-relaxed">
                        {journeySteps[activeJourneyStep].opportunity}
                      </p>
                    </div>
                  </div>

                  {/* Real Internal Employee Story Overlay Box */}
                  <div className="bg-[#F5F2EC]/40 p-5 border-l-2 border-[#163B65] mt-4 space-y-2">
                    <p className="text-xs font-serif italic text-[#475569] leading-relaxed">
                      &ldquo;
                      {journeySteps[activeJourneyStep].employeeStory.quote}
                      &rdquo;
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#163B65]">
                      <span>
                        — {journeySteps[activeJourneyStep].employeeStory.name}
                      </span>
                      <span className="text-[#F97316] font-mono">
                        {journeySteps[activeJourneyStep].employeeStory.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Validation Bottom Tag bar */}
          <div className="mt-8 border border-[#163B65]/10 bg-[#FFFFFF] p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center space-x-2 text-left">
              <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
              <p className="text-[11px] text-[#475569] font-medium">
                Over <strong className="text-[#163B65]">40%</strong> of our
                current Department Managers initially entered via entry-level
                Intern blocks.
              </p>
            </div>
            <span className="text-[9px] font-mono text-[#475569]/60 uppercase tracking-widest">
              Audited Matrix Cycle 2025-2026
            </span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LEARN BY DOING ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              Experiential Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
              Real Experience. Real Responsibility.
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
              We skip standard lecture files. We embed young minds directly
              inside functional flagship environments where premium concepts
              collide with real consumer psychology.
            </p>
          </div>

          {/* Dual Immersive Narrative Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Strategy Block One */}
            <div className="border border-[#163B65]/10 p-6 sm:p-8 bg-[#F5F2EC]/20 flex flex-col justify-between space-y-8 relative group">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#F97316] tracking-widest">
                  [ METHOD ALPHA ]
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#163B65] leading-tight">
                  Live Customer Engagement & Merchandising
                </h3>
                <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
                  Instead of analyzing charts behind closed doors, our trainees
                  manage actual inventory allocations, interact with incoming
                  premium buyers, and alter visual display arrays on the fly to
                  drive real weekend floor conversion margins.
                </p>
              </div>
              <div className="border-t border-[#163B65]/10 pt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#163B65]">
                <span>Tactile Experience Focus</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>

            {/* Strategy Block Two */}
            <div className="border border-[#163B65]/10 p-6 sm:p-8 bg-[#FFFFFF] flex flex-col justify-between space-y-8 relative group">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#163B65]/50 tracking-widest">
                  [ METHOD BETA ]
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#163B65] leading-tight">
                  Direct Inventory & Business Operations
                </h3>
                <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
                  Trainees gain deep platform access, analyzing weekly stock
                  replenishment rates, coordinating supply schedules with modern
                  family-owned textile factories, and sitting down in
                  operational sync structures with regional cluster directors.
                </p>
              </div>
              <div className="border-t border-[#163B65]/10 pt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#163B65]">
                <span>Data-Driven Operations</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: A WEEK AT SMART SHOPPING ================= */}
      <section
        id="life-cycle"
        className="py-24 bg-[#F5F2EC]/20 border-b border-[#163B65]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#163B65]/10 pb-8 mb-12">
            <div className="space-y-3 text-left">
              <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
                The Operational Rhythm
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
                The Weekly Retail Cadence
              </h2>
            </div>
            <p className="text-[#475569] text-xs font-normal max-w-sm lg:text-right leading-relaxed">
              Flip through the standard weekly flow profile of a Smart Shopping
              team member. Real design, collaborative setups, and explosive
              weekend commerce.
            </p>
          </div>

          {/* Interactive Weekday Grid Ribbon */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
            {weekDays.map((item) => (
              <button
                key={item.day}
                onClick={() => setActiveWeekDay(item.day)}
                className={`p-3 text-center border font-mono text-xs font-bold transition-all rounded-none ${
                  activeWeekDay === item.day
                    ? "bg-[#163B65] border-[#163B65] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-[#163B65]/10 text-[#163B65] hover:border-[#163B65]/30"
                }`}
              >
                {item.day}
              </button>
            ))}
          </div>

          {/* Dynamic Weekday Stage Slate View */}
          <div className="bg-[#FFFFFF] border border-[#163B65]/10 p-6">
            <AnimatePresence mode="wait">
              {weekDays.map(
                (item) =>
                  item.day === activeWeekDay && (
                    <motion.div
                      key={item.day}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-4 relative aspect-square lg:aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="lg:col-span-8 space-y-2 text-left">
                        <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest">
                          Weekly Track Rotation
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#163B65]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed max-w-xl">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: THE CULTURE ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-left space-y-2 mb-16">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              The Floor Dynamics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
              Ecosystem Architecture Experiences
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
              We skip unread culture handbooks. Our workspace environment
              breathes via direct access, visible floor appreciation metrics,
              and genuine design input.
            </p>
          </div>

          {/* Expandable Editorial Culture Strip Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {culturePanels.map((panel, idx) => (
              <div
                key={panel.id}
                className="border border-[#163B65]/10 p-6 flex flex-col justify-between h-[360px] bg-[#FFFFFF] relative group overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-mono text-xs text-[#475569]/40 tracking-wider">
                  [ 0{idx + 1} ]
                </span>

                <div className="space-y-2 relative z-10">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#F97316] block">
                    {panel.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#163B65]">
                    {panel.title}
                  </h3>
                  <p className="text-[#475569] text-xs font-normal leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                <div className="border-t border-[#163B65]/10 pt-3 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#163B65]/50 font-bold group-hover:text-[#F97316] transition-colors">
                  <span>Manifesto Pillar</span>
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: CURRENT OPPORTUNITIES (ADVANCED FILTERING) ================= */}
      <section
        id="openings"
        className="py-24 bg-[#F5F2EC]/30 border-b border-[#163B65]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#163B65]/10 pb-8 mb-12">
            <div className="space-y-3 text-left">
              <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
                Available Assignments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
                Active Strategic Openings
              </h2>
            </div>
            <p className="text-[#475569] text-xs font-normal max-w-sm lg:text-right leading-relaxed">
              Find your entry node. Filter below dynamically across specialized
              business wings, premium regions, and experience parameters.
            </p>
          </div>

          {/* Floating Filter Bar Layout Controls */}
          <div className="bg-[#FFFFFF] border border-[#163B65]/10 p-4 rounded-none mb-8 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-2 text-[#163B65]/60 text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Filter Matrix:</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Dept Choice Selection */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-[#475569] font-medium">Wing:</span>
                <select
                  aria-label="Select department"
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className="bg-[#F5F2EC]/50 border border-[#163B65]/10 p-1.5 font-medium text-[#163B65] focus:outline-none rounded-none text-xs"
                >
                  <option value="All">All Wings</option>
                  <option value="Retail Operations">Retail Operations</option>
                  <option value="Creative & Design">Creative & Design</option>
                </select>
              </div>

              {/* Location Choice Selection */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-[#475569] font-medium">Region:</span>
                <select
                  aria-label="Select location"
                  value={locFilter}
                  onChange={(e) => setLocFilter(e.target.value)}
                  className="bg-[#F5F2EC]/50 border border-[#163B65]/10 p-1.5 font-medium text-[#163B65] focus:outline-none rounded-none text-xs"
                >
                  <option value="All">All Regions</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Gurugram">Gurugram</option>
                </select>
              </div>

              {/* Experience Level Selection */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-[#475569] font-medium">Tier:</span>
                <select
                  aria-label="Select experience level"
                  value={expFilter}
                  onChange={(e) => setExpFilter(e.target.value)}
                  className="bg-[#F5F2EC]/50 border border-[#163B65]/10 p-1.5 font-medium text-[#163B65] focus:outline-none rounded-none text-xs"
                >
                  <option value="All">All Tiers</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                </select>
              </div>
            </div>
          </div>

          {/* Premium Opportunity Expandable Card Grid Stack */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#FFFFFF] border border-[#163B65]/10 p-12 text-center"
                >
                  <p className="font-serif text-base text-[#475569]">
                    No strategic parameters match your selected filtration
                    choices currently.
                  </p>
                  <button
                    onClick={() => {
                      setDeptFilter("All");
                      setLocFilter("All");
                      setExpFilter("All");
                    }}
                    className="mt-2 text-xs font-bold text-[#F97316] underline uppercase tracking-wider"
                  >
                    Reset Matrix
                  </button>
                </motion.div>
              ) : (
                filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      layout="position"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-[#FFFFFF] border transition-all rounded-none overflow-hidden text-left ${isExpanded ? "border-[#163B65] shadow-sm" : "border-[#163B65]/10 hover:border-[#163B65]/30"}`}
                    >
                      {/* Initial Metadata Row Header */}
                      <div
                        onClick={() =>
                          setExpandedJobId(isExpanded ? null : job.id)
                        }
                        className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                      >
                        <div className="space-y-1 max-w-xl">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] uppercase tracking-wider font-bold bg-[#F5F2EC] text-[#163B65] px-2 py-0.5 border border-[#163B65]/5">
                              {job.department}
                            </span>
                            <span className="text-[9px] uppercase tracking-wider font-bold bg-[#163B65]/5 text-[#475569] px-2 py-0.5">
                              {job.experience}
                            </span>
                          </div>
                          {/* Protect text wrapping explicitly on smaller displays */}
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#163B65] tracking-tight break-words">
                            {job.role}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#163B65]/5">
                          <div className="flex items-center space-x-4 font-medium text-xs text-[#475569]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#163B65]/40" />{" "}
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#F97316]" />{" "}
                              {job.type}
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-none border border-[#163B65]/10 flex items-center justify-center text-[#163B65]">
                            {isExpanded ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Disclosure Content Blocks Area */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-[#F5F2EC]/10 border-t border-[#163B65]/10"
                          >
                            <div className="p-6 space-y-6 text-xs sm:text-sm">
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block">
                                  Overview Matrix:
                                </span>
                                <p className="text-[#475569] font-normal leading-relaxed max-w-2xl">
                                  {job.overview}
                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                                    Core Responsibilities:
                                  </span>
                                  <ul className="list-disc list-inside space-y-1 text-[#475569] font-normal pl-1">
                                    {job.responsibilities.map((resp, i) => (
                                      <li key={i} className="leading-relaxed">
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="space-y-2">
                                  <span className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                                    Candidate Attributes:
                                  </span>
                                  <ul className="list-disc list-inside space-y-1 text-[#475569] font-normal pl-1">
                                    {job.requirements.map((req, i) => (
                                      <li key={i} className="leading-relaxed">
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="pt-4 border-t border-[#163B65]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#163B65]">
                                    Vertical Path:
                                  </span>
                                  <span className="text-xs text-[#475569] font-medium">
                                    {job.growthPath}
                                  </span>
                                </div>
                                <MagneticButton className="px-6 py-3 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] flex items-center gap-2">
                                  Submit My Story{" "}
                                  <ArrowUpRight className="w-3 h-3 text-[#F97316]" />
                                </MagneticButton>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: STUDENT PROGRAMS ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              Campus Partnerships
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
              Start Your Professional Journey
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
              We look for raw, passionate design and business capabilities
              directly from regional academies and premier student networks.
              Explore incubated frameworks.
            </p>
          </div>

          {/* Interactive Editorial Program Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {studentPrograms.map((prog) => (
              <div
                key={prog.id}
                className="border border-[#163B65]/10 bg-[#FFFFFF] flex flex-col justify-between group overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EC]">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#FFFFFF] text-[#163B65] text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 border border-[#163B65]/10">
                    {prog.tag}
                  </span>
                </div>
                <div className="p-5 space-y-2 border-t border-[#163B65]/10 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-[#163B65]">
                      {prog.title}
                    </h3>
                    <p className="text-[#475569] text-xs font-normal leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-[#F97316] uppercase tracking-widest block pt-4 cursor-pointer hover:underline">
                    Explore Placement Matrix →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: YOUR QUESTIONS (FAQ) ================= */}
      <section className="py-24 bg-[#F5F2EC]/20 border-b border-[#163B65]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              Uncompromised Clarity
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#163B65] tracking-tight">
              Reducing Hesitation
            </h2>
          </div>

          {/* Conversational Expandable Panels Layout (No standard accordion styles) */}
          <div className="space-y-4 text-left">
            {faqData.map((faq, index) => {
              const isFaqOpen = faqOpenIndex === index;
              return (
                <div
                  key={index}
                  className={`border transition-all duration-300 rounded-none bg-[#FFFFFF] ${isFaqOpen ? "border-[#163B65]" : "border-[#163B65]/10"}`}
                >
                  <button
                    onClick={() => setFaqOpenIndex(isFaqOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left font-serif text-sm sm:text-base font-bold text-[#163B65] select-none"
                  >
                    {/* Explicitly guarantee clean text wrapping for short headings */}
                    <span className="pr-4 break-words">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#F97316] transition-transform duration-300 shrink-0 ${isFaqOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isFaqOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-[#163B65]/5 bg-[#F5F2EC]/10"
                      >
                        <p className="p-5 text-xs sm:text-sm text-[#475569] font-normal leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: FINAL INVITATION ================= */}
      <section className="bg-[#163B65] text-[#FFFFFF] py-20 relative overflow-hidden border-none rounded-none">
        {/* Subtle Decorative Pattern Layer */}
        <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[15vw] tracking-widest text-[#FFFFFF]">
          CRAFT
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
              Join Our Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-none">
              Your Future Starts With One Step.
            </h2>
            <p className="text-[#FFFFFF]/70 text-xs sm:text-sm font-normal max-w-md mx-auto leading-relaxed pt-1">
              Whether you are mapping your initial internships or looking to
              scale proven storefront enterprise talent, we want to hear your
              complete story.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-[#F97316] text-[#FFFFFF] hover:bg-[#E26613] border border-[#F97316] font-bold">
              Apply Now
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 hover:border-[#FFFFFF] transition-all">
              Talk To Recruitment
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
