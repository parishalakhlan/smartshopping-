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

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
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
      className="w-full border-t border-border-main bg-background-main text-text-primary px-16 py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="font-luxury-meta text-xs uppercase tracking-[0.2em] text-accent">
            SMART SHOPPING
          </span>
          <h2 className="font-luxury-heading mt-2 text-3xl font-light tracking-tight text-text-primary">
            Building Retail Beyond Metro Cities.
          </h2>
        </motion.div>

        <div className="my-8 h-px w-full bg-border-main" />

        {/* 4 Grid Columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-12 gap-8 text-sm"
        >
          {/* Column 1: Brand */}
          <div className="col-span-4 pr-4 space-y-4">
            <h3 className="font-luxury-heading text-lg font-medium text-text-primary">
              Smart Shopping
            </h3>
            {/* Outline Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Smart Shopping on ${social.name}`}
                  className="group flex h-8 w-8 items-center justify-center rounded-full border border-border-main text-text-secondary transition-colors duration-300 hover:border-border-hover hover:text-accent"
                >
                  <span className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    {social.icon}
                  </span>
                </a>
              ))}
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

        <div className="my-8 h-px w-full bg-border-main" />

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
