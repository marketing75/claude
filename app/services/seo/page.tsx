import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/sections/service/ServiceHero';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'SEO Services London & UK | NetTrackers',
    description:
      'Data-driven SEO services that put your business at the top of Google. Local SEO, technical SEO, link building, content marketing and e-commerce SEO from a trusted UK agency.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo' },
  };
}

const childServices = [
  {
    title: 'Local SEO',
    description: 'Dominate the local map pack and attract nearby customers searching for your products and services.',
    href: '/services/seo/local-seo',
  },
  {
    title: 'Technical SEO',
    description: 'Resolve crawl issues, improve site speed and ensure search engines can properly index every page.',
    href: '/services/seo/technical-seo',
  },
  {
    title: 'On-Page SEO',
    description: 'Optimise your content, meta tags, headings and internal links for maximum keyword visibility.',
    href: '/services/seo/on-page-seo',
  },
  {
    title: 'Link Building',
    description: 'Earn high-authority backlinks through strategic outreach, digital PR and content-led campaigns.',
    href: '/services/seo/link-building',
  },
  {
    title: 'E-Commerce SEO',
    description: 'Drive organic traffic to your product pages with specialised e-commerce optimisation strategies.',
    href: '/services/seo/ecommerce-seo',
  },
  {
    title: 'SEO Audits',
    description: 'Comprehensive technical and content audits that uncover every opportunity to improve your rankings.',
    href: '/services/seo/seo-audits',
  },
  {
    title: 'Content Marketing',
    description: 'Attract, engage and convert your target audience with strategically crafted content that ranks.',
    href: '/services/seo/content-marketing',
  },
];

const stats = [
  { value: '340%', label: 'Average Traffic Increase' },
  { value: '90%', label: 'Clients on Page 1' },
  { value: '150+', label: 'Keywords in Top 3' },
];

export default function SeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    description:
      'Data-driven SEO services that put your business at the top of Google.',
    provider: {
      '@type': 'Organization',
      name: 'NetTrackers',
      url: 'https://www.nettrackers.co.uk',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    url: 'https://www.nettrackers.co.uk/services/seo',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero
        title="SEO Services That Put You at the Top of Google"
        description="Our search engine optimisation strategies are built on data, not guesswork. We combine technical expertise with compelling content to earn you sustainable rankings, qualified organic traffic and a measurable return on investment. From local businesses to national e-commerce brands, we have the playbook to grow your visibility."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'SEO', href: '/services/seo' },
        ]}
        ctaPrimary={{ text: 'Get a Free SEO Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Our Results', href: '/case-studies' }}
      />

      {/* Stats Bar */}
      <section className="bg-blue py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6">
              Comprehensive SEO That Delivers Lasting Results
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Ranking on Google is not about quick fixes or shortcuts — it demands a
              disciplined, multi-faceted approach. Our SEO services cover every pillar of
              search visibility: technical foundations, on-page relevance, authoritative
              backlinks and content that your audience genuinely values. We track, test and
              refine every month so your growth never plateaus.
            </p>
          </div>

          {/* Service Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {childServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-xl font-bold text-text mb-3 group-hover:text-blue transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="font-body text-blue font-semibold text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Climb the Rankings?"
        subheading="Book a free SEO consultation and discover how much organic traffic you're leaving on the table."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
