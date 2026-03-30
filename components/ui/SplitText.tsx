'use client';

import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const characters = children.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={children}>
      {characters.map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: `${delay + i * 20}ms`,
          }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
