import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Financial Services | NetTrackers',
    description:
      'Specialist digital marketing for financial services firms. FCA-compliant SEO, web design, and trust-building strategies for banks, advisers, insurers, and fintech companies.',
  };
}

const painPoints = [
  {
    title: 'FCA Compliance Creates Marketing Constraints',
    description:
      'Financial promotions must comply with FCA regulations. Misleading claims, unclear risk warnings, or non-compliant testimonials can result in enforcement action and significant fines.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Trust Is the Foundation of Financial Services',
    description:
      'Consumers are understandably cautious with their finances. Your digital presence must communicate security, credibility, and expertise at every interaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Fintech Disruption Is Reshaping the Market',
    description:
      'Digital-first fintech competitors are capturing market share with superior user experiences. Traditional financial services firms must modernise their digital approach or risk falling behind.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'FCA-Compliant Digital Campaigns',
    description: 'Every financial promotion we create meets FCA requirements, including clear risk warnings, fair and balanced communications, and proper regulatory disclosures.',
  },
  {
    title: 'Trust-Building Digital Experiences',
    description: 'We design websites and content that communicate security, expertise, and reliability — building the confidence potential customers need to take action.',
  },
  {
    title: 'Fintech-Ready Digital Strategies',
    description: 'Whether you\'re a traditional firm or a fintech startup, we build digital strategies that compete with the best user experiences in the market.',
  },
  {
    title: 'Financial Content Marketing',
    description: 'We create authoritative financial content that educates your audience, builds trust, and positions your firm as a thought leader in your specialism.',
  },
];

const stats = [
  { value: '67%', label: 'of consumers research financial products online before purchasing' },
  { value: '5.2x', label: 'average ROI for financial services firms investing in content marketing' },
  { value: '100%', label: 'FCA compliance rate across all our financial services campaigns' },
];

const faqs = [
  {
    q: 'How do you ensure FCA compliance in financial marketing?',
    a: 'We maintain detailed knowledge of FCA financial promotion rules and build compliance into every campaign. This includes clear, fair, and not misleading communications, appropriate risk warnings, and proper regulatory disclosures. We work with your compliance team to ensure sign-off.',
  },
  {
    q: 'Do you work with both traditional finance and fintech companies?',
    a: 'Yes. We serve the full spectrum of financial services, from established banks and insurance companies to innovative fintech startups, wealth managers, and independent financial advisers.',
  },
  {
    q: 'Can you help with financial content that builds trust?',
    a: 'Absolutely. We create educational financial content — guides, calculators, market commentary — that demonstrates your expertise and helps potential clients make informed decisions, all whilst remaining FCA compliant.',
  },
  {
    q: 'How do you handle sensitive financial data in marketing?',
    a: 'We implement strict data handling procedures that comply with both GDPR and FCA data protection requirements. All marketing technology we use is vetted for security and compliance.',
  },
  {
    q: 'What financial services sectors do you specialise in?',
    a: 'We work across retail banking, wealth management, insurance, mortgage broking, financial advice, payments, and fintech. Each sector requires nuanced understanding of both the regulations and the customer journey.',
  },
];

export default function FinancePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Finance', item: 'https://www.nettrackers.co.uk/industries/finance' },
            ],
          }),
        }}
      />

      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Financial Services Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Build Trust and Acquire Clients in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Financial Services</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help financial services firms — from high-street banks to fintech startups — build trust and acquire customers through FCA-compliant digital marketing strategies.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Digital Challenges Financial Services Businesses Face</h2>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">How NetTrackers Helps Financial Services Firms Grow</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">We combine deep financial services knowledge with compliant digital strategies to build trust and drive customer acquisition.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Services Digital Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Financial SEO', desc: 'Rank for high-intent financial keywords whilst maintaining full FCA compliance across all content.', href: '/services/seo' },
              { title: 'Financial Web Design', desc: 'Secure, trust-building websites with calculators, comparison tools, and compliant application journeys.', href: '/services/web-design-development' },
              { title: 'Fintech Software', desc: 'Bespoke financial applications, customer portals, and integrations with banking and payment systems.', href: '/services/software-development' },
              { title: 'Trust & Reputation', desc: 'Build credibility through compliant review management, thought leadership, and industry authority signals.', href: '/services/orm' },
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
        heading="Ready to Grow Your Financial Services Business?"
        subheading="Get a free consultation and discover how FCA-compliant digital marketing can drive client acquisition and build trust."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
