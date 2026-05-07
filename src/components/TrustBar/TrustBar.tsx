import styles from './TrustBar.module.css';

const partners = [
  'Teleperformance',
  'Concentrix',
  'TaskUs',
  'Sitel Group',
  'TTEC',
  'Alorica',
  'Foundever',
  'Webhelp',
  'Conduent',
  'Majorel',
];

export default function TrustBar() {
  // Duplicate for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <section className={styles.trustBar} aria-label="Trusted by industry leaders">
      <div className={styles.label}>
        Where our graduates work
      </div>
      <div className={styles.track}>
        {doubled.map((name, i) => (
          <div key={`${name}-${i}`} className={styles.logoItem}>
            <span className={styles.logoName}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
