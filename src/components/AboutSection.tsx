import { about } from '../data/about'
import { useTranslation } from '../hooks/useTranslation'
import styles from './AboutSection.module.css'

export function AboutSection() {
  const t = useTranslation()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Profile Image */}
          <div className={styles.imageColumn}>
            <div className={styles.profileImageWrapper}>
              <img
                src={about.profileImage}
                alt={about.name}
                className={styles.profileImage}
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className={styles.contentColumn}>
            <h2>{t.about.title}</h2>
            <p className={styles.title}>{t.about.subtitle}</p>

            <div className={styles.bio}>
              {t.about.bio ? (
                t.about.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))
              ) : (
                about.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))
              )}
            </div>

            {/* Core Values */}
            <div className={styles.values}>
              <h3>{t.about.values}</h3>
              <div className={styles.valuesList}>
                {about.coreValues.map((value) => (
                  <div key={value.title} className={styles.valueItem}>
                    <div className={styles.valueDot} />
                    <div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
