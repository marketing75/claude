'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!visible.current) {
        visible.current = true;
        inner.style.opacity = '1';
        outer.style.opacity = '1';
      }

      inner.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;

      // Check if over a dark section
      const target = e.target as HTMLElement;
      const darkSection = target.closest('[data-theme="dark"]');
      if (darkSection) {
        inner.style.mixBlendMode = 'difference';
        outer.style.mixBlendMode = 'difference';
      } else {
        inner.style.mixBlendMode = 'normal';
        outer.style.mixBlendMode = 'normal';
      }
    };

    const onMouseEnterInteractive = () => {
      hovering.current = true;
      if (outer) outer.style.transform = `translate(${outerPos.current.x - 22}px, ${outerPos.current.y - 22}px) scale(1.5)`;
    };

    const onMouseLeaveInteractive = () => {
      hovering.current = false;
    };

    const onMouseLeave = () => {
      visible.current = false;
      if (inner) inner.style.opacity = '0';
      if (outer) outer.style.opacity = '0';
    };

    // Add hover listeners to all interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Lerp animation for outer ring
    let animId: number;
    const animate = () => {
      outerPos.current.x += (mouse.current.x - outerPos.current.x) * 0.15;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * 0.15;

      const scale = hovering.current ? 1.5 : 1;
      if (outer) {
        outer.style.transform = `translate(${outerPos.current.x - 22}px, ${outerPos.current.y - 22}px) scale(${scale})`;
      }

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ width: 12, height: 12 }}
      >
        <div className="w-3 h-3 rounded-full bg-blue-500" />
      </div>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ width: 44, height: 44 }}
      >
        <div className="w-11 h-11 rounded-full border-2 border-blue-500" />
      </div>
    </>
  );
}
