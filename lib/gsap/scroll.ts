'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Create a standard scroll-triggered animation.
 */
export function createScrollReveal(
  trigger: string | Element,
  animation: (tl: gsap.core.Timeline) => void,
  options?: {
    start?: string;
    end?: string;
    toggleActions?: string;
    markers?: boolean;
  }
): ScrollTrigger {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: options?.start ?? 'top 80%',
      end: options?.end ?? 'bottom 20%',
      toggleActions: options?.toggleActions ?? 'play none none none',
      markers: options?.markers ?? false,
    },
  });

  animation(tl);

  return tl.scrollTrigger!;
}

/**
 * Create a parallax scrolling effect on an element.
 */
export function createParallax(
  element: string | Element,
  speed: number = 0.5
): ScrollTrigger {
  const yDistance = speed * 100;

  gsap.fromTo(
    element,
    { y: -yDistance },
    {
      y: yDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );

  return ScrollTrigger.getAll().pop()!;
}
