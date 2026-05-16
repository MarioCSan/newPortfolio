import { getCorporateProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Carousel } from './Carousel'
import { useTranslation } from '../hooks/useTranslation'
import { useAppContext } from '../context/AppContext'
import styles from './CorporateProjectsSection.module.css'

export function CorporateProjectsSection() {
  const t = useTranslation()
  const { language } = useAppContext()
  const corporateProjects = getCorporateProjects(language)
  const projectItems = corporateProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))

  return (
    <section id="corporate-projects" className={`section ${styles.corporate}`}>
      <div className="container">
        <h2>{t.corporate.title}</h2>
        <p className={styles.description}>
          {t.corporate.subtitle}
        </p>

        <Carousel items={projectItems} itemsPerView={1} autoScroll={true} />
      </div>
    </section>
  )
}
