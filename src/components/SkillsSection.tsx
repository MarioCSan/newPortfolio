import { cv } from '../data/cv'
import styles from './SkillsSection.module.css'

export function SkillsSection() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2>Technical Skills</h2>

        <div className={styles.grid}>
          {cv.skills.map((skillGroup) => (
            <div key={skillGroup.category} className={styles.skillGroup}>
              <h4>{skillGroup.category}</h4>
              <div className={styles.tags}>
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.highlight}>
          <div className={styles.card}>
            <h4>Architecture Focus</h4>
            <p>
              Building microservices, distributed systems, and cloud-native architectures
              that scale to millions of users.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Performance First</h4>
            <p>
              Optimizing for latency, throughput, and resource efficiency. Profiling and
              benchmarking as standard practice.
            </p>
          </div>
          <div className={styles.card}>
            <h4>Reliability</h4>
            <p>
              Building systems with 99.99% uptime. Focusing on observability, monitoring,
              and automated recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
