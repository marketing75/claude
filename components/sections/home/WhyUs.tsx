'use client';

import { useRef, useState, useEffect } from 'react';

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Strategy',
    desc: 'Every decision backed by analytics and real-time data. No guesswork, just proven methods.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards and monthly reports so you always know exactly what you\'re getting.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'UK-Focused Expertise',
    desc: 'Deep understanding of the UK market, consumer behaviour, and local search patterns.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    title: 'No Lock-In Contracts',
    desc: 'Rolling monthly agreements. We earn your business every month through results.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact who knows your business inside and out. Always accessible.',
  },
];

const metrics = [
  { value: '150+', label: 'Active Clients', color: 'border-blue' },
  { value: '£2.4M', label: 'Revenue Generated', color: 'border-emerald-400' },
  { value: '4.9/5', label: 'Google Rating', color: 'border-amber-400' },
];

export default function WhyUs() {
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
    <section ref={ref} className="relative bg-off-white py-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue/3 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p
              className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Why Choose Us
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-navy mb-6 transition-all duration-600 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ lineHeight: 1.15 }}
            >
              We Don&apos;t Just Build Websites.<br />
              We Build <span className="text-blue">Growth Engines</span>.
            </h2>
            <p
              className={`text-gray-600 text-lg mb-10 transition-all duration-600 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Most agencies deliver a website and disappear. We partner with you to create digital
              systems that continuously attract, convert, and retain customers.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`group flex items-start gap-4 rounded-xl bg-white border border-gray-200/60 p-4 transition-all duration-500 hover:border-blue/30 hover:shadow-md ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Metrics */}
          <div className="relative">
            {/* Background card */}
            <div
              className={`relative rounded-2xl bg-navy p-8 sm:p-10 transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 rounded-2xl opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Results That Speak</h3>
                <p className="text-gray-400 mb-8">Real numbers from real UK businesses we&apos;ve helped grow.</p>

                {/* Metric Cards */}
                <div className="space-y-4 mb-8">
                  {metrics.map((metric, i) => (
                    <div
                      key={metric.label}
                      className={`flex items-center gap-4 rounded-xl bg-white/[0.04] border border-white/[0.06] p-5 transition-all duration-500 ${
                        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: `${500 + i * 150}ms` }}
                    >
                      <div className={`w-1 h-12 rounded-full ${metric.color} bg-current`} />
                      <div>
                        <p className="text-3xl font-bold text-white">{metric.value}</p>
                        <p className="text-gray-400 text-sm">{metric.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3">
                  {['Google Partner', 'ISO 27001', 'UK Based'].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-gray-400"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
