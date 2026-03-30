import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Healthcare | NetTrackers',
    description:
      'Specialist digital marketing for healthcare providers. We help NHS trusts, private clinics, and medical practices acquire more patients with GDPR-compliant SEO, web design, and online marketing.',
  };
}

const painPoints = [
  {
    title: 'Patient Acquisition Is Increasingly Digital',
    description:
      'Over 80% of patients research healthcare providers online before making an appointment. Without a strong digital presence, you\'re invisible to the patients who need you most.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Compliance and Trust Are Non-Negotiable',
    description:
      'Healthcare marketing must comply with GDPR, CQC guidelines, and advertising standards. One misstep can damage your reputation and attract regulatory scrutiny.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Medical SEO Requires Specialist Knowledge',
    description:
      'Google applies heightened scrutiny to health content through its E-E-A-T guidelines. Generic SEO tactics won\'t work — healthcare businesses need specialist medical SEO strategies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'GDPR-Compliant Patient Marketing',
    description: 'All our campaigns are built with data protection at the core, ensuring full compliance with UK GDPR and healthcare-specific regulations.',
  },
  {
    title: 'Medical SEO & E-E-A-T Optimisation',
    description: 'We build authoritative healthcare content that satisfies Google\'s strict quality guidelines for medical information, helping you rank for competitive health keywords.',
  },
  {
    title: 'Patient Journey Mapping',
    description: 'We optimise every stage of the digital patient journey — from initial symptom searches to appointment booking — maximising your conversion from visitor to patient.',
  },
  {
    title: 'Review & Reputation Management',
    description: 'We help healthcare providers build and maintain a stellar online reputation through proactive review management and patient feedback strategies.',
  },
];

const stats = [
  { value: '80%', label: 'of patients research healthcare providers online before booking' },
  { value: '3x', label: 'more patient enquiries with optimised healthcare SEO' },
  { value: '95%', label: 'client retention rate across our healthcare portfolio' },
];

const faqs = [
  {
    q: 'How do you ensure GDPR compliance in healthcare marketing?',
    a: 'We build every campaign with data protection by design. This includes consent management, secure data handling, privacy-compliant analytics, and regular audits. We stay current with ICO guidance and healthcare-specific regulations.',
  },
  {
    q: 'Can you help both NHS and private healthcare providers?',
    a: 'Yes. We work with NHS trusts, private clinics, dental practices, mental health services, and specialist consultancies. Each requires a tailored approach, and we have experience across the spectrum.',
  },
  {
    q: 'What is medical SEO and why does it matter?',
    a: 'Medical SEO is the practice of optimising healthcare content to meet Google\'s E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) standards. Google holds health content to a higher standard, so generic SEO tactics are insufficient.',
  },
  {
    q: 'How long does it take to see results from healthcare SEO?',
    a: 'Healthcare SEO typically takes 4-6 months to show significant results due to the competitive nature of medical keywords and Google\'s rigorous quality standards. However, we implement quick wins alongside the long-term strategy.',
  },
  {
    q: 'Do you handle healthcare website design as well?',
    a: 'Absolutely. We design accessible, compliant healthcare websites with integrated booking systems, patient portals, and content management systems that your team can easily update.',
  },
];

export default function HealthcarePage() {
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
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://www.nettrackers.co.uk/industries/healthcare' },
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
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Healthcare Digital Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Grow Your Patient Base with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Compliant Digital Marketing</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help healthcare providers — from NHS trusts to private clinics — acquire more patients through GDPR-compliant SEO, professional web design, and specialist medical marketing strategies.
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
              The Digital Challenges Healthcare Businesses Face
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-5">
                  {point.icon}
                </div>
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
              How NetTrackers Solves Healthcare Marketing Challenges
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              We combine deep healthcare industry knowledge with proven digital strategies to deliver compliant, effective marketing that grows your patient base.
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

      {/* Industry-Specific Stats */}
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Digital Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Medical SEO', desc: 'Rank for health-related keywords with E-E-A-T compliant content and technical optimisation tailored for healthcare.', href: '/services/seo' },
              { title: 'Healthcare Web Design', desc: 'Accessible, WCAG-compliant websites with integrated appointment booking and patient information systems.', href: '/services/web-design-development' },
              { title: 'Healthcare Software', desc: 'Bespoke patient management systems, telehealth platforms, and clinical workflow applications.', href: '/services/software-development' },
              { title: 'Reputation Management', desc: 'Proactive review management and patient feedback strategies to build trust and credibility online.', href: '/services/orm' },
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
        heading="Ready to Grow Your Healthcare Practice?"
        subheading="Get a free consultation and discover how compliant digital marketing can transform your patient acquisition."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
