'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Thames Legal Partners',
    quote:
      'NetTrackers transformed our online presence completely. Our organic traffic increased by 340% in just 8 months, and we\'re now ranking #1 for our key terms.',
    rating: 5,
    service: 'SEO',
    metric: '+340%',
    metricLabel: 'Organic Traffic',
  },
  {
    name: 'James Harrison',
    role: 'CEO',
    company: 'BuildRight Construction',
    quote:
      'The website they built for us generates 3\u00d7 more enquiries than our previous one. Their understanding of our industry made all the difference.',
    rating: 5,
    service: 'Web Design',
    metric: '3\u00d7',
    metricLabel: 'More Enquiries',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Practice Manager',
    company: 'Harley Street Dental',
    quote:
      'Our Google reviews went from 3.2 to 4.8 stars within 6 months. The reputation management service has been transformational for patient trust.',
    rating: 5,
    service: 'ORM',
    metric: '4.8',
    metricLabel: 'Google Rating',
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
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0E17' }}
      data-theme="dark"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0099FF, transparent)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Client Stories
          </span>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Don&apos;t Just Take Our{' '}
            <span className="text-gradient" style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #0099FF, #8B5CF6)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
              Word For It
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.12}s`,
              }}
            >
              {/* Metric highlight */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.metric}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.metricLabel}</p>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {t.service}
                </span>
              </div>

              {/* Stars */}
              <div className="mb-4 flex text-yellow-400 text-sm">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j}>&#9733;</span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-8 text-white/70 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-400">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
