import { useTranslation } from '../hooks/useTranslation'
import styles from './Footer.module.css'

export function Footer() {
  const t = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>{t.footer.getInTouch}</h4>
            <p>{t.footer.touchMessage}</p>
            <a href="mailto:canalessanchezmario@gmail.com" className={styles.link}>
              canalessanchezmario@gmail.com
            </a>
          </div>

          <div className={styles.section}>
            <h4>{t.footer.follow}</h4>
            <div className={styles.social}>
              <a
                href="https://github.com/mariocdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Mario Canales. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
