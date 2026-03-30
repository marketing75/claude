'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

// export metadata via a separate layout or head — since this is 'use client'
// we use a generateMetadata pattern in a sibling layout file or head.tsx
// For simplicity we set document title via useEffect or a metadata route

const serviceOptions = [
  { id: 'web-design', label: 'Web Design', icon: '🌐', description: 'Custom websites that convert visitors into customers' },
  { id: 'seo', label: 'SEO', icon: '📈', description: 'Rank higher and drive organic traffic' },
  { id: 'reputation', label: 'Reputation Management', icon: '⭐', description: 'Build and protect your online reputation' },
  { id: 'software', label: 'Software Development', icon: '💻', description: 'Bespoke CRM, ERP, and custom platforms' },
];

const budgetOptions = [
  'Under £5k',
  '£5k – £10k',
  '£10k – £25k',
  '£25k+',
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    company: '',
    website: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return formData.service !== '';
    if (step === 2) return formData.company !== '' && formData.budget !== '';
    if (step === 3) return formData.name !== '' && formData.email !== '';
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          {/* Animated checkmark */}
          <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Message Sent!
          </h1>
          <p className="text-lg text-gray-600 font-body mb-8">
            Thank you for getting in touch. We&apos;ll be in touch within 24 hours to discuss your project.
          </p>
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Growth
          </h1>
          <p className="text-lg text-gray-300 font-body">
            Book a free strategy call or send us a message. No obligations, no hard sell — just honest advice.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — left side (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
                {/* Progress bar */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body transition-colors duration-300 ${
                            step >= s ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {s}
                        </div>
                        <span className={`text-sm font-body hidden sm:inline ${step >= s ? 'text-gray-900' : 'text-gray-400'}`}>
                          {s === 1 ? 'Service' : s === 2 ? 'Business' : 'Contact'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service selection */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        What do you need help with?
                      </h2>
                      <p className="text-gray-600 font-body mb-8">Select the service that best matches your needs.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {serviceOptions.map((option) => (
                          <label
                            key={option.id}
                            className={`flex flex-col gap-2 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                              formData.service === option.id
                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={option.id}
                              checked={formData.service === option.id}
                              onChange={(e) => updateField('service', e.target.value)}
                              className="sr-only"
                            />
                            <span className="text-2xl">{option.icon}</span>
                            <span className="font-display font-bold text-gray-900">{option.label}</span>
                            <span className="text-sm text-gray-500 font-body">{option.description}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business info */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        Tell us about your business
                      </h2>
                      <p className="text-gray-600 font-body mb-8">This helps us tailor our recommendations to your situation.</p>
                      <div className="space-y-5">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => updateField('company', e.target.value)}
                            placeholder="e.g. Acme Ltd"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Website URL
                          </label>
                          <input
                            id="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => updateField('website', e.target.value)}
                            placeholder="https://www.example.co.uk"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Budget Range <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => updateField('budget', e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none bg-white"
                            required
                          >
                            <option value="">Select a range</option>
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact details */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        How can we reach you?
                      </h2>
                      <p className="text-gray-600 font-body mb-8">We&apos;ll get back to you within one working day.</p>
                      <div className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            placeholder="John Smith"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            placeholder="john@company.co.uk"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            placeholder="020 7946 0958"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 font-body mb-1.5">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => updateField('message', e.target.value)}
                            placeholder="Tell us about your project, goals, and any deadlines..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-10">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-body font-semibold transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => canProceed() && setStep(step + 1)}
                        className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        Send Message
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Contact info — right side (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-gray-900">Phone</p>
                      <a href="tel:02079460958" className="text-blue-500 font-body hover:underline">020 7946 0958</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-gray-900">Email</p>
                      <a href="mailto:hello@nettrackers.co.uk" className="text-blue-500 font-body hover:underline">hello@nettrackers.co.uk</a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600 font-body">71-75 Shelton Street<br />Covent Garden<br />London WC2H 9JQ</p>
                    </div>
                  </div>

                  {/* Office hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600 font-body">Mon – Fri: 9am – 6pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-gray-200 h-64 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500 font-body text-sm">Covent Garden, London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
