'use client';

import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    q: 'How long before we see SEO results?',
    a: 'Most clients see measurable improvements within 3-4 months, with significant ranking jumps by month 6. We set clear milestones so you can track progress from day one. Our approach is data-driven, meaning we continuously optimise based on what\'s working.',
  },
  {
    q: 'Do we have to sign a long-term contract?',
    a: 'No. We offer rolling monthly agreements because we believe in earning your business every month through results, not locking you in. Most of our clients choose to stay because the ROI speaks for itself — our 98% retention rate backs this up.',
  },
  {
    q: 'Do you work with small businesses or just large companies?',
    a: 'We work with businesses of all sizes, from ambitious startups to established enterprises. Our packages are tailored to your budget and goals — whether you need a single service or a comprehensive digital strategy.',
  },
  {
    q: 'Can we see case studies or examples of your work?',
    a: 'Absolutely. Visit our Case Studies page to see detailed breakdowns of how we\'ve helped businesses across multiple industries achieve measurable growth in traffic, leads, and revenue.',
  },
  {
    q: 'What kind of reporting do you provide?',
    a: 'You\'ll get access to a real-time dashboard plus detailed monthly reports covering all KPIs, progress against milestones, and strategic recommendations. We believe in complete transparency — you\'ll always know exactly what we\'re doing and why.',
  },
  {
    q: 'Is your team based in the UK?',
    a: 'Yes. Our entire team is based in London, UK. When you call, you speak to the people actually working on your account. No outsourcing, no middlemen — just a dedicated team that understands the UK market inside and out.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-off-white py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FAQ
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-navy mb-6 transition-all duration-600 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ lineHeight: 1.15 }}
          >
            Got Questions? <span className="text-blue">We&apos;ve Got Answers</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl bg-white border transition-all duration-500 ${
                  isOpen ? 'border-blue/20 shadow-md' : 'border-gray-200/60'
                } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-sm pr-4 transition-colors ${isOpen ? 'text-blue' : 'text-navy'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-blue text-white rotate-45' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
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
