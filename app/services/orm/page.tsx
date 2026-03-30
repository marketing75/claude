import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/sections/service/ServiceHero';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Online Reputation Management | NetTrackers',
    description:
      'Protect and enhance your online reputation with proactive monitoring, review management, crisis response and brand-building strategies from NetTrackers.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm' },
  };
}

const childServices = [
  {
    title: 'Reputation Repair',
    description: 'Suppress negative search results and rebuild public trust with a strategic recovery plan.',
    href: '/services/orm/reputation-repair',
  },
  {
    title: 'Review Management',
    description: 'Generate more positive reviews, respond professionally and turn feedback into a competitive advantage.',
    href: '/services/orm/review-management',
  },
  {
    title: 'Brand Monitoring',
    description: 'Track every mention of your brand across the web, social media and news outlets in real time.',
    href: '/services/orm/brand-monitoring',
  },
  {
    title: 'Crisis Management',
    description: 'Rapid-response strategies that contain reputational damage and protect your brand during a crisis.',
    href: '/services/orm/crisis-management',
  },
  {
    title: 'Personal Reputation',
    description: 'Manage and protect the online reputation of executives, professionals and public figures.',
    href: '/services/orm/personal-reputation',
  },
];

const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '72hr', label: 'Average Response Time' },
  { value: '4.8\u2605', label: 'Average Rating Achieved' },
];

export default function OrmPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Online Reputation Management',
    description:
      'Protect and enhance your online reputation with proactive monitoring, review management and crisis response.',
    provider: {
      '@type': 'Organization',
      name: 'NetTrackers',
      url: 'https://www.nettrackers.co.uk',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    url: 'https://www.nettrackers.co.uk/services/orm',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero
        title="Protect Your Brand. Build Trust. Grow Revenue."
        description="Your online reputation is your most valuable digital asset. One negative review or damaging search result can cost you thousands in lost revenue. Our reputation management services give you the tools, strategies and expert support to take control of how your brand is perceived online — proactively, not reactively."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Online Reputation Management', href: '/services/orm' },
        ]}
        ctaPrimary={{ text: 'Get a Free Reputation Audit', href: '/contact' }}
        ctaSecondary={{ text: 'Learn How It Works', href: '#overview' }}
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
      <section id="overview" className="py-20 md:py-28 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6">
              Take Control of Your Online Narrative
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              In today&apos;s digital-first world, consumers check reviews and search results
              before making any purchasing decision. A single negative article, a string of
              poor reviews or an unaddressed social media complaint can erode years of brand
              equity overnight. Our reputation management team works around the clock to
              monitor, protect and improve the way your business appears online.
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
        heading="Worried About Your Online Reputation?"
        subheading="Request a confidential reputation audit and find out exactly where you stand."
        primaryCta={{ text: 'Request Free Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Confidentially', href: 'tel:+442012345678' }}
      />
    </>
  );
}
