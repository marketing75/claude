import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Glasgow | NetTrackers',
    description:
      'NetTrackers provides expert SEO, web design, software development and digital marketing for Glasgow businesses. Driving growth across Scotland\'s largest city.',
  };
}

const services = [
  {
    title: 'SEO in Glasgow',
    description:
      'Dominate search results across Scotland\'s largest city. Our Glasgow SEO strategies target the city\'s diverse business community, from creative agencies to industrial enterprises.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Glasgow',
    description:
      'Bold, impactful websites for Glasgow businesses. Reflecting the city\'s creative energy, we design digital experiences that engage visitors and drive action.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Glasgow',
    description:
      'Custom software built for Glasgow\'s ambitious businesses. From the Merchant City to the Innovation District, we deliver applications that power growth and efficiency.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Glasgow',
    description:
      'Build and protect your brand across Glasgow\'s dynamic market. We help businesses establish a positive, authoritative digital presence that attracts loyal customers.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Craig Henderson',
    role: 'Managing Director',
    company: 'Clyde Engineering Group',
    quote:
      'NetTrackers helped us modernise our digital presence after 40 years in business. The new website and SEO strategy have brought in a completely new generation of customers.',
    rating: 5,
  },
  {
    name: 'Isla MacLeod',
    role: 'Head of Marketing',
    company: 'Glasgow Creative Collective',
    quote:
      'Working with NetTrackers felt like a natural fit for our creative agency. They understood our vision and delivered a digital strategy that truly reflects Glasgow\'s creative spirit.',
    rating: 5,
  },
  {
    name: 'Nadia Kowalski',
    role: 'Founder',
    company: 'West End Wellness',
    quote:
      'Our clinic went from being invisible online to the top Google result for key health searches in Glasgow. The team made the whole process effortless.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'What makes Glasgow a unique digital market?',
    a: 'Glasgow is Scotland\'s largest city and its commercial heart, with a diverse economy spanning creative industries, engineering, healthcare, and a rapidly growing tech sector. The city\'s regeneration has created exciting opportunities for digitally-savvy businesses.',
  },
  {
    q: 'Do you serve businesses across the Central Belt?',
    a: 'Yes. We work with businesses across the Central Belt, including Glasgow, Edinburgh, Stirling, and the wider West of Scotland, providing cohesive digital strategies that reach your target audience.',
  },
  {
    q: 'Can you help established Glasgow businesses go digital?',
    a: 'Absolutely. Many of our Glasgow clients are well-established businesses undergoing digital transformation. We specialise in helping traditional businesses build a powerful online presence without losing their heritage.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'While SEO is a long-term investment typically showing significant results within 3-6 months, we also implement quick-win strategies to deliver early momentum. Paid campaigns can generate results within the first week.',
  },
];

export default function GlasgowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Glasgow',
            description:
              'Expert digital agency in Glasgow offering SEO, web design, software development and online reputation management across Scotland.',
            areaServed: {
              '@type': 'City',
              name: 'Glasgow',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/glasgow',
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
              { '@type': 'ListItem', position: 3, name: 'Glasgow', item: 'https://www.nettrackers.co.uk/locations/glasgow' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Glasgow"
        description="Scotland's largest city is a powerhouse of creativity, industry, and regeneration. From the Merchant City to the Innovation District, we help Glasgow businesses build a commanding digital presence that matches the city's bold character."
        stat={{ value: '420%', label: 'Average organic growth for Glasgow clients' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Glasgow Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Glasgow is bold, ambitious, and forward-thinking. So are our digital strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creative City Expertise',
                desc: 'Glasgow\'s creative industries are world-renowned. We bring marketing strategies that connect with the city\'s vibrant artistic and cultural community.',
              },
              {
                title: 'Regeneration-Ready',
                desc: 'Glasgow\'s ongoing regeneration is creating new opportunities. We help businesses position themselves at the forefront of the city\'s exciting growth story.',
              },
              {
                title: 'Industrial Heritage, Digital Future',
                desc: 'We specialise in helping Glasgow\'s established industries transition to digital, preserving legacy whilst building modern online capabilities.',
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

      <LocalServices city="Glasgow" services={services} />
      <LocalTestimonials city="Glasgow" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Edinburgh', href: '/locations/edinburgh' },
              { name: 'Liverpool', href: '/locations/liverpool' },
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
        heading="Ready to Grow Your Glasgow Business?"
        subheading="Get a free consultation and discover how we can help your business thrive across Scotland's largest city."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
