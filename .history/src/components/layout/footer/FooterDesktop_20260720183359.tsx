"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Brand Portfolio", href: "/brands" },
  { label: "Store Locator", href: "/stores" },
  { label: "Business Verticals", href: "/verticals" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const partnerLinks = [
  { label: "Become a Brand Partner", href: "/partners/brand-partner" },
  { label: "Franchise Opportunities", href: "/partners/franchise" },
  { label: "Retail Expansion", href: "/partners/expansion" },
  { label: "Business Enquiries", href: "/partners/enquiries" },
  { label: "Corporate Careers", href: "/careers" },
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

export default function FooterDesktop() {
  return (
    <footer
      aria-label="Desktop Site Footer"
      className="w-full border-t border-border-main bg-background-main text-text-primary"
    >
      <div className="mx-auto max-w-7xl px-16 py-24">
        {/* Top Editorial Statement */}

        {/* 4 Columns Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={2}
          variants={fadeUpVariant}
          className="grid grid-cols-12 gap-12"
        >
          {/* Column 1 */}
          <div className="col-span-4 pr-6">
            <h3 className="font-luxury-heading text-xl font-medium tracking-wide text-text-primary">
              Smart Shopping
            </h3>
            <p className="font-luxury-nav mt-4 text-sm leading-relaxed text-text-secondary">
              A luxury-minded fashion retail conglomerate operating
              state-of-the-art multi-brand flagship stores and seamless
              franchise networks.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Smart Shopping on ${social.name}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-border-main text-text-secondary transition-colors duration-300 hover:border-border-hover hover:text-accent"
                >
                  <span className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-2">
            <h4 className="font-luxury-meta text-xs uppercase tracking-[0.2em] text-text-muted">
              Explore
            </h4>
            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-luxury-nav group inline-flex items-center text-sm text-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-accent"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-3">
            <h4 className="font-luxury-meta text-xs uppercase tracking-[0.2em] text-text-muted">
              For Partners
            </h4>
            <ul className="mt-6 space-y-3.5">
              {partnerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-luxury-nav group inline-flex items-center text-sm text-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-accent"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-3">
            <h4 className="font-luxury-meta text-xs uppercase tracking-[0.2em] text-text-muted">
              Headquarters
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="font-luxury-nav leading-relaxed">
                  Smart Shopping Towers, Plot 42, Retail Hub, Phase II, NCR,
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+911140008800"
                  className="font-luxury-nav transition-colors duration-300 hover:text-accent"
                >
                  +91 (011) 4000 8800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:corporate@smartshopping.in"
                  className="font-luxury-nav transition-colors duration-300 hover:text-accent"
                >
                  corporate@smartshopping.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="font-luxury-nav leading-relaxed">
                  Mon – Sat: 09:30 – 18:30 IST
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="my-16 h-px w-full bg-border-main" />

        {/* Bottom Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUpVariant}
          className="flex items-center justify-between font-luxury-meta text-xs tracking-wider text-text-muted"
        >
          <p>© 2026 Smart Shopping Retail Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-accent"
            >
              Terms of Business
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors duration-300 hover:text-accent"
            >
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
