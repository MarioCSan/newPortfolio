import { corporateProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Carousel } from './Carousel'
import styles from './CorporateProjectsSection.module.css'

export function CorporateProjectsSection() {
  const projectItems = corporateProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))

  return (
    <section id="corporate-projects" className={`section ${styles.corporate}`}>
      <div className="container">
        <h2>Corporate Projects</h2>
        <p className={styles.description}>
          Enterprise solutions built for large-scale organizations and complex business requirements.
        </p>

        <Carousel items={projectItems} itemsPerView={1} autoScroll={true} />
      </div>
    </section>
  )
}
