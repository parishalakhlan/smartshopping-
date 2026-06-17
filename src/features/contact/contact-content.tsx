"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ArrowUpRight,
  Building2,
  Users,
  Sparkles,
  ShieldCheck,
  Handshake,
  Store,
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  Network,
} from "lucide-react";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/features/contact/schema";

export default function ContactContent() {
  const [activePartnership, setActivePartnership] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- Form Brokerage ---
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: "Customer Support",
    },
  });

  const onInquirySubmit = async (data: ContactFormValues) => {
    // Artificial latency mimicking connection to Sanity CMS endpoint/Resend architecture
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setFormSubmitted(true);
    reset();
  };

  // --- Mock Frameworks ---
  const heroMetrics = [
    { label: "Active Stores", value: "27+ Locations" },
    { label: "Curation Tier", value: "8 International Brands" },
    { label: "Floor Count", value: "200+ Team Members" },
    { label: "Heritage", value: "15+ Years Excellence" },
  ];

  const pathways = [
    {
      title: "Customer Support",
      description:
        "Direct assistance regarding multi-brand collection footprints, size reserves, or real-time boutique configurations.",
      actions: [
        "Call Boutique Support",
        "Email Client Relations",
        "Find Nearest Store",
      ],
      icon: Store,
    },
    {
      title: "Business Partnerships",
      description:
        "Strategic joint-ventures, premium institutional alignments, and high-velocity marketing initiatives.",
      actions: ["Contact Business Desk"],
      icon: Handshake,
    },
    {
      title: "Franchise & Expansion",
      description:
        "Landlords, luxury developers, real-estate operators, and tier-2/tier-3 micro-market lease evaluations.",
      actions: ["Contact Real Estate Unit"],
      icon: Building2,
    },
    {
      title: "Careers & Internships",
      description:
        "On-floor structural training, management trainee pathways, and corporate headquarters operations.",
      actions: ["Access Careers Desk"],
      icon: Briefcase,
    },
  ];

  const operationalHours = [
    {
      title: "Boutique Networks",
      time: "10:00 AM – 09:00 PM",
      notes:
        "Operational Monday through Sunday across all premium regional malls.",
    },
    {
      title: "Corporate Headquarters",
      time: "09:30 AM – 06:30 PM",
      notes: "Monday through Saturday. Closed on designated national holidays.",
    },
    {
      title: "Escalated Client Care",
      time: "10:00 AM – 07:00 PM",
      notes:
        "Monitored cross-functionally for store-level execution inquiries.",
    },
  ];

  const partnerships = [
    {
      title: "Brand Collaborations",
      detail:
        "Onboarding tier-1 international or premium domestic apparel labels for exclusive regional franchise management across North India.",
      scope:
        "Direct cross-dock supply chain access & regional marketing scale.",
    },
    {
      title: "Marketing Partnerships",
      detail:
        "Joint initiatives with luxury credit ecosystems, experiential event curators, and high-profile lifestyle platforms.",
      scope:
        "Access to our audited active base of premium consumer portfolios.",
    },
    {
      title: "Commercial Leasing",
      detail:
        "Submitting retail space specs in high-footfall lifestyle avenues, malls, or high-street junctions across Tier 2 / 3 capitals.",
      scope:
        "Minimum 3,500 sq.ft clear carpet requirements with premium frontage parameters.",
    },
    {
      title: "Vendor Opportunities",
      detail:
        "Sourcing certified store fixture fabricators, architectural lighting engineering teams, and premium eco-packaging designers.",
      scope:
        "Strict adherence to standardized international visual merchandising blueprints.",
    },
    {
      title: "Retail Technology Solutions",
      detail:
        "Integrating real-time multi-location inventory platforms, predictive AI data analysis, or omni-channel loyalty software.",
      scope: "Compliance with enterprise data security frameworks.",
    },
  ];

  const cities = [
    "Chandigarh",
    "New Delhi",
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Gurugram",
    "Noida",
    "Patiala",
    "Dehradun",
    "Lucknow",
    "Jaipur",
    "Jammu",
  ];

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#F97316]/10 selection:text-[#163B65] overflow-x-hidden">
      {/* ================= SECTION 1: CONTACT HERO ================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-luxury-meta text-[#F97316] inline-block tracking-[0.25em] font-semibold text-xs bg-[#F97316]/10 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="font-luxury-heading text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-serif tracking-tight leading-[1.1]">
              Let's Start a<br />
              <span className="text-[#0F172A] lowercase italic font-normal tracking-normal block mt-1">
                conversation.
              </span>
            </h1>
            <p className="text-[#475569] text-lg leading-relaxed max-w-2xl font-normal pt-2">
              Whether you're a customer, business partner, landlord, vendor, job
              seeker, or simply want to learn more about Smart Shopping, we're
              here to help.
            </p>
          </div>

          {/* Premium Elegant Horizontal Metric Chips */}
          <div className="pt-8 border-t border-[#E2E8F0] max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-1 bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-md"
                >
                  <span className="text-xl font-serif font-semibold text-[#163B65]">
                    {m.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-medium">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CHOOSE HOW YOU'D LIKE TO CONNECT ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-xs font-luxury-meta text-[#F97316] font-semibold tracking-[0.2em] block">
              Operational Hubs
            </span>
            <h2 className="text-3xl font-serif font-semibold text-[#163B65] tracking-tight">
              Structured Connection Pathways
            </h2>
            <p className="text-[#475569] text-sm">
              Select a designated corporate division to route your operational
              requirement without passing gatekeepers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((path, idx) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E2E8F0] hover:border-[#163B65]/30 p-8 rounded-md shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#F8FAFC] rounded-md flex items-center justify-center text-[#163B65] border border-[#E2E8F0]">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-[#0F172A] tracking-wide">
                      {path.title}
                    </h3>
                    <p className="text-[#475569] text-xs leading-relaxed font-normal">
                      {path.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E2E8F0]/60 space-y-2">
                    {path.actions.map((act, aIdx) => (
                      <button
                        key={aIdx}
                        className="w-full text-left flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#163B65] hover:text-[#F97316] py-2 transition-colors duration-200 group focus-luxury"
                      >
                        <span>{act}</span>
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 & 4: INFO HUB & BUSINESS HOURS ================= */}
      <section className="py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Information Hub */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-luxury-meta text-[#F97316] font-semibold tracking-[0.2em] block">
                  Corporate Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#163B65]">
                  Contact Information Hub
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-[#E2E8F0] p-6 rounded-md space-y-3">
                  <div className="flex items-center space-x-2 text-[#F97316]">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Direct Communication
                    </span>
                  </div>
                  <p className="text-[#0F172A] text-base font-medium font-serif tracking-wide">
                    +91 172 5092100
                  </p>
                  <p className="text-[#475569] text-xs leading-tight">
                    General reception desk. Routed automatically during
                    operational cycles.
                  </p>
                </div>

                <div className="border border-[#E2E8F0] p-6 rounded-md space-y-3">
                  <div className="flex items-center space-x-2 text-[#F97316]">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Digital Inbound
                    </span>
                  </div>
                  <p className="text-[#0F172A] text-base font-medium font-serif tracking-wide">
                    corporate@smartshopping.in
                  </p>
                  <p className="text-[#475569] text-xs leading-tight">
                    Monitored hourly by the administrative secretariat.
                  </p>
                </div>

                <div className="border border-[#E2E8F0] p-6 rounded-md sm:col-span-2 space-y-3">
                  <div className="flex items-center space-x-2 text-[#F97316]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Registered Headquarters
                    </span>
                  </div>
                  <p className="text-[#0F172A] text-base font-medium font-serif leading-snug">
                    Plot No. 48, Industrial & Business Park, Phase I,
                    Chandigarh, 160002
                  </p>
                  <p className="text-[#475569] text-xs">
                    Primary operational asset anchoring regional supply chains
                    across North India.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Business Hours Timeline Layout */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-md space-y-8">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[#163B65]">
                  <Clock className="w-4 h-4" />
                  <h3 className="font-serif font-semibold text-lg text-[#0F172A]">
                    We're Here When You Need Us
                  </h3>
                </div>
                <p className="text-[#475569] text-xs">
                  Standard operational timeline profiles across business layers.
                </p>
              </div>

              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[1px] before:bg-[#E2E8F0]">
                {operationalHours.map((oh, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1 group">
                    <div className="absolute left-[6px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#163B65] group-hover:border-[#F97316] transition-colors" />
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#163B65]">
                      {oh.title}
                    </h4>
                    <p className="text-base font-serif font-medium text-[#0F172A]">
                      {oh.time}
                    </p>
                    <p className="text-[#475569] text-xs leading-relaxed">
                      {oh.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PARTNERSHIP OPPORTUNITIES ================= */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-xs font-luxury-meta text-[#F97316] font-semibold tracking-[0.2em] block">
              Strategic Growth
            </span>
            <h2 className="text-3xl font-serif font-semibold text-[#163B65] tracking-tight">
              Interested In Working Together?
            </h2>
            <p className="text-[#475569] text-sm">
              We are consistently receptive to commercial opportunities that
              expand our regional authority and visual presence.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {partnerships.map((p, idx) => {
              const isOpen = activePartnership === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActivePartnership(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-[#F8FAFC] transition-colors focus-luxury"
                  >
                    <span className="font-serif font-medium text-lg text-[#0F172A] tracking-wide">
                      {p.title}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest text-[#F97316] font-mono transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                    >
                      {isOpen ? "[ Close ]" : "[ Open ]"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-6 pt-0 border-t border-[#E2E8F0]/60 bg-[#F8FAFC]/50 space-y-3">
                          <p className="text-[#475569] text-sm pt-4 leading-relaxed font-normal">
                            {p.detail}
                          </p>
                          <div className="bg-white border border-[#E2E8F0] p-4 rounded text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <span className="font-bold uppercase tracking-wider text-[#163B65] block sm:inline mr-2">
                                Evaluation Layer:
                              </span>
                              <span className="text-[#475569]">{p.scope}</span>
                            </div>
                            <span className="text-[#F97316] font-semibold whitespace-nowrap hidden sm:inline">
                              Enterprise Directive &rarr;
                            </span>
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

      {/* ================= SECTION 6: SEND US A MESSAGE (FORM + SIDE IMAGERY) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Contact Form UI */}
            <div className="lg:col-span-7 border border-[#E2E8F0] p-8 sm:p-10 rounded-md bg-white flex flex-col justify-between">
              <div className="space-y-6 w-full">
                <div className="space-y-1">
                  <h3 className="font-serif font-semibold text-2xl text-[#163B65]">
                    Send Us A Message
                  </h3>
                  <p className="text-[#475569] text-xs">
                    Fill out the validated terminal below, and our respective
                    administrative office will respond within 24 to 48
                    operational hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 border border-[#E2E8F0] bg-[#F8FAFC] text-center space-y-4 rounded-md"
                  >
                    <CheckCircle2 className="w-12 h-12 text-[#163B65] mx-auto stroke-[1.5]" />
                    <div className="space-y-1">
                      <h4 className="font-serif font-semibold text-lg text-[#0F172A]">
                        Inquiry Dispatched Successfully
                      </h4>
                      <p className="text-xs text-[#475569] max-w-sm mx-auto">
                        Your telemetry packet has been cached and routed to our
                        administrative hub. A response file will follow shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-[#F97316] uppercase tracking-widest underline underline-offset-4 focus-luxury"
                    >
                      Submit New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onInquirySubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-bold text-[#163B65]">
                          Full Name / Entity
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="e.g. Vardhman Corp"
                          className="w-full text-sm p-3 bg-white border border-[#cbd5e1] rounded focus:outline-none focus:border-[#163B65] transition-colors"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-600 font-medium">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-bold text-[#163B65]">
                          Email Address
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="partner@entity.com"
                          className="w-full text-sm p-3 bg-white border border-[#cbd5e1] rounded focus:outline-none focus:border-[#163B65] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-medium">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-bold text-[#163B65]">
                          Phone Contact (India)
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="9876543210"
                          className="w-full text-sm p-3 bg-white border border-[#cbd5e1] rounded focus:outline-none focus:border-[#163B65] transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 font-medium">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] uppercase tracking-wider font-bold text-[#163B65]">
                          Inquiry Allocation
                        </label>
                        <select
                          {...register("inquiryType")}
                          className="w-full text-sm p-3 bg-white border border-[#cbd5e1] rounded focus:outline-none focus:border-[#163B65] transition-colors appearance-none"
                        >
                          <option value="Customer Support">
                            Customer Support Desk
                          </option>
                          <option value="Partnership">
                            Partnership & Branding
                          </option>
                          <option value="Expansion">
                            Expansion & Real Estate
                          </option>
                          <option value="Careers">Careers & HR Division</option>
                          <option value="General Inquiry">
                            General Corporate Office
                          </option>
                        </select>
                        {errors.inquiryType && (
                          <p className="text-[11px] text-red-600 font-medium">
                            {errors.inquiryType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-bold text-[#163B65]">
                        Contextual Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Please explicitly state the micro-market or store allocation requirements..."
                        className="w-full text-sm p-3 bg-white border border-[#cbd5e1] rounded focus:outline-none focus:border-[#163B65] transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#163B65] text-white font-medium text-xs uppercase tracking-wider rounded hover:bg-[#214f84] transition-all disabled:opacity-50 focus-luxury"
                    >
                      {isSubmitting
                        ? "Transmitting Inbound..."
                        : "Transmit Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Editorial Multi-Brand Architectural Visual Frame */}
            <div className="lg:col-span-5 relative min-h-[400px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md overflow-hidden p-8 flex flex-col justify-between hidden md:flex group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#163B65]/90 via-[#163B65]/40 to-[#0F172A]/95 z-10" />

              {/* Fallback pattern representing active storefront environments */}
              <div className="absolute inset-0 bg-slate-200 mix-blend-multiply opacity-50 flex items-center justify-center text-xs text-text-muted tracking-widest uppercase font-mono p-4 text-center">
                Boutique Interior Atmosphere & Visual Curation Systems
              </div>

              <div className="relative z-20">
                <span className="font-luxury-meta text-xs text-[#F97316] font-bold tracking-[0.2em]">
                  Operational Flagship
                </span>
              </div>

              <div className="relative z-20 text-white space-y-2">
                <h4 className="font-serif font-semibold text-xl tracking-wide">
                  Premium Curation Dynamics
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  Our storefront structural environments across North India
                  translate international brand blueprints into physical
                  realities for regional demographics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: OUR PRESENCE ================= */}
      <section className="py-24 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-luxury-meta text-[#F97316] font-semibold tracking-[0.2em] block">
              Territorial Footprint
            </span>
            <h2 className="text-3xl font-serif font-semibold text-[#163B65] tracking-tight">
              Serving Communities Across North India
            </h2>
            <p className="text-[#475569] text-sm">
              Active asset deployments spanning key economic high-streets and
              tier-2 core destination complexes.
            </p>
          </div>

          {/* Visual Regional Chip Array Mapping */}
          <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] p-8 rounded-md shadow-sm space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-medium text-xs uppercase tracking-wider rounded-md flex items-center space-x-2 hover:border-[#163B65] transition-colors cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                  <span>{city}</span>
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#475569] gap-4">
              <div className="flex items-center space-x-2 text-left">
                <Network className="w-4 h-4 text-[#163B65]" />
                <span>
                  Aggressive structural pipeline modeling active for Q3-Q4
                  calendar milestones.
                </span>
              </div>
              <span className="font-luxury-meta text-[#163B65] font-bold tracking-widest whitespace-nowrap">
                27 Flagships & Counting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: QUICK CONTACT CTA ================= */}
      <section className="py-20 bg-[#163B65] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-luxury-meta text-[#F97316] font-bold tracking-[0.25em] block">
              Immediate Escalations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-white">
              Need Assistance Right Away?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto font-normal">
              Our regional operations desk handles emergency property reviews,
              store logistics, and client parameters instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-md focus-luxury">
              Call Support Desk
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-slate-400 hover:border-white text-white text-xs font-semibold uppercase tracking-wider rounded transition-all focus-luxury">
              Email Hub
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#163B65] border border-white/20 hover:border-white text-white text-xs font-semibold uppercase tracking-wider rounded transition-all focus-luxury">
              Find Stores
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
