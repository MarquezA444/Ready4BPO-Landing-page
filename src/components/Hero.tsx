import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    }, '-=0.8')
    .from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6');

    // Float animation for a background element (we'll add one)
    gsap.to('.glow-orb', {
      y: '+=30',
      x: '+=20',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '5rem 1rem' }}>
      {/* Background Orbs */}
      <div className="glow-orb" style={{ position: 'absolute', top: '25%', left: '-5rem', width: '24rem', height: '24rem', background: 'var(--primary)', opacity: 0.2, filter: 'blur(120px)', borderRadius: '9999px' }}></div>
      <div className="glow-orb" style={{ position: 'absolute', bottom: '25%', right: '-5rem', width: '20rem', height: '20rem', background: 'var(--accent)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '9999px' }}></div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '64rem' }}>
        <h1 
          ref={titleRef} 
          className="text-gradient"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          Diseño que <br /> <span style={{ color: 'var(--primary)' }}>Atrapa Clientes</span>
        </h1>
        <p 
          ref={subtitleRef} 
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '42rem', marginInline: 'auto' }}
        >
          Modernizamos tu presencia digital con fluidez increíble y animaciones de alto impacto. 
          Desarrollado para convertir visitantes en resultados.
        </p>
        <button 
          ref={buttonRef}
          className="btn-primary"
        >
          Empezar Ahora
        </button>
      </div>
    </section>
  );
}
