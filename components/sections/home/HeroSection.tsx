'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HEADLINE_PART1 = 'We Make UK Businesses ';
const HEADLINE_PART2 = 'Impossible to Ignore';

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

  const renderChars = (text: string, offset: number, className?: string) =>
    text.split('').map((char, i) => (
      <span
        key={offset + i}
        className={`inline-block transition-all duration-300 ${className ?? ''}`}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(12px)',
          transitionDelay: `${(offset + i) * 25}ms`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
              </span>
              <span>🇬🇧 UK&apos;s Premier Digital Agency</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {renderChars(HEADLINE_PART1, 0)}
              <br />
              {renderChars(HEADLINE_PART2, HEADLINE_PART1.length, 'italic text-blue-500')}
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
              From SEO and web design to reputation management and custom software
              — we help UK businesses get found, look stunning, and grow faster
              than the competition.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                View Our Work →
              </Link>
            </div>

            {/* Client Logo Strip */}
            <div className="overflow-hidden">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                Trusted by leading UK brands
              </p>
              <div className="relative">
                <div className="flex animate-marquee gap-8">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-24 flex-shrink-0 rounded bg-gray-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div
              id="hero-canvas"
              className="relative min-h-[500px] rounded-xl"
              style={{ backgroundColor: '#0D1117' }}
            >
              {/* Floating Dashboard Card */}
              <div
                className="absolute bottom-8 left-8 right-8 rounded-lg bg-white p-5 shadow-lg"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">
                    Monthly Traffic
                  </span>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
                    +340%
                  </span>
                </div>
                {/* Mini Bar Chart */}
                <div className="flex items-end gap-1.5">
                  {[35, 50, 40, 65, 55, 80, 70, 95, 85, 100, 90, 98].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-blue-500"
                        style={{ height: `${h * 0.6}px`, opacity: 0.6 + (i / 12) * 0.4 }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Floating Badge: 98% Retention */}
              <div
                className="absolute right-4 top-6 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg"
                style={{
                  animation: 'float 4s ease-in-out 0.5s infinite',
                }}
              >
                98% Retention
              </div>

              {/* Floating Badge: +4x ROI */}
              <div
                className="absolute bottom-32 left-4 rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg"
                style={{
                  animation: 'float 4s ease-in-out 1s infinite',
                }}
              >
                +4× ROI
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
