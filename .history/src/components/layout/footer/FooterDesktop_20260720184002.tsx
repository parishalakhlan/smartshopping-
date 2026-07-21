"use client";

import React from "react";
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Store Locator", href: "/stores" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const partnerLinks = [
  { label: "Brand Partner", href: "/partners/brand-partner" },
  { label: "Franchise", href: "/partners/franchise" },
  { label: "Retail Expansion", href: "/partners/expansion" },
  { label: "Enquiries", href: "/partners/enquiries" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
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
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
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
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
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
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function FooterDesktop() {
  return (
    <footer
      aria-label="Desktop Footer"
      className="w-full border-t border-border-main bg-background-main px-8 py-6 text-text-primary"
    >
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Main Content Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs">
          {/* Brand & Socials */}
          <div className="flex items-center gap-4">
            <span className="font-luxury-heading text-base font-medium">
              Smart Shopping
            </span>
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border-main text-text-secondary hover:border-border-hover hover:text-accent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Inline Navigation Links */}
          <nav className="flex items-center gap-4 text-text-secondary">
            {exploreLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Partner Links */}
          <nav className="flex items-center gap-4 text-text-secondary">
            {partnerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-border-main" />

        {/* Bottom Legal & Contact */}
        <div className="flex items-center justify-between text-[11px] text-text-muted">
          <p>© 2026 Smart Shopping. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Smart Shopping Towers, NCR, India</span>
            <span>•</span>
            <a
              href="mailto:corporate@smartshopping.in"
              className="hover:text-accent"
            >
              corporate@smartshopping.in
            </a>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
