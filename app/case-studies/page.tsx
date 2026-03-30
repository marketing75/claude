'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'SEO', 'Web Design', 'ORM', 'Software', 'E-Commerce'];

const caseStudies = [
  {
    slug: 'thames-legal-partners',
    client: 'Thames Legal Partners',
    category: 'SEO',
    metric: '+340% Organic Traffic',
    industry: 'Legal Services',
    description: 'A comprehensive SEO overhaul that transformed Thames Legal Partners from page 3 obscurity to dominating the first page for over 120 high-value keywords in the London legal market.',
    services: ['SEO', 'Content Marketing'],
  },
  {
    slug: 'buildright-construction',
    client: 'BuildRight Construction',
    category: 'Web Design',
    metric: '3x More Enquiries',
    industry: 'Construction',
    description: 'A complete website redesign that tripled enquiry rates for one of the South East\'s fastest-growing construction firms, with a focus on mobile-first UX and conversion optimisation.',
    services: ['Web Design', 'UX Strategy'],
  },
  {
    slug: 'harley-street-dental',
    client: 'Harley Street Dental',
    category: 'ORM',
    metric: '3.2 to 4.8 Star Rating',
    industry: 'Healthcare',
    description: 'A reputation recovery campaign that lifted Harley Street Dental from a damaging 3.2 star average to a commanding 4.8 stars across Google, Trustpilot, and industry review platforms.',
    services: ['Reputation Management', 'Review Strategy'],
  },
  {
    slug: 'freshcart-groceries',
    client: 'FreshCart Groceries',
    category: 'E-Commerce',
    metric: '£1.2M Additional Revenue',
    industry: 'Retail & E-Commerce',
    description: 'A full e-commerce build and digital marketing strategy that generated £1.2 million in additional annual revenue for this independent grocer expanding into online delivery.',
    services: ['E-Commerce', 'SEO', 'PPC'],
  },
  {
    slug: 'northern-finance-group',
    client: 'Northern Finance Group',
    category: 'Software',
    metric: '60% Efficiency Increase',
    industry: 'Financial Services',
    description: 'A bespoke CRM and workflow automation platform that reduced manual processing time by 60% and improved client onboarding speed for a growing financial advisory firm.',
    services: ['Software Development', 'CRM'],
  },
  {
    slug: 'edufirst-academy',
    client: 'EduFirst Academy',
    category: 'SEO',
    metric: '250% More Enrolments',
    industry: 'Education',
    description: 'An integrated SEO and web design campaign that boosted enrolment enquiries by 250% for a private academy competing in one of the UK\'s most competitive education markets.',
    services: ['SEO', 'Web Design'],
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter(
          (cs) =>
            cs.category === activeCategory ||
            cs.services.some((s) => s.toLowerCase().includes(activeCategory.toLowerCase()))
        );

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 font-body mb-6">
            Real Results, Real Businesses
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
            Explore how we have helped UK businesses across every industry achieve measurable, commercial results.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold font-body transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900">
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-body font-semibold text-sm border border-white/40 rounded-full px-5 py-2">
                      View Case Study
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-500 text-white rounded-lg px-3 py-1.5 font-display font-bold text-lg">
                    {cs.metric}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-500 font-body uppercase tracking-wide">
                      {cs.client}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs text-gray-500 font-body">{cs.industry}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-body mb-4 line-clamp-2">{cs.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs bg-blue-50 text-blue-600 rounded-full px-3 py-1 font-body"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
