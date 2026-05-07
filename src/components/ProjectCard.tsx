import { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {project.featured && <div className={styles.featured}>Featured</div>}

      {project.image && (
        <img src={project.image} alt={project.title} className={styles.image} />
      )}

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.metrics && (
          <div className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag primary">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on GitHub →
        </a>
      </footer>
    </article>
  )
}
