import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/sections/service/ServiceHero';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Web Design & Development Services | NetTrackers',
    description:
      'Professional web design and development services that convert visitors into customers. Custom websites, e-commerce, WordPress, landing pages and mobile apps built for performance.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development' },
  };
}

const childServices = [
  {
    title: 'Website Design',
    description: 'Bespoke, brand-aligned designs that captivate visitors and drive engagement from the first click.',
    href: '/services/web-design-development/website-design',
  },
  {
    title: 'Web Development',
    description: 'High-performance, standards-compliant development using the latest frameworks and best practices.',
    href: '/services/web-design-development/web-development',
  },
  {
    title: 'E-Commerce Development',
    description: 'Scalable online stores with seamless checkout flows, inventory management and payment integration.',
    href: '/services/web-design-development/ecommerce-development',
  },
  {
    title: 'Landing Page Design',
    description: 'Conversion-optimised landing pages that turn paid traffic into leads, sign-ups and sales.',
    href: '/services/web-design-development/landing-page-design',
  },
  {
    title: 'Website Redesign',
    description: 'Modernise your existing website with improved UX, faster load times and a fresh visual identity.',
    href: '/services/web-design-development/website-redesign',
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins that give you full control over your content and functionality.',
    href: '/services/web-design-development/wordpress-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that extend your brand to iOS and Android devices.',
    href: '/services/web-design-development/mobile-app-development',
  },
];

const stats = [
  { value: '200+', label: 'Websites Built' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '3\u00d7', label: 'More Conversions' },
];

export default function WebDesignDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development Services',
    description:
      'Professional web design and development services that convert visitors into customers.',
    provider: {
      '@type': 'Organization',
      name: 'NetTrackers',
      url: 'https://www.nettrackers.co.uk',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    url: 'https://www.nettrackers.co.uk/services/web-design-development',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero
        title="Web Design & Development That Converts Visitors into Customers"
        description="We design and build stunning, high-performance websites that do more than look good — they generate leads, drive sales and grow your business. From bespoke brochure sites to complex e-commerce platforms, every project is crafted for speed, accessibility and measurable results."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
        ]}
        ctaPrimary={{ text: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ text: 'View Our Work', href: '/portfolio' }}
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
              End-to-End Web Solutions for Ambitious Brands
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Whether you need a brand-new website, a complete redesign or a custom web
              application, our team handles every stage — from strategy and wireframing through
              to design, development, testing and launch. We combine creative design thinking
              with technical excellence to deliver websites that perform across every device and
              browser.
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
        heading="Ready to Build Your Dream Website?"
        subheading="Let's discuss your project and create something extraordinary together."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
