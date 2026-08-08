"use client";

import React from "react";
import Link from "next/link";

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
        </div>

        <div className="h-px w-full bg-border-main" />

        {/* Bottom Legal & Contact */}
      </div>
    </footer>
  );
}
