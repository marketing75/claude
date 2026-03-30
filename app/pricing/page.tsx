'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    description: 'For small businesses getting started online.',
    monthlyPrice: '£997',
    oneOffPrice: '£4,997',
    popular: false,
    features: [
      'Website design (5 pages)',
      'Basic SEO setup',
      'Google Business optimisation',
      'Monthly reporting',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    description: 'For growing businesses ready to scale.',
    monthlyPrice: '£1,997',
    oneOffPrice: '£9,997',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Custom website (up to 15 pages)',
      'Full SEO campaign',
      'Reputation monitoring',
      'Dedicated account manager',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For established businesses with complex needs.',
    monthlyPrice: '£3,997',
    oneOffPrice: 'Custom',
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'E-commerce or software development',
      'Advanced SEO & content marketing',
      'Full reputation management',
      'Custom CRM/ERP integration',
      '24/7 support',
    ],
  },
];

const faqs = [
  {
    question: 'Are there any setup fees?',
    answer: 'No. Our monthly plans include all setup and onboarding at no additional cost. For one-off projects, the quoted price covers the entire scope of work from start to finish.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we will adjust your scope of work accordingly.',
  },
  {
    question: 'What is the minimum contract length?',
    answer: 'Our monthly plans operate on a rolling 3-month minimum term. After the initial period, you can cancel with 30 days\' notice. One-off projects have no ongoing commitment.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes. If none of our standard plans fit your needs, we will build a bespoke package tailored to your goals and budget. Get in touch for a free consultation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers (BACS), direct debit, and all major credit and debit cards. Monthly plans are billed on the 1st of each month.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'We are confident in our work. If you are not satisfied within the first 30 days of a monthly plan, we will refund your first month in full — no questions asked.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'one-off'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bespokeForm, setBespokeForm] = useState({ name: '', email: '', message: '' });
  const [bespokeSent, setBespokeSent] = useState(false);

  const handleBespokeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBespokeSent(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 font-body mb-6">
            Simple, Transparent Pricing
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing for Every Business Size
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
            No hidden fees, no long-term lock-ins. Choose a plan that fits your goals and budget.
          </p>
        </div>
      </section>

      {/* Pricing toggle + cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-body font-semibold text-sm ${billing === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setBilling(billing === 'monthly' ? 'one-off' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  billing === 'one-off' ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`font-body font-semibold text-sm ${billing === 'one-off' ? 'text-gray-900' : 'text-gray-400'}`}>
              One-off
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-2 border-blue-500 scale-[1.02]' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold font-body rounded-full px-4 py-1.5 uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 font-body mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-gray-900">
                    {billing === 'monthly' ? plan.monthlyPrice : plan.oneOffPrice}
                  </span>
                  {billing === 'monthly' && (
                    <span className="text-gray-500 font-body text-sm">/month</span>
                  )}
                  {billing === 'one-off' && plan.oneOffPrice !== 'Custom' && (
                    <span className="text-gray-500 font-body text-sm"> one-off</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 font-body">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'ghost'}
                  size="md"
                  href="/contact"
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Something Bespoke?
          </h2>
          <p className="text-gray-600 font-body mb-10">
            Every business is different. Tell us what you need and we will craft a tailored proposal with clear pricing.
          </p>
          {bespokeSent ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="font-body font-semibold text-green-800">Thank you! We will be in touch shortly with a bespoke quote.</p>
            </div>
          ) : (
            <form onSubmit={handleBespokeSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={bespokeForm.name}
                  onChange={(e) => setBespokeForm({ ...bespokeForm, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={bespokeForm.email}
                  onChange={(e) => setBespokeForm({ ...bespokeForm, email: e.target.value })}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Describe your project and requirements..."
                value={bespokeForm.message}
                onChange={(e) => setBespokeForm({ ...bespokeForm, message: e.target.value })}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
              />
              <div className="text-center">
                <Button variant="primary" size="lg" type="submit">
                  Request a Bespoke Quote
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 font-body leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
