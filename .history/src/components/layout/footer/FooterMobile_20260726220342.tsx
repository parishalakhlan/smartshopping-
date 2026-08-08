"use client";

import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/smartshoppingstores?igsh=MXhpOTBhNGI0YWdtMg==",
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
    href: "https://www.linkedin.com/in/vinod-kumar-92ab79116?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
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

export default function FooterMobile() {
  return (
    <footer
      aria-label="Mobile Footer"
      className="w-full border-t border-border-main bg-background-main px-4 py-4 text-text-primary"
    >
      <div className="flex flex-col gap-3">
        {/* Top Row: Brand & Social Icons */}
        <div className="flex items-center justify-between">
          <span className="font-luxury-heading text-sm font-medium">
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
                className="flex h-6 w-6 items-center justify-center rounded-full border border-border-main text-text-secondary active:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Minimal Legal Footer */}
        <div className="flex items-center justify-between text-[10px] text-text-muted border-t border-border-main pt-2">
          <span>© 2026 Smart Shopping</span>
        </div>
      </div>
    </footer>
  );
}
