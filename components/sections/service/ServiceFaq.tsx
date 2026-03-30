'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  faqs: Faq[];
}

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-sm overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-6 text-left font-body font-semibold text-text hover:text-blue transition-colors cursor-pointer"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 text-2xl text-blue transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-6 font-body text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
