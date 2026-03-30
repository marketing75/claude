'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We audit your current digital presence and understand your goals, competitors, and target audience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We create a tailored roadmap with clear milestones, KPIs, and timelines for your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our specialist team implements the strategy with precision, keeping you updated at every stage.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'We measure, optimise, and scale what works. Your success metrics improve month over month.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-[#0A0E17] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0099FF, transparent)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Our Process
          </span>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple Process,{' '}
            <span className="text-gradient" style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #0099FF, #06B6D4)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
              Exceptional Results
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-[60px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] hidden lg:block">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20" />
            <svg className="absolute inset-0 w-full h-[2px]">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#0099FF" strokeWidth="2" strokeDasharray="6 6" style={{ animation: 'dash-flow 1s linear infinite' }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
                }}
              >
                {/* Step circle */}
                <div className="group relative mb-8">
                  {/* Glow ring */}
                  <div className="absolute -inset-3 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 transition-all duration-500 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_30px_rgba(0,153,255,0.2)]">
                    {step.icon}
                  </div>
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                    {step.num}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="max-w-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
