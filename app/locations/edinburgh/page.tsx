import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Edinburgh | NetTrackers',
    description:
      'NetTrackers is a leading digital agency in Edinburgh. Expert SEO, web design, software development and reputation management for Scotland\'s capital city businesses.',
  };
}

const services = [
  {
    title: 'SEO in Edinburgh',
    description:
      'Increase your visibility in Scotland\'s capital. Our Edinburgh SEO strategies help financial services firms, tourism businesses, and professional services stand out online.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Edinburgh',
    description:
      'Elegant, high-performance websites for Edinburgh businesses. From the Royal Mile to the financial district, we create digital experiences worthy of the capital.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Edinburgh',
    description:
      'Bespoke software solutions for Edinburgh\'s thriving fintech and tech sectors. We build applications that scale with Scotland\'s ambitious businesses.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Edinburgh',
    description:
      'Safeguard your brand\'s reputation in one of Europe\'s most prestigious cities. We help Edinburgh businesses build trust and authority across digital channels.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Alistair MacKenzie',
    role: 'Managing Partner',
    company: 'Castle Street Wealth Management',
    quote:
      'NetTrackers delivered an FCA-compliant website and SEO strategy that positioned us as Edinburgh\'s leading independent wealth manager. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Fiona Stewart',
    role: 'Director',
    company: 'Festival City Events',
    quote:
      'Managing our digital presence during Edinburgh\'s festival season is crucial. NetTrackers built a system that handles traffic spikes and keeps bookings flowing year-round.',
    rating: 5,
  },
  {
    name: 'Ravi Patel',
    role: 'CTO',
    company: 'ScotFintech Ltd',
    quote:
      'The software development team at NetTrackers built a robust payment platform for our fintech startup. Their technical skill and project management were first-class.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why choose a digital agency with Edinburgh expertise?',
    a: 'Edinburgh has a unique business landscape — from its world-renowned financial services sector to its massive tourism industry during festival season. A digital partner who understands these dynamics delivers far better results.',
  },
  {
    q: 'Do you support businesses across Scotland?',
    a: 'Yes. While Edinburgh is our Scottish base, we serve businesses across Scotland including Glasgow, Aberdeen, Dundee, and the wider Central Belt.',
  },
  {
    q: 'Can you help tourism businesses in Edinburgh?',
    a: 'Absolutely. We have extensive experience with Edinburgh\'s tourism and hospitality sector, including seasonal campaign management, booking optimisation, and review management strategies.',
  },
  {
    q: 'Do you understand Scottish financial services regulations?',
    a: 'Yes. We have deep experience with FCA-compliant digital marketing for financial services firms across Edinburgh and Scotland, ensuring your campaigns meet all regulatory requirements.',
  },
  {
    q: 'How do you handle the seasonal nature of Edinburgh\'s market?',
    a: 'We build flexible strategies that adapt to Edinburgh\'s seasonal patterns — scaling campaigns during festival season and major events, whilst maintaining consistent visibility year-round.',
  },
];

export default function EdinburghPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Edinburgh',
            description:
              'Leading digital agency in Edinburgh delivering SEO, web design, software development and reputation management across Scotland.',
            areaServed: {
              '@type': 'City',
              name: 'Edinburgh',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/edinburgh',
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
              { '@type': 'ListItem', position: 3, name: 'Edinburgh', item: 'https://www.nettrackers.co.uk/locations/edinburgh' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Edinburgh"
        description="Scotland's capital is a city of prestige, culture, and financial power. From the historic Old Town to the bustling financial district, we help Edinburgh businesses command attention online with strategies as refined as the city itself."
        stat={{ value: '150+', label: 'Scottish businesses transformed digitally' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Edinburgh Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Edinburgh demands excellence in everything — including digital marketing. Here&apos;s why the capital trusts us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Services Specialists',
                desc: 'Edinburgh is the UK\'s second-largest financial centre. We bring specialist knowledge of compliant, effective digital marketing for banks, asset managers, and fintech firms.',
              },
              {
                title: 'Festival & Tourism Expertise',
                desc: 'With the world\'s largest arts festival and millions of annual visitors, we help Edinburgh\'s tourism and hospitality businesses maximise their seasonal opportunities.',
              },
              {
                title: 'Scotland-Wide Reach',
                desc: 'Our Edinburgh base gives us deep understanding of the Scottish market, enabling us to build campaigns that resonate with Scottish audiences whilst reaching UK-wide customers.',
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

      <LocalServices city="Edinburgh" services={services} />
      <LocalTestimonials city="Edinburgh" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Glasgow', href: '/locations/glasgow' },
              { name: 'Leeds', href: '/locations/leeds' },
              { name: 'Manchester', href: '/locations/manchester' },
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
        heading="Ready to Grow Your Edinburgh Business?"
        subheading="Get a free consultation and discover how we can help Scotland's finest businesses shine online."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
