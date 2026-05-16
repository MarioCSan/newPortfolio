import { useTranslation } from '../hooks/useTranslation'
import styles from './ExperienceSection.module.css'

export function ExperienceSection() {
  const t = useTranslation()
  const jobs = t.cv.jobs

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2>{t.experience.title}</h2>

        <div className={styles.timeline}>
          {jobs.map((job, index) => (
            <div key={job.title + job.company} className={styles.timelineItem}>
              <div className={styles.marker}>{index + 1}</div>

              <div className={styles.content}>
                <h3>{job.title}</h3>
                <p className={styles.company}>{job.company}</p>
                <span className={styles.period}>{job.period}</span>
                <p className={styles.description}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
