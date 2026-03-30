import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Law Firms | NetTrackers',
    description:
      'Specialist digital marketing for law firms and legal services. We deliver SRA-compliant SEO, professional web design, and client acquisition strategies for UK solicitors and barristers.',
  };
}

const painPoints = [
  {
    title: 'Competitive Legal Keywords Are Expensive',
    description:
      'Legal keywords are among the most expensive in paid search. Without a strong organic strategy, law firms face unsustainable acquisition costs that erode profitability.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'SRA Compliance Adds Complexity',
    description:
      'The Solicitors Regulation Authority has strict rules on legal advertising and client testimonials. Marketing that fails to comply can result in regulatory action and reputational damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Building Trust in a Sceptical Market',
    description:
      'Potential clients are naturally cautious when choosing legal representation. Your digital presence must convey expertise, authority, and trustworthiness at every touchpoint.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'SRA-Compliant Marketing Strategies',
    description: 'Every campaign we build for law firms adheres to SRA advertising rules, including compliant use of testimonials, case studies, and claims about success rates.',
  },
  {
    title: 'Legal SEO That Reduces PPC Dependency',
    description: 'We build sustainable organic visibility for competitive legal keywords, reducing your reliance on expensive paid search campaigns over time.',
  },
  {
    title: 'Authority-Building Content',
    description: 'We create expert legal content — articles, guides, and FAQs — that demonstrates your firm\'s expertise and builds trust with prospective clients before they pick up the phone.',
  },
  {
    title: 'Practice Area Landing Pages',
    description: 'Dedicated, optimised landing pages for each practice area ensure potential clients find exactly the right solicitor for their needs, improving both rankings and conversion rates.',
  },
];

const stats = [
  { value: '£50+', label: 'average cost-per-click for legal keywords in PPC — SEO offers a better long-term return' },
  { value: '4.2x', label: 'average return on investment for law firms investing in organic SEO' },
  { value: '72%', label: 'of people seeking legal help start with a Google search' },
];

const faqs = [
  {
    q: 'How do you ensure compliance with SRA advertising rules?',
    a: 'We maintain up-to-date knowledge of SRA regulations and build compliance into every campaign. This includes proper handling of testimonials, accurate claims, and transparent pricing information. We can also work directly with your compliance team.',
  },
  {
    q: 'Which practice areas do you specialise in marketing?',
    a: 'We have experience across all major practice areas, including personal injury, conveyancing, family law, commercial litigation, employment law, criminal defence, and immigration. Each area requires a tailored approach.',
  },
  {
    q: 'How can SEO reduce our reliance on paid search?',
    a: 'Legal PPC costs are among the highest in any industry. By investing in organic SEO, you build sustainable visibility that generates leads without ongoing per-click costs. Most law firms see significant PPC savings within 6-12 months of starting SEO.',
  },
  {
    q: 'Do you work with both high-street and corporate law firms?',
    a: 'Yes. We tailor our approach to your firm\'s size, target market, and practice areas. Whether you\'re a sole practitioner or a multi-office firm, we build strategies that match your growth ambitions.',
  },
  {
    q: 'Can you help with legal directory listings and citations?',
    a: 'Absolutely. We manage your presence across key legal directories like the Law Society, Chambers, Legal 500, and local citations to build authority and improve your local search visibility.',
  },
];

export default function LegalPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.nettrackers.co.uk/industries/legal' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Legal Digital Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Win More Clients for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Law Firm</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help UK law firms acquire more clients through SRA-compliant digital marketing. From competitive legal SEO to authoritative content strategies, we build your firm&apos;s digital reputation.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-blue-500 text-white hover:shadow-[0_8px_30px_rgba(0,153,255,0.4)] px-9 py-4 text-lg">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer bg-transparent text-white border-2 border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] px-9 py-4 text-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Digital Challenges Law Firms Face
            </h2>
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

      {/* Our Solution */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">Our Solution</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How NetTrackers Helps Law Firms Grow
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              We combine legal industry expertise with proven digital marketing strategies to deliver compliant, effective campaigns that win more instructions.
            </p>
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

      {/* Stats */}
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

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Digital Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Legal SEO', desc: 'Rank for competitive practice area keywords and reduce dependency on expensive legal PPC campaigns.', href: '/services/seo' },
              { title: 'Law Firm Web Design', desc: 'Professional, trust-building websites with practice area landing pages, solicitor profiles, and secure enquiry forms.', href: '/services/web-design-development' },
              { title: 'Legal Software', desc: 'Client intake systems, case management integrations, and secure document portals for modern law firms.', href: '/services/software-development' },
              { title: 'Reputation Management', desc: 'Build your firm\'s authority through compliant review management, directory listings, and thought leadership content.', href: '/services/orm' },
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

      {/* FAQ */}
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
        heading="Ready to Win More Clients for Your Law Firm?"
        subheading="Get a free consultation and discover how SRA-compliant digital marketing can transform your firm's client acquisition."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
