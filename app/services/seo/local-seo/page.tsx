import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Local SEO Services | NetTrackers',
    description:
      'Dominate local search results and the Google Map Pack. Our local SEO services drive foot traffic and phone calls from customers in your area.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/local-seo' },
  };
}

export default function LocalSeoPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Local SEO Services',
      description: 'Dominate local search results and the Google Map Pack with targeted local SEO strategies.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/local-seo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Local SEO', item: 'https://www.nettrackers.co.uk/services/seo/local-seo' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Be Found by Customers in Your Area"
        description="When someone searches for a business like yours nearby, you need to appear in the Google Map Pack and local organic results — because those searches have the highest purchase intent of any query type. Our local SEO service optimises your Google Business Profile, builds consistent local citations, generates genuine reviews and creates location-targeted content that puts your business in front of ready-to-buy customers within your service area. We track rankings at postcode level so you can see exactly how your visibility is improving week by week."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'Local SEO', href: '/services/seo/local-seo' },
        ]}
        ctaPrimary={{ text: 'Get a Free Local Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Local Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our Local SEO Service"
        benefits={[
          { icon: '\uD83D\uDCCD', title: 'Google Business Profile Optimisation', description: 'Complete setup and ongoing optimisation of your GBP listing with posts, photos, Q&A and category targeting.' },
          { icon: '\uD83C\uDFE2', title: 'Local Citation Building', description: 'Consistent NAP (name, address, phone) listings across directories, aggregators and industry-specific platforms.' },
          { icon: '\u2B50', title: 'Review Generation Strategy', description: 'Automated review request workflows and response management that build social proof and improve local rankings.' },
          { icon: '\uD83D\uDCDD', title: 'Location-Specific Content', description: 'Service area pages, local blog posts and neighbourhood guides that capture geo-targeted search queries.' },
          { icon: '\uD83D\uDCCA', title: 'Postcode-Level Tracking', description: 'We monitor your rankings across specific postcodes and locations so you see precise local visibility gains.' },
          { icon: '\uD83D\uDCF1', title: 'Mobile Search Optimisation', description: 'Most local searches happen on mobile. We ensure your site delivers a fast, tap-to-call, map-integrated experience.' },
        ]}
      />

      <ServiceProcess
        title="Our Local SEO Process"
        steps={[
          { number: 1, title: 'Local Audit', description: 'We audit your Google Business Profile, citations, reviews, on-page signals and competitor landscape to identify gaps and opportunities.' },
          { number: 2, title: 'Foundation Setup', description: 'We optimise your GBP listing, fix citation inconsistencies and set up review generation workflows.' },
          { number: 3, title: 'Content & Link Building', description: 'Location-targeted landing pages, blog content and local link-building campaigns boost your relevance and authority.' },
          { number: 4, title: 'Monitor & Refine', description: 'Monthly reporting with postcode-level rank tracking, review analytics and ongoing optimisation to maintain and grow your visibility.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How long before I see local SEO results?', answer: 'Most businesses see noticeable improvements in the Map Pack within four to eight weeks. Sustained growth in local organic rankings typically takes three to six months.' },
          { question: 'Do I need a physical address to rank locally?', answer: 'A verified Google Business Profile helps significantly. Service-area businesses without a public address can still rank using a hidden address and service-area settings.' },
          { question: 'How important are reviews for local SEO?', answer: 'Extremely important. Review quantity, quality and recency are major ranking factors for the Map Pack. Our review strategy helps you consistently earn genuine, positive reviews.' },
          { question: 'Can you help with multiple locations?', answer: 'Yes. We manage local SEO campaigns for multi-location businesses, ensuring each location has its own optimised GBP listing, citations and local landing page.' },
          { question: 'What is a local citation?', answer: 'A citation is any online mention of your business name, address and phone number. Consistent citations across directories like Yell, Thomson Local and Bing Places strengthen your local authority.' },
          { question: 'Do you manage Google Business Profile posts?', answer: 'Yes. We publish regular GBP posts featuring offers, events, updates and photos to keep your listing fresh and engaging for both users and Google\u2019s algorithm.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'On-Page SEO', description: 'Optimise your website\u2019s content and structure to support your local search strategy.', href: '/services/seo/on-page-seo' },
          { title: 'Review Management', description: 'Take full control of your online reviews across Google, Trustpilot and industry platforms.', href: '/services/orm/review-management' },
          { title: 'Link Building', description: 'Build high-quality local and industry backlinks to strengthen your domain authority.', href: '/services/seo/link-building' },
        ]}
      />

      <CtaBanner
        heading="Ready to Own Your Local Market?"
        subheading="Get a free local SEO audit and discover how many customers you are missing out on."
        primaryCta={{ text: 'Get Free Local Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
