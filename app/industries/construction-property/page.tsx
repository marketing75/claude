import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Construction & Property | NetTrackers',
    description:
      'Specialist digital marketing for construction companies and property firms. Lead generation, project showcases, local SEO, and web design that wins contracts and sells properties.',
  };
}

const painPoints = [
  {
    title: 'Generating Quality Leads Is Difficult',
    description:
      'Construction and property businesses rely heavily on word-of-mouth and referrals. Without a strong digital lead generation strategy, growth is unpredictable and opportunities are missed.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: 'Showcasing Projects Effectively Online',
    description:
      'Your completed projects are your best sales tool, but many construction and property websites fail to present them in a way that inspires confidence and drives enquiries.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
  },
  {
    title: 'Local Visibility Is Critical but Overlooked',
    description:
      'Most construction and property businesses serve specific geographic areas. Without targeted local SEO, you\'re invisible to the customers and developers searching in your region.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'Construction Lead Generation',
    description: 'We build systematic digital lead generation strategies that deliver a consistent pipeline of qualified project enquiries, tenders, and customer contacts.',
  },
  {
    title: 'Project Portfolio Showcases',
    description: 'We create stunning digital project showcases with professional photography, case studies, and before-and-after comparisons that convert visitors into enquiries.',
  },
  {
    title: 'Local SEO for Contractors',
    description: 'We optimise your Google Business Profile, local citations, and location-based content to ensure you appear when local customers search for your services.',
  },
  {
    title: 'Tender-Winning Digital Presence',
    description: 'A professional website and strong online reputation can make the difference when bidding for contracts. We ensure your digital presence supports your tender submissions.',
  },
];

const stats = [
  { value: '85%', label: 'of homeowners research contractors online before making contact' },
  { value: '3.5x', label: 'average increase in qualified leads for construction clients' },
  { value: '92%', label: 'of our property clients see improved local search visibility within 3 months' },
];

const faqs = [
  {
    q: 'How can digital marketing help my construction business?',
    a: 'Digital marketing generates a predictable pipeline of qualified leads, reduces dependency on word-of-mouth, and positions your company as a trusted authority. From local SEO to project showcases, a strong digital presence directly translates to more contracts.',
  },
  {
    q: 'Do you work with both residential and commercial construction firms?',
    a: 'Yes. We work with residential builders, commercial contractors, specialist trades, property developers, and estate agents. Each requires a different approach, and we tailor our strategies accordingly.',
  },
  {
    q: 'Can you help us showcase our completed projects online?',
    a: 'Absolutely. We create professional project portfolio pages with high-quality imagery, detailed case studies, and client testimonials that demonstrate your capabilities and win confidence.',
  },
  {
    q: 'How important is local SEO for construction businesses?',
    a: 'Extremely important. Most construction and property enquiries have a local intent — people searching for "builders near me" or "estate agents in [city]". Local SEO ensures you appear in these high-intent searches.',
  },
  {
    q: 'Can you help property developers with marketing new developments?',
    a: 'Yes. We create dedicated development microsites, launch campaigns, virtual tour integrations, and lead capture systems that help developers sell properties faster.',
  },
];

export default function ConstructionPropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.nettrackers.co.uk/industries' },
              { '@type': 'ListItem', position: 3, name: 'Construction & Property', item: 'https://www.nettrackers.co.uk/industries/construction-property' },
            ],
          }),
        }}
      />

      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Construction &amp; Property Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Win More Contracts with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Digital Marketing for Construction</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help construction companies and property firms generate quality leads, showcase their projects, and build local visibility through expert digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-blue-500 text-white hover:shadow-[0_8px_30px_rgba(0,153,255,0.4)] px-9 py-4 text-lg">Get a Free Consultation</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-transparent text-white border-2 border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] px-9 py-4 text-lg">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Digital Challenges Construction &amp; Property Businesses Face</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-5">{point.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">Our Solution</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">How NetTrackers Helps Construction &amp; Property Firms Grow</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">We combine industry knowledge with digital expertise to deliver strategies that generate leads and win contracts.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-white/60 font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Construction &amp; Property Digital Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Construction SEO', desc: 'Rank for local and national construction keywords, from "builders near me" to specialist trade searches.', href: '/services/seo' },
              { title: 'Property Web Design', desc: 'Professional websites with project portfolios, development showcases, virtual tours, and enquiry management systems.', href: '/services/web-design-development' },
              { title: 'Construction Software', desc: 'Bespoke project management, quoting systems, and customer relationship tools built for the construction industry.', href: '/services/software-development' },
              { title: 'Contractor Reputation', desc: 'Build trust through review management, accreditation showcases, and professional case studies that win confidence.', href: '/services/orm' },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">{service.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed mb-4">{service.desc}</p>
                <span className="text-blue-500 font-body font-semibold text-sm">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
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
        heading="Ready to Win More Construction Contracts?"
        subheading="Get a free consultation and discover how digital marketing can build a stronger pipeline for your business."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
