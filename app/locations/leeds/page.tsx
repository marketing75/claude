import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Leeds | NetTrackers',
    description:
      'NetTrackers helps Leeds businesses grow online with expert SEO, web design, software development and reputation management. Yorkshire\'s trusted digital partner.',
  };
}

const services = [
  {
    title: 'SEO in Leeds',
    description:
      'Increase your visibility across Yorkshire and beyond. Our Leeds SEO strategies are designed for the city\'s competitive financial services, legal, and retail sectors.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Leeds',
    description:
      'Beautifully crafted websites for Leeds businesses. Whether you\'re based in the city centre or the wider Leeds City Region, we build digital experiences that deliver results.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Leeds',
    description:
      'Bespoke software for Leeds\' growing digital sector. From fintech applications to enterprise platforms, we deliver solutions that drive efficiency and growth.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Leeds',
    description:
      'Protect your brand in Yorkshire\'s largest city. We help Leeds businesses build a positive digital presence that attracts customers and inspires confidence.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Andrew Pemberton',
    role: 'Director',
    company: 'Yorkshire Financial Advisors',
    quote:
      'NetTrackers understood the nuances of financial services marketing in Leeds. Their SEO work has made us the most visible independent financial advisory in the region.',
    rating: 5,
  },
  {
    name: 'Hannah Clarke',
    role: 'Head of Digital',
    company: 'Leeds Retail Collective',
    quote:
      'Our e-commerce platform needed a complete overhaul. NetTrackers delivered a site that not only looks fantastic but has increased our conversion rate by 67% year on year.',
    rating: 5,
  },
  {
    name: 'Marcus Greenwood',
    role: 'Founder',
    company: 'Headingley Health Clinic',
    quote:
      'As a healthcare provider in Leeds, trust and visibility are everything. NetTrackers helped us rank for critical health-related searches across West Yorkshire.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why is Leeds a strong location for digital business?',
    a: 'Leeds is Yorkshire\'s largest city and a major financial services hub, home to over 30 national and international banks. The city\'s digital sector is growing rapidly, with a thriving community of tech startups and established digital businesses.',
  },
  {
    q: 'Do you work with businesses across West Yorkshire?',
    a: 'Yes. We support businesses throughout West Yorkshire, including Bradford, Wakefield, Huddersfield, and Halifax, as well as the wider Leeds City Region.',
  },
  {
    q: 'How competitive is SEO in Leeds?',
    a: 'Leeds is increasingly competitive online, particularly in financial services, legal, healthcare, and retail sectors. A professional SEO strategy is essential to stand out in this growing market.',
  },
  {
    q: 'Can you help with both B2B and B2C marketing in Leeds?',
    a: 'Absolutely. We work with both B2B enterprises in Leeds\' financial district and B2C brands across the city, tailoring our approach to your specific audience and sales cycle.',
  },
  {
    q: 'What makes NetTrackers different from other Leeds agencies?',
    a: 'We combine data-driven strategy with creative execution, and we\'re transparent about results. Every campaign includes clear reporting, honest communication, and a relentless focus on ROI.',
  },
];

export default function LeedsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Leeds',
            description:
              'Expert digital agency in Leeds offering SEO, web design, software development and online reputation management across Yorkshire.',
            areaServed: {
              '@type': 'City',
              name: 'Leeds',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/leeds',
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
              { '@type': 'ListItem', position: 3, name: 'Leeds', item: 'https://www.nettrackers.co.uk/locations/leeds' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Leeds"
        description="Yorkshire's largest city and a powerhouse of financial services. Leeds' rapidly growing digital sector demands expert strategies — and that's exactly what we deliver to businesses across the Leeds City Region."
        stat={{ value: '67%', label: 'Average conversion rate improvement for Leeds clients' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Leeds Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Leeds is a city where ambition meets opportunity. We provide the digital expertise to make it happen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Sector Expertise',
                desc: 'With Leeds being one of the UK\'s top financial centres, we bring specialist knowledge of FCA-compliant digital marketing for financial services businesses.',
              },
              {
                title: 'Yorkshire-Wide Reach',
                desc: 'Our strategies extend beyond Leeds city centre, helping businesses attract customers from across West Yorkshire and the wider region.',
              },
              {
                title: 'Data-Led Strategies',
                desc: 'Every decision is backed by data. We provide transparent reporting and clear insights that help Leeds businesses make informed marketing investments.',
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

      <LocalServices city="Leeds" services={services} />
      <LocalTestimonials city="Leeds" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Sheffield', href: '/locations/sheffield' },
              { name: 'Manchester', href: '/locations/manchester' },
              { name: 'Nottingham', href: '/locations/nottingham' },
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
        heading="Ready to Grow Your Leeds Business?"
        subheading="Get a free consultation and discover how we can help you dominate the digital landscape across Yorkshire."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
