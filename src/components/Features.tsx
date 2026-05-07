import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  {
    title: 'Velocidad Extrema',
    description: 'Optimizamos cada byte para que tu página cargue en menos de un segundo.',
    icon: '⚡'
  },
  {
    title: 'Diseño Único',
    description: 'No usamos plantillas. Creamos experiencias visuales personalizadas desde cero.',
    icon: '🎨'
  },
  {
    title: 'Animaciones Fluidas',
    description: 'Implementamos GSAP para que cada interacción se sienta natural y premium.',
    icon: '✨'
  },
  {
    title: 'SEO de Elite',
    description: 'Estructura semántica para que los buscadores te amen desde el primer día.',
    icon: '🚀'
  }
];

export default function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} id="features" className="section-padding" style={{ background: 'var(--surface)', position: 'relative', zIndex: 10 }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>¿Por qué trabajar con nosotros?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Elevamos el estándar de lo que una página web puede lograr.</p>
        </div>

        <div className="grid-responsive">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass" style={{ padding: '2rem', borderRadius: '1.5rem', transition: 'background 0.3s ease' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
