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
  };

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
  },

  announcement: {
    text: "Premium Fashion • 35+ Stores • 7 States Across North India",
    ariaLabel: "Announcement: Premium Fashion across 35+ stores in 7 states",
  },
  metadata: {
    siteName: "Smart Shopping",
    logoAlt: "Smart Shopping - Premium Fashion Retail",
    logoFallback: "SMART SHOPPING",
  },
};
