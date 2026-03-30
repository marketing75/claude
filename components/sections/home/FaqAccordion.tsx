'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does SEO take to show results?',
    a: 'Most clients see measurable improvements within 3-6 months. SEO is a long-term investment, and while some quick wins are possible in the first few weeks, sustainable rankings and traffic growth typically require consistent effort over several months. We provide monthly progress reports so you can track improvements from day one.',
  },
  {
    q: 'What is your minimum contract length?',
    a: 'We operate on rolling monthly contracts with no long-term lock-ins. We believe in earning your business every month through transparent reporting and demonstrable results. You can cancel with 30 days\u2019 notice at any time.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely. We work with businesses of all sizes, from solo entrepreneurs and startups to large enterprises. Our packages are scalable, and we tailor our approach to match your budget and growth ambitions.',
  },
  {
    q: 'Can I see case studies from my industry?',
    a: 'Yes, we have case studies across multiple sectors including healthcare, legal, construction, e-commerce, and more. During your free strategy call, we\u2019ll share relevant examples that demonstrate what we can achieve for businesses like yours.',
  },
  {
    q: 'How do you report results each month?',
    a: 'Every client receives a comprehensive monthly report covering key metrics, progress against KPIs, work completed, and plans for the following month. Reports are presented in plain English — no jargon, no vanity metrics. Your dedicated account manager also hosts a monthly call to walk through the results.',
  },
  {
    q: 'Are all your team members based in the UK?',
    a: 'Yes, our entire team is based in the UK. We\u2019re headquartered in London with team members across several UK cities. This means we understand the UK market, operate in your time zone, and are always available when you need us.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="pr-4 text-lg font-semibold text-gray-900">
                    {faq.q}
                  </span>
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-transform duration-300"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="min-h-0">
                    <p className="pt-4 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
