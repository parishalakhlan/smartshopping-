"use client";

import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Building,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavbarLogo } from "./navbar-logo";

// --- Configuration Data ---
const primaryNavItems = [
  {
    label: "About Us",
    sub: "Our journey since 2009",
    href: "/about",
  },
  {
    label: "Premium Brands",
    sub: "International fashion collections",
    href: "/brands",
  },
  {
    label: "Find Stores",
    sub: "27+ locations across North India",
    href: "/store-locator",
  },
  {
    label: "Our People",
    sub: "Meet the people behind Smart Shopping",
    href: "/team",
  },
  {
    label: "Build Your Career",
    sub: "Grow with a young retail team",
    href: "/careers",
  },
  {
    label: "Get In Touch",
    sub: "Multiple ways to connect",
    href: "/contact",
  },
];

const featuredBrands = [
  "Jack & Jones",
  "Vero Moda",
  "Only",
  "Selected",
  "JJ Junior",
  "Celio",
  "The Souled Store",
];

const networkMetrics = [
  { label: "Stores", value: "27+" },
  { label: "States", value: "7" },
  { label: "Years", value: "15+" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const MobileMenu = memo(function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="lg:hidden flex items-center">
        <button
          aria-label="Close menu"
          type="button"
          className="text-[#0F172A] opacity-50 p-2"
          disabled
        >
          <Menu className="h-6 w-6 stroke-[1.5]" />
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          type="button"
          className="text-[#0F172A] hover:text-[#163B65] h-10 w-10 flex items-center justify-center rounded-full transition-colors focus-visible:outline-none"
          aria-label="Open Fashion Discovery Menu"
        >
          <Menu className="h-6 w-6 stroke-[1.5]" />
        </SheetTrigger>

        {/* 
          FULL HEIGHT FASHION DISCOVERY PANEL 
          Fulfills SMART SHOPPING DESIGN SYSTEM V1 (70% White Background Canvas)
        */}
        <SheetContent
          side="right"
          className="w-full sm:max-w-[440px] h-[100dvh] bg-white border-none p-0 flex flex-col justify-between rounded-none [&>button]:hidden overflow-hidden"
        >
          {/* SECTION 1: HEADER AREA (100px Height, Spacing & Bottom Divider) */}
          <div className="h-[100px] px-6 sm:px-8 border-b border-[#F1F5F9] flex items-center justify-between shrink-0 bg-white z-10">
            <SheetTitle className="text-left m-0 p-0">
              <NavbarLogo />
            </SheetTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-[#0F172A] hover:text-[#163B65] transition-colors rounded-full bg-[#F8FAFC] border border-[#E2E8F0]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>

          {/* SCROLLABLE SURFACE FOR ECOSYSTEM CONTENT */}
          <div className="flex-1 overflow-y-auto scrollbar-none pb-8 space-y-8 native-scroll-momentum">
            {/* SECTION 2: BRAND EMOTIONAL CONNECTION */}
            <div className="pt-6 px-6 sm:px-8 space-y-2">
              <span className="font-sans text-[11px] font-bold tracking-[0.12em] text-[#F97316] uppercase block">
                Premium Fashion. Closer To Home.
              </span>
              <h2 className="font-serif text-[28px] font-bold text-[#163B65] tracking-tight leading-tight">
                Fashion Beyond Metro Cities
              </h2>
              <p className="font-sans text-[14px] text-[#64748B] leading-relaxed font-medium">
                Discover international fashion brands, premium retail
                destinations, and communities connected through style.
              </p>
            </div>

            {/* SECTION 3: PRIMARY CAPSULE NAVIGATION */}
            <nav className="px-6 sm:px-8" aria-label="Ecosystem Navigation">
              <AnimatePresence>
                {open && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {primaryNavItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div key={item.href} variants={itemVariants}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`group w-full min-h-[68px] px-5 py-3.5 flex items-center justify-between rounded-full border bg-white transition-all duration-200 ${
                              isActive
                                ? "border-[#163B65] bg-[#F8FAFC]"
                                : "border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                            }`}
                          >
                            <div className="flex flex-col text-left pr-4">
                              <span
                                className={`font-sans text-[16px] font-semibold tracking-wide flex items-center gap-1.5 ${
                                  isActive ? "text-[#163B65]" : "text-[#0F172A]"
                                }`}
                              >
                                {item.label}
                                {isActive && (
                                  <span
                                    className="w-1.5 h-1.5 rounded-full bg-[#F97316]"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                              <span className="font-sans text-[12px] text-[#64748B] font-medium mt-0.5">
                                {item.sub}
                              </span>
                            </div>

                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                                isActive
                                  ? "bg-[#163B65] text-white"
                                  : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#E2E8F0] group-hover:text-[#163B65]"
                              }`}
                            >
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            {/* SECTION 4: FEATURED BRANDS HORIZONTAL SCROLL PREVIEW */}
            <div className="space-y-3">
              <div className="px-6 sm:px-8 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                <h3 className="font-serif text-[16px] font-bold text-[#163B65]">
                  Featured Brands
                </h3>
              </div>
              <div className="w-full overflow-x-auto scrollbar-none flex gap-2 px-6 sm:px-8 pb-1 snap-x select-none">
                {featuredBrands.map((brand) => (
                  <span
                    key={brand}
                    className="font-sans text-[13px] font-semibold text-[#334155] whitespace-nowrap bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-full hover:border-[#163B65] hover:text-[#163B65] transition-colors snap-center"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* SECTION 5: STORE NETWORK MOTIF ACCENT */}
            <div className="px-6 sm:px-8 space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#163B65]" />
                <h3 className="font-serif text-[16px] font-bold text-[#163B65]">
                  Closer To Home
                </h3>
              </div>

              {/* Elegant Connected Metric Row */}
              <div className="relative p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] overflow-hidden">
                {/* Subtle dot-line connection graphic path background */}
                <div
                  className="absolute top-1/2 left-4 right-4 h-[1px] bg-dashed bg-[#E2E8F0] -translate-y-1/2 z-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #E2E8F0 40%, rgba(255,255,255,0) 0%)",
                    backgroundSize: "6px 1px",
                    backgroundRepeat: "repeat-x",
                  }}
                />

                <div className="relative z-10 flex justify-between items-center px-2">
                  {networkMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-[#F8FAFC] px-3"
                    >
                      <span className="font-serif text-[20px] font-bold text-[#163B65] tracking-tight flex items-center gap-1">
                        {metric.value}
                        {idx === 0 && (
                          <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                        )}
                      </span>
                      <span className="font-sans text-[11px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER ACTIONS AREA (20% Blue, 10% Orange System Balance Rules) */}
          <div className="p-6 sm:p-8 bg-white border-t border-[#F1F5F9] space-y-3 shrink-0">
            {/* SECTION 6: PRIMARY ACTION */}
            <Link
              href="/store-locator"
              onClick={() => setOpen(false)}
              className="w-full h-13 flex items-center justify-center gap-x-2 bg-[#163B65] text-white font-sans text-[15px] font-semibold rounded-full shadow-sm hover:bg-[#214F84] active:scale-[0.99] transition-all focus-visible:outline-none"
            >
              <MapPin className="w-4 h-4 stroke-[2]" />
              <span>Find Nearest Store</span>
            </Link>

            {/* SECTION 7: SECONDARY OUTLINED ACTIONS */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/brands"
                onClick={() => setOpen(false)}
                className="h-11 flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] font-sans text-[13px] font-semibold rounded-full hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-colors"
              >
                Explore Brands
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="h-11 flex items-center justify-center bg-white border border-[#CBD5E1] text-[#334155] font-sans text-[13px] font-semibold rounded-full hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
});
