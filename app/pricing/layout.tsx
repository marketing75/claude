import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | NetTrackers — UK Digital Agency',
  description:
    'Transparent pricing for web design, SEO, reputation management, and software development. No hidden fees. Plans from £997/month.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
