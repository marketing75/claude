import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in London | NetTrackers',
    description:
      'NetTrackers is a leading digital agency in London. We deliver SEO, web design, software development and online reputation management to businesses across the capital.',
  };
}

const services = [
  {
    title: 'SEO in London',
    description:
      'Dominate search results in one of the world\'s most competitive markets. Our London SEO strategies are built for businesses that need to stand out in the capital.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in London',
    description:
      'Stunning, conversion-focused websites designed for London\'s fast-paced business environment. From startups in Shoreditch to corporates in the City.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in London',
    description:
      'Bespoke software solutions for London enterprises. We build scalable applications that power some of the capital\'s most innovative companies.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in London',
    description:
      'Protect and enhance your brand\'s digital reputation in the UK\'s largest market. We help London businesses build trust and credibility online.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Managing Director',
    company: 'Canary Financial Group',
    quote:
      'NetTrackers transformed our online presence completely. Within six months, our organic traffic increased by 340% and we\'re now ranking for keywords we never thought possible in the London financial services space.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Marketing',
    company: 'TechBridge Solutions',
    quote:
      'Working with a digital agency that truly understands the London tech scene has been invaluable. Their approach to our website redesign delivered a 52% improvement in lead generation.',
    rating: 5,
  },
  {
    name: 'Oliver Chen',
    role: 'Founder',
    company: 'Mayfair Wellness Clinic',
    quote:
      'As a healthcare business in central London, we needed an agency that could handle the competitive landscape. NetTrackers delivered exceptional results with a very professional approach.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Why should I choose a London-based digital agency?',
    a: 'A London-based agency understands the unique challenges of the capital\'s market — from hyper-competitive keywords to the diverse demographics across boroughs. We combine local knowledge with global best practices to deliver results.',
  },
  {
    q: 'How much does SEO cost in London?',
    a: 'SEO investment in London varies based on your industry and competition level. We offer tailored packages starting from affordable monthly retainers, with transparent pricing and clear ROI metrics from day one.',
  },
  {
    q: 'Do you work with businesses across all London boroughs?',
    a: 'Absolutely. We work with businesses across Greater London, from the City and Westminster to outer boroughs like Richmond, Croydon, and Barnet. Our local SEO strategies are tailored to your specific area.',
  },
  {
    q: 'How long before I see results from digital marketing in London?',
    a: 'While some improvements can be seen within weeks, meaningful SEO results in London\'s competitive market typically take 3-6 months. PPC and paid social campaigns can deliver results much sooner.',
  },
  {
    q: 'Can you help my London business compete nationally?',
    a: 'Yes. Many of our London clients start with local visibility and scale to national or international campaigns. We build strategies that grow with your business ambitions.',
  },
];

export default function LondonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers London',
            description:
              'Leading digital agency in London offering SEO, web design, software development and online reputation management.',
            areaServed: {
              '@type': 'City',
              name: 'London',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/london',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.nettrackers.co.uk/locations' },
              { '@type': 'ListItem', position: 3, name: 'London', item: 'https://www.nettrackers.co.uk/locations/london' },
            ],
          }),
        }}
      />

      <LocationHero
        city="London"
        description="At the heart of UK business, London demands digital excellence. From the financial district to the thriving tech hub of Shoreditch, we help London businesses achieve outstanding online growth with data-driven strategies."
        stat={{ value: '340%', label: 'Average organic traffic increase for London clients' }}
      />

      {/* Why London Businesses Choose NetTrackers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why London Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              We understand the pace and ambition of London business. Here&apos;s why companies across the capital trust us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Capital-Grade Expertise',
                desc: 'Our team has deep experience with London\'s most competitive sectors, including finance, legal, tech, and professional services.',
              },
              {
                title: 'Local Market Knowledge',
                desc: 'We understand London\'s diverse boroughs and demographics, crafting strategies that resonate with your specific target audience across the capital.',
              },
              {
                title: 'Proven Track Record',
                desc: 'From FTSE-listed companies to ambitious startups, we\'ve delivered measurable growth for hundreds of London businesses.',
              },
            ].map((point) => (
              <div key={point.title} className="text-center p-8">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalServices city="London" services={services} />
      <LocalTestimonials city="London" testimonials={testimonials} />

      {/* Nearby Cities */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Birmingham', href: '/locations/birmingham' },
              { name: 'Bristol', href: '/locations/bristol' },
              { name: 'Manchester', href: '/locations/manchester' },
              { name: 'Leeds', href: '/locations/leeds' },
            ].map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="px-6 py-3 bg-gray-50 rounded-full font-body font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
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
        heading="Ready to Grow Your London Business?"
        subheading="Get a free consultation and discover how we can help your business thrive in the capital."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
