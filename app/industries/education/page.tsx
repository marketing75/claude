import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Digital Marketing for Education | NetTrackers',
    description:
      'Specialist digital marketing for education providers. Student recruitment, institution branding, course visibility, and enrolment optimisation for universities, colleges, and training providers.',
  };
}

const painPoints = [
  {
    title: 'Student Recruitment Is Fiercely Competitive',
    description:
      'With hundreds of UK institutions competing for the same prospective students, standing out in search results and on social media is essential for meeting enrolment targets.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Course Visibility Is Lost in a Crowded Market',
    description:
      'Thousands of courses compete for attention online. Without targeted SEO and content strategy, your programmes remain invisible to the students who would benefit most from them.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: 'Institution Branding Needs a Digital-First Approach',
    description:
      'Today\'s students experience your brand online first. A dated website, inconsistent social presence, or poor search visibility damages your institution\'s perceived quality and reputation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: 'Student Recruitment Campaigns',
    description: 'We build multi-channel recruitment campaigns that reach prospective students at every stage of their decision journey, from initial course research to application submission.',
  },
  {
    title: 'Course-Level SEO',
    description: 'We optimise individual course pages for high-intent search queries, ensuring your programmes appear when prospective students are actively searching for study options.',
  },
  {
    title: 'Institution Brand Building',
    description: 'We create cohesive digital branding that communicates your institution\'s values, quality, and unique selling points across every online touchpoint.',
  },
  {
    title: 'Enrolment Funnel Optimisation',
    description: 'We analyse and optimise every step from initial enquiry to confirmed enrolment, reducing drop-off and increasing the percentage of prospects who complete applications.',
  },
];

const stats = [
  { value: '74%', label: 'of prospective students use Google as their primary research tool' },
  { value: '2.8x', label: 'average increase in course page traffic for education clients' },
  { value: '45%', label: 'average improvement in application completion rates' },
];

const faqs = [
  {
    q: 'Do you work with both higher education and further education providers?',
    a: 'Yes. We work with universities, colleges, sixth forms, private training providers, and online learning platforms. Each has unique challenges and we tailor our approach to your specific recruitment goals and audience.',
  },
  {
    q: 'How can SEO improve student recruitment?',
    a: 'SEO ensures your courses appear when prospective students search for study options. By optimising course pages, programme descriptions, and educational content, we drive organic traffic from students with genuine intent to apply.',
  },
  {
    q: 'Can you help with international student recruitment?',
    a: 'Absolutely. We build multilingual SEO strategies, country-specific landing pages, and targeted campaigns that reach prospective international students in key markets.',
  },
  {
    q: 'Do you support clearing and open day campaigns?',
    a: 'Yes. We create time-sensitive campaigns for clearing periods, open days, and enrolment deadlines, ensuring maximum visibility during these critical recruitment windows.',
  },
  {
    q: 'How do you measure the success of education marketing campaigns?',
    a: 'We track the full enrolment funnel — from initial website visit through enquiry, application, offer acceptance, and enrolment — providing clear attribution and ROI metrics at every stage.',
  },
];

export default function EducationPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Education', item: 'https://www.nettrackers.co.uk/industries/education' },
            ],
          }),
        }}
      />

      <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">Education Marketing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Recruit More Students with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">Expert Education Marketing</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
              We help universities, colleges, and training providers recruit more students through targeted SEO, compelling digital branding, and enrolment funnel optimisation that delivers measurable results.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Digital Challenges Education Businesses Face</h2>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">How NetTrackers Helps Education Providers Grow</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">We combine education sector expertise with proven digital strategies to help institutions meet and exceed their recruitment targets.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Digital Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Education SEO', desc: 'Optimise course pages and programme content to rank for high-intent student searches across domestic and international markets.', href: '/services/seo' },
              { title: 'Institution Web Design', desc: 'Modern, accessible websites with virtual campus tours, course finders, application portals, and student information hubs.', href: '/services/web-design-development' },
              { title: 'Education Software', desc: 'Bespoke student management systems, application tracking platforms, and learning management integrations.', href: '/services/software-development' },
              { title: 'Institution Reputation', desc: 'Build your institution\'s digital reputation through review management, league table optimisation, and thought leadership content.', href: '/services/orm' },
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
        heading="Ready to Recruit More Students?"
        subheading="Get a free consultation and discover how targeted digital marketing can help you meet your enrolment targets."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/services' }}
      />
    </>
  );
}
