"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  Sparkles,
  Briefcase,
  TrendingUp,
  Award,
  ChevronRight,
  ArrowUpRight,
  Layers,
  Shirt,
  HeartHandshake,
  LineChart,
  MapPin,
  Clock,
} from "lucide-react";

// --- Types & Interfaces ---
interface MetricChip {
  label: string;
  value: string;
}

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface ExperienceCard {
  title: string;
  description: string;
  tag: string;
  bgImageText: string;
}

interface CareerStep {
  role: string;
  stage: string;
  description: string;
}

interface OpenPosition {
  title: string;
  department: string;
  location: string;
  type: string;
}

export default function CareersContent() {
  // --- State for Interactive Timeline Context ---
  const [activeStep, setActiveStep] = useState<number>(1);

  // --- Mock Data Constants (Tailored to North India Fashion Retail) ---
  const metrics: MetricChip[] = [
    { value: "27+", label: "Store Locations" },
    { value: "200+", label: "Team Members" },
    { value: "26", label: "Average Age" },
    { value: "15+", label: "Years Experience" },
  ];

  const benefits: BenefitCard[] = [
    {
      title: "Real Retail Experience",
      description:
        "Work directly inside high-velocity multi-brand fashion storefronts, managing physical luxury spaces and curation layouts.",
      icon: StorefrontIcon,
    },
    {
      title: "Learn From Industry Leaders",
      description:
        "Direct mentorship pipelines from veteran regional managers, visual directors, and retail operations experts.",
      icon: Users,
    },
    {
      title: "Fast Career Growth",
      description:
        "Structured quarterly reviews and rapid internal mobility to transition from operational units to multi-store oversight.",
      icon: TrendingUp,
    },
    {
      title: "International Brand Exposure",
      description:
        "Handle collections, merchandising guidelines, and strict governance benchmarks for globally acclaimed premium fashion labels.",
      icon: Shirt,
    },
    {
      title: "Recognition & Rewards",
      description:
        "Robust monthly incentive frameworks, floor-performance rewards, and celebratory acknowledgments of operational triumph.",
      icon: Award,
    },
    {
      title: "Young & Energetic Culture",
      description:
        "A collaborative, highly expressive workplace with a vibrant ecosystem built by modern professionals averaging 26 years old.",
      icon: Sparkles,
    },
  ];

  const experienceCards: ExperienceCard[] = [
    {
      title: "Retail Operations",
      description:
        "Master the architecture of active multi-brand environments. Learn inventory tracking systems, daily floor parameters, stock logistics, and team synchronization.",
      tag: "OPERATE",
      bgImageText: "Floor Operations & Team Briefings",
    },
    {
      title: "Visual Merchandising",
      description:
        "Synthesize spatial aesthetics with customer psychology. Learn luxury window design, collection composition, lighting orchestration, and architectural ergonomics.",
      tag: "DESIGN",
      bgImageText: "Collection Curation & Spatial Flow",
    },
    {
      title: "Customer Experience",
      description:
        "Cultivate high-touch clienteling methodologies. Refine active listening, wardrobe consultation, luxury brand storytelling, and lifelong retention frameworks.",
      tag: "ENGAGE",
      bgImageText: "Client Consultation & Styling",
    },
    {
      title: "Business Management",
      description:
        "Develop deep cross-functional insight into data-driven retail. Dive into P&L analytics, store conversion matrixes, micro-audits, and local market positioning.",
      tag: "LEAD",
      bgImageText: "Performance Portfolios & Analytics",
    },
  ];

  const journeySteps: CareerStep[] = [
    {
      role: "Intern",
      stage: "01",
      description:
        "Immersive orientation covering brand history, core clienteling, and structural floor mechanics.",
    },
    {
      role: "Associate",
      stage: "02",
      description:
        "Own your designated zone, curate product experiences, and drive floor conversion metrics.",
    },
    {
      role: "Department Lead",
      stage: "03",
      description:
        "Coordinate category allocations, oversee product visual execution, and mentor new floor entrants.",
    },
    {
      role: "Store Manager",
      stage: "04",
      description:
        "Command complete store P&L parameters, visual standardizations, inventory cycles, and team talent development.",
    },
    {
      role: "Area Manager",
      stage: "05",
      description:
        "Orchestrate structural strategies, brand uniformity, and performance milestones across multiple regional hubs.",
    },
    {
      role: "Leadership Team",
      stage: "06",
      description:
        "Shape corporate retail scaling architecture, macro brand acquisitions, and strategic directives from headquarters.",
    },
  ];

  const openPositions: OpenPosition[] = [
    {
      title: "Store Associate",
      department: "Retail Operations",
      location: "Chandigarh (Elante Mall)",
      type: "Full-Time",
    },
    {
      title: "Visual Merchandiser",
      department: "Creative & Design",
      location: "New Delhi (South Ex)",
      type: "Full-Time",
    },
    {
      title: "Store Manager",
      department: "Retail Management",
      location: "Ludhiana (Sarabha Nagar)",
      type: "Full-Time",
    },
    {
      title: "Inventory Coordinator",
      department: "Logistics & Supply Chain",
      location: "Gurugram Hub",
      type: "Full-Time",
    },
    {
      title: "Marketing Executive",
      department: "Brand Strategy",
      location: "Noida HQ",
      type: "Full-Time",
    },
    {
      title: "HR Executive",
      department: "Talent Acquisition",
      location: "New Delhi Regional Office",
      type: "Full-Time",
    },
  ];

  return (
    <div className="bg-white text-text-primary selection:bg-accent/20 selection:text-primary overflow-x-hidden">
      {/* ================= SECTION 1: CAREER HERO ================= */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 border-b border-border-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="font-luxury-meta text-accent inline-block tracking-[0.25em] font-semibold text-xs bg-accent/10 px-3 py-1 rounded-full">
                  Careers at Smart Shopping
                </span>
                <h1 className="font-luxury-heading text-4xl sm:text-5xl lg:text-6xl text-primary font-serif tracking-tight leading-[1.1] text-balance">
                  Build More Than a Job.
                  <br />
                  <span className="text-text-primary lowercase italic font-normal tracking-normal block mt-1">
                    Build a career.
                  </span>
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl font-normal pt-2">
                  Join one of North India's fastest-growing fashion retail
                  groups and gain hands-on experience in fashion retail,
                  customer engagement, operations, leadership, merchandising,
                  and business management.
                </p>
              </div>

              {/* Enhanced Action Layout */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#opportunities"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#163b65] hover:bg-[#214f84] text-white font-medium tracking-wide rounded-md transition-all duration-300 shadow-sm focus-luxury group"
                >
                  Explore Opportunities
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-border-main hover:border-text-primary text-text-primary font-medium tracking-wide rounded-md transition-all duration-300 focus-luxury"
                >
                  Contact HR
                </a>
              </div>

              {/* Premium Metrics Row (Horizontal Elegant Chips) */}
              <div className="pt-10 border-t border-border-main">
                <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-baseline space-x-2">
                      <span className="text-3xl font-serif font-semibold text-primary tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-text-secondary font-medium whitespace-nowrap">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Composition Column (No Office Desks, True Retail Focus) */}
            <div className="lg:col-span-6 relative h-[580px] w-full hidden md:block">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
                {/* Main Large Visual Placeholder Frame */}
                <div className="col-span-8 row-span-8 relative bg-background-secondary border border-border-main rounded-md overflow-hidden shadow-md group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent">
                    <span className="text-xs font-luxury-meta text-accent mb-1 font-semibold tracking-widest">
                      Live Operations
                    </span>
                    <p className="text-white font-serif text-lg tracking-wide">
                      Multi-Brand Store Curation, Chandigarh
                    </p>
                  </div>
                  {/* Real production setup would map Next.js Image here */}
                  <div className="w-full h-full bg-slate-200 mix-blend-multiply opacity-80 flex items-center justify-center text-xs text-text-muted tracking-widest uppercase">
                    Storefront Curation / Team Environment
                  </div>
                </div>

                {/* Accent Stack Image Frame Right */}
                <div className="col-span-4 row-span-5 col-start-9 row-start-2 relative bg-background-secondary border border-border-main rounded-md overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-accent/10" />
                  <div className="w-full h-full bg-slate-300 opacity-60 flex items-center justify-center p-2 text-center text-[10px] text-text-secondary uppercase tracking-wider">
                    Visual Merchandising Sync
                  </div>
                </div>

                {/* Accent Stack Image Frame Bottom */}
                <div className="col-span-5 row-span-4 col-start-3 row-start-9 relative bg-background-secondary border border-border-main rounded-md overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-primary/10" />
                  <div className="w-full h-full bg-slate-400 opacity-70 flex items-center justify-center p-2 text-center text-[10px] text-white uppercase tracking-wider">
                    Morning Operations Briefing
                  </div>
                </div>

                {/* Architectural Grid Element */}
                <div className="col-span-4 row-span-3 col-start-8 row-start-9 border-2 border-dashed border-border-main rounded-md p-4 flex flex-col justify-center items-start space-y-1">
                  <span className="text-xs font-bold text-accent">
                    Tier 2 & 3 Expansion
                  </span>
                  <span className="text-[11px] text-text-secondary leading-tight">
                    Empowering local enterprise talent across regions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY PEOPLE GROW HERE ================= */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-luxury-meta text-accent font-semibold tracking-[0.2em] block">
              The Retail Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary tracking-tight">
              Why Professionals Grow Here
            </h2>
            <p className="text-text-secondary text-base max-w-xl">
              We omit stagnant paths. Our ecosystem is tailored specifically for
              real-world business dominance, dynamic leadership pipelines, and
              retail operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-border-main hover:border-primary/30 p-8 rounded-md shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-background-secondary rounded-md flex items-center justify-center text-primary border border-border-main">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-text-primary tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-border-main/50 flex items-center justify-between text-xs text-text-muted font-medium uppercase tracking-wider">
                    <span>Active Pathway</span>
                    <span className="text-accent">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LEARN • GROW • LEAD ================= */}
      <section className="py-24 bg-white border-b border-border-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex justify-center items-center space-x-3 text-xs font-luxury-meta text-accent font-semibold tracking-[0.3em]">
              <span>LEARN</span>
              <span className="text-border-hover">•</span>
              <span>GROW</span>
              <span className="text-border-hover">•</span>
              <span>LEAD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-primary tracking-tight text-balance">
              From Intern to Industry Professional
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto font-normal">
              Every year students and young professionals join Smart Shopping to
              gain practical experience inside one of North India's leading
              fashion retail groups.
            </p>
          </div>

          {/* Visual Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative h-[420px] bg-background-secondary border border-border-main rounded-md overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-lg"
              >
                {/* Card Editorial Background Texture Mask */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-primary/95 z-10 transition-all duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-slate-200 opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 flex items-center justify-center uppercase tracking-widest text-[9px] text-center px-4">
                  {card.bgImageText}
                </div>

                {/* Top Section */}
                <div className="relative z-20 flex justify-between items-start">
                  <span className="font-luxury-meta text-[11px] font-bold tracking-widest text-accent bg-white px-2 py-0.5 rounded border border-border-main">
                    {card.tag}
                  </span>
                  <span className="text-xs text-text-muted font-mono tracking-widest">
                    [ 0{idx + 1} ]
                  </span>
                </div>

                {/* Bottom Section Stack */}
                <div className="relative z-20 space-y-3 transform transition-transform duration-300">
                  <h3 className="text-xl font-serif font-semibold text-primary group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed opacity-90 group-hover:text-slate-200 transition-colors duration-300">
                    {card.description}
                  </p>
                  <div className="pt-2 flex items-center text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors duration-300">
                    <span>Explore Training Matrix</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CAREER JOURNEY TIMELINE ================= */}
      <section className="py-24 bg-background-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-luxury-meta text-accent font-semibold tracking-[0.2em] block">
              Mobility Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary tracking-tight">
              The Architecture of Progression
            </h2>
            <p className="text-text-secondary text-base max-w-xl">
              We prove that vertical alignment is tangible. Observe the
              functional blueprint tracking your evolution from day-one
              induction to executive operations leadership.
            </p>
          </div>

          {/* Premium Horizontal Interactive Visual Timeline */}
          <div className="relative mt-12">
            {/* Structural Connecting Line */}
            <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-border-main hidden lg:block z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {journeySteps.map((step, index) => {
                const stepNum = index + 1;
                const isCurrent = activeStep === stepNum;

                return (
                  <div
                    key={index}
                    className="space-y-4 cursor-pointer group"
                    onClick={() => setActiveStep(stepNum)}
                  >
                    {/* Step Activation Visual Anchor */}
                    <div className="flex items-center space-x-4 lg:space-x-0 lg:block">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-bold transition-all duration-300 ${
                          isCurrent
                            ? "bg-[#163b65] text-white ring-4 ring-[#163b65]/10 border border-transparent"
                            : "bg-white text-text-muted border border-border-main group-hover:border-primary/50 group-hover:text-primary"
                        }`}
                      >
                        {step.stage}
                      </div>
                      <div className="lg:hidden">
                        <h4 className="font-serif font-semibold text-primary text-lg">
                          {step.role}
                        </h4>
                      </div>
                    </div>

                    {/* Content Component Layer */}
                    <div
                      className={`transition-all duration-300 p-4 lg:p-0 rounded-md lg:rounded-none ${
                        isCurrent
                          ? "bg-white lg:bg-transparent shadow-sm lg:shadow-none border border-border-main lg:border-transparent"
                          : "opacity-80"
                      }`}
                    >
                      <h4 className="font-serif font-semibold text-primary text-lg hidden lg:block tracking-wide">
                        {step.role}
                      </h4>
                      <p className="text-text-secondary text-xs leading-relaxed mt-1 font-normal max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Bottom Decorative Accent Block */}
          <div className="mt-12 bg-white border border-border-main rounded-md p-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <p className="text-xs text-text-secondary font-medium">
                Over <span className="text-primary font-bold">40%</span> of our
                current Department Leads and Store Managers began their tenure
                as entry-level Interns or Associates.
              </p>
            </div>
            <span className="text-[11px] font-luxury-meta text-text-muted tracking-wider">
              Metrics validated for fiscal cycle 2025-2026
            </span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: OPEN OPPORTUNITIES ================= */}
      <section id="opportunities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-4 md:space-y-0">
            <div className="space-y-3">
              <span className="text-xs font-luxury-meta text-accent font-semibold tracking-[0.2em] block">
                Available Assignments
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary tracking-tight">
                Current Open Opportunities
              </h2>
              <p className="text-text-secondary text-base max-w-md font-normal">
                Join our units across high-performing storefronts and premium
                micro-hubs in North India.
              </p>
            </div>
            <div className="inline-flex space-x-2 text-xs font-medium text-text-secondary bg-background-secondary p-1 rounded border border-border-main">
              <span className="px-3 py-1.5 bg-white shadow-sm rounded text-primary font-semibold">
                Active Postings
              </span>
              <span className="px-3 py-1.5 opacity-60">
                Future Pipeline (Q3)
              </span>
            </div>
          </div>

          {/* Premium Opportunity Layout Grid (No Standard Tables) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, idx) => (
              <div
                key={idx}
                className="group border border-border-main hover:border-primary/40 rounded-md p-6 bg-white transition-all duration-300 hover:shadow-md flex flex-col justify-between h-[210px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-medium px-2 py-0.5 bg-background-secondary rounded">
                      {position.department}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-accent" />
                      <span>{position.type}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary tracking-wide mb-2 group-hover:text-accent transition-colors duration-200">
                    {position.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-border-main/60 flex items-center justify-between">
                  <div className="flex items-center text-text-secondary space-x-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-text-muted" />
                    <span>{position.location}</span>
                  </div>
                  <button className="text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-accent flex items-center space-x-1 transition-colors duration-200 focus-luxury">
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: CTA (JOIN THE JOURNEY) ================= */}
      <section
        id="contact"
        className="py-20 bg-[#163b65] text-white relative overflow-hidden"
      >
        {/* Background Visual Accents */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
          <div className="w-full h-full border-l border-dashed border-white flex items-center justify-center text-9xl font-serif font-bold tracking-widest select-none">
            RETAIL
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-[0.25em] block">
              Shape the Future
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-semibold tracking-tight text-white leading-tight">
              Ready To Grow With Us?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Whether you are a student, recent graduate, experienced retail
              expert, or an ambitious leader, Smart Shopping provides the
              pathways to execute at scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-medium tracking-wide rounded-md transition-all duration-300 shadow-md focus-luxury">
              Apply Now
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-transparent border border-slate-400 hover:border-white text-white font-medium tracking-wide rounded-md transition-all duration-300 focus-luxury">
              Contact HR Department
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Inline Specialized SVG Component for Storefront Illustration representation ---
function StorefrontIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M2 7h20" />
      <path d="M10 12h4" />
    </svg>
  );
}
