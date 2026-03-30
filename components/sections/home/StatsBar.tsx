'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Clients Served', icon: '🏢' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: '🔒' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: '⚡' },
  { value: 4, suffix: '×', label: 'Average ROI', icon: '📈' },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * target);
      setCurrent(val);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span
      className="text-5xl font-black text-white"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {current}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 bg-[#0A0E17]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-blue-500/20 hover:bg-white/[0.06]"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 40px rgba(0, 153, 255, 0.08)' }} />
              <div className="mb-4 text-3xl">{stat.icon}</div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} active={active} />
              <p className="mt-3 text-sm font-medium tracking-wide text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
