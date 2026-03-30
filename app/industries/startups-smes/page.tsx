import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Startups & SMEs | NetTrackers',
    description:
      'Growth-focused digital marketing for startups and SMEs. Lean budgets, rapid scaling, and data-driven strategies that deliver maximum impact from your marketing investment.',
  };
}

const painPoints = [
  {
    title: 'Limited Budgets Demand Maximum Efficiency',
    description:
      'Startups and SMEs can\'t afford to waste marketing budget on strategies that don\'t deliver. Every pound must be accounted for, and results need to be measurable from day one.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Rapid Scaling Requires Agile Marketing',
    description:
      'Startups move fast and pivots are frequent. Marketing strategies must be flexible enough to adapt to changing products, markets, and business models without losing momentum.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Competing Against Established Brands',
    description:
      'SMEs often compete with well-funded enterprises that have years of brand recognition and established digital presence. Finding your competitive edge online requires creative, focused strategies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'Lean Growth Marketing',
    description: 'We focus your budget on the channels and tactics that deliver the fastest, most measurable returns. No vanity metrics — just strategies that drive revenue and user acquisition.',
  },
  {
    title: 'Scalable Digital Infrastructure',
    description: 'We build websites and digital systems that grow with your business, avoiding costly rebuilds as you scale from seed stage to series A and beyond.',
  },
  {
    title: 'Niche SEO & Content Strategy',
    description: 'We identify the long-tail keywords and content gaps that established competitors overlook, giving your startup a foothold in organic search without competing head-to-head on expensive terms.',
  },
  {
    title: 'Rapid Experimentation Framework',
    description: 'We implement a test-and-learn approach to marketing, running rapid experiments across channels to find your most effective acquisition strategies quickly.',
  },
];

const stats = [
  { value: '5x', label: 'average return on marketing investment for our startup clients' },
  { value: '60%', label: 'of our SME clients achieve profitability on digital channels within 3 months' },
  { value: '250+', label: 'startups and SMEs supported with growth marketing strategies' },
];

const faqs = [
  {
    q: 'What budget do I need to start digital marketing as a startup?',
    a: 'We work with startups at various stages and budget levels. We\'ll recommend the most impactful strategies for your budget, whether that\'s focused SEO, targeted paid campaigns, or a combination. We\'re transparent about what\'s achievable at every investment level.',
  },
  {
    q: 'How do you help startups compete with larger competitors?',
    a: 'We identify niche opportunities that larger competitors overlook — long-tail keywords, underserved content topics, and emerging channels. By being more focused and agile, startups can win visibility in specific areas without matching enterprise budgets.',
  },
  {
    q: 'Can you scale your services as our business grows?',
    a: 'Absolutely. Our flexible engagement model is designed to grow with you. Many of our startup clients have scaled from small monthly retainers to comprehensive digital marketing programmes as their revenue has grown.',
  },
  {
    q: 'Do you offer equity or deferred payment arrangements for startups?',
    a: 'While we primarily work on a fee basis, we can discuss flexible payment structures for promising early-stage startups. We\'re open to creative arrangements that align our success with yours.',
  },
  {
    q: 'How quickly can you set up a marketing programme for our startup?',
    a: 'We can have initial campaigns live within days and a comprehensive strategy in place within two weeks. Speed is critical for startups, and our processes are built for rapid deployment.',
  },
];

export default function StartupsSMEsPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Startups & SMEs', item: 'https://www.nettrackers.co.uk/industries/startups-smes' },
            ],
          }),
        }}
      />

      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Startup &amp; SME Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Growth Marketing for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Ambitious Startups &amp; SMEs</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help startups and small businesses scale faster with lean, data-driven digital marketing. Maximum impact from every pound, with strategies that grow alongside your business.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Digital Challenges Startups &amp; SMEs Face</h2>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">How NetTrackers Accelerates Startup &amp; SME Growth</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">We bring enterprise-grade expertise to businesses with startup budgets, delivering maximum impact from every pound invested.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startup &amp; SME Digital Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Growth SEO', desc: 'Target long-tail, low-competition keywords that drive qualified traffic without competing head-to-head with enterprise budgets.', href: '/services/seo' },
              { title: 'Startup Web Design', desc: 'Conversion-focused websites and landing pages designed for rapid iteration, A/B testing, and scaling from MVP to market leader.', href: '/services/web-design-development' },
              { title: 'MVP & Product Development', desc: 'Lean software development for MVPs, SaaS platforms, and digital products — built for speed and scalability.', href: '/services/software-development' },
              { title: 'Brand Building', desc: 'Establish your brand\'s digital reputation from day one with strategic content, social proof, and authority-building campaigns.', href: '/services/orm' },
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
        heading="Ready to Accelerate Your Startup Growth?"
        subheading="Get a free consultation and discover how lean, data-driven marketing can scale your business faster."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
