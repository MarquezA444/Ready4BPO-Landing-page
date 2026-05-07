import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Hero.module.css';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  // Refs — left column
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  // Refs — right column
  const cardRef = useRef<HTMLDivElement>(null);

  // Refs — background
  const networkRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Master timeline ──
    const master = gsap.timeline({
      defaults: { ease: 'power2.out' },
      delay: 1.8, // after navbar logo finishes
    });

    // Set initial states
    gsap.set(eyebrowRef.current, { autoAlpha: 0, x: -20 });
    gsap.set(headlineRef.current, { autoAlpha: 0, y: 50, clipPath: 'inset(100% 0 0 0)' });
    gsap.set(subheadRef.current, { autoAlpha: 0, y: 30 });
    gsap.set(ctaRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(proofRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(cardRef.current, { autoAlpha: 0, x: 60, rotation: 2 });

    // Network dots
    const dots = networkRef.current?.querySelectorAll(`.${styles.networkDot}`);
    if (dots) gsap.set(dots, { autoAlpha: 0, scale: 0 });

    // ── Sequence ──

    // 1. Eyebrow slides in
    master.to(eyebrowRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
    });

    // 2. Headline clip-path reveal
    master.to(headlineRef.current, {
      autoAlpha: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: 'power3.out',
    }, '-=0.3');

    // 3. Subheadline
    master.to(subheadRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
    }, '-=0.5');

    // 4. CTA buttons
    master.to(ctaRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
    }, '-=0.3');

    // 5. Proof strip
    master.to(proofRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
    }, '-=0.2');

    // 6. Program card — slides in from right with subtle rotation correction
    master.to(cardRef.current, {
      autoAlpha: 1,
      x: 0,
      rotation: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8');

    // 7. Network dots pop
    if (dots) {
      master.to(dots, {
        autoAlpha: 0.6,
        scale: 1,
        duration: 0.4,
        stagger: { amount: 0.3, from: 'random' },
      }, '-=0.6');
    }

    // ── Persistent micro-animations ──

    // Card subtle float
    gsap.to(cardRef.current, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 3,
    });

    // Network dots faint pulse
    if (dots) {
      gsap.to(dots, {
        autoAlpha: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 1.5, from: 'random' },
        delay: 4,
      });
    }
  }, { scope: container });

  return (
    <section ref={container} className={styles.hero} id="hero">
      {/* ── Geometric network background ── */}
      <div className={styles.networkBg} ref={networkRef}>
        <div className={styles.networkLine} />
        <div className={styles.networkLine} />
        <div className={styles.networkLine} />
        <div className={styles.networkLine} />
        <div className={styles.networkLine} />
        <div className={styles.networkDot} />
        <div className={styles.networkDot} />
        <div className={styles.networkDot} />
        <div className={styles.networkDot} />
        <div className={styles.networkDot} />
      </div>

      {/* Ambient glow */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlow} />

      {/* ── Two-column layout ── */}
      <div className={styles.inner}>
        {/* LEFT — Messaging */}
        <div className={styles.messaging}>
          <div ref={eyebrowRef} className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Bilingual Professional Training
          </div>

          <div className={styles.headlineWrap}>
            <h1 ref={headlineRef} className={styles.headline}>
              Your team deserves{' '}
              <span className={styles.headlineAccent}>world-class</span>{' '}
              BPO talent.{' '}
              We train them.
            </h1>
          </div>

          <p ref={subheadRef} className={styles.subheadline}>
            Ready4BPO is the enterprise training institute that produces
            job-ready bilingual professionals for the outsourcing industry
            — certified, mentored, and placed within 90&nbsp;days.
          </p>

          <div ref={ctaRef} className={styles.ctaRow}>
            <a href="#programs" className={styles.ctaMain}>
              Explore Programs
              <span className={styles.ctaMainArrow}>→</span>
            </a>
            <a href="#about" className={styles.ctaGhost}>
              Request Info
            </a>
          </div>

          <div ref={proofRef} className={styles.proofStrip}>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>2,400+</span>
              <span className={styles.proofLabel}>Graduates Placed</span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>94%</span>
              <span className={styles.proofLabel}>Placement Rate</span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>45+</span>
              <span className={styles.proofLabel}>Partner Companies</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Program Showcase Card */}
        <div className={styles.showcase}>
          <div ref={cardRef} className={styles.programCard}>
            {/* Card Header */}
            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>Featured Program</span>
              <span className={styles.cardStatus}>
                <span className={styles.statusDot} />
                Enrolling Now
              </span>
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>
                BPO Customer Experience Pro
              </div>
              <div className={styles.cardSubtitle}>
                12-week intensive · Bilingual EN/ES
              </div>

              <ul className={styles.currList}>
                <li className={`${styles.currItem} ${styles.currItemActive}`}>
                  <span className={styles.currCheck}>✓</span>
                  Omnichannel Communication Mastery
                </li>
                <li className={`${styles.currItem} ${styles.currItemActive}`}>
                  <span className={styles.currCheck}>✓</span>
                  CRM & Ticketing Systems (Zendesk, Salesforce)
                </li>
                <li className={styles.currItem}>
                  <span className={styles.currCheck}>✓</span>
                  Quality Assurance & KPI Management
                </li>
                <li className={styles.currItem}>
                  <span className={styles.currCheck}>✓</span>
                  Live Capstone with Partner Company
                </li>
              </ul>
            </div>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.cardMeta}>
                Next cohort:{' '}
                <span className={styles.cardMetaValue}>Jul 14, 2026</span>
              </div>
              <a href="#" className={styles.cardCta}>
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomEdge} />
    </section>
  );
}
