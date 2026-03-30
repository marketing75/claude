import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/sections/service/ServiceHero';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Custom Software Development | NetTrackers',
    description:
      'Bespoke CRM, ERP, SaaS and API development tailored to your business. We build custom software solutions that streamline operations and accelerate growth.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development' },
  };
}

const childServices = [
  {
    title: 'Custom CRM Development',
    description: 'Purpose-built customer relationship management systems that mirror your exact sales and support workflows.',
    href: '/services/software-development/custom-crm',
  },
  {
    title: 'Custom ERP Development',
    description: 'Enterprise resource planning software designed to unify finance, inventory, HR and operations in one platform.',
    href: '/services/software-development/custom-erp',
  },
  {
    title: 'CRM Integration',
    description: 'Connect your CRM to marketing tools, accounting software and third-party platforms for seamless data flow.',
    href: '/services/software-development/crm-integration',
  },
  {
    title: 'ERP Integration',
    description: 'Integrate your ERP with warehousing, e-commerce and supply chain systems to eliminate manual processes.',
    href: '/services/software-development/erp-integration',
  },
  {
    title: 'SaaS Development',
    description: 'Scalable, multi-tenant SaaS applications built for recurring revenue and rapid user growth.',
    href: '/services/software-development/saas-development',
  },
  {
    title: 'API Development',
    description: 'Robust, well-documented APIs that power integrations and unlock your data for partners and internal tools.',
    href: '/services/software-development/api-development',
  },
];

const stats = [
  { value: '50+', label: 'Software Projects Delivered' },
  { value: '99.95%', label: 'System Uptime' },
  { value: '40%', label: 'Average Efficiency Gain' },
];

export default function SoftwareDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development',
    description:
      'Bespoke CRM, ERP, SaaS and API development tailored to your business.',
    provider: {
      '@type': 'Organization',
      name: 'NetTrackers',
      url: 'https://www.nettrackers.co.uk',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    url: 'https://www.nettrackers.co.uk/services/software-development',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero
        title="Bespoke CRM & ERP Software Built for Your Business"
        description="Off-the-shelf software forces you to adapt your processes to the tool. We do the opposite — building custom CRM, ERP, SaaS and API solutions that adapt to the way you actually work. Every feature is designed around your workflows, your data and your growth targets, so you get a system that scales with you rather than holding you back."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Software Development', href: '/services/software-development' },
        ]}
        ctaPrimary={{ text: 'Discuss Your Project', href: '/contact' }}
        ctaSecondary={{ text: 'View Case Studies', href: '/case-studies' }}
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
              Software That Works the Way You Do
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              From initial discovery workshops to post-launch support, our development team
              follows an agile methodology that keeps you in control at every sprint. We
              specialise in CRM and ERP systems, SaaS products and API-first architectures —
              all built with clean code, automated testing and infrastructure designed for
              enterprise-grade reliability.
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
        heading="Ready to Build Your Custom Solution?"
        subheading="Tell us about your requirements and we'll scope a solution that fits your budget and timeline."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
