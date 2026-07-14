export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavbarLogoProps {
  type?: "text" | "image";
  src?: string;
  alt?: string;
  text?: string;
}
