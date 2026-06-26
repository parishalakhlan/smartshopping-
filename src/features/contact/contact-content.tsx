"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  MessageSquare,
  Store,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Compass,
  Info,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ==========================================
// TYPES & DATA SCHEMA MATRICES
// ==========================================

interface PathOption {
  id: string;
  title: string;
  oneLiner: string;
  contactPerson: string;
  method: string;
  responseTime: string;
  ctaText: string;
}

interface ConnectTile {
  id: string;
  channel: string;
  value: string;
  purpose: string;
  availability: string;
  responseTime: string;
  icon: React.ReactNode;
}

interface PartnershipItem {
  id: string;
  title: string;
  description: string;
  focus: string;
}

interface FAQItem {
  id: string;
  question: string;
  preview: string;
  answer: string;
}

// ==========================================
// DATA ARCHITECTURE (2026 CONCIERGE MATRIX)
// ==========================================

const pathsData: PathOption[] = [
  {
    id: "path-1",
    title: "General Enquiry",
    oneLiner:
      "Curious about a brand, collection status, or general operations?",
    contactPerson: "Aanchal Sharma (Guest Relationship Lead)",
    method: "Direct WhatsApp Ecosystem Sync",
    responseTime: "Within 15 Minutes",
    ctaText: "Open Chat Line",
  },
  {
    id: "path-2",
    title: "Store Assistance",
    oneLiner:
      "Need specialized wardrobe curation or direct stock verification?",
    contactPerson: "Vikramjit Singh (North Regional Director)",
    method: "Direct Flagship Concierge Hotlines",
    responseTime: "Instant During Floor Hours",
    ctaText: "Call Concierge Desk",
  },
  {
    id: "path-3",
    title: "Business Partnerships",
    oneLiner: "Propose high-end premium catalog brand distribution agreements.",
    contactPerson: "Meera Oberoi (Chief Growth Officer)",
    method: "Encrypted Secure Corporate Portal Link",
    responseTime: "Within 24 Business Hours",
    ctaText: "Initialize Briefing",
  },
  {
    id: "path-4",
    title: "Careers Discovery",
    oneLiner: "Inquire about strategic operational trainee positions directly.",
    contactPerson: "Rohan Malhotra (Talent Acquisition Lead)",
    method: "Dedicated Fast-Track Digital Pipeline",
    responseTime: "Within 48 Hours",
    ctaText: "View Track Intake",
  },
  {
    id: "path-5",
    title: "Media & Marketing",
    oneLiner:
      "Coordinate premium luxury lifestyle editorial or dynamic campaigns.",
    contactPerson: "Divya Kapoor (Brand Communication Specialist)",
    method: "Dedicated Pressroom Communications Matrix",
    responseTime: "Same Business Day",
    ctaText: "Request Asset Kits",
  },
  {
    id: "path-6",
    title: "Franchise Expansion",
    oneLiner: "Propose luxury tier-1 real estate locations for our footprint.",
    contactPerson: "Kabir Mehta (Ecosystem Infrastructure Architect)",
    method: "Structured Real Estate Viability Portal",
    responseTime: "Within 3 Business Days",
    ctaText: "Submit Asset Coordinates",
  },
  {
    id: "path-7",
    title: "Customer Feedback",
    oneLiner: "Share critical floor reflections or luxury service reviews.",
    contactPerson: "Ananya Sharma (Executive Quality Assurance Director)",
    method: "Direct Escalated Executive Desk Link",
    responseTime: "Within 2 Hours Reviewed Personally",
    ctaText: "Log Direct Feedback",
  },
];

