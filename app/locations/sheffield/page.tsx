import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Sheffield | NetTrackers',
    description:
      'NetTrackers provides expert SEO, web design, software development and digital marketing for Sheffield businesses. Helping the Steel City thrive in the digital age.',
  };
}

const services = [
  {
    title: 'SEO in Sheffield',
    description:
      'Sharpen your search visibility in South Yorkshire. Our Sheffield SEO strategies help advanced manufacturing firms, university spin-offs, and local businesses reach more customers.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Sheffield',
    description:
      'Modern, purpose-built websites for Sheffield businesses. From the city centre to the Advanced Manufacturing Park, we create digital experiences that drive results.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Sheffield',
    description:
      'Bespoke software for Sheffield\'s innovation-driven economy. We build robust applications for manufacturers, healthtech startups, and everything in between.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Sheffield',
    description:
      'Build a strong digital reputation across South Yorkshire. We help Sheffield businesses earn trust, manage reviews, and establish authority in their sector.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Dr. Helen Bradshaw',
    role: 'Director',
    company: 'Sheffield Advanced Materials',
    quote:
      'NetTrackers understood our complex B2B manufacturing business from day one. Their SEO strategy has made us visible to engineers and procurement teams across the UK.',
    rating: 5,
  },
  {
    name: 'James Archer',
    role: 'Co-Founder',
    company: 'Peak District Outdoors',
    quote:
      'Our outdoor adventure business needed a website that was as dynamic as the Peak District itself. NetTrackers delivered, and our online bookings have soared by 175%.',
    rating: 5,
  },
  {
    name: 'Aisha Begum',
    role: 'Head of Marketing',
    company: 'Sheffield University Health',
    quote:
      'Working with NetTrackers on our digital strategy was a great experience. They brought fresh ideas for student recruitment and helped us reach a wider audience.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'What makes Sheffield a unique market for digital marketing?',
    a: 'Sheffield is a city reimagined — from its historic steel industry to world-leading advanced manufacturing and a thriving university ecosystem. This creates a diverse market where businesses need tailored digital strategies to reach the right audience.',
  },
  {
    q: 'Do you work with manufacturing businesses in Sheffield?',
    a: 'Yes. Sheffield\'s advanced manufacturing sector is one of our key specialisms. We understand B2B marketing for technical products and services, including content strategy, technical SEO, and lead generation.',
  },
  {
    q: 'Can you help Sheffield university spin-offs?',
    a: 'Absolutely. With two major universities, Sheffield produces innovative spin-off companies regularly. We help these businesses establish their digital presence and attract investment, customers, and talent.',
  },
  {
    q: 'Do you serve the wider South Yorkshire area?',
    a: 'Yes. We work with businesses across South Yorkshire, including Rotherham, Doncaster, and Barnsley, as well as businesses in the nearby Peak District.',
  },
  {
    q: 'How do you approach digital marketing for industrial businesses?',
    a: 'We combine technical content expertise with targeted SEO and lead generation strategies. For industrial businesses, we focus on reaching decision-makers through long-form content, industry-specific keywords, and strategic paid campaigns.',
  },
];

export default function SheffieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Sheffield',
            description:
              'Expert digital agency in Sheffield offering SEO, web design, software development and online reputation management across South Yorkshire.',
            areaServed: {
              '@type': 'City',
              name: 'Sheffield',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/sheffield',
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
              { '@type': 'ListItem', position: 3, name: 'Sheffield', item: 'https://www.nettrackers.co.uk/locations/sheffield' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Sheffield"
        description="The Steel City, reimagined for the digital age. With world-leading advanced manufacturing, two thriving universities, and a growing tech community, Sheffield businesses deserve a digital partner that understands innovation."
        stat={{ value: '175%', label: 'Average booking increase for Sheffield adventure businesses' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sheffield Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Sheffield is a city of makers and innovators. We bring that same spirit to digital marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Manufacturing Focus',
                desc: 'Sheffield is home to the UK\'s Advanced Manufacturing Research Centre. We bring specialist B2B marketing expertise to help technical businesses reach the right buyers.',
              },
              {
                title: 'University City Advantage',
                desc: 'With two major universities producing world-class research and talent, we help Sheffield businesses and institutions connect with students, academics, and partners.',
              },
              {
                title: 'Peak District Connection',
                desc: 'Sheffield\'s proximity to the Peak District creates unique opportunities for outdoor, tourism, and leisure businesses. We help them capture the adventure-seeking audience.',
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

      <LocalServices city="Sheffield" services={services} />
      <LocalTestimonials city="Sheffield" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Leeds', href: '/locations/leeds' },
              { name: 'Nottingham', href: '/locations/nottingham' },
              { name: 'Manchester', href: '/locations/manchester' },
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
        heading="Ready to Grow Your Sheffield Business?"
        subheading="Get a free consultation and discover how we can help South Yorkshire businesses forge a stronger digital future."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
