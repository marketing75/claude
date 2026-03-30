'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 600px 600px at ${mousePos.x}% ${mousePos.y}%, rgba(0,153,255,0.4), transparent),
              radial-gradient(ellipse 800px 800px at 20% 80%, rgba(0,119,204,0.2), transparent),
              radial-gradient(ellipse 600px 600px at 80% 20%, rgba(0,85,153,0.15), transparent)
            `,
            transition: 'background 0.3s ease',
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-blue-dark/10 rounded-full blur-[120px] animate-float-slow-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-deeper/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className={`mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-700 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
              </span>
              UK&apos;s Premier Digital Agency
            </div>

            {/* Headline */}
            <h1 className="mb-8">
              <span
                className={`block text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white transition-all duration-700 delay-100 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                We Build Brands
              </span>
              <span
                className={`block text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white transition-all duration-700 delay-200 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                That{' '}
                <span className="relative inline-block">
                  <span className="hero-gradient-text">Dominate</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C40 3 80 2 100 4C120 6 160 8 198 3"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className={`transition-all duration-1000 delay-700 ${
                        revealed ? 'stroke-dashoffset-0' : ''
                      }`}
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: revealed ? 0 : 300,
                        transition: 'stroke-dashoffset 1s ease 0.7s',
                      }}
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0099FF" />
                        <stop offset="100%" stopColor="#00D4FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
              <span
                className={`block text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white transition-all duration-700 delay-300 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Online.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mb-10 max-w-lg text-lg leading-relaxed text-gray-400 transition-all duration-700 delay-[400ms] ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              From stunning web design to SEO that ranks — we help UK businesses
              get found, convert visitors, and scale revenue with strategies
              that actually work.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-500 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-blue px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,153,255,0.4)]"
              >
                <span className="relative z-10">Book a Free Strategy Call</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/90 transition-all hover:bg-white/5 hover:border-white/30"
              >
                View Our Work
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Social Proof Strip */}
            <div
              className={`transition-all duration-700 delay-[600ms] ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-navy bg-gradient-to-br from-blue/40 to-blue-dark/40 flex items-center justify-center text-xs font-bold text-white/60"
                    >
                      {['JT', 'SR', 'AK', 'ML'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">
                    Rated <span className="text-white font-semibold">4.9/5</span> from 150+ UK businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Creative Dashboard Mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue/20 via-blue-dark/10 to-blue-deeper/20 rounded-2xl blur-2xl" />

              {/* Main Dashboard Card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Analytics Dashboard</p>
                      <p className="text-gray-500 text-xs">Real-time performance</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                    Live
                  </span>
                </div>

                {/* Big Metric */}
                <div className="mb-6">
                  <p className="text-gray-500 text-sm mb-1">Monthly Organic Traffic</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-white">47,892</span>
                    <span className="text-emerald-400 text-sm font-semibold mb-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +340%
                    </span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="mb-6 h-32 flex items-end gap-1">
                  {[25, 35, 30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 92, 88, 95, 90, 98, 94, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue/60 to-blue transition-all duration-500"
                        style={{
                          height: revealed ? `${h}%` : '0%',
                          transitionDelay: `${800 + i * 50}ms`,
                        }}
                      />
                    )
                  )}
                </div>

                {/* Mini Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Conversion Rate', value: '4.8%', change: '+1.2%' },
                    { label: 'Avg. Position', value: '#3.2', change: '+5 spots' },
                    { label: 'Revenue', value: '£284K', change: '+67%' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-white/[0.03] border border-white/5 p-3"
                    >
                      <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-sm">{stat.value}</p>
                      <p className="text-emerald-400 text-[10px] font-medium">{stat.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification cards */}
              <div
                className="absolute -top-4 -right-4 sm:-right-8 rounded-xl border border-white/10 bg-navy-mid/90 backdrop-blur-xl p-3 shadow-lg animate-float"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">#1 on Google</p>
                    <p className="text-gray-500 text-[10px]">3 new keywords ranked</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 sm:-left-8 rounded-xl border border-white/10 bg-navy-mid/90 backdrop-blur-xl p-3 shadow-lg animate-float-delayed"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">+4x ROI</p>
                    <p className="text-gray-500 text-[10px]">Average client return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
