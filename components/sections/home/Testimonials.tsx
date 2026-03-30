'use client';

import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Thames Legal Partners',
    quote: 'NetTrackers transformed our online presence completely. Within 6 months, our organic traffic increased by 340% and we went from page 3 to position 1 for our main keywords.',
    service: 'SEO',
    initials: 'SM',
    metric: '+340% Traffic',
  },
  {
    name: 'James Harrington',
    role: 'CEO',
    company: 'BuildRight Construction',
    quote: 'The website they built doesn\'t just look incredible — it converts. Our enquiry rate went from 2% to 8.5% within the first quarter. Best investment we\'ve made.',
    service: 'Web Design',
    initials: 'JH',
    metric: '4x Conversions',
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Practice Manager',
    company: 'Harley Street Dental',
    quote: 'After a reputation crisis, NetTrackers helped us recover our 4.8-star rating and build a review system that now generates 20+ five-star reviews every month automatically.',
    service: 'ORM',
    initials: 'PP',
    metric: '4.8★ Recovered',
  },
];

export default function Testimonials() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-dark/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Client Love
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-600 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ lineHeight: 1.15 }}
          >
            What Our Clients <span className="hero-gradient-text">Say</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-700 hover:border-blue/20 hover:bg-white/[0.04] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-blue/10 border border-blue/20 px-3 py-1">
                <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue text-xs font-semibold">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue/40 to-blue-dark/40 flex items-center justify-center text-xs font-bold text-white/70">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-[10px] font-medium text-blue">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
