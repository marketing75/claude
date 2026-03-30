'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const cities = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol',
  'Edinburgh', 'Glasgow', 'Liverpool', 'Sheffield', 'Nottingham',
];

export default function LocationsGrid() {
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-blue text-sm font-semibold uppercase tracking-widest mb-4 transition-all duration-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Serving All of the UK
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-navy mb-6 transition-all duration-600 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ lineHeight: 1.15 }}
          >
            Our <span className="text-blue">Locations</span>
          </h2>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <Link
              key={city}
              href={`/locations/${city.toLowerCase()}`}
              className={`group flex items-center gap-3 rounded-xl bg-off-white border border-gray-200/60 px-5 py-4 transition-all duration-500 hover:border-blue/30 hover:shadow-md hover:-translate-y-0.5 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
            >
              <svg className="w-4 h-4 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-navy font-medium text-sm group-hover:text-blue transition-colors">
                {city}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
