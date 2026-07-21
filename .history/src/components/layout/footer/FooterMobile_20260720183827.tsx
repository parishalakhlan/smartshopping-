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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function FooterMobile() {
  return (
    <footer
      aria-label="Mobile Footer"
      className="w-full border-t border-border-main bg-background-main text-text-primary px-6 py-10"
    >
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Editorial Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="font-luxury-meta text-[10px] uppercase tracking-[0.2em] text-accent">
            SMART SHOPPING
          </span>
          <h2 className="font-luxury-heading mt-1.5 text-2xl font-light tracking-tight text-text-primary">
            Building Retail Beyond Metro Cities.
          </h2>
        </motion.div>

        <div className="h-px w-full bg-border-main" />

        {/* Brand & Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-3"
        >
          <h3 className="font-luxury-heading text-base font-medium text-text-primary">
            Smart Shopping
          </h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Smart Shopping on ${social.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border-main text-text-secondary transition-colors active:border-border-hover active:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Explore Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-2.5">
            Explore
          </h4>
          <ul className="space-y-2 font-luxury-nav text-xs">
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-text-secondary active:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Partner Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-2.5">
            For Partners
          </h4>
          <ul className="space-y-2 font-luxury-nav text-xs">
            {partnerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-text-secondary active:text-accent"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 text-text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-2.5">
            Contact
          </h4>
          <ul className="space-y-2 font-luxury-nav text-xs text-text-secondary">
            <li className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
              <span>Smart Shopping Towers, Plot 42, NCR, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
              <a href="tel:+911140008800">+91 (011) 4000 8800</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
              <a href="mailto:corporate@smartshopping.in">
                corporate@smartshopping.in
              </a>
            </li>
          </ul>
        </motion.div>

        <div className="h-px w-full bg-border-main" />

        {/* Bottom Legal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-2.5 font-luxury-meta text-[10px] text-text-muted"
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="active:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="active:text-accent">
              Terms
            </Link>
            <Link href="/accessibility" className="active:text-accent">
              Accessibility
            </Link>
          </div>
          <p>© 2026 Smart Shopping. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
