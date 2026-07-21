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
      className="w-full border-t border-border-main bg-background-main text-text-primary px-6 py-12"
    >
      <div className="w-full max-w-md mx-auto space-y-8">
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
          <h2 className="font-luxury-heading mt-2 text-2xl font-light tracking-tight text-text-primary">
            Building Retail Beyond Metro Cities.
          </h2>
          <p className="font-luxury-nav mt-2 text-xs text-text-secondary leading-relaxed">
            Multi-brand fashion retail and franchise network across Tier-2 and
            Tier-3 markets.
          </p>
        </motion.div>

        <div className="h-px w-full bg-border-main" />

        {/* Brand Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-2"
        >
          <h3 className="font-luxury-heading text-base font-medium text-text-primary">
            Smart Shopping
          </h3>
          <p className="font-luxury-nav text-xs text-text-secondary">
            Premium Fashion • Retail • Franchise • Tier 2 & 3 • Customer
            Experience
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-luxury-meta text-text-secondary">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="active:text-accent"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="active:text-accent"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="active:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="active:text-accent"
            >
              YouTube
            </a>
          </div>
        </motion.div>

        {/* Explore Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-3">
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
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-3">
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
          <h4 className="font-luxury-meta text-[10px] uppercase tracking-wider text-text-muted mb-3">
            Contact
          </h4>
          <ul className="space-y-2.5 font-luxury-nav text-xs text-text-secondary">
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
          className="space-y-3 font-luxury-meta text-[10px] text-text-muted"
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
