import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Website Redesign Services | NetTrackers',
    description:
      'Modernise your outdated website with a complete redesign that improves user experience, performance, accessibility and conversion rates.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/website-redesign' },
  };
}

export default function WebsiteRedesignPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Website Redesign Services',
      description: 'Modernise your outdated website with a complete redesign that improves UX, performance and conversions.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/website-redesign',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'Website Redesign', item: 'https://www.nettrackers.co.uk/services/web-design-development/website-redesign' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Breathe New Life into Your Website"
        description="If your website looks dated, loads slowly or fails to convert visitors, it is actively costing you business. Our website redesign service goes far beyond a fresh coat of paint — we audit your existing site, identify what is working and what is not, then rebuild from the ground up with modern design patterns, faster technology and a conversion-focused user experience. We preserve your SEO equity during the migration so you do not lose the rankings you have already earned while gaining a site that truly represents where your brand is headed."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'Website Redesign', href: '/services/web-design-development/website-redesign' },
        ]}
        ctaPrimary={{ text: 'Get a Free Site Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Before & After', href: '/portfolio' }}
      />

      <ServiceBenefits
        title="What You Get with Our Redesign Service"
        benefits={[
          { icon: '\uD83D\uDD0D', title: 'Comprehensive Site Audit', description: 'We analyse your current site\u2019s analytics, heatmaps, SEO performance and user feedback to understand exactly what needs to change.' },
          { icon: '\uD83C\uDFA8', title: 'Modern Visual Design', description: 'A fresh, contemporary look that aligns with current design trends while staying true to your brand identity and values.' },
          { icon: '\u26A1', title: 'Faster Performance', description: 'Rebuilt on modern frameworks with optimised code, your redesigned site will load significantly faster than the original.' },
          { icon: '\uD83D\uDCF1', title: 'Improved Mobile Experience', description: 'A ground-up responsive approach ensures your site works beautifully on every screen size, not just desktop.' },
          { icon: '\uD83D\uDD17', title: 'SEO Migration Plan', description: 'Redirect mapping, meta tag preservation and structured data updates protect your organic rankings throughout the transition.' },
          { icon: '\uD83D\uDCC8', title: 'Higher Conversion Rates', description: 'Redesigned user flows, clearer calls to action and reduced friction translate directly into more leads and sales.' },
        ]}
      />

      <ServiceProcess
        title="Our Redesign Process"
        steps={[
          { number: 1, title: 'Audit & Analysis', description: 'We review your current website\u2019s analytics, user behaviour, SEO rankings and competitor landscape to build a data-informed redesign strategy.' },
          { number: 2, title: 'Information Architecture', description: 'We restructure your sitemap, navigation and content hierarchy to create a more intuitive user experience.' },
          { number: 3, title: 'Design & Prototyping', description: 'New page layouts are designed in high fidelity, incorporating your feedback at every stage before development begins.' },
          { number: 4, title: 'Development & Migration', description: 'The redesigned site is built, content is migrated, redirects are mapped and thorough testing is conducted across all browsers and devices.' },
          { number: 5, title: 'Launch & Monitor', description: 'We launch the new site, monitor rankings and traffic closely, and make adjustments to ensure a smooth transition.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Will a redesign affect my Google rankings?', answer: 'When handled correctly, a redesign should improve your rankings. We create comprehensive redirect maps, preserve meta data and submit updated sitemaps to minimise any temporary fluctuations.' },
          { question: 'How do you decide what to keep and what to change?', answer: 'Our audit analyses which pages drive the most traffic and conversions. High-performing content is preserved and improved, while underperforming pages are restructured or consolidated.' },
          { question: 'Can you redesign my site on the same platform?', answer: 'Yes, but we will also advise if a platform change would benefit your performance and long-term goals. We work with WordPress, Shopify, Next.js and more.' },
          { question: 'How long does a website redesign take?', answer: 'Depending on the size and complexity of your existing site, a redesign typically takes six to twelve weeks from audit to launch.' },
          { question: 'Will I lose my existing content?', answer: 'No. All valuable content is migrated to the new site. We also use the redesign as an opportunity to update and improve content where needed.' },
          { question: 'How much does a website redesign cost?', answer: 'Pricing depends on the scope of work. We provide a detailed, transparent quote after the initial audit so there are no surprises.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Website Design', description: 'Starting from scratch? Our bespoke design service creates a brand-new visual identity.', href: '/services/web-design-development/website-design' },
          { title: 'Technical SEO', description: 'Ensure your redesigned site is fully optimised for search engines from day one.', href: '/services/seo/technical-seo' },
          { title: 'SEO Audits', description: 'Pair your redesign with a comprehensive SEO audit to maximise organic growth.', href: '/services/seo/seo-audits' },
        ]}
      />

      <CtaBanner
        heading="Your Website Deserves Better"
        subheading="Get a free site audit and find out exactly how a redesign could improve your results."
        primaryCta={{ text: 'Request Free Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
