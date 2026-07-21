export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface NavbarConfig {
  navigation: {
    items: NavigationItem[];
    aboutSubmenu: NavigationItem[];
  };
  cta: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  connect: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socials: SocialLink[];
  announcement: {
    text: string;
    ariaLabel: string;
  };
  metadata: {
    siteName: string;
    logoAlt: string;
    logoFallback: string;
  };
}

export const navbarConfig: NavbarConfig = {
  navigation: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about-us" },
      { label: "Store Locator", href: "/store-locator" },
      { label: "Team", href: "/team" },
      { label: "Partners", href: "/partners" },
      { label: "Verticals", href: "/verticals" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    aboutSubmenu: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
  cta: {
    label: "Find Store Near You",
    href: "/store-locator",
    ariaLabel: "Find a store near you",
  },
  connect: {
    label: "Connect With Us",
    href: "/contact",
    ariaLabel: "Connect with us",
  },
  contact: {
    phone: "+1 (800) 403-2930",
    email: "office@fashionfranchise.com",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  announcement: {
    text: "Premium Fashion • 27+ Stores • 7 States Across North India",
    ariaLabel: "Announcement: Premium Fashion across 27+ stores in 7 states",
  },
  metadata: {
    siteName: "Smart Shopping",
    logoAlt: "Smart Shopping - Premium Fashion Retail",
    logoFallback: "SMART SHOPPING",
  },
};
