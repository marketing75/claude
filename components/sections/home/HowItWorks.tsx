'use client';

import { useRef, useState, useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    description: 'We audit your current digital presence, research your competitors, and understand your goals inside-out.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    description: 'Our team crafts a bespoke roadmap with clear milestones, KPIs, and a timeline tailored to your budget.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution',
    description: 'We build, optimise, and launch — keeping you updated every step of the way with transparent reporting.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth',
    description: 'Continuous optimisation, A/B testing, and scaling. We don\'t stop until your growth targets are smashed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue/3 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Process
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 transition-all duration-600 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ lineHeight: 1.15 }}
          >
            Four Steps to <span className="text-blue">Digital Dominance</span>
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto text-lg transition-all duration-600 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A proven, repeatable process that takes you from where you are to where you want to be.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px]">
            <div
              className="h-full bg-gradient-to-r from-blue/20 via-blue/40 to-blue/20 transition-all duration-1000"
              style={{
                transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transitionDelay: '400ms',
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative text-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                {/* Number circle */}
                <div className="relative mx-auto mb-6 w-[72px] h-[72px]">
                  <div className="absolute inset-0 rounded-full bg-blue/10 group-hover:bg-blue/20 transition-colors" />
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue font-bold text-lg">{step.num}</span>
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-blue/20 animate-ping-slow"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
