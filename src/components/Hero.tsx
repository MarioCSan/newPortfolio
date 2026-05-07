import { cv } from '../data/cv'
import { useTranslation } from '../hooks/useTranslation'
import styles from './Hero.module.css'

export function Hero() {
  const t = useTranslation()

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>{t.hero.headline}</h1>
          <p className={styles.subtitle}>{cv.bio}</p>
          <div className={styles.cta}>
            <a href="mailto:canalessanchezmario@gmail.com" className="btn">
              {t.hero.cta}
            </a>
            <a
              href="https://github.com/mariocdev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              {t.hero.github}
            </a>
          </div>
        </div>

        <div className={styles.highlight}>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>10+</span>
              <span className={styles.label}>{t.hero.yearsExp}</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>50+</span>
              <span className={styles.label}>{t.hero.projectsBuilt}</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>99.99%</span>
              <span className={styles.label}>{t.hero.uptime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
