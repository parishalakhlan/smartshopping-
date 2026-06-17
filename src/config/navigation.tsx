import { NavigationItem } from "@/components/layout/navbar/types";

export const navigationConfig: NavigationItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Store Locator", href: "/store-locator" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const corporateConfig = {
  ctaLabel: "Find Store Near You",
  ctaHref: "/store-locator",
  connectLabel: "Connect With Us",
  connectHref: "/contact",
  phone: "+1 (800) 403-2930",
  email: "office@fashionfranchise.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
