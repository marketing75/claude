'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Web Design & Development',
    description: 'Stunning, conversion-focused websites that make your brand unforgettable. Built with performance and SEO baked in.',
    href: '/services/web-design-development',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-blue/20 to-cyan-500/20',
    borderColor: 'group-hover:border-blue/40',
    accentColor: 'text-blue',
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Dominate search results with data-driven SEO strategies that drive qualified organic traffic and boost revenue.',
    href: '/services/seo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-emerald-500/40',
    accentColor: 'text-emerald-400',
  },
  {
    title: 'Online Reputation Management',
    description: 'Protect and enhance your brand image. Monitor reviews, manage crises, and build trust that converts.',
    href: '/services/orm',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'group-hover:border-amber-500/40',
    accentColor: 'text-amber-400',
  },
  {
    title: 'CRM & ERP Software',
    description: 'Custom software solutions that streamline operations, automate workflows, and fuel business growth.',
    href: '/services/software-development',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'group-hover:border-violet-500/40',
    accentColor: 'text-violet-400',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link href={service.href} className="block h-full">
        <div
          className={`group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 ${service.borderColor}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.15s ease-out, border-color 0.3s',
          }}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="relative z-10">
            <div className={`mb-6 w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center ${service.accentColor} group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3" style={{ fontSize: 'var(--text-xl)' }}>
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className={`inline-flex items-center gap-2 text-sm font-semibold ${service.accentColor} group-hover:gap-3 transition-all`}>
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/5 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ lineHeight: 1.15 }}>
            Services That Drive{' '}
            <span className="hero-gradient-text">Real Growth</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions designed to get your business found, build trust, and convert visitors into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
