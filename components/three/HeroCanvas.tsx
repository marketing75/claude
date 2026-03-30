'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 2000;
const REPEL_RADIUS = 80;
const SPRING = 0.05;
const DAMPING = 0.85;

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -width / 2, width / 2,
      height / 2, -height / 2,
      0.1, 1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0D1117, 1);
    container.appendChild(renderer.domElement);

    // Create grid of particles
    const cols = Math.ceil(Math.sqrt(PARTICLE_COUNT * (width / height)));
    const rows = Math.ceil(PARTICLE_COUNT / cols);
    const spacingX = width / cols;
    const spacingY = height / rows;
    const count = cols * rows;

    const positions = new Float32Array(count * 3);
    const originals = new Float32Array(count * 2);
    const velocities = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = (col - cols / 2) * spacingX + spacingX / 2;
      const y = (row - rows / 2) * spacingY + spacingY / 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;

      originals[i * 2] = x;
      originals[i * 2 + 1] = y;

      velocities[i * 2] = 0;
      velocities[i * 2 + 1] = 0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      sizeAttenuation: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse tracking
    const mouse = { x: 99999, y: 99999 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - width / 2;
      mouse.y = -(e.clientY - rect.top - height / 2);
    };

    const onMouseLeave = () => {
      mouse.x = 99999;
      mouse.y = 99999;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    // Animation
    let paused = false;
    let animId: number;

    const onVisibilityChange = () => {
      paused = document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (paused) return;

      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      const pos = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const ox = originals[i * 2];
        const oy = originals[i * 2 + 1];
        const px = pos[i * 3];
        const py = pos[i * 3 + 1];

        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          velocities[i * 2] += (dx / dist) * force * 2;
          velocities[i * 2 + 1] += (dy / dist) * force * 2;
        }

        // Spring back to original
        velocities[i * 2] += (ox - px) * SPRING;
        velocities[i * 2 + 1] += (oy - py) * SPRING;

        // Damping
        velocities[i * 2] *= DAMPING;
        velocities[i * 2 + 1] *= DAMPING;

        pos[i * 3] += velocities[i * 2];
        pos[i * 3 + 1] += velocities[i * 2 + 1];
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      {/* Reduced motion fallback */}
      <noscript>
        <div className="w-full h-full bg-gradient-to-br from-[#0D1117] to-[#1a2332]" />
      </noscript>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          div {
            background: linear-gradient(135deg, #0D1117 0%, #1a2332 100%);
          }
        }
      `}</style>
    </div>
  );
}
