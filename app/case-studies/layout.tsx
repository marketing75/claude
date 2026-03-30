import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | NetTrackers',
  description:
    'See how NetTrackers has helped UK businesses achieve measurable results with SEO, web design, reputation management, and bespoke software.',
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
