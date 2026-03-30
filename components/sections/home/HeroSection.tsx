'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (headlineRef.current) observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0E17] flex items-center">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #0099FF 0%, transparent 70%)',
            animation: 'pulse-glow 6s ease-in-out infinite',
          }}
        />
        {/* Secondary gradient orb */}
        <div
          className="absolute bottom-[-30%] left-[-15%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            animation: 'pulse-glow 8s ease-in-out 2s infinite',
          }}
        />
        {/* Cyan accent orb */}
        <div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
            animation: 'pulse-glow 7s ease-in-out 1s infinite',
          }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-blue-300 glass"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span>UK&apos;s Premier Digital Agency</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="mb-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="block text-white"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                }}
              >
                We Make UK Businesses
              </span>
              <span
                className="block mt-2 text-gradient italic"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #0099FF 0%, #06B6D4 40%, #8B5CF6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Impossible to Ignore
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.5s',
              }}
            >
              From SEO and web design to reputation management and custom software
              — we help UK businesses get found, look stunning, and grow faster
              than the competition.
            </p>

            {/* CTAs */}
            <div
              className="mb-14 flex flex-wrap gap-4"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.7s',
              }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center rounded-full px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-gradient-animated" style={{ backgroundSize: '200% 200%' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #0099FF 0%, #8B5CF6 100%)' }} />
                <span className="relative z-10">Book a Free Strategy Call</span>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-full px-8 py-4 text-base font-semibold text-white/80 border border-white/10 transition-all hover:border-white/30 hover:text-white hover:bg-white/5 hover:-translate-y-0.5"
              >
                View Our Work
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trusted By */}
            <div
              className="overflow-hidden"
              style={{
                opacity: revealed ? 1 : 0,
                transition: 'all 0.8s ease 0.9s',
              }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Trusted by leading UK brands
              </p>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0A0E17] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A0E17] to-transparent z-10" />
                <div className="flex gap-8" style={{ animation: 'marquee 25s linear infinite' }}>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-24 flex-shrink-0 rounded-lg border border-white/5 bg-white/[0.03]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Dashboard Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Morphing blob background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #0099FF, #8B5CF6)',
                  animation: 'morph 8s ease-in-out infinite',
                  filter: 'blur(60px)',
                }}
              />

              {/* Main dashboard card */}
              <div
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-2xl"
                style={{ animation: 'float-slow 6s ease-in-out infinite' }}
              >
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">analytics.nettrackers.co.uk</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                    <p className="text-xs text-gray-500 mb-1">Visitors</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>47.2K</p>
                    <span className="text-xs font-semibold text-emerald-400">+340%</span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                    <p className="text-xs text-gray-500 mb-1">Conversions</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>1,847</p>
                    <span className="text-xs font-semibold text-emerald-400">+128%</span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                    <p className="text-xs text-gray-500 mb-1">Revenue</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>£84K</p>
                    <span className="text-xs font-semibold text-emerald-400">+67%</span>
                  </div>
                </div>

                {/* Chart visualization */}
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-white">Organic Traffic Growth</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">Live</span>
                  </div>
                  {/* SVG Chart */}
                  <svg viewBox="0 0 400 120" className="w-full h-auto">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0099FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0099FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,100 Q30,90 60,85 T120,70 T180,55 T240,35 T300,25 T360,15 L400,10 L400,120 L0,120 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,100 Q30,90 60,85 T120,70 T180,55 T240,35 T300,25 T360,15 L400,10"
                      fill="none"
                      stroke="#0099FF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="400" cy="10" r="4" fill="#0099FF">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>

              {/* Floating metric cards */}
              <div
                className="absolute -right-6 top-8 rounded-xl border border-white/10 bg-[#0D1117]/90 backdrop-blur-xl px-4 py-3 shadow-xl"
                style={{ animation: 'float 4s ease-in-out 0.5s infinite' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Retention</p>
                    <p className="text-sm font-bold text-white">98%</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -left-4 bottom-16 rounded-xl border border-white/10 bg-[#0D1117]/90 backdrop-blur-xl px-4 py-3 shadow-xl"
                style={{ animation: 'float 4s ease-in-out 1.5s infinite' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ROI</p>
                    <p className="text-sm font-bold text-white">+4.2x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E17] to-transparent" />
    </section>
  );
}
