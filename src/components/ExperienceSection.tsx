import { cv } from '../data/cv'
import styles from './ExperienceSection.module.css'

export function ExperienceSection() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2>Experience</h2>

        <div className={styles.timeline}>
          {cv.experience.map((job, index) => (
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
