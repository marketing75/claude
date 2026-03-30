import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'E-Commerce Marketing Services | NetTrackers',
    description:
      'Expert e-commerce and retail digital marketing. We help online retailers increase conversions, improve product visibility, and scale revenue with SEO, shopping campaigns, and conversion optimisation.',
  };
}

const painPoints = [
  {
    title: 'Conversion Rates Are Stubbornly Low',
    description:
      'The average UK e-commerce conversion rate sits below 3%. Without systematic optimisation, the vast majority of your traffic leaves without purchasing — wasting your marketing budget.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Product Visibility in a Crowded Marketplace',
    description:
      'With thousands of competitors on Google Shopping and marketplaces, getting your products seen by the right buyers at the right time requires specialist e-commerce SEO and advertising expertise.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Shopping Campaigns Demand Constant Optimisation',
    description:
      'Google Shopping, Meta catalogues, and marketplace advertising require ongoing feed optimisation, bid management, and product data accuracy. Poor management burns budget fast.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'Conversion Rate Optimisation (CRO)',
    description: 'We systematically test and improve every element of your purchase journey — from product pages to checkout — increasing the percentage of visitors who become buyers.',
  },
  {
    title: 'E-Commerce SEO',
    description: 'We optimise your product pages, category structure, and technical foundation to drive organic traffic from high-intent shopping searches.',
  },
  {
    title: 'Shopping Campaign Management',
    description: 'Expert management of Google Shopping, Performance Max, and social commerce campaigns with continuous feed optimisation and bid strategy refinement.',
  },
  {
    title: 'Product Feed Optimisation',
    description: 'We clean, enrich, and optimise your product data feeds to improve visibility, reduce disapprovals, and maximise return on ad spend across all channels.',
  },
];

const stats = [
  { value: '47%', label: 'average conversion rate improvement across our e-commerce clients' },
  { value: '6.8x', label: 'average return on ad spend for optimised shopping campaigns' },
  { value: '£12M+', label: 'in additional e-commerce revenue generated for UK retailers' },
];

const faqs = [
  {
    q: 'How do you improve e-commerce conversion rates?',
    a: 'We use a data-driven CRO methodology combining heatmaps, session recordings, A/B testing, and user research to identify friction points in your purchase journey. We then systematically test improvements to product pages, navigation, checkout flow, and calls to action.',
  },
  {
    q: 'Which e-commerce platforms do you work with?',
    a: 'We have experience with all major platforms, including Shopify, WooCommerce, Magento, BigCommerce, and custom-built e-commerce solutions. Our strategies are platform-agnostic and focused on results.',
  },
  {
    q: 'Can you help with Google Shopping and Performance Max campaigns?',
    a: 'Absolutely. We specialise in product feed optimisation, Shopping campaign structure, and Performance Max management. We ensure your products appear in the right searches with compelling listings that drive clicks and sales.',
  },
  {
    q: 'Do you offer marketplace optimisation?',
    a: 'Yes. We help retailers optimise their presence on Amazon, eBay, and other marketplaces alongside their own website strategy, ensuring a cohesive multi-channel approach.',
  },
  {
    q: 'How quickly can you improve our e-commerce performance?',
    a: 'CRO and paid campaign optimisation can show measurable improvements within weeks. SEO results typically take 3-6 months to compound, but we implement a blended strategy that delivers both quick wins and sustainable long-term growth.',
  },
];

export default function EcommerceRetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.nettrackers.co.uk/industries' },
              { '@type': 'ListItem', position: 3, name: 'E-Commerce & Retail', item: 'https://www.nettrackers.co.uk/industries/ecommerce-retail' },
            ],
          }),
        }}
      />

      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">E-Commerce &amp; Retail Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sell More Online with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Data-Driven E-Commerce Marketing</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help online retailers and e-commerce brands increase conversions, improve product visibility, and scale revenue through expert SEO, shopping campaign management, and conversion optimisation.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-blue-500 text-white hover:shadow-[0_8px_30px_rgba(0,153,255,0.4)] px-9 py-4 text-lg">Get a Free Consultation</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-transparent text-white border-2 border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] px-9 py-4 text-lg">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Digital Challenges E-Commerce Businesses Face</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-5">{point.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">Our Solution</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">How NetTrackers Drives E-Commerce Growth</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">We combine technical e-commerce expertise with data-driven marketing to help retailers sell more, more efficiently.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-white/60 font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">E-Commerce Digital Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'E-Commerce SEO', desc: 'Optimise product pages, category structures, and technical foundations to drive organic traffic from high-intent shopping searches.', href: '/services/seo' },
              { title: 'E-Commerce Web Design', desc: 'Conversion-optimised online stores with streamlined checkout flows, mobile-first design, and seamless payment integrations.', href: '/services/web-design-development' },
              { title: 'E-Commerce Software', desc: 'Custom inventory management, order processing, and marketplace integration software built for scaling retailers.', href: '/services/software-development' },
              { title: 'Brand & Review Management', desc: 'Build customer trust through proactive review management, social proof strategies, and consistent brand messaging across channels.', href: '/services/orm' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">{service.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed mb-4">{service.desc}</p>
                <span className="text-blue-500 font-body font-semibold text-sm">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Scale Your E-Commerce Revenue?"
        subheading="Get a free consultation and discover how data-driven marketing can transform your online sales performance."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
