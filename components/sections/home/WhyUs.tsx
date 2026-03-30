'use client';

import { useEffect, useRef, useState } from 'react';

const points = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Data-Driven Strategy',
    desc: 'Every decision backed by analytics and real-time data.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transparent Reporting',
    desc: 'Monthly reports with real metrics that matter.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'UK-Focused Expertise',
    desc: 'We understand the UK market inside out.',
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'No Lock-In Contracts',
    desc: 'Rolling monthly agreements. We earn your trust.',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact who knows your business.',
    gradient: 'from-rose-500 to-pink-400',
  },
];

const metrics = [
  { value: '150+', label: 'Active Clients', color: '#0099FF' },
  { value: '£2.4M', label: 'Revenue Generated', color: '#8B5CF6' },
  { value: '4.9/5', label: 'Google Rating', color: '#F59E0B' },
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
    <section ref={ref} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Why NetTrackers
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Results That Speak{' '}
            <span className="text-gradient" style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #0099FF, #8B5CF6)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
              Louder Than Promises
            </span>
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            We don&apos;t just talk about results — we prove them. Our track record
            of delivering measurable growth sets us apart.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Feature cards */}
          {points.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 p-7 transition-all duration-500 hover:border-gray-200 hover:bg-white hover:shadow-lg"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
              }}
            >
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-md`}>
                {p.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Metrics card - spans full width on the right */}
          <div
            className="relative rounded-2xl bg-[#0A0E17] p-8 overflow-hidden lg:row-span-2 lg:col-start-3 lg:row-start-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0099FF, transparent)' }} />
            <div className="absolute inset-0 dot-grid opacity-20" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-blue-400 mb-4 tracking-wide uppercase">Key Metrics</p>
                <div className="space-y-8">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <p
                        className="text-4xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {m.value}
                      </p>
                      <p className="text-gray-400 text-sm">{m.label}</p>
                      <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: visible ? '85%' : '0%',
                            background: `linear-gradient(90deg, ${m.color}, transparent)`,
                            transitionDelay: '0.5s',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Growing every month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
