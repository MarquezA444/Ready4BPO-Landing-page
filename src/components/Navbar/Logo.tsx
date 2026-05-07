import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Logo() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline();

    // Reset initial state
    gsap.set('#logo-ready', { opacity: 0, x: -20 });
    gsap.set('#logo-bpo', { opacity: 0, x: 20 });
    gsap.set('#logo-4-text', { opacity: 0, scale: 0.5, transformOrigin: 'center' });
    gsap.set('#logo-glow', { opacity: 0 });

    // Animation sequence
    tl.to('#logo-4-text', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    .to('#logo-glow', {
      opacity: 0.5,
      duration: 0.4
    }, '-=0.4')
    .to(['#logo-ready', '#logo-bpo'], {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');

    // Add a continuous slow pulse to the 4
    gsap.to('#logo-4-text', {
      textShadow: '0 0 12px rgba(47, 255, 207, 0.6)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });

  }, { scope: svgRef });

  return (
    <svg 
      ref={svgRef}
      viewBox="0 0 180 40" 
      width="160" 
      height="36" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', display: 'block' }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Glow background for the 4 */}
      <circle id="logo-glow" cx="90" cy="20" r="16" fill="var(--color-primary-dim)" filter="url(#glow)" />

      {/* READY */}
      <text 
        id="logo-ready" 
        x="72" 
        y="28" 
        fill="var(--color-text-primary)" 
        fontFamily="var(--font-display)" 
        fontWeight="800" 
        fontSize="24"
        textAnchor="end"
      >
        READY
      </text>

      {/* 4 */}
      <text 
        id="logo-4-text" 
        x="90" 
        y="29" 
        fill="var(--color-primary)" 
        fontFamily="var(--font-display)" 
        fontWeight="900" 
        fontSize="28"
        textAnchor="middle"
      >
        4
      </text>

      {/* BPO */}
      <text 
        id="logo-bpo" 
        x="108" 
        y="28" 
        fill="var(--color-text-primary)" 
        fontFamily="var(--font-display)" 
        fontWeight="800" 
        fontSize="24"
        textAnchor="start"
      >
        BPO
      </text>
    </svg>
  );
}