const connectTiles: ConnectTile[] = [
  {
    id: "conn-1",
    channel: "WhatsApp Concierge",
    value: "+91 98765 43210",
    purpose: "Instant Curation & Stock Support",
    availability: "Floor Hours Active",
    responseTime: "< 10 Mins",
    icon: <MessageSquare className="w-4 h-4" />,
  },
  {
    id: "conn-2",
    channel: "Primary Phone Desk",
    value: "1800 123 4567",
    purpose: "Direct Store Connectivity",
    availability: "10:00 AM — 08:30 PM",
    responseTime: "Immediate",
    icon: <Phone className="w-4 h-4" />,
  },
  {
    id: "conn-3",
    channel: "Direct Email Line",
    value: "concierge@smartshopping.in",
    purpose: "Detailed Communications & Requests",
    availability: "Inboxes Monitored 24/7",
    responseTime: "< 4 Hours",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    id: "conn-4",
    channel: "Instagram DM Desk",
    value: "@SmartShoppingOfficial",
    purpose: "Visual Inquiries & Label Drops",
    availability: "Digital Studio Active",
    responseTime: "< 30 Mins",
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

const partnershipsData: PartnershipItem[] = [
  {
    id: "part-1",
    title: "Retail Collaborations",
    description:
      "Inject seasonal multi-brand concepts directly into our premium active floor space setups.",
    focus: "Acreage footprint visibility maps",
  },
  {
    id: "part-2",
    title: "Brand Partnerships",
    description:
      "Establish exclusive regional distribution partnerships covering Northern Indian luxury capitals.",
    focus: "Premium visual exclusivity loops",
  },
  {
    id: "part-3",
    title: "Media Layout Curation",
    description:
      "Co-author luxury fashion lifestyle content assets utilizing our spatial architecture backdrops.",
    focus: "Premium set availability models",
  },
  {
    id: "part-4",
    title: "Vendor Onboarding Ecosystem",
    description:
      "Integrate premium sustainable tailoring fabrics or high-end apparel supplies.",
    focus: "Quality assurance parameter controls",
  },
];

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Which premium brands are currently available on the floors?",
    preview: "Explore curated international and custom labels...",
    answer:
      "We feature a dynamically changing catalog of premium lifestyle, luxury apparel, and bespoke tailoring houses. For real-time physical store stock access metrics, connect directly with our Store Assistance Path.",
  },
  {
    id: "faq-2",
    question: "How do I securely locate the absolute closest flagship store?",
    preview: "Find our spaces across Chandigarh, New Delhi, and more...",
    answer:
      "Our signature environments are strategically positioned in elite luxury high-streets and premium lifestyle malls. Click 'Find A Store' in our main hero section to immediately parse directions.",
  },
  {
    id: "faq-3",
    question: "Can I apply for unadvertised management trainee pathways?",
    preview: "We welcome direct intuitive human drive...",
    answer:
      "Absolutely. We routinely circumvent standard recruitment blocks for candidates showing exceptional customer empathy and structural focus. Use the Progressive Form below to introduce yourself.",
  },
  {
    id: "faq-4",
    question: "How fast will the executive concierge desk review my brief?",
    preview: "Every channel runs tight performance SLA parameters...",
    answer:
      "General communication loops are answered in under 15 minutes via our WhatsApp desk. Advanced institutional vendor pitches are audited by corresponding business chiefs within 24–48 hours maximum.",
  },
];

// ==========================================
// REUSABLE PREMIUM UTILITY SUB-COMPONENTS
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

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`rounded-none uppercase font-medium text-xs tracking-widest transition-colors duration-300 relative overflow-hidden group ${className}`}
    >
      {children}
    </motion.button>
  );
};

const FloatingSectionLabel = ({ num, text }: { num: string; text: string }) => (
  <div className="flex items-center space-x-3 mb-10 border-b border-[#163B65]/10 pb-4">
    <span className="font-mono text-xs font-bold text-[#F97316] tracking-wider">
      [{num}]
    </span>
    <span className="uppercase text-[10px] tracking-[0.25em] font-bold text-[#163B65]/60">
      {text}
    </span>
  </div>
);

