/**
 * Global TypeScript types for the Obliq website.
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  tags: string[];
  coverImage?: string;
}

export interface Author {
  name: string;
  avatar?: string;
  github?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

/** Used by the placeholder system — each placeholder maps to a GitHub issue. */
export interface PlaceholderSection {
  title: string;
  description: string;
  issueNumber: number;
  issueUrl: string;
}
