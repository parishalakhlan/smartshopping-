"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Store Locator", href: "/stores" },
  { label: "Verticals", href: "/verticals" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const partnerLinks = [
  { label: "Become a Brand Partner", href: "/partners/brand-partner" },
  { label: "Franchise Opportunities", href: "/partners/franchise" },
  { label: "Retail Expansion", href: "/partners/expansion" },
  { label: "Business Enquiries", href: "/partners/enquiries" },
  { label: "Careers", href: "/careers" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export default function FooterDesktop() {
  return (
    <footer
      aria-label="Desktop Footer"
      className="w-full border-t border-border-main bg-background-main text-text-primary px-16 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="font-luxury-meta text-xs uppercase tracking-[0.2em] text-accent">
            SMART SHOPPING
          </span>
          <h2 className="font-luxury-heading mt-3 text-4xl font-light tracking-tight text-text-primary">
            Building Retail Beyond Metro Cities.
          </h2>
          <p className="font-luxury-nav mt-3 max-w-xl text-sm text-text-secondary">
            Premier multi-brand fashion retail and franchise network connecting
            premium global brands with Tier-2 and Tier-3 markets.
          </p>
        </motion.div>

        <div className="my-10 h-px w-full bg-border-main" />

        {/* 4 Grid Columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-12 gap-8 text-sm"
        >
          {/* Column 1: Brand */}
          <div className="col-span-4 pr-4 space-y-3">
            <h3 className="font-luxury-heading text-lg font-medium text-text-primary">
              Smart Shopping
            </h3>
            <p className="font-luxury-nav text-xs leading-relaxed text-text-secondary max-w-xs">
              Multi-Brand Fashion Retail • Franchise Partnerships • Tier 2 &
              Tier 3 Regional Expansion
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-text-secondary font-luxury-meta">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="col-span-2">
            <h4 className="font-luxury-meta text-xs uppercase tracking-wider text-text-muted mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 font-luxury-nav">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Partners */}
          <div className="col-span-3">
            <h4 className="font-luxury-meta text-xs uppercase tracking-wider text-text-muted mb-4">
              For Partners
            </h4>
            <ul className="space-y-2.5 font-luxury-nav">
              {partnerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-text-secondary hover:text-accent transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 text-text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-3">
            <h4 className="font-luxury-meta text-xs uppercase tracking-wider text-text-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-luxury-nav text-text-secondary text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                <span>Smart Shopping Towers, Plot 42, NCR, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                <a href="tel:+911140008800" className="hover:text-accent">
                  +91 (011) 4000 8800
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                <a
                  href="mailto:corporate@smartshopping.in"
                  className="hover:text-accent"
                >
                  corporate@smartshopping.in
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="my-10 h-px w-full bg-border-main" />

        {/* Bottom Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center justify-between font-luxury-meta text-xs text-text-muted"
        >
          <p>© 2026 Smart Shopping. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-accent transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
