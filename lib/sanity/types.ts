import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SeoFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface FaqItem {
  question: string;
  answer: string;
  service?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  photo?: SanityImage;
  service?: string;
  city?: string;
  featured?: boolean;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry?: string;
  services?: string[];
  challenge: string;
  solution?: PortableTextBlock[];
  results?: CaseStudyResult[];
  testimonial?: Testimonial;
  heroImage?: SanityImage;
  seo?: SeoFields;
  featured?: boolean;
  publishedAt?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  categories?: string[];
  coverImage?: SanityImage;
  seo?: SeoFields;
  publishedAt: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImage;
  bio?: string;
  linkedin?: string;
  order?: number;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  google?: string;
}

export interface SiteSettings {
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: SocialLinks;
  gtmId?: string;
}
