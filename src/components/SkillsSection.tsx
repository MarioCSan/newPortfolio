import { cv } from '../data/cv'
import { useTranslation } from '../hooks/useTranslation'
import styles from './SkillsSection.module.css'

export function SkillsSection() {
  const t = useTranslation()

  const getCategoryLabel = (originalCategory: string): string => {
    const categoryMap: Record<string, string> = {
      'Backend & Cloud': t.cv.skills.backendCloud,
      'Databases': t.cv.skills.databases,
      'Frontend': t.cv.skills.frontend,
      'DevOps & Tools': t.cv.skills.devops,
    }
    return categoryMap[originalCategory] || originalCategory
  }

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2>{t.skills.title}</h2>

        <div className={styles.grid}>
          {cv.skills.map((skillGroup) => (
            <div key={skillGroup.category} className={styles.skillGroup}>
              <h4>{getCategoryLabel(skillGroup.category)}</h4>
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
            <h4>{t.skills.architecture}</h4>
            <p>
              {t.skills.architectureDesc}
            </p>
          </div>
          <div className={styles.card}>
            <h4>{t.skills.performance}</h4>
            <p>
              {t.skills.performanceDesc}
            </p>
          </div>
          <div className={styles.card}>
            <h4>{t.skills.reliability}</h4>
            <p>
              {t.skills.reliabilityDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
