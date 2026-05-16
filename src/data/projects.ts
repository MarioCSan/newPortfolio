import { translations, Language } from './translations'

export interface ProjectBase {
  id: string
  tags: string[]
  metrics?: {
    label: string
    value: string
  }[]
  github?: string
  image?: string
  featured: boolean
  corporate?: boolean
}

export interface Project extends ProjectBase {
  title: string
  description: string
}

const projectsBase: ProjectBase[] = [
  {
    id: 'analytics-platform',
    tags: ['.NET', 'RabbitMQ', 'React', 'Python', 'Docker', 'Postgres', 'Analytics', 'Big Data'],
    metrics: [
      { label: 'eventsDay', value: '2k+' },
      { label: 'queryLatency', value: '<500ms' },
      { label: 'compression', value: '90%' }
    ],
    github: 'https://github.com/mariosanv/https://github.com/MarioCSan/VicusAnalytics-platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true
  },
  {
    id: 'Video-Travel-Manager',
    tags: ['.NET 9', 'React', 'Scalability', 'Docker', 'SQLite'],
    metrics: [],
    github: 'https://github.com/MarioCSan/VideoTravelManager',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    featured: true
  }
  // {
  //   id: 'payment-processor',
  //   tags: ['C#', 'Azure', 'Event-Driven', 'Financial'],
  //   metrics: [
  //     { label: 'dailyVolume', value: '2M transactions' },
  //     { label: 'processingTime', value: '<100ms' },
  //     { label: 'successRate', value: '99.97%' }
  //   ],
  //   github: 'https://github.com/mariocdev/payment-processor',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  //   featured: true
  // },
  // {
  //   id: 'api-gateway',
  //   tags: ['ASP.NET Core', 'Kubernetes', 'Networking', 'Performance'],
  //   metrics: [
  //     { label: 'concurrentConns', value: '50K+' },
  //     { label: 'gatewayLatency', value: '<2ms' },
  //     { label: 'availability', value: '99.95%' }
  //   ],
  //   github: 'https://github.com/mariocdev/api-gateway',
  //   image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  //   featured: false
  // },
  // {
  //   id: 'monitoring-system',
  //   tags: ['.NET', 'Observability', 'Metrics', 'Logs'],
  //   metrics: [
  //     { label: 'dataPoints', value: '500K+' },
  //     { label: 'retention', value: '1 year' },
  //     { label: 'overhead', value: '<2%' }
  //   ],
  //   github: 'https://github.com/mariocdev/monitoring-system',
  //   image: 'https://images.unsplash.com/photo-1661092334529-e0e30cf57e44?w=800&h=500&fit=crop',
  //   featured: false
  // },
  // {
  //   id: 'database-sharding',
  //   tags: ['SQL Server', 'C#', 'Scalability', 'Databases'],
  //   metrics: [
  //     { label: 'shards', value: '32+' },
  //     { label: 'dataSize', value: '10TB+' },
  //     { label: 'latencyReduction', value: '70%' }
  //   ],
  //   github: 'https://github.com/mariocdev/db-sharding',
  //   image: 'https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?w=800&h=500&fit=crop',
  //   featured: false
  // }
]

const corporateProjectsBase: ProjectBase[] = [
  // {
  //   id: 'corp-migration',
  //   tags: ['Azure', 'Docker', 'Kubernetes', 'Enterprise'],
  //   metrics: [
  //     { label: 'appsMigrated', value: '12' },
  //     { label: 'costReduction', value: '40%' },
  //     { label: 'downtime', value: '0 hours' }
  //   ],
  //   github: 'https://github.com/mariocdev/enterprise-migration',
  //   image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=500&fit=crop',
  //   corporate: true,
  //   featured: false
  // },
  // {
  //   id: 'corp-mlops',
  //   tags: ['Azure ML', 'Python', '.NET', 'ML Pipeline'],
  //   metrics: [
  //     { label: 'trainingTime', value: '2.5 hours' },
  //     { label: 'modelsInProd', value: '18' },
  //     { label: 'deploymentSuccess', value: '99.8%' }
  //   ],
  //   github: 'https://github.com/mariocdev/mlops-platform',
  //   image: 'https://images.unsplash.com/photo-1677442d019cecf8b5a4899145e0a7f71e6b27f53?w=800&h=500&fit=crop',
  //   corporate: true,
  //   featured: false
  // },
  {
    id: 'gestion-fundae',
    tags: ['C#', 'ASP.NET Core', 'API Rest', 'Scalability'],


    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    corporate: true,
    featured: false
  }
]

export function enrichProjectWithTranslations(projectBase: ProjectBase, language: Language): Project {
  const projectsData = translations[language].projectsData
  const projectData = projectsData[projectBase.id as Exclude<keyof typeof projectsData, 'metrics'>] as any
  const metricsData = projectsData.metrics

  return {
    ...projectBase,
    title: projectData?.title || '',
    description: projectData?.description || '',
    metrics: projectBase.metrics?.map(metric => ({
      label: metricsData[metric.label as keyof typeof metricsData] || metric.label,
      value: metric.value
    })) || []
  }
}

export function getProjects(language: Language): Project[] {
  return projectsBase.map(p => enrichProjectWithTranslations(p, language))
}

export function getCorporateProjects(language: Language): Project[] {
  return corporateProjectsBase.map(p => enrichProjectWithTranslations(p, language))
}

export const projects = projectsBase
export const corporateProjects = corporateProjectsBase
