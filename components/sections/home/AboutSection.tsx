'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const highlights = [
  { icon: '✓', text: 'Certified Google Partner — £50M+ in managed ad spend' },
  { icon: '✓', text: 'In-house team of 30+ designers, developers & SEO specialists' },
  { icon: '✓', text: 'Multiple Drum & UK Search Awards finalist' },
  { icon: '✓', text: 'Transparent monthly reporting with real-time dashboards' },
  { icon: '✓', text: 'Rolling contracts — no lock-ins, just results' },
];

export default function AboutSection() {
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/3 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-navy aspect-[4/3]">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Blue gradient orb */}
              <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue/20 rounded-full blur-[60px]" />

              {/* Content inside the visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-blue text-6xl font-bold mb-2">10+</p>
                  <p className="text-white/60 text-lg">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 sm:right-8 rounded-xl bg-white border border-gray-200 shadow-lg p-4 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-navy font-bold text-sm">4.9 Rating</p>
                  <p className="text-gray-500 text-xs">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p
              className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              About NetTrackers
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-navy mb-6 transition-all duration-600 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ lineHeight: 1.15 }}
            >
              London-Based. <span className="text-blue">UK-Focused</span>. Results-Obsessed.
            </h2>
            <p
              className={`text-gray-600 text-lg mb-4 transition-all duration-600 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Founded in 2014, NetTrackers has grown from a two-person SEO consultancy
              into a full-service digital agency trusted by 150+ UK businesses.
            </p>
            <p
              className={`text-gray-600 mb-8 transition-all duration-600 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We combine creative design, technical excellence, and data-driven strategy
              to deliver measurable results — not vanity metrics.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue text-xs font-bold mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className={`inline-flex items-center gap-2 text-blue font-semibold text-sm hover:gap-3 transition-all duration-500 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
