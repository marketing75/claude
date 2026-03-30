import type { Metadata } from 'next';
import Link from 'next/link';
import LocationHero from '@/components/sections/location/LocationHero';
import LocalServices from '@/components/sections/location/LocalServices';
import LocalTestimonials from '@/components/sections/location/LocalTestimonials';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Agency in Birmingham | NetTrackers',
    description:
      'NetTrackers is a trusted digital agency in Birmingham. We provide SEO, web design, software development and reputation management for businesses across the West Midlands.',
  };
}

const services = [
  {
    title: 'SEO in Birmingham',
    description:
      'Rise above the competition in the UK\'s second city. Our Birmingham SEO campaigns target both local and national audiences, driving qualified traffic to your business.',
    href: '/services/seo',
  },
  {
    title: 'Web Design in Birmingham',
    description:
      'Professional, user-focused websites for Birmingham businesses. From the Jewellery Quarter to Digbeth, we design digital experiences that reflect your brand\'s ambition.',
    href: '/services/web-design-development',
  },
  {
    title: 'Software Development in Birmingham',
    description:
      'Tailored software for Birmingham\'s growing tech sector. We build robust, scalable applications that support your operations and fuel innovation.',
    href: '/services/software-development',
  },
  {
    title: 'Online Reputation Management in Birmingham',
    description:
      'Build and protect your digital reputation across the West Midlands. We ensure your Birmingham business is represented accurately and positively online.',
    href: '/services/orm',
  },
];

const testimonials = [
  {
    name: 'Rachel Adams',
    role: 'Operations Director',
    company: 'Midlands Manufacturing Ltd',
    quote:
      'NetTrackers helped us transition from a traditional manufacturing firm to a digitally-savvy business. Our website now generates 60% of our new enquiries, up from virtually zero.',
    rating: 5,
  },
  {
    name: 'Tariq Hussain',
    role: 'Partner',
    company: 'Colmore Row Legal',
    quote:
      'In a highly competitive legal market like Birmingham, standing out online is critical. NetTrackers\' SEO strategy put us on page one for our most important practice areas.',
    rating: 5,
  },
  {
    name: 'Laura Bennett',
    role: 'Marketing Lead',
    company: 'BrumTech Hub',
    quote:
      'The software they built for our co-working space management has been transformational. Brilliant attention to detail and they truly understood our Birmingham community.',
    rating: 4,
  },
];

const faqs = [
  {
    q: 'Why is Birmingham a growing market for digital services?',
    a: 'Birmingham is experiencing a tech renaissance, with major investments like HS2, a growing startup ecosystem in Digbeth, and the city\'s position as the UK\'s second largest economy. This creates huge opportunities for digitally-minded businesses.',
  },
  {
    q: 'Do you serve the wider West Midlands?',
    a: 'Yes. While we\'re deeply rooted in Birmingham, we serve businesses across the entire West Midlands, including Wolverhampton, Coventry, Solihull, and Walsall.',
  },
  {
    q: 'How can SEO help my Birmingham business?',
    a: 'SEO helps your business appear when local customers are searching for your products or services. In a city of over one million people, ranking well on Google can be the difference between thriving and being invisible.',
  },
  {
    q: 'What industries do you specialise in for Birmingham clients?',
    a: 'We work across Birmingham\'s diverse economy, including manufacturing, professional services, retail, healthcare, education, and the city\'s rapidly expanding tech sector.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We specialise in website redesigns that preserve your existing SEO equity whilst dramatically improving user experience, performance, and conversion rates.',
  },
];

export default function BirminghamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NetTrackers Birmingham',
            description:
              'Trusted digital agency in Birmingham offering SEO, web design, software development and online reputation management.',
            areaServed: {
              '@type': 'City',
              name: 'Birmingham',
              containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
            },
            url: 'https://www.nettrackers.co.uk/locations/birmingham',
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
              { '@type': 'ListItem', position: 3, name: 'Birmingham', item: 'https://www.nettrackers.co.uk/locations/birmingham' },
            ],
          }),
        }}
      />

      <LocationHero
        city="Birmingham"
        description="The UK's second city is undergoing a digital transformation. From its proud manufacturing heritage to its growing tech sector in Digbeth, we help Birmingham businesses lead the charge online."
        stat={{ value: '200+', label: 'West Midlands businesses supported' }}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Birmingham Businesses Choose NetTrackers
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Birmingham is a city of ambition and reinvention. Our digital strategies match that energy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'West Midlands Expertise',
                desc: 'We understand Birmingham\'s unique economic landscape, from traditional manufacturing to the burgeoning tech and creative sectors transforming the city.',
              },
              {
                title: 'Heritage Meets Innovation',
                desc: 'We help established Birmingham businesses modernise their digital presence whilst preserving the trust and heritage they\'ve built over decades.',
              },
              {
                title: 'Results-Driven Approach',
                desc: 'Every strategy is built around measurable outcomes. We focus on the metrics that matter — leads, conversions, and revenue growth for your business.',
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

      <LocalServices city="Birmingham" services={services} />
      <LocalTestimonials city="Birmingham" testimonials={testimonials} />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Also Serving Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Nottingham', href: '/locations/nottingham' },
              { name: 'Sheffield', href: '/locations/sheffield' },
              { name: 'London', href: '/locations/london' },
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
        heading="Ready to Grow Your Birmingham Business?"
        subheading="Get a free consultation and discover how we can accelerate your digital growth in the West Midlands."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
