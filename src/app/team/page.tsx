import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  LineChart,
  Award,
} from "lucide-react";
import {
  HERO_METRICS,
  FOUNDERS,
  LEADERSHIP_TEAM,
  CULTURE_ITEMS,
  OPERATIONAL_WINGS,
} from "@/features/team/teamData";
import LeadershipGrid from "@/features/team/LeadershipGrid";
import BehindTheStores from "@/features/team/BehindTheStores";

export const metadata: Metadata = {
  title: "Leadership & Retail Excellence Teams | Smart Shopping Group",
  description:
    "Meet the visionaries, management leaders, and store operational teams powering North India's premier high-scale fashion franchise network since 2009.",
  keywords: [
    "Retail Leadership North India",
    "Fashion Franchise Executive Team",
    "Smart Shopping Directors",
    "Visual Merchandising Managers India",
  ],
};

export default function PremiumTeamPage() {
  return (
    <div className="bg-white text-[#0f172a] font-sans selection:bg-[#f97316] selection:text-white antialiased">
      {/* ===== GLOBAL CUSTOM NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] px-6 lg:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#163b65] flex items-center justify-center rounded-sm text-white font-serif font-bold text-lg">
            S
          </div>
          <span className="font-serif tracking-widest text-[#0f172a] font-bold text-lg uppercase">
            Smart Shopping
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#"
            className="font-luxury-nav text-[#0f172a] hover:text-[#f97316] transition-colors focus-luxury"
          >
            The Group
          </Link>
          <Link
            href="#"
            className="font-luxury-nav text-[#163b65] font-semibold border-b border-[#163b65] pb-1 focus-luxury"
          >
            Our Leadership
          </Link>
          <Link
            href="#"
            className="font-luxury-nav text-[#0f172a] hover:text-[#f97316] transition-colors focus-luxury"
          >
            Showrooms
          </Link>
          <Link
            href="#"
            className="font-luxury-nav text-[#0f172a] hover:text-[#f97316] transition-colors focus-luxury"
          >
            Impact
          </Link>
        </div>
        <Link
          href="#join"
          className="font-luxury-nav bg-[#163b65] hover:bg-[#214f84] text-white px-5 py-2.5 rounded-none text-xs transition-all tracking-wider focus-luxury"
        >
          Partner With Us
        </Link>
      </nav>

      {/* ==========================================
          SECTION 1: LEADERSHIP HERO
          ========================================== */}
      <section className="relative overflow-hidden pt-12 lg:pt-24 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-luxury-meta font-bold text-[#f97316] tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              OUR PEOPLE
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#163b65] leading-[1.15]">
              Meet the People <br />
              Behind <span className="italic font-normal">Smart Shopping</span>
            </h1>
            <p className="text-[#475569] text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Passionate leaders, retail experts, and dedicated operation teams
              driving premium fashion excellence across North India since 2009.
              We turn spatial square-footage into regional landmarks.
            </p>
            <div className="pt-4">
              <Link
                href="#leadership-team"
                className="inline-flex items-center gap-3 bg-[#163b65] hover:bg-[#214f84] text-white font-luxury-nav text-xs tracking-widest px-8 py-4 transition-all duration-300 transform shadow-md"
              >
                Meet Corporate Leadership
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Collage Column (Editorial & Multi-layered) */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full mt-8 lg:mt-0">
            {/* Background Accent Geometry */}
            <div className="absolute inset-y-12 right-0 left-12 bg-[#f8fafc] border border-[#e2e8f0] -z-10 rounded-lg" />

            {/* Main Showroom Core Image */}
            <div className="absolute top-0 left-0 w-3/4 h-[70%] overflow-hidden shadow-lg border border-[#e2e8f0]">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Fashion Showroom Operations"
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Overlay Executive Portrait */}
            <div className="absolute bottom-4 right-0 w-3/5 h-[65%] overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Retail Operations Strategy Session"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163b65]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[10px] font-luxury-meta tracking-wider opacity-90">
                  Chandigarh Hub
                </p>
                <p className="font-serif text-sm italic">
                  Daily Alignment Briefings
                </p>
              </div>
            </div>

            {/* Small Detail Floating Grid Unit */}
            <div className="absolute bottom-12 left-6 bg-white p-4 border border-[#e2e8f0] shadow-md max-w-[160px] hidden sm:block">
              <p className="text-xs text-[#475569] font-medium leading-tight">
                Syncing 27+ flagship locations flawlessly.
              </p>
            </div>
          </div>
        </div>

        {/* ===== PREMIUM HORIZONTAL METRICS ROW ===== */}
        <div className="mt-20 pt-10 border-t border-[#e2e8f0]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-left">
            {HERO_METRICS.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#163b65] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs font-luxury-meta font-medium tracking-widest text-[#475569] uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: FOUNDERS SECTION (MAGAZINE STYLE)
          ========================================== */}
      <section className="bg-[#f8fafc] py-20 lg:py-28 px-6 lg:px-16 border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
              FOUNDER SPOTLIGHT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163b65] tracking-tight">
              The Architecture of Our Vision
            </h2>
            <div className="w-16 h-[2px] bg-[#f97316] mt-4" />
          </div>

          <div className="space-y-24">
            {FOUNDERS.map((founder, index) => (
              <div
                key={founder.id}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-start`}
              >
                {/* Founder Large Portrait Container */}
                <div className="w-full lg:w-5/12 group relative">
                  <div className="absolute inset-4 border border-white/40 z-10 pointer-events-none" />
                  <div className="overflow-hidden aspect-[4/5] bg-[#cbd5e1] border border-[#e2e8f0]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover contrast-[1.02] filter transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Fine Print Captions */}
                  <div className="mt-4 flex justify-between items-center px-1">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#0f172a]">
                        {founder.name}
                      </h4>
                      <p className="text-xs text-[#f97316] font-luxury-meta tracking-wider mt-0.5">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Founder Story Editorial Column */}
                <div className="w-full lg:w-7/12 space-y-6 pt-2">
                  <div className="font-serif text-xl sm:text-2xl text-[#163b65] italic leading-relaxed text-left border-l-2 border-[#163b65] pl-6 py-1">
                    "{founder.philosophy}"
                  </div>

                  <div className="space-y-4 text-[#475569] text-base font-light leading-relaxed text-left">
                    {founder.story.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="bg-white p-6 border border-[#e2e8f0] space-y-2 mt-8 shadow-sm">
                    <span className="text-[10px] font-luxury-meta text-[#94a3b8] font-bold block">
                      STRATEGIC MANDATE
                    </span>
                    <p className="text-xs text-[#0f172a] font-medium leading-relaxed">
                      {founder.signatureQuote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: LEADERSHIP TEAM (INTERACTIVE GRID)
          ========================================== */}
      <section
        id="leadership-team"
        className="py-20 lg:py-28 px-6 lg:px-16 max-w-7xl mx-auto"
      >
        <LeadershipGrid team={LEADERSHIP_TEAM} />
      </section>

      {/* ==========================================
          SECTION 4: PEOPLE & CULTURE
          ========================================== */}
      <section className="bg-white py-20 lg:py-24 px-6 lg:px-16 border-t border-[#e2e8f0] max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
            ORGANIZATIONAL ECOSYSTEM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#163b65] tracking-tight">
            Engineered for Continuous Brilliance
          </h2>
          <p className="text-[#475569] text-sm font-light max-w-xl mx-auto">
            We bypass outdated traditional hierarchies. We foster an atmospheric
            retail paradigm backed by highly specialized operational pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CULTURE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-8 bg-white border border-[#e2e8f0] hover:border-[#163b65] transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden"
            >
              {/* Decorative faint pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f8fafc] group-hover:bg-[#f97316]/5 transition-colors -z-10 rounded-bl-full" />

              <div className="space-y-4 text-left">
                <span className="text-[10px] font-luxury-meta font-bold px-2 py-1 bg-[#f8fafc] text-[#f97316] border border-[#e2e8f0] inline-block">
                  {item.accentPhrase}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0f172a] group-hover:text-[#163b65] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-xs font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] font-luxury-meta text-[#94a3b8] group-hover:text-[#163b65] transition-colors">
                <span>SYSTEM MATRICULATED</span>
                <span>// 01</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 5: RETAIL IMPACT (ANNUAL REPORT STYLE)
          ========================================== */}
      <section className="bg-[#163b65] text-white py-20 lg:py-24 px-6 lg:px-16 relative overflow-hidden">
        {/* Subtle geometric overlay line */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
              AUDITED EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              The Real Numbers Behind Our Scale
            </h2>
            <div className="w-12 h-[2px] bg-[#f97316] pt-0" />
            <p className="text-[#cbd5e1] text-xs font-light leading-relaxed pt-2">
              Extracted from our annual infrastructure ledger. Our metrics
              emphasize infrastructural continuity and elite retention ratios
              across all North Indian operational corridors.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
            <div className="p-6 border-l border-white/20 space-y-2 text-left">
              <div className="flex items-center gap-3 text-[#f97316]">
                <Users className="w-5 h-5" />
                <span className="font-luxury-meta tracking-widest text-[10px] text-white/70">
                  HUMAN CAPITAL CAPITALIZATION
                </span>
              </div>
              <p className="font-serif text-4xl font-light">
                200+ Team Members
              </p>
              <p className="text-white/60 text-xs font-light">
                Orchestrated across corporate hubs and high-street luxury
                multi-brand stores.
              </p>
            </div>

            <div className="p-6 border-l border-white/20 space-y-2 text-left">
              <div className="flex items-center gap-3 text-[#f97316]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-luxury-meta tracking-widest text-[10px] text-white/70">
                  LEADERSHIP DISTRIBUTION
                </span>
              </div>
              <p className="font-serif text-4xl font-light">
                27+ Store Leaders
              </p>
              <p className="text-white/60 text-xs font-light">
                Commanding complex operational configurations and luxury partner
                regulations daily.
              </p>
            </div>

            <div className="p-6 border-l border-white/20 space-y-2 text-left">
              <div className="flex items-center gap-3 text-[#f97316]">
                <LineChart className="w-5 h-5" />
                <span className="font-luxury-meta tracking-widest text-[10px] text-white/70">
                  STABILITY BENCHMARK
                </span>
              </div>
              <p className="font-serif text-4xl font-light">
                98% Retention Rate
              </p>
              <p className="text-white/60 text-xs font-light">
                An industry-leading loyalty paradigm cultivated via clear
                internal career mapping.
              </p>
            </div>

            <div className="p-6 border-l border-white/20 space-y-2 text-left">
              <div className="flex items-center gap-3 text-[#f97316]">
                <Award className="w-5 h-5" />
                <span className="font-luxury-meta tracking-widest text-[10px] text-white/70">
                  ENTERPRISE MATURITY
                </span>
              </div>
              <p className="font-serif text-4xl font-light">15+ Years</p>
              <p className="text-white/60 text-xs font-light">
                Fostering deep-set distribution networks and premier mall
                real-estate alliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: BEHIND THE STORES (INTERACTIVE REAL-TIME TABS)
          ========================================== */}
      <section className="bg-[#f8fafc] py-20 lg:py-28 px-6 lg:px-16 border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto">
          <BehindTheStores wings={OPERATIONAL_WINGS} />
        </div>
      </section>

      {/* ==========================================
          SECTION 7: JOIN THE JOURNEY CTA
          ========================================== */}
      <section
        id="join"
        className="bg-[#163b65] text-white py-24 px-6 lg:px-16 text-center relative overflow-hidden"
      >
        {/* Accent visual background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_45%)]" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest block">
            ASPIRATIONAL ROLLOUTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.15]">
            Grow With One of North India's Leading Fashion Retail Groups
          </h2>
          <p className="text-[#cbd5e1] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are passionate about premium fashion curation,
            architectural showrooms, deep data asset operations, or visionary
            team management, there is a path designed for your long-term
            evolution.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white font-luxury-nav text-xs tracking-widest px-8 py-4 transition-all duration-300 shadow-lg"
            >
              Explore Open Vocations
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/30 text-white font-luxury-nav text-xs tracking-widest px-8 py-4 transition-all duration-300"
            >
              Contact Corporate Office
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          GLOBAL PREMIUM FOOTER
          ========================================== */}
      <footer className="bg-[#0f2744] text-[#cbd5e1] border-t border-white/10 px-6 lg:px-16 py-16 text-xs font-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-serif tracking-widest font-bold text-base uppercase">
              SMART SHOPPING FRANCHISE NETWORK
            </div>
            <p className="max-w-sm text-white/60 leading-relaxed">
              Operating enterprise luxury multi-brand apparel environments.
              Authorized partners for leading global fashion architectures
              across Punjab, Haryana, Himachal Pradesh, and Delhi NCR.
            </p>
            <p className="text-[10px] text-white/40 pt-4">
              © 2026 Smart Shopping Retail Group Ltd. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="font-luxury-meta text-white font-bold text-[11px] tracking-widest">
              REGIONAL CORPORATE HUBS
            </h5>
            <p className="text-white/70 leading-relaxed">
              Plot 44, Industrial Area Phase 1,
              <br />
              Chandigarh, UT — 160002
            </p>
            <p className="text-white/50">Telephone: +91 172 4600120</p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-luxury-meta text-white font-bold text-[11px] tracking-widest">
              GOVERNANCE & COMPLIANCE
            </h5>
            <p className="text-white/70 leading-relaxed">
              All infrastructure pipelines, brand allocations, and internal
              employee frameworks comply strictly with retail audit structures
              established by our corporate board.
            </p>
            <div className="pt-2 text-[#f97316] font-luxury-meta text-[10px] tracking-wider font-bold">
              CIN: L52100CH2009PLC031445
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
