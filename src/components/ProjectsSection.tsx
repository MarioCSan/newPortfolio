import { getProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { useTranslation } from '../hooks/useTranslation'
import { useAppContext } from '../context/AppContext'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  const t = useTranslation()
  const { language } = useAppContext()
  const projects = getProjects(language)
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2>{t.projects.title}</h2>
        <p className={styles.description}>
          {t.projects.subtitle}
        </p>

        <div className={styles.featured}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 style={{ marginTop: '4rem' }}>{t.projects.more}</h3>
            <div className={styles.grid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
