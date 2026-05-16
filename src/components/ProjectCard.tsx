import { Project } from '../data/projects'
import { useTranslation } from '../hooks/useTranslation'
import { translations } from '../data/translations'
import { useAppContext } from '../context/AppContext'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslation()
  const { language } = useAppContext()

  const projectsData = (translations[language] as any).projectsData
  const projectData = projectsData?.[project.id]

  const title = projectData?.title || project.title
  const description = projectData?.description || project.description

  const getMetricLabel = (originalLabel: string): string => {
    if (!projectData?.metrics) return originalLabel

    const metricMap: Record<string, string> = {
      'throughput': projectData.metrics.throughput,
      'latency': projectData.metrics.latency,
      'uptime': projectData.metrics.uptime,
      'dailyvolume': projectData.metrics.dailyVolume,
      'processingtime': projectData.metrics.processingTime,
      'successrate': projectData.metrics.successRate,
      'eventsday': projectData.metrics.eventsDay,
      'querylatency': projectData.metrics.queryLatency,
      'compression': projectData.metrics.compression,
      'concurrentconns': projectData.metrics.concurrentConns,
      'gatewaylatency': projectData.metrics.gatewayLatency,
      'availability': projectData.metrics.availability,
      'datapoints': projectData.metrics.dataPoints,
      'retention': projectData.metrics.retention,
      'overhead': projectData.metrics.overhead,
      'shards': projectData.metrics.shards,
      'datasize': projectData.metrics.dataSize,
      'latencyreduction': projectData.metrics.latencyReduction,
      'appsmigrated': projectData.metrics.appsMigrated,
      'costreduction': projectData.metrics.costReduction,
      'downtime': projectData.metrics.downtime,
      'trainingtime': projectData.metrics.trainingTime,
      'modelsinprod': projectData.metrics.modelsInProd,
      'deploymentsuccess': projectData.metrics.deploymentSuccess,
      'concurrentusers': projectData.metrics.concurrentUsers,
      'messagelatency': projectData.metrics.messageLatency,
    }

    const normalized = originalLabel.toLowerCase().replace(/[^a-z0-9]/g, '')
    return metricMap[normalized] || originalLabel
  }

  return (
    <article className={styles.card}>
      {project.featured && <div className={styles.featured}>{t.projects.featured}</div>}

      {project.image && (
        <img src={project.image} alt={title} className={styles.image} />
      )}

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        {project.metrics && (
          <div className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{getMetricLabel(metric.label)}</span>
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
          {t.projects.viewGithub}
        </a>
      </footer>
    </article>
  )
}
