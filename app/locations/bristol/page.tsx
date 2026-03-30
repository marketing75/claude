import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Bristol | NetTrackers',
    description:
      'NetTrackers delivers expert digital marketing, SEO, web design and software development for Bristol businesses. The South West\'s trusted digital growth partner.',
  };
}

const services = [
  {
    title: 'SEO in Bristol',
    description:
      'Climb the rankings in the South West\'s most dynamic city. Our Bristol SEO campaigns are designed for creative agencies, tech companies, and ambitious local businesses.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Bristol',
    description:
      'Creative, purpose-driven websites for Bristol\'s vibrant business community. From harbourside startups to Clifton consultancies, we build sites that capture your brand.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Bristol',
    description:
      'Custom software for Bristol\'s thriving tech and aerospace sectors. We develop scalable, reliable applications that solve real business problems.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Bristol',
    description:
      'Build a strong digital reputation in the South West. We help Bristol businesses cultivate positive online visibility and manage reviews effectively.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Sophie Cartwright',
    role: 'Creative Director',
    company: 'Harbour Studio Design',
    quote:
      'As a creative agency in Bristol, we needed a digital partner who understood design-led businesses. NetTrackers delivered a website that\'s both beautiful and brilliantly optimised.',
    rating: 5,
  },
  {
    name: 'Tom Richardson',
    role: 'CTO',
    company: 'AeroTech Solutions',
    quote:
      'NetTrackers built a bespoke project management platform for our aerospace consultancy. Their technical expertise and understanding of our sector was outstanding.',
    rating: 5,
  },
  {
    name: 'Katrina Osei',
    role: 'Owner',
    company: 'Clifton Wellbeing Centre',
    quote:
      'Since working with NetTrackers, our organic bookings have tripled. They made the entire process straightforward and the results speak for themselves.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why is Bristol a great place to grow a digital business?',
    a: 'Bristol is the South West\'s tech capital, home to a thriving creative industries scene, world-class aerospace companies, and one of the UK\'s highest concentrations of tech talent. It\'s a city that values innovation and creativity.',
  },
  {
    q: 'Do you serve the wider South West region?',
    a: 'Yes. While Bristol is our South West hub, we work with businesses across Bath, Exeter, Gloucester, Swindon, and the wider region.',
  },
  {
    q: 'Can you work with creative and tech businesses in Bristol?',
    a: 'Absolutely. Bristol\'s creative and tech sectors are among our core specialisms. We understand the unique challenges and opportunities these industries present.',
  },
  {
    q: 'How do you approach SEO for Bristol businesses?',
    a: 'We begin with thorough competitor analysis within the Bristol market, identify high-value keywords, and build a strategy that combines technical SEO, content marketing, and local optimisation tailored to your specific industry.',
  },
];

export default function BristolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Bristol',
            description:
              'Expert digital agency in Bristol delivering SEO, web design, software development and reputation management across the South West.',
            areaServed: {
              '@type': 'City',
              name: 'Bristol',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/bristol',
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
              { '@type': 'ListItem', position: 3, name: 'Bristol', item: 'https://www.nettrackers.co.uk/locations/bristol' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Bristol"
        description="The creative heart of the South West and a thriving tech hub. From world-leading aerospace firms to independent creative agencies, Bristol businesses deserve a digital partner that matches their innovative spirit."
        stat={{ value: '3x', label: 'Average booking increase for Bristol clients' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Bristol Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Bristol thrives on creativity and innovation. Our digital strategies are built with that same ethos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creative Industries Focus',
                desc: 'Bristol is renowned for its creative sector. We bring marketing strategies that resonate with design-led, innovative businesses across the city.',
              },
              {
                title: 'Tech & Aerospace Knowledge',
                desc: 'With major aerospace and deep-tech companies in the region, we understand the complex requirements of technical B2B marketing in the South West.',
              },
              {
                title: 'South West Reach',
                desc: 'Our strategies extend across the entire South West, helping Bristol businesses attract customers from Bath, Devon, Somerset, and beyond.',
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

      <LocalServices city="Bristol" services={services} />
      <LocalTestimonials city="Bristol" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'London', href: '/locations/london' },
              { name: 'Birmingham', href: '/locations/birmingham' },
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
        heading="Ready to Grow Your Bristol Business?"
        subheading="Get a free consultation and discover how we can help your South West business thrive online."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