// ==========================================
// CORE EXPERIENCE PAGE COMPONENT
// ==========================================

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom Interaction States
  const [activePathId, setActivePathId] = useState<string | null>(null);
  const [activePartnerId, setActivePartnerId] = useState<string | null>(
    "part-1",
  );
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // Progressive Form Logic Engine
  const [formStep, setFormStep] = useState<number>(1);
  const [roleType, setRoleType] = useState<string>("");
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  // Parallax Calculations via UseScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"]);

  const currentDayStr = (() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  })();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMessage.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#FFFFFF] text-[#163B65] font-sans antialiased selection:bg-[#F97316]/10 selection:text-[#F97316] overflow-x-hidden"
    >
      {/* ================= SECTION 1: EDITORIAL HERO ================= */}
      <section className="relative w-full h-[78vh] min-h-[620px] bg-[#F5F2EC]/30 flex items-center overflow-hidden border-b border-[#163B65]/10">
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1800"
            alt="Smart Shopping Premium Architectural Retail Space Layout"
            fill
            priority
            className="object-cover opacity-[0.12] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] text-[#F97316] font-bold tracking-[0.3em] uppercase block"
                >
                  Smart Shopping Concierge Gateway
                </motion.span>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#163B65] leading-[1.05]"
                >
                  Let&apos;s Start A <br />
                  <span className="italic font-normal text-[#F97316]">
                    Conversation.
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#475569] text-xs sm:text-sm font-normal max-w-xl leading-relaxed"
              >
                Whether you&apos;re planning a visit, exploring partnerships,
                looking for career opportunities or simply having a question,
                we&apos;re here to help.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <MagneticButton
                  onClick={() => scrollToSection("paths")}
                  className="px-8 py-4 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] border border-[#163B65] flex items-center gap-2"
                >
                  Talk With Us{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => scrollToSection("visit-us")}
                  className="px-8 py-4 bg-transparent text-[#163B65] border border-[#163B65]/20 hover:border-[#163B65]"
                >
                  Find A Store
                </MagneticButton>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block relative h-[480px] w-full">
              <div className="absolute right-0 top-0 w-[90%] h-[400px] bg-[#F5F2EC] overflow-hidden border border-[#163B65]/5 p-2 shadow-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800"
                    alt="Concierge Specialist Assisting Guest with Premium Retail Apparel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-0 bg-[#FFFFFF] border border-[#163B65]/10 p-4 max-w-[220px] text-left shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#F97316] block mb-1">
                  Human Scale Matrix
                </span>
                <p className="text-[11px] font-medium text-[#163B65] leading-snug">
                  Zero automated voicemail obstacles. Genuine team interaction
                  loops only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CHOOSE YOUR PATH ================= */}
      <section
        id="paths"
        className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FloatingSectionLabel num="01" text="Intent Routing Architecture" />

          <div className="text-left space-y-3 mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#163B65]">
              Select Your Target Need
            </h2>
            <p className="text-[#475569] text-xs max-w-md leading-relaxed">
              Identify your purpose below. We expose direct dedicated channels
              to save your personal time, avoiding traditional multi-layered
              support forms.
            </p>
          </div>

          <div className="border-t border-[#163B65]/10 divide-y divide-[#163B65]/10">
            {pathsData.map((path) => {
              const isSelected = activePathId === path.id;
              return (
                <div
                  key={path.id}
                  className="w-full text-left transition-all duration-300"
                >
                  <button
                    onClick={() => setActivePathId(isSelected ? null : path.id)}
                    className="w-full py-6 flex items-center justify-between group focus:outline-none select-none text-left"
                  >
                    <div className="max-w-2xl pr-4">
                      <h3 className="font-serif text-lg font-bold text-[#163B65] group-hover:text-[#F97316] transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-[#475569] text-xs font-normal mt-0.5 break-words">
                        {path.oneLiner}
                      </p>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border border-[#163B65]/10 group-hover:border-[#163B65]/40 transition-colors shrink-0">
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-[#163B65] transition-transform duration-300 ${isSelected ? "rotate-90 text-[#F97316]" : ""}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#F5F2EC]/40 border-l-2 border-[#F97316]"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-xs items-center">
                          <div className="md:col-span-8 space-y-2">
                            <div>
                              <span className="text-[10px] text-[#475569] uppercase tracking-wider block">
                                Assigned Gatekeeper:
                              </span>
                              <span className="font-serif font-bold text-[#163B65] text-sm">
                                {path.contactPerson}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-1">
                              <div>
                                <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                  Preferred Pipeline:
                                </span>
                                <span className="font-medium text-[#163B65]">
                                  {path.method}
                                </span>
                              </div>
                              <div>
                                <span className="text-[9px] text-[#475569]/80 uppercase tracking-wider block">
                                  Estimated Turnaround:
                                </span>
                                <span className="font-mono text-[#F97316] font-bold">
                                  {path.responseTime}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-4 flex md:justify-end">
                            <MagneticButton className="px-5 py-3 bg-[#163B65] text-[#FFFFFF] text-[10px] hover:bg-[#112F52] flex items-center gap-1.5">
                              {path.ctaText}{" "}
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                            </MagneticButton>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: QUICK CONNECT TILE BLOCKS ================= */}
      <section className="py-24 bg-[#F5F2EC]/30 border-b border-[#163B65]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingSectionLabel num="02" text="Immediate Connection Channels" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 text-left space-y-3">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#163B65]">
                Direct Editorial Communication Tiles
              </h2>
              <p className="text-[#475569] text-xs leading-relaxed max-w-sm">
                Skip layout hierarchies entirely. Use these secure digital
                parameters to drop raw media assets, design briefs, or customer
                voice data straight to relevant store monitors.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {connectTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="bg-[#FFFFFF] border border-[#163B65]/10 p-5 flex flex-col justify-between h-[180px] hover:shadow-md hover:border-[#163B65]/30 transition-all duration-300 relative group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-[#475569]/60 font-mono tracking-wider block">
                        Channel Layer
                      </span>
                      <h3 className="font-serif text-sm font-bold text-[#163B65] flex items-center gap-1.5">
                        <span className="text-[#F97316]">{tile.icon}</span>{" "}
                        {tile.channel}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F5F2EC] text-[#163B65] border border-[#163B65]/5">
                      {tile.responseTime}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-serif font-bold text-[#163B65] break-all select-all">
                      {tile.value}
                    </p>
                    <p className="text-[#475569] text-[11px] font-normal leading-tight">
                      {tile.purpose}
                    </p>
                  </div>

                  <div className="border-t border-[#163B65]/5 pt-2 flex items-center justify-between text-[9px] text-[#475569]/60 font-bold uppercase tracking-wider">
                    <span>{tile.availability}</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#F97316] transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: VISIT US SHOWCASE ================= */}
      <section
        id="visit-us"
        className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingSectionLabel num="03" text="Spatial Headquarters Showcase" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold text-[#F97316] uppercase tracking-widest block">
                  Corporate Hub Location
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#163B65]">
                  The Strategy Studio
                </h2>
                <p className="text-[#475569] text-xs font-normal leading-relaxed">
                  Our head office serves as the central design room where
                  collection trajectories are audited, brand alignments are
                  signed, and spatial innovations are developed.
                </p>
              </div>

              <div className="space-y-4 border-t border-[#163B65]/10 pt-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#163B65] uppercase tracking-wider text-[10px] block">
                      Coordinates
                    </span>
                    <p className="text-[#475569] font-medium leading-relaxed">
                      Plot 42, Industrial & Business Park, Phase 1, Chandigarh,
                      160002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#163B65]/60 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#163B65] uppercase tracking-wider text-[10px] block">
                      Nearby Landmarks & Transit
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      Adjacent to the Elante Premium Retail Hub. Ample dedicated
                      multi-level basement parking space is fully guaranteed
                      on-site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <MagneticButton className="px-6 py-3.5 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] flex items-center gap-2">
                  Open In Google Maps{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[420px] w-full border border-[#163B65]/10 p-2 bg-[#F5F2EC]/30">
              <div className="relative w-full h-full bg-[#E5E1D8] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Smart Shopping Interior Operations Design Conference Environment"
                  fill
                  className="object-cover opacity-40 grayscale"
                />
                <div className="absolute inset-0 bg-[#163B65]/5 mix-blend-multiply" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-1 z-20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F97316]"></span>
                  </span>
                  <div className="bg-[#163B65] text-[#FFFFFF] text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 shadow-md">
                    HQ CHANDIGARH
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF] p-3 border border-[#163B65]/10 text-left flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Info className="w-3.5 h-3.5 text-[#F97316]" />
                    <span className="text-[10px] text-[#475569] font-medium">
                      Flagship stores open standard floor hours across key
                      regional hubs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: BUSINESS HOURS GRID ================= */}
      <section className="py-24 bg-[#F5F2EC]/20 border-b border-[#163B65]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FloatingSectionLabel num="04" text="Ecosystem Temporal Grid" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
            <div className="md:col-span-5 space-y-2">
              <h2 className="font-serif text-2xl font-bold text-[#163B65]">
                Operational Synchronization
              </h2>
              <p className="text-[#475569] text-xs leading-relaxed">
                Our channels adhere to strict local parameters. The dynamic
                block indicators verify real-time baseline availability.
              </p>
            </div>

            <div className="md:col-span-7 space-y-3 font-mono text-xs text-[#163B65]">
              <div
                className={`p-4 border flex items-center justify-between transition-all rounded-none ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(currentDayStr) ? "bg-[#FFFFFF] border-[#163B65] shadow-sm font-bold" : "bg-[#FFFFFF]/50 border-[#163B65]/10"}`}
              >
                <div className="flex items-center gap-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ].includes(currentDayStr) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                  )}
                  <span>Weekdays (Mon — Fri)</span>
                </div>
                <span className="font-sans text-xs">
                  10:00 AM — 06:30 PM IST
                </span>
              </div>

              <div
                className={`p-4 border flex items-center justify-between transition-all rounded-none ${["Saturday", "Sunday"].includes(currentDayStr) ? "bg-[#FFFFFF] border-[#163B65] shadow-sm font-bold" : "bg-[#FFFFFF]/50 border-[#163B65]/10"}`}
              >
                <div className="flex items-center gap-2">
                  {["Saturday", "Sunday"].includes(currentDayStr) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                  )}
                  <span>Weekends (Sat — Sun)</span>
                </div>
                <span className="font-sans text-xs">
                  Floor Concierge Only Active
                </span>
              </div>

              <div className="p-3 bg-transparent border border-dashed border-[#163B65]/20 text-[11px] text-[#475569] font-sans flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <p className="leading-normal">
                  <strong>National Holiday Notice Loop:</strong> Core corporate
                  support pipelines pause during gazetted holidays. Direct store
                  operations remain fully operational to serve incoming physical
                  guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: PARTNERSHIP EXPERIENCE PANELS ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FloatingSectionLabel num="05" text="Institutional Collaborations" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 text-left">
            <div className="lg:col-span-6 space-y-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#163B65]">
                Interested In Working Together?
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                We stringently separate consumer inquiries from institutional
                brand developments. Explore our alignment sectors below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {partnershipsData.map((part) => {
              const isPanelSelected = activePartnerId === part.id;
              return (
                <div
                  key={part.id}
                  onClick={() => setActivePartnerId(part.id)}
                  className={`p-6 border transition-all duration-300 cursor-pointer rounded-none relative flex flex-col justify-between h-[200px] ${isPanelSelected ? "bg-[#F5F2EC]/60 border-[#163B65]" : "bg-[#FFFFFF] border-[#163B65]/10 hover:border-[#163B65]/40"}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base font-bold text-[#163B65]">
                        {part.title}
                      </h3>
                      {isPanelSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                      )}
                    </div>
                    <p className="text-[#475569] text-xs font-normal leading-relaxed">
                      {part.description}
                    </p>
                  </div>

                  <div className="border-t border-[#163B65]/10 pt-2 flex items-center justify-between text-[9px] font-mono tracking-wider uppercase text-[#163B65]/60">
                    <span>Audit Factor: {part.focus}</span>
                    {isPanelSelected && (
                      <span className="text-[#F97316] font-sans font-bold">
                        Active Scope
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-4 flex justify-start">
            <MagneticButton
              onClick={() => {
                setRoleType("Brand Labels");
                setFormStep(2);
                scrollToSection("message-engine");
              }}
              className="px-8 py-4 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] flex items-center gap-2"
            >
              Start Partnership Discussion{" "}
              <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: PROGRESSIVE MESSAGE ENGINE FORM ================= */}
      <section
        id="message-engine"
        className="py-24 bg-[#F5F2EC]/30 border-b border-[#163B65]/10"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left">
          <FloatingSectionLabel
            num="06"
            text="Progressive Communication Matrix"
          />

          <div className="space-y-2 mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#163B65]">
              Initialize A Digital Record
            </h2>
            <p className="text-[#475569] text-xs max-w-md leading-relaxed">
              Answer the contextual fields below step-by-step. Our engine shapes
              fields on-the-fly to ensure precise personal handling.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#163B65]/10 p-6 sm:p-10 rounded-none relative">
            <div className="flex items-center space-x-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center space-x-2 flex-grow">
                  <div
                    className={`h-1 flex-grow transition-all duration-300 ${formStep >= s ? "bg-[#163B65]" : "bg-[#163B65]/10"}`}
                  />
                  <span
                    className={`font-mono text-[10px] font-bold ${formStep === s ? "text-[#F97316]" : "text-[#163B65]/40"}`}
                  >
                    0{s}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="text-xs font-bold text-[#163B65] uppercase tracking-wider block">
                      Step 1: Clarify Your Present Identity Profile
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "Customer",
                        "Partner",
                        "Student",
                        "Brand Labels",
                        "Media Outlets",
                        "Other Profile",
                      ].map((role) => (
                        <button
                          type="button"
                          key={role}
                          onClick={() => {
                            setRoleType(role);
                            setFormStep(2);
                          }}
                          className={`p-4 border text-center font-serif text-xs font-bold rounded-none transition-all ${roleType === role ? "bg-[#163B65] border-[#163B65] text-[#FFFFFF]" : "bg-[#FFFFFF] border-[#163B65]/10 text-[#163B65] hover:border-[#163B65]/40"}`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#163B65] uppercase tracking-wider block">
                        Step 2: Core Communication Metrics
                      </label>
                      <span className="text-[10px] bg-[#F5F2EC] text-[#F97316] px-2 py-0.5 font-mono font-bold tracking-tight">
                        Context: {roleType}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[11px] text-[#475569] font-medium block">
                          Your Legal Designation / Name
                        </span>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g., Parisha Lakhlan"
                          className="w-full bg-[#F5F2EC]/50 border border-[#163B65]/10 p-3 text-xs text-[#163B65] focus:outline-none focus:border-[#163B65] rounded-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] text-[#475569] font-medium block">
                          Target Communication Email
                        </span>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-[#F5F2EC]/50 border border-[#163B65]/10 p-3 text-xs text-[#163B65] focus:outline-none focus:border-[#163B65] rounded-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="text-xs text-[#475569] underline font-medium hover:text-[#163B65]"
                      >
                        Modify Profile Type
                      </button>
                      <button
                        type="button"
                        disabled={!formName || !formEmail}
                        onClick={() => setFormStep(3)}
                        className="px-5 py-2.5 bg-[#163B65] text-[#FFFFFF] text-xs uppercase font-mono tracking-wider font-bold disabled:opacity-30 rounded-none"
                      >
                        Proceed To Message
                      </button>
                    </div>
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="text-xs font-bold text-[#163B65] uppercase tracking-wider block">
                      Step 3: State Your Real Inquiry Context
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={`State clearly how the Smart Shopping executive group can optimize your specific objective...`}
                      className="w-full bg-[#F5F2EC]/50 border border-[#163B65]/10 p-3 text-xs text-[#163B65] focus:outline-none focus:border-[#163B65] rounded-none transition-all resize-none"
                    />

                    {formSuccess ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-[#163B65]/5 p-4 border-l-2 border-[#F97316] flex items-start gap-3 mt-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-[#163B65] uppercase tracking-wider">
                            Communication Successfully Registered
                          </h4>
                          <p className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                            The dashboard logs have synced. Our concierge
                            monitoring system expects to ping your target email
                            shortly.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex justify-between items-center pt-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(2)}
                          className="text-xs text-[#475569] underline font-medium hover:text-[#163B65]"
                        >
                          Back to Coordinates
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !formMessage.trim()}
                          className="px-6 py-3 bg-[#F97316] text-[#FFFFFF] text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#E26613] disabled:opacity-30 rounded-none transition-colors"
                        >
                          {isSubmitting
                            ? "Syncing Grid..."
                            : "Transmit Direct Message"}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: COMMON ACCORDION QUESTIONS ================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#163B65]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
              Immediate Hesitation Reducers
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#163B65] tracking-tight">
              Conversational Friction Checks
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {faqData.map((faq) => {
              const isFaqOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-300 rounded-none bg-[#FFFFFF] ${isFaqOpen ? "border-[#163B65]" : "border-[#163B65]/10 hover:border-[#163B65]/30"}`}
                >
                  <button
                    onClick={() => setActiveFaqId(isFaqOpen ? null : faq.id)}
                    className="w-full p-5 flex items-center justify-between text-left font-serif text-sm sm:text-base font-bold text-[#163B65] focus:outline-none select-none"
                  >
                    <span className="pr-4 break-words">{faq.question}</span>
                    <span
                      className={`text-xs font-mono font-bold transition-transform duration-300 ${isFaqOpen ? "text-[#F97316] rotate-45" : "text-[#163B65]/40"}`}
                    >
                      [ + ]
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isFaqOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-[#163B65]/5 bg-[#F5F2EC]/20"
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

      {/* ================= SECTION 9: FINAL INVITATION IN PRIMARY BLUE ================= */}
      <section className="bg-[#163B65] text-[#FFFFFF] py-24 relative overflow-hidden border-none rounded-none">
        <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[18vw] tracking-wider text-[#FFFFFF]">
          HELLO
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
              Open Doors Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
              Every Great Conversation Starts Somewhere.
            </h2>
            <p className="text-[#FFFFFF]/70 text-xs sm:text-sm font-normal max-w-md mx-auto leading-relaxed pt-1">
              We&apos;re always happy to help—whether you&apos;re shopping,
              partnering, building your career or simply saying hello.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <MagneticButton
              onClick={() => scrollToSection("paths")}
              className="w-full sm:w-auto px-8 py-4 bg-[#F97316] text-[#FFFFFF] hover:bg-[#E26613] border border-[#F97316] font-bold shadow-sm"
            >
              Start A Conversation
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection("visit-us")}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 hover:border-[#FFFFFF]"
            >
              Visit A Store
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
