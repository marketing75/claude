import type { Metadata } from 'next';
import CtaBanner from '@/components/sections/shared/CtaBanner';
import TeamCard from '@/components/sections/shared/TeamCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'About NetTrackers | UK Digital Agency with 10+ Years Experience',
  description:
    'Since 2014, NetTrackers has helped UK businesses grow with expert SEO, web design, reputation management, and bespoke software. Meet our team and discover our story.',
};

const milestones = [
  { year: '2014', title: 'Founded', description: 'NetTrackers launched in London with a mission to make digital marketing transparent and results-driven.' },
  { year: '2016', title: '50th Client', description: 'Reached our 50th active client milestone, serving businesses across the UK.' },
  { year: '2017', title: 'Google Partner', description: 'Achieved official Google Partner status, recognising our expertise in search marketing.' },
  { year: '2019', title: '100th Client', description: 'Celebrated our 100th client partnership with businesses in over 20 industries.' },
  { year: '2021', title: 'Software Division', description: 'Launched our bespoke software development division to build CRM, ERP, and custom platforms.' },
  { year: '2023', title: '150+ Active Clients', description: 'Grew to over 150 active clients with a 94% retention rate year over year.' },
  { year: '2024', title: '10 Year Anniversary', description: 'Celebrated a decade of delivering measurable results for UK businesses.' },
];

const teamMembers = [
  { name: 'Dhruv Majumdar', role: 'Founder & Director', bio: 'With over 15 years of experience in digital marketing, Dhruv founded NetTrackers to bring transparency and accountability to the industry. He oversees strategy and client relationships.' },
  { name: 'Sophie Chen', role: 'Head of SEO', bio: 'Sophie leads our SEO team with a data-first approach. She has managed campaigns generating millions in organic revenue for clients across finance, healthcare, and e-commerce.' },
  { name: 'James Whitfield', role: 'Lead Developer', bio: 'James architects and builds our bespoke software solutions. With expertise in React, Node.js, and cloud infrastructure, he brings technical visions to life.' },
  { name: 'Priya Sharma', role: 'Creative Director', bio: 'Priya leads our design team, crafting user experiences that convert. Her work has won multiple industry awards for UX and visual design.' },
  { name: 'Marcus Thompson', role: 'Head of Reputation Management', bio: 'Marcus specialises in online reputation strategy, helping businesses build and protect their digital presence across review platforms and social media.' },
  { name: 'Emily Crawford', role: 'Client Success Manager', bio: 'Emily ensures every client receives exceptional service. She coordinates across teams to keep projects on track and results aligned with business goals.' },
];

const values = [
  {
    title: 'Results Over Rhetoric',
    description: 'We let the numbers do the talking. Every strategy we recommend is backed by data, and every campaign is measured against clear KPIs. No jargon, no fluff — just outcomes.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Transparency Always',
    description: 'You will always know exactly what we are doing, why we are doing it, and what it costs. Our reporting is open, our communication is honest, and our pricing has no hidden fees.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Your Success Is Our Success',
    description: 'We treat every client\'s business as if it were our own. Your growth targets become our targets, and we are not satisfied until you see real commercial impact.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

const trustBadges = [
  { label: 'Google Partner', value: 'Certified' },
  { label: 'Clutch Top Agency', value: 'Top 10 UK' },
  { label: 'Google Reviews', value: '4.9/5' },
  { label: 'ISO Certified', value: 'ISO 27001' },
];

export default function AboutPage() {
  return (
    <main>
      {/* AboutHero */}
      <section className="relative bg-[#0D1117] py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 12px)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 font-body mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Est. 2014
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            We&apos;ve Been in Your Corner Since 2014
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-body max-w-3xl mx-auto">
            For over 10 years, we&apos;ve helped UK businesses build their digital presence, attract more customers, and grow revenue. We are not a faceless agency — we are your dedicated growth partners.
          </p>
        </div>
      </section>

      {/* StorySection — Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Our Journey"
            title="A Decade of Growth"
            description="From a small team with big ambitions to one of the UK's most trusted digital agencies — here are the milestones that shaped us."
          />
          <div className="mt-16 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-7">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 100}>
                  <div className="flex flex-col items-center text-center w-48 md:w-auto">
                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-display font-bold text-sm mb-4">
                      {milestone.year}
                    </div>
                    <div className="w-0.5 h-6 bg-blue-200 mb-4 hidden md:block" />
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TeamSection */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Our Team"
            title="Meet the People Behind the Results"
            description="A collaborative team of strategists, creatives, and developers — united by a shared passion for helping businesses succeed online."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ValuesSection */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            description="Three principles guide every decision we make and every campaign we run."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 150}>
                <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="mb-5">{value.icon}</div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 font-body leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* UKCredentials — Trust Badges */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Credentials"
            title="Trusted by Businesses Across the UK"
            description="Our partnerships and certifications reflect our commitment to quality and accountability."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-display text-2xl font-bold text-gray-900 mb-1">{badge.value}</p>
                <p className="text-sm text-gray-500 font-body">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CtaBanner */}
      <CtaBanner
        heading="Ready to Grow Your Business?"
        subheading="Book a free strategy call and discover how NetTrackers can help you achieve measurable results."
        primaryCta={{ text: 'Get Your Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'View Our Work', href: '/case-studies' }}
      />
    </main>
  );
}
