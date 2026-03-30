'use client';

import gsap from 'gsap';

/**
 * Fade in from below with opacity transition.
 */
export function fadeInUp(element: gsap.TweenTarget, delay: number = 0): gsap.core.Tween {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
    }
  );
}

/**
 * Staggered fade-in for a collection of elements.
 */
export function staggerFadeIn(
  elements: gsap.TweenTarget,
  stagger: number = 0.15
): gsap.core.Tween {
  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
    }
  );
}

/**
 * Character-by-character text reveal animation.
 * Splits text into individual characters and animates each one.
 */
export function splitTextReveal(element: HTMLElement): gsap.core.Timeline {
  const text = element.textContent || '';
  element.textContent = '';
  element.style.visibility = 'visible';

  const chars = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    element.appendChild(span);
    return span;
  });

  const tl = gsap.timeline();
  tl.fromTo(
    chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: 'power2.out',
    }
  );

  return tl;
}

/**
 * Animate a number counting from 0 to the target value.
 */
export function counterAnimation(
  element: HTMLElement,
  target: number
): gsap.core.Tween {
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: target,
    duration: 2,
    ease: 'power1.out',
    onUpdate() {
      element.textContent = Math.round(obj.value).toLocaleString();
    },
  });
}

/**
 * Image reveal with scale-down effect.
 */
export function imageReveal(element: gsap.TweenTarget): gsap.core.Tween {
  return gsap.fromTo(
    element,
    { scale: 1.1, opacity: 0 },
    {
      scale: 1.0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    }
  );
}

/**
 * Horizontal line draw animation (width from 0 to 100%).
 */
export function lineReveal(element: gsap.TweenTarget): gsap.core.Tween {
  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration: 1,
      ease: 'power3.inOut',
    }
  );
}
