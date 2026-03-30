import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Liverpool | NetTrackers',
    description:
      'NetTrackers delivers expert digital marketing, SEO, web design and software development for Liverpool businesses. Powering growth across Merseyside and beyond.',
  };
}

const services = [
  {
    title: 'SEO in Liverpool',
    description:
      'Boost your search visibility across Merseyside and the North West. Our Liverpool SEO strategies help businesses in this culturally rich city attract more customers online.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Liverpool',
    description:
      'Dynamic, brand-forward websites for Liverpool businesses. From the waterfront to the Baltic Triangle, we create digital experiences that capture the city\'s vibrant energy.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Liverpool',
    description:
      'Custom software solutions for Liverpool\'s growing digital economy. We build applications that help Merseyside businesses operate smarter and scale faster.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Liverpool',
    description:
      'Strengthen your digital reputation across Liverpool and Merseyside. We help businesses build trust, manage reviews, and showcase their best online.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Michael O\'Brien',
    role: 'Director',
    company: 'Waterfront Hospitality Group',
    quote:
      'NetTrackers understood Liverpool\'s tourism and hospitality landscape perfectly. Our hotel bookings through organic search have increased by 210% since we started working together.',
    rating: 5,
  },
  {
    name: 'Jessica Ngozi',
    role: 'Marketing Manager',
    company: 'Baltic Creative CIC',
    quote:
      'The digital strategy NetTrackers developed for our creative hub was exactly what we needed. They captured the spirit of Liverpool\'s creative community brilliantly.',
    rating: 5,
  },
  {
    name: 'Paul Gallagher',
    role: 'Owner',
    company: 'Mersey Logistics',
    quote:
      'Our logistics business needed a modern website and strong online presence. NetTrackers delivered both, and our enquiry rate has never been higher.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why is Liverpool an exciting digital market?',
    a: 'Liverpool is experiencing a digital renaissance, with the Baltic Triangle emerging as a major creative and tech hub. The city\'s rich cultural heritage, UNESCO World Heritage waterfront, and growing digital economy make it an exciting market for ambitious businesses.',
  },
  {
    q: 'Do you work with tourism and hospitality businesses in Liverpool?',
    a: 'Yes. Liverpool\'s tourism sector is one of our key specialisms in the region. We help hotels, restaurants, attractions, and event venues maximise their digital presence and booking rates.',
  },
  {
    q: 'Can you help Liverpool businesses compete nationally?',
    a: 'Absolutely. While we optimise for local visibility first, many of our Liverpool clients have scaled to national and international audiences with our help. We build strategies that grow with your ambitions.',
  },
  {
    q: 'Do you serve the wider Merseyside area?',
    a: 'Yes. We work with businesses across Merseyside, including Wirral, Southport, St Helens, and Warrington, providing comprehensive digital marketing services to the wider region.',
  },
];

export default function LiverpoolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Liverpool',
            description:
              'Expert digital agency in Liverpool offering SEO, web design, software development and online reputation management across Merseyside.',
            areaServed: {
              '@type': 'City',
              name: 'Liverpool',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/liverpool',
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
              { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://www.nettrackers.co.uk/locations/liverpool' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Liverpool"
        description="A city with a proud maritime heritage and a thriving digital future. From the iconic waterfront to the creative hub of the Baltic Triangle, we help Liverpool businesses build a powerful online presence that honours the city's character."
        stat={{ value: '210%', label: 'Average booking increase for Liverpool hospitality clients' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Liverpool Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Liverpool&apos;s resilience and creativity inspire everything we do for businesses across Merseyside.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Capital Expertise',
                desc: 'Liverpool\'s cultural richness — from music to art to sport — creates unique marketing opportunities. We help businesses leverage the city\'s world-famous brand.',
              },
              {
                title: 'Tourism & Hospitality Focus',
                desc: 'With millions of visitors annually, Liverpool\'s tourism sector needs expert digital marketing. We specialise in seasonal campaigns and booking optimisation.',
              },
              {
                title: 'Baltic Triangle Network',
                desc: 'We\'re connected to Liverpool\'s thriving creative and tech community, giving us insight into the city\'s rapidly evolving digital landscape.',
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

      <LocalServices city="Liverpool" services={services} />
      <LocalTestimonials city="Liverpool" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Manchester', href: '/locations/manchester' },
              { name: 'Leeds', href: '/locations/leeds' },
              { name: 'Sheffield', href: '/locations/sheffield' },
              { name: 'Glasgow', href: '/locations/glasgow' },
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
        heading="Ready to Grow Your Liverpool Business?"
        subheading="Get a free consultation and discover how we can help your Merseyside business thrive in the digital age."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
