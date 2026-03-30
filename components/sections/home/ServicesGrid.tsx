'use client';

import { useRef, MouseEvent } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: '🌐',
    title: 'Web Design & Development',
    desc: 'Beautiful, conversion-optimised websites built on modern technology. From bespoke designs to e-commerce platforms.',
    href: '/services/web-design-development',
  },
  {
    icon: '📈',
    title: 'SEO & Search Marketing',
    desc: 'Dominate Google search results with data-driven SEO strategies that deliver measurable organic growth.',
    href: '/services/seo',
  },
  {
    icon: '⭐',
    title: 'Online Reputation Management',
    desc: 'Protect and enhance your brand\u2019s online reputation. Monitor reviews, manage crises, and build trust.',
    href: '/services/orm',
  },
  {
    icon: '⚙️',
    title: 'CRM & ERP Software',
    desc: 'Custom-built business software that streamlines operations, automates workflows, and scales with your growth.',
    href: '/services/software-development',
  },
];

function ServiceCard({
  icon,
  title,
  desc,
  href,
}: (typeof services)[number]) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
      style={{ willChange: 'transform' }}
    >
      <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-blue-50 text-2xl">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-5 text-gray-600 leading-relaxed">{desc}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600"
      >
        Explore {title.split(' ')[0]} →
      </Link>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Our Services
          </span>
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything Your Digital Presence Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
