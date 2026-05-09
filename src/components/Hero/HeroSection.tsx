/**
 * HeroSection.tsx — Ready4BPO
 * ─────────────────────────────────────────────────────────────
 * Stack: React 18 + TypeScript + GSAP v3 + CSS Modules
 * ─────────────────────────────────────────────────────────────
 */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./HeroSection.module.css";

// ── Magnetic CTA Button ───────────────────────────────────────
interface MagneticCTAProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

function MagneticCTA({
  children,
  className = "",
  strength = 0.3,
  onClick,
}: MagneticCTAProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      className={`${styles.heroMagnetic} ${className}`}
    >
      {children}
    </button>
  );
}

// ── Stats data ───────────────────────────────────────────────
const STATS = [
  { value: "48",   label: "Sesiones",    note: "completadas"          },
  { value: "3.2k", label: "Vocabulario", note: "palabras activas"     },
  { value: "92%",  label: "Comprensión", note: "oral en tiempo real"  },
  { value: "100%", label: "Reuniones",   note: "conducidas en inglés" },
];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #818cf8, #7c3aed)",
  "linear-gradient(135deg, #a78bfa, #3b82f6)",
  "linear-gradient(135deg, #60a5fa, #06b6d4)",
  "linear-gradient(135deg, #22d3ee, #6366f1)",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-texture", {
        opacity: 0,
        scale: 1.07,
        x: -50,
        duration: 2.6,
        ease: "power2.out",
      });

      tl.from(
        ".hero-eyebrow",
        {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=2.1"
      );

      tl.from(
        ".hero-line",
        {
          yPercent: 110,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.11,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 26,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.55"
      );

      tl.from(
        [".hero-cta-group", ".hero-social"],
        {
          opacity: 0,
          y: 18,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.13,
        },
        "-=0.45"
      );

      tl.from(
        ".hero-card",
        {
          opacity: 0,
          y: 64,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1.1"
      );

      tl.from(
        ".hero-badge",
        {
          opacity: 0,
          scale: 0.78,
          y: 12,
          duration: 0.75,
          ease: "back.out(1.7)",
          stagger: 0.15,
        },
        "-=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={styles.heroNoise}
    >
      {/* Background Atmosphere */}
      <div className={styles.bgAtmosphere}>
        <div className={styles.heroBgRadial} />
        <div className={styles.blobTopLeft} />
        <div className={styles.blobBottomRight} />
      </div>

      {/* Architectural Texture */}
      <div className={styles.textureContainer} aria-hidden="true">
        <span
          className={`${styles.heroTexture} hero-texture`}
          style={{ fontSize: "clamp(6rem, 15vw, 20rem)" }}
        >
          READY TO LEARN
        </span>
      </div>

      {/* Main Content Grid */}
      <div className={styles.heroGrid}>
        
        {/* Left Column: Copy + CTA */}
        <div className={styles.colLeft}>
          
          <div className={styles.eyebrowContainer}>
            <p className={`${styles.heroEyebrow} hero-eyebrow`}>
              Ready4BPO&nbsp;&nbsp;·&nbsp;&nbsp;Professional Training
            </p>
          </div>

          <div className={styles.h1Container}>
            <div className={styles.lineWrapper}>
              <h1 className={`${styles.heroLine} hero-line`}>
                Domina el Inglés.
              </h1>
            </div>
            <div className={styles.lineWrapper}>
              <h1 className={`${styles.heroLine} ${styles.heroGradientText} hero-line`}>
                Conquista Mercados
              </h1>
            </div>
            <div className={styles.lineWrapper}>
              <h1 className={`${styles.heroLine} ${styles.heroGradientText} hero-line`}>
                Globales.
              </h1>
            </div>
          </div>

          <h2 className={`${styles.heroSubtitle} hero-subtitle`}>
            Entrenamiento conversacional de alta intensidad para profesionales y
            equipos que necesitan resultados reales — no certificados de
            escritorio.
          </h2>

          {/* CTA Group */}
          <div className={`${styles.heroCtaGroup} hero-cta-group`}>
            <MagneticCTA>
              <span className={styles.ctaContent}>
                Inicia tu entrenamiento
                <svg
                  className={styles.ctaIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <div className={styles.ctaHoverOverlay} />
            </MagneticCTA>

            <button className={styles.secondaryCta}>
              <span className={styles.ctaLine} />
              Ver metodología
            </button>
          </div>

          {/* Social Proof */}
          <div className={`${styles.heroSocial} hero-social`}>
            <div className={styles.avatarGroup}>
              {AVATAR_GRADIENTS.map((grad, i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{ background: grad }}
                />
              ))}
            </div>
            <p className={styles.socialText}>
              <span className={styles.socialHighlight}>+1,200</span>{" "}
              profesionales ya entrenan con nosotros
            </p>
          </div>
        </div>

        {/* Right Column: Glassmorphism Card */}
        <div className={styles.colRight}>
          <div className={styles.cardBlobs}>
            <div className={styles.blobContainer}>
              <div className={styles.blob1} />
              <div className={styles.blob2} />
              <div className={styles.blob3} />
            </div>
          </div>

          <div className={`${styles.heroCard} ${styles.heroCardFloat} hero-card`}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>Tu Progreso</p>
                <p className={styles.cardTitle}>Nivel Profesional</p>
                <p className={styles.cardSubtitle}>B2 → C1</p>
              </div>
              <div className={styles.cardIcon}>
                <svg className={styles.iconInner} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.progressLabel}>
                <span>Fluidez Conversacional</span>
                <span className={styles.progressValue}>78%</span>
              </div>
              <div className={styles.progressBarBg}>
                <div className={styles.heroProgressBar} />
              </div>
            </div>

            <div className={styles.statsGrid}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>
                    {stat.label}<br />{stat.note}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.sessionFooter}>
              <div className={styles.heroDotPulse} />
              <p className={styles.sessionText}>
                Próxima sesión: <span className={styles.sessionTime}>Hoy, 6:00 PM</span>
              </p>
            </div>
          </div>

          {/* Floating Badges */}
          <div
            className={`${styles.heroBadge} hero-badge`}
            style={{ top: "calc(50% - 145px)", left: "calc(50% - 210px)" }}
          >
            <div className={styles.badgeIconLarge}>⚡</div>
            <div className={styles.badgeTextContainer}>
              <p className={styles.badgeTitle}>30-Day Streak</p>
              <p className={styles.badgeDesc}>Consistency Award</p>
            </div>
          </div>

          <div
            className={`${styles.heroBadge} hero-badge`}
            style={{ top: "calc(50% + 100px)", left: "calc(50% + 20px)" }}
          >
            <div className={styles.badgeIconSmall}>
              <svg style={{ width: "10px", height: "10px", color: "#34d399" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className={styles.badgeSmallTitle}>Meta semanal completada</p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
