import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2>Featured Work</h2>
        <p className={styles.description}>
          A selection of production systems and architectures built with modern technologies.
        </p>

        <div className={styles.featured}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 style={{ marginTop: '4rem' }}>More Projects</h3>
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
