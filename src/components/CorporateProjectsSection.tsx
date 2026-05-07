import { corporateProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import styles from './CorporateProjectsSection.module.css'

export function CorporateProjectsSection() {
  return (
    <section id="corporate-projects" className={`section ${styles.corporate}`}>
      <div className="container">
        <h2>Corporate Projects</h2>
        <p className={styles.description}>
          Enterprise solutions built for large-scale organizations and complex business requirements.
        </p>

        <div className={styles.grid}>
          {corporateProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
