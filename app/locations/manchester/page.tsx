import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Manchester | NetTrackers',
    description:
      'NetTrackers delivers expert digital marketing, SEO, web design and software development for Manchester businesses. Powering growth across the Northern Powerhouse.',
  };
}

const services = [
  {
    title: 'SEO in Manchester',
    description:
      'Boost your visibility across Greater Manchester and beyond. Our SEO strategies help Manchester businesses compete in one of the UK\'s fastest-growing digital economies.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Manchester',
    description:
      'Modern, responsive websites that reflect Manchester\'s innovative spirit. From MediaCityUK startups to established Northern Quarter brands, we build sites that convert.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Manchester',
    description:
      'Custom software solutions for Manchester\'s thriving tech ecosystem. We build applications that scale alongside your ambitions in the Northern Powerhouse.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Manchester',
    description:
      'Strengthen your brand\'s online presence across Manchester\'s competitive landscape. We help local businesses earn trust and manage their digital reputation effectively.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'NorthTech Innovations',
    quote:
      'NetTrackers understood our vision for growth in Manchester\'s tech scene. They rebuilt our website and SEO strategy, resulting in a 280% increase in qualified leads within four months.',
    rating: 5,
  },
  {
    name: 'David Okonkwo',
    role: 'Marketing Manager',
    company: 'Deansgate Property Group',
    quote:
      'The team\'s knowledge of Manchester\'s property market was impressive. They created a digital strategy that positioned us as the go-to agency in Greater Manchester.',
    rating: 5,
  },
  {
    name: 'Emma Thornton',
    role: 'Founder',
    company: 'Ancoats Coffee Co.',
    quote:
      'As a growing independent brand in Manchester, we needed an agency that could match our pace. NetTrackers delivered a stunning e-commerce site that increased online sales by 190%.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'What makes Manchester a strong market for digital growth?',
    a: 'Manchester is the UK\'s fastest-growing tech city outside London, home to MediaCityUK, a booming startup scene, and major corporate headquarters. This creates both opportunity and competition, making professional digital marketing essential.',
  },
  {
    q: 'Do you offer local SEO for Manchester businesses?',
    a: 'Yes. Our local SEO strategies target Manchester-specific searches, Google Maps optimisation, and location-based keywords to help you attract customers across Greater Manchester and surrounding areas.',
  },
  {
    q: 'Can you help Manchester startups on a limited budget?',
    a: 'Absolutely. We offer flexible packages designed for Manchester\'s thriving startup community, delivering maximum impact without unnecessary spend. We grow with you as your business scales.',
  },
  {
    q: 'How do you stay current with Manchester\'s digital landscape?',
    a: 'We\'re actively embedded in Manchester\'s digital community, attending local networking events, monitoring regional trends, and maintaining partnerships across the Northern Powerhouse ecosystem.',
  },
];

export default function ManchesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Manchester',
            description:
              'Expert digital agency in Manchester delivering SEO, web design, software development and online reputation management.',
            areaServed: {
              '@type': 'City',
              name: 'Manchester',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/manchester',
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
              { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://www.nettrackers.co.uk/locations/manchester' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Manchester"
        description="The Northern Powerhouse deserves a digital partner to match. From MediaCityUK to the thriving startup scene in the Northern Quarter, we help Manchester businesses achieve remarkable online growth."
        stat={{ value: '280%', label: 'Average lead increase for Manchester clients' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Manchester Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Manchester is a city that moves fast. We keep pace with strategies built for growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Northern Powerhouse Specialists',
                desc: 'We understand Manchester\'s unique position as the UK\'s second digital economy, helping businesses capitalise on the region\'s rapid growth.',
              },
              {
                title: 'Startup-Friendly Approach',
                desc: 'Manchester\'s thriving startup ecosystem needs agile partners. We offer flexible, scalable solutions that grow alongside your business.',
              },
              {
                title: 'Cross-Industry Experience',
                desc: 'From media companies at Salford Quays to retailers on Market Street, we\'ve delivered results across Manchester\'s diverse business landscape.',
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

      <LocalServices city="Manchester" services={services} />
      <LocalTestimonials city="Manchester" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Leeds', href: '/locations/leeds' },
              { name: 'Liverpool', href: '/locations/liverpool' },
              { name: 'Sheffield', href: '/locations/sheffield' },
              { name: 'Birmingham', href: '/locations/birmingham' },
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
        heading="Ready to Grow Your Manchester Business?"
        subheading="Get a free consultation and discover how we can help your business thrive in the Northern Powerhouse."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
