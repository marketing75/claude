import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NetTrackers | Book a Free Strategy Call',
  description:
    'Get in touch with NetTrackers for a free, no-obligation strategy call. Our London-based team is ready to help grow your business online.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
