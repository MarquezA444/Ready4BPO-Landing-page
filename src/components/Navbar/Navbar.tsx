import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Programs', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'Pricing', href: '#' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Refs para animación
  const navbarRef = useRef<HTMLElement>(null);
  const logoBarRef = useRef<HTMLDivElement>(null);
  const logoReadyRef = useRef<HTMLSpanElement>(null);
  const logoBpoRef = useRef<HTMLSpanElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const bilingualRef = useRef<HTMLSpanElement>(null);
  const careersRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animación de entrada del logo — suave, parte por parte
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Configuración inicial
    gsap.set([
      logoBarRef.current,
      logoReadyRef.current,
      logoBpoRef.current,
      separatorRef.current,
      bilingualRef.current,
      careersRef.current
    ], { autoAlpha: 0 });

    tl.to(logoBarRef.current, {
      autoAlpha: 1,
      scaleY: 1,
      duration: 0.8,
      ease: 'power2.inOut'
    })
    .to(logoReadyRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.25")
    .to(logoBpoRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, "-=0.3")
    .to(separatorRef.current, {
      autoAlpha: 1,
      scaleY: 1,
      duration: 0.5,
      ease: 'power2.inOut'
    }, "-=0.15")
    .to(bilingualRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, "-=0.2")
    .to(careersRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, "-=0.25");

    // Scroll listener para glassmorphism
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav ref={navbarRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo animado */}
          <a href="/" className={styles.logoWrapper}>
            <div 
              ref={logoBarRef} 
              className={styles.logoBar}
              style={{ transform: 'scaleY(0)' }}
            />
            
            <div className={styles.logoTextContainer}>
              <span ref={logoReadyRef} className={styles.logoReady} style={{ transform: 'translateX(-10px)' }}>READY</span>
              <span ref={logoBpoRef} className={styles.logoBpo} style={{ transform: 'translateX(-10px)' }}>4BPO</span>
            </div>

            <div 
              ref={separatorRef}
              className={styles.logoSeparator}
              style={{ transform: 'scaleY(0)', transformOrigin: 'center' }}
            />

            <div className={styles.logoSubtext}>
              <span ref={bilingualRef} className={styles.logoSubtextLine} style={{ transform: 'translateY(-5px)' }}>BILINGUAL</span>
              <span ref={careersRef} className={styles.logoSubtextLine} style={{ transform: 'translateY(5px)' }}>CAREERS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className={`${styles.actions} ${styles.desktopNav}`}>
            <button className={styles.langToggle}>EN / ES</button>
            <a href="#" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
              Sign In
            </a>
          </div>

          {/* Hamburger */}
          <button 
            className={`${styles.hamburger} ${isMobileOpen ? styles.open : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={styles.mobileNavLink}>
            {link.name}
          </a>
        ))}
        <button className={styles.langToggle} style={{ marginTop: '2rem' }}>EN / ES</button>
        <a href="#" className="btn-primary" style={{ marginTop: '1rem' }}>
          Sign In
        </a>
      </div>
    </>
  );
}
