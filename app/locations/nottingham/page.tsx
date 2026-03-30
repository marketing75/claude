import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Nottingham | NetTrackers',
    description:
      'NetTrackers helps Nottingham businesses grow online with expert SEO, web design, software development and reputation management. The East Midlands\' trusted digital partner.',
  };
}

const services = [
  {
    title: 'SEO in Nottingham',
    description:
      'Increase your visibility across the East Midlands and beyond. Our Nottingham SEO strategies are crafted for the city\'s creative industries, retail brands, and professional services firms.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Nottingham',
    description:
      'Creative, conversion-focused websites for Nottingham businesses. From the Lace Market to the Creative Quarter, we build digital experiences that tell your story.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Nottingham',
    description:
      'Bespoke software for Nottingham\'s growing tech community. We develop applications that help East Midlands businesses innovate and operate more efficiently.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Nottingham',
    description:
      'Build a trusted digital brand across the East Midlands. We help Nottingham businesses manage their online reputation and cultivate positive visibility.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Daniel Frost',
    role: 'Creative Director',
    company: 'Lace Market Studios',
    quote:
      'NetTrackers transformed our digital presence with a website that truly represents our creative agency. Enquiries from our ideal clients have increased by 230% in just five months.',
    rating: 5,
  },
  {
    name: 'Claire Woodhouse',
    role: 'Operations Manager',
    company: 'East Midlands Logistics',
    quote:
      'The software NetTrackers built for our fleet management has saved us countless hours. Their understanding of logistics operations was impressive from the first meeting.',
    rating: 5,
  },
  {
    name: 'Samuel Okafor',
    role: 'Director',
    company: 'Trent Valley Healthcare',
    quote:
      'Our healthcare practice needed a compliant, patient-friendly website. NetTrackers delivered exactly that, and our online appointment bookings have doubled.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why is Nottingham a growing digital hub?',
    a: 'Nottingham is the East Midlands\' creative capital, with a thriving Creative Quarter, two major universities producing digital talent, and a growing tech startup community. The city offers excellent connectivity and a lower cost base than London, attracting ambitious businesses.',
  },
  {
    q: 'Do you serve the wider East Midlands?',
    a: 'Yes. While Nottingham is our East Midlands base, we work with businesses across Derby, Leicester, Lincoln, and the wider region.',
  },
  {
    q: 'Can you help creative businesses in Nottingham?',
    a: 'Absolutely. Nottingham\'s creative industries — from design agencies in the Lace Market to independent brands in Hockley — are a core specialism. We understand the unique challenges of marketing creative businesses.',
  },
  {
    q: 'Do you work with Nottingham\'s universities?',
    a: 'Yes. We have experience working with educational institutions and university spin-offs in the region, helping with student recruitment, course visibility, and commercial outreach.',
  },
  {
    q: 'How do you measure success for Nottingham businesses?',
    a: 'We agree clear KPIs at the outset — whether that\'s organic traffic, leads, conversions, or revenue. Every client receives transparent monthly reporting showing exactly how their investment is performing.',
  },
];

export default function NottinghamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Nottingham',
            description:
              'Trusted digital agency in Nottingham offering SEO, web design, software development and online reputation management across the East Midlands.',
            areaServed: {
              '@type': 'City',
              name: 'Nottingham',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/nottingham',
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
              { '@type': 'ListItem', position: 3, name: 'Nottingham', item: 'https://www.nettrackers.co.uk/locations/nottingham' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Nottingham"
        description="The East Midlands' creative hub and a city bursting with entrepreneurial energy. With a vibrant Creative Quarter, world-class universities, and a growing tech community, Nottingham businesses are ready to lead — and we're here to help them do it digitally."
        stat={{ value: '230%', label: 'Average enquiry increase for Nottingham creative businesses' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Nottingham Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Nottingham is a city that punches above its weight. We help businesses do the same online.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creative Quarter Connection',
                desc: 'Nottingham\'s creative industries are flourishing. We bring specialist knowledge of marketing creative businesses, from branding agencies to independent retail brands.',
              },
              {
                title: 'University Ecosystem',
                desc: 'With the University of Nottingham and Nottingham Trent University, the city produces exceptional talent and innovative spin-offs. We help these businesses find their audience.',
              },
              {
                title: 'East Midlands Reach',
                desc: 'Our strategies extend across the entire East Midlands, helping Nottingham businesses attract customers from Derby, Leicester, Lincoln, and the wider region.',
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

      <LocalServices city="Nottingham" services={services} />
      <LocalTestimonials city="Nottingham" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Sheffield', href: '/locations/sheffield' },
              { name: 'Birmingham', href: '/locations/birmingham' },
              { name: 'Leeds', href: '/locations/leeds' },
              { name: 'Bristol', href: '/locations/bristol' },
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
        heading="Ready to Grow Your Nottingham Business?"
        subheading="Get a free consultation and discover how we can help your East Midlands business reach its digital potential."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
