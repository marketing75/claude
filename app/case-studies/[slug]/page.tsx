import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/shared/CtaBanner';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  heroMetric: string;
  challenge: string[];
  approach: string[];
  results: { value: number; suffix: string; prefix?: string; label: string }[];
  testimonial: { quote: string; author: string; role: string };
  related: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  'thames-legal-partners': {
    slug: 'thames-legal-partners',
    client: 'Thames Legal Partners',
    industry: 'Legal Services',
    services: ['SEO', 'Content Marketing'],
    heroMetric: '+340% Organic Traffic',
    challenge: [
      'Thames Legal Partners, a mid-sized law firm in the City of London, had invested heavily in a website redesign but saw little improvement in organic search visibility. Their key practice areas — commercial litigation, employment law, and corporate advisory — were dominated by larger firms with bigger budgets.',
      'Despite having a strong team and excellent client outcomes, their website languished on page three of Google for virtually every high-value keyword. Prospective clients simply could not find them online.',
      'The firm needed a strategic SEO partner who understood the competitive dynamics of the legal sector and could deliver measurable improvements within a realistic timeframe.',
    ],
    approach: [
      'Conducted a comprehensive technical SEO audit, identifying and resolving 147 critical issues including crawl errors, duplicate content, and poor internal linking.',
      'Developed a keyword strategy targeting 200+ commercial-intent search terms specific to their practice areas and London geography.',
      'Created a content programme publishing two in-depth legal insight articles per week, positioning the firm as thought leaders in their specialist areas.',
      'Built a targeted digital PR campaign securing backlinks from legal publications, industry bodies, and authoritative news outlets.',
    ],
    results: [
      { value: 340, suffix: '%', prefix: '+', label: 'Increase in Organic Traffic' },
      { value: 120, suffix: '+', label: 'Page 1 Keywords' },
      { value: 85, suffix: '%', label: 'More Enquiries from Search' },
    ],
    testimonial: {
      quote: 'NetTrackers transformed our online presence. We went from being invisible to ranking on the first page for the terms that matter most to our business. The increase in quality enquiries has been remarkable.',
      author: 'Richard Hartley',
      role: 'Managing Partner, Thames Legal Partners',
    },
    related: ['buildright-construction', 'edufirst-academy'],
  },
  'buildright-construction': {
    slug: 'buildright-construction',
    client: 'BuildRight Construction',
    industry: 'Construction',
    services: ['Web Design', 'UX Strategy'],
    heroMetric: '3x More Enquiries',
    challenge: [
      'BuildRight Construction had outgrown their dated website, which had been built five years prior on a template platform. The site was slow, difficult to navigate on mobile, and failed to showcase the quality of their work.',
      'With an increasingly competitive market in the South East, their competitors had modernised their digital presence while BuildRight\'s enquiry rate continued to decline quarter on quarter.',
      'They needed a website that reflected the quality of their builds — one that would convert visitors into genuine enquiries rather than just serving as an online brochure.',
    ],
    approach: [
      'Ran a UX audit and user testing sessions with existing clients to understand how potential customers evaluate construction companies online.',
      'Designed a conversion-optimised website with prominent project galleries, client testimonials, and strategically placed calls to action throughout the user journey.',
      'Built the new site on a fast, modern framework with Core Web Vitals scores in the green across every metric, ensuring exceptional mobile performance.',
      'Implemented structured data markup, local SEO fundamentals, and analytics tracking to measure and continually improve conversion performance.',
    ],
    results: [
      { value: 3, suffix: 'x', label: 'Increase in Enquiry Rate' },
      { value: 62, suffix: '%', label: 'Reduction in Bounce Rate' },
      { value: 4, suffix: 's', label: 'Faster Page Load Time' },
    ],
    testimonial: {
      quote: 'The new website has completely changed how potential clients perceive us. We are getting three times the enquiries we used to, and the quality of those leads is significantly higher.',
      author: 'Tom Bridges',
      role: 'Director, BuildRight Construction',
    },
    related: ['thames-legal-partners', 'freshcart-groceries'],
  },
  'harley-street-dental': {
    slug: 'harley-street-dental',
    client: 'Harley Street Dental',
    industry: 'Healthcare',
    services: ['Reputation Management', 'Review Strategy'],
    heroMetric: '3.2 to 4.8 Star Rating',
    challenge: [
      'Harley Street Dental, a premium dental practice in central London, had seen their online reputation deteriorate following a difficult period of staff changes and operational disruption. Their Google rating had dropped to 3.2 stars — well below the 4.5+ average expected by patients in the private healthcare sector.',
      'Negative reviews were appearing prominently in search results, deterring prospective patients from booking consultations. The practice estimated they were losing upwards of £15,000 per month in potential revenue as a direct result.',
      'They required a strategic reputation management partner who could address the existing damage whilst building a sustainable review generation system for the future.',
    ],
    approach: [
      'Audited every review across Google, Trustpilot, NHS Choices, and Doctify to understand sentiment patterns and identify legitimate grievances that could be resolved.',
      'Developed a professional response strategy for existing negative reviews, demonstrating accountability and a commitment to patient satisfaction.',
      'Implemented an automated post-appointment review request system integrated with their practice management software, making it effortless for satisfied patients to share their experience.',
      'Trained front-of-house staff on reputation best practices and created internal protocols for identifying and resolving patient concerns before they escalated to public reviews.',
    ],
    results: [
      { value: 48, suffix: '', label: 'Star Rating (from 3.2)' },
      { value: 280, suffix: '+', label: 'New Positive Reviews' },
      { value: 40, suffix: '%', label: 'Increase in New Patient Bookings' },
    ],
    testimonial: {
      quote: 'Our online reputation was genuinely holding us back. NetTrackers not only repaired the damage but built a system that consistently generates five-star reviews. The impact on patient bookings has been transformational.',
      author: 'Dr Amara Okafor',
      role: 'Principal Dentist, Harley Street Dental',
    },
    related: ['thames-legal-partners', 'northern-finance-group'],
  },
  'freshcart-groceries': {
    slug: 'freshcart-groceries',
    client: 'FreshCart Groceries',
    industry: 'Retail & E-Commerce',
    services: ['E-Commerce', 'SEO', 'PPC'],
    heroMetric: '£1.2M Additional Revenue',
    challenge: [
      'FreshCart Groceries, an established independent grocer with three physical stores in Greater London, wanted to expand into online delivery to compete with the rapid growth of grocery delivery services. They had no existing e-commerce presence.',
      'The challenge was twofold: building a robust e-commerce platform capable of handling fresh produce ordering and delivery scheduling, whilst simultaneously driving sufficient traffic to make the investment commercially viable.',
      'With tight margins in the grocery sector, every element of the digital strategy needed to deliver clear ROI from day one.',
    ],
    approach: [
      'Built a custom e-commerce platform with real-time stock management, delivery slot scheduling, and a subscription model for regular customers.',
      'Launched a targeted local SEO campaign optimising for "grocery delivery" and "fresh food delivery" terms across their three delivery catchment areas.',
      'Deployed a PPC campaign with dynamic product ads on Google Shopping and social media, focusing on high-margin product categories.',
      'Implemented a customer loyalty programme with automated email marketing to drive repeat purchases and increase average order value.',
    ],
    results: [
      { value: 12, suffix: 'M', prefix: '£', label: 'Additional Annual Revenue' },
      { value: 850, suffix: '+', label: 'Weekly Online Orders' },
      { value: 34, suffix: '%', label: 'Repeat Customer Rate' },
    ],
    testimonial: {
      quote: 'Going online was a huge step for us. NetTrackers made the entire process seamless — from building the platform to driving the first customers through the door. The additional revenue has exceeded our most optimistic projections.',
      author: 'Nadia Kowalski',
      role: 'Owner, FreshCart Groceries',
    },
    related: ['buildright-construction', 'edufirst-academy'],
  },
  'northern-finance-group': {
    slug: 'northern-finance-group',
    client: 'Northern Finance Group',
    industry: 'Financial Services',
    services: ['Software Development', 'CRM'],
    heroMetric: '60% Efficiency Increase',
    challenge: [
      'Northern Finance Group, a financial advisory firm based in Manchester, was drowning in manual processes. Client onboarding involved multiple spreadsheets, email chains, and paper forms. Their existing off-the-shelf CRM was poorly suited to the compliance requirements of the UK financial services sector.',
      'As the firm grew, these inefficiencies were becoming unsustainable. Advisers were spending more time on administration than on client-facing work, and compliance reporting was consuming entire working days each month.',
      'They needed a bespoke software solution that would streamline operations, ensure FCA compliance, and scale with their ambitious growth plans.',
    ],
    approach: [
      'Conducted a thorough discovery phase mapping every workflow, identifying bottlenecks, and documenting compliance requirements specific to FCA-regulated firms.',
      'Designed and built a custom CRM with automated client onboarding, document management, and integrated compliance workflows including suitability reports and risk assessments.',
      'Developed a client portal allowing customers to view their portfolio, upload documents, and book appointments — reducing inbound administrative calls by over 50%.',
      'Implemented automated reporting dashboards for both operational metrics and FCA compliance requirements, turning a days-long process into a single click.',
    ],
    results: [
      { value: 60, suffix: '%', label: 'Reduction in Admin Time' },
      { value: 50, suffix: '%', label: 'Fewer Inbound Admin Calls' },
      { value: 3, suffix: 'x', label: 'Faster Client Onboarding' },
    ],
    testimonial: {
      quote: 'The bespoke CRM has genuinely transformed how we operate. Our advisers now spend their time advising clients rather than shuffling paperwork. The compliance automation alone has paid for the entire investment.',
      author: 'David Whitworth',
      role: 'CEO, Northern Finance Group',
    },
    related: ['freshcart-groceries', 'harley-street-dental'],
  },
  'edufirst-academy': {
    slug: 'edufirst-academy',
    client: 'EduFirst Academy',
    industry: 'Education',
    services: ['SEO', 'Web Design'],
    heroMetric: '250% More Enrolments',
    challenge: [
      'EduFirst Academy, a private education provider in the West Midlands, was struggling to attract new student enrolments despite offering high-quality programmes. Their website was outdated, difficult to navigate, and invisible in search results for key terms like "private tuition" and "GCSE retake courses".',
      'Competing against both national chains and well-funded online learning platforms, EduFirst needed a digital strategy that would level the playing field and showcase their unique strengths — small class sizes, experienced tutors, and outstanding student outcomes.',
      'With a new academic year approaching, the timeline was tight. They needed results before the peak enrolment period.',
    ],
    approach: [
      'Redesigned the website with a focus on parent and student user journeys, creating dedicated landing pages for each course with clear pricing, outcomes data, and prominent enrolment CTAs.',
      'Launched an aggressive local SEO campaign targeting high-intent keywords across their catchment area, combined with Google Business Profile optimisation for local map pack visibility.',
      'Developed a content strategy featuring student success stories, tutor profiles, and educational resources — building trust and authority with prospective families.',
      'Implemented conversion tracking and A/B testing on key landing pages, continuously optimising messaging and design elements to maximise enrolment enquiries.',
    ],
    results: [
      { value: 250, suffix: '%', label: 'Increase in Enrolment Enquiries' },
      { value: 180, suffix: '%', label: 'Organic Traffic Growth' },
      { value: 45, suffix: '%', label: 'Improvement in Conversion Rate' },
    ],
    testimonial: {
      quote: 'NetTrackers understood our market and delivered a strategy that filled our courses ahead of schedule. The combination of a beautiful new website and genuine SEO expertise made all the difference.',
      author: 'Sarah Mitchell',
      role: 'Head of Admissions, EduFirst Academy',
    },
    related: ['thames-legal-partners', 'buildright-construction'],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) {
    return { title: 'Case Study Not Found | NetTrackers' };
  }
  return {
    title: `${study.client} Case Study — ${study.heroMetric} | NetTrackers`,
    description: study.challenge[0]?.slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-blue-500 font-body hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  const relatedStudies = study.related
    .map((s) => caseStudies[s])
    .filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 text-sm font-body font-semibold">
              {study.industry}
            </span>
            {study.services.map((service) => (
              <span key={service} className="bg-white/10 text-white/80 rounded-full px-4 py-1 text-sm font-body">
                {service}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {study.client}
          </h1>
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl px-6 py-4">
            <p className="font-display text-3xl md:text-4xl font-bold text-white">
              {study.heroMetric}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
          <div className="space-y-5">
            {study.challenge.map((paragraph, i) => (
              <p key={i} className="text-gray-600 font-body text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12">Our Approach</h2>
          <div className="space-y-8">
            {study.approach.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-display font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-600 font-body text-lg leading-relaxed pt-1.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.results.map((result) => (
              <div
                key={result.label}
                className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <AnimatedCounter
                  target={result.value}
                  suffix={result.suffix}
                  prefix={result.prefix}
                />
                <p className="text-gray-600 font-body mt-3">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-blue-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>
          <blockquote className="font-display text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-8">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-body font-semibold text-gray-900">{study.testimonial.author}</p>
            <p className="font-body text-gray-500 text-sm">{study.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedStudies.map((rs) => (
                <Link
                  key={rs.slug}
                  href={`/case-studies/${rs.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-900">
                    <div className="absolute bottom-4 left-4 bg-blue-500 text-white rounded-lg px-3 py-1.5 font-display font-bold">
                      {rs.heroMetric}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-blue-500 font-body uppercase tracking-wide mb-1">
                      {rs.client}
                    </p>
                    <p className="text-sm text-gray-500 font-body">{rs.industry}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        heading="Ready to Become Our Next Success Story?"
        subheading="Book a free strategy call and let us show you what is possible for your business."
        primaryCta={{ text: 'Get Your Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'View More Case Studies', href: '/case-studies' }}
      />
    </main>
  );
}
