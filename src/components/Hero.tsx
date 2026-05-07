import { cv } from '../data/cv'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>{cv.headline}</h1>
          <p className={styles.subtitle}>{cv.bio}</p>
          <div className={styles.cta}>
            <a href="mailto:canalessanchezmario@gmail.com" className="btn">
              Get in Touch
            </a>
            <a
              href="https://github.com/mariocdev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className={styles.highlight}>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>10+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>50+</span>
              <span className={styles.label}>Projects Built</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stat}>
              <span className={styles.value}>99.99%</span>
              <span className={styles.label}>Uptime Average</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
