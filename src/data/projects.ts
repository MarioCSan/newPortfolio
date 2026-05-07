export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  metrics?: {
    label: string
    value: string
  }[]
  github: string
  image?: string
  featured: boolean
  corporate?: boolean
}

export const projects: Project[] = [
  {
    id: 'distributed-cache',
    title: 'Distributed Cache Layer',
    description: 'High-performance caching system for microservices architecture. Reduces database latency and increases throughput by 300%. Built with Redis clustering and consistent hashing.',
    tags: ['.NET 9', 'Redis', 'Scalability', 'Azure'],
    metrics: [
      { label: 'Throughput', value: '50K req/s' },
      { label: 'Latency', value: '<5ms p99' },
      { label: 'Uptime', value: '99.99%' }
    ],
    github: 'https://github.com/mariocdev/distributed-cache',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    featured: true
  },
  {
    id: 'payment-processor',
    title: 'Real-Time Payment Processor',
    description: 'Event-driven payment processing system handling millions of transactions daily. Built with Azure Service Bus, CosmosDB, and ASP.NET Core. Zero-downtime deployments with blue-green strategy.',
    tags: ['C#', 'Azure', 'Event-Driven', 'Financial'],
    metrics: [
      { label: 'Daily Volume', value: '2M transactions' },
      { label: 'Processing Time', value: '<100ms' },
      { label: 'Success Rate', value: '99.97%' }
    ],
    github: 'https://github.com/mariocdev/payment-processor',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true
  },
  {
    id: 'analytics-platform',
    title: 'Real-Time Analytics Platform',
    description: 'Streaming analytics engine for product telemetry. Ingests 1B+ events daily, provides sub-second query latency. Built with Kafka, ClickHouse, and .NET workers.',
    tags: ['.NET', 'Kafka', 'Analytics', 'Big Data'],
    metrics: [
      { label: 'Events/Day', value: '1B+' },
      { label: 'Query Latency', value: '<500ms' },
      { label: 'Compression', value: '90%' }
    ],
    github: 'https://github.com/mariocdev/analytics-platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true
  },
  {
    id: 'api-gateway',
    title: 'Service-Mesh API Gateway',
    description: 'Custom API gateway with built-in rate limiting, circuit breakers, and request routing. Handles 50K concurrent connections. Features request/response transformation and caching.',
    tags: ['ASP.NET Core', 'Kubernetes', 'Networking', 'Performance'],
    metrics: [
      { label: 'Concurrent Conns', value: '50K+' },
      { label: 'Gateway Latency', value: '<2ms' },
      { label: 'Availability', value: '99.95%' }
    ],
    github: 'https://github.com/mariocdev/api-gateway',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 'monitoring-system',
    title: 'Distributed Monitoring System',
    description: 'Observability platform for microservices. Collects metrics, logs, and traces with minimal overhead. Custom dashboards for performance analysis and alerting.',
    tags: ['.NET', 'Observability', 'Metrics', 'Logs'],
    metrics: [
      { label: 'Data Points/s', value: '500K+' },
      { label: 'Retention', value: '1 year' },
      { label: 'Overhead', value: '<2%' }
    ],
    github: 'https://github.com/mariocdev/monitoring-system',
    image: 'https://images.unsplash.com/photo-1661092334529-e0e30cf57e44?w=800&h=500&fit=crop',
    featured: false
  },
  {
    id: 'database-sharding',
    title: 'Intelligent Database Sharding',
    description: 'Automatic sharding strategy for SQL Server. Distributes data across clusters while maintaining transactional consistency. Reduces query latency by 70%.',
    tags: ['SQL Server', 'C#', 'Scalability', 'Databases'],
    metrics: [
      { label: 'Shards', value: '32+' },
      { label: 'Data Size', value: '10TB+' },
      { label: 'Latency Reduction', value: '70%' }
    ],
    github: 'https://github.com/mariocdev/db-sharding',
    image: 'https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?w=800&h=500&fit=crop',
    featured: false
  }
]

export const corporateProjects: Project[] = [
  {
    id: 'corp-migration',
    title: 'Enterprise Cloud Migration',
    description: 'Led migration of legacy monolithic application to Azure cloud. Implemented microservices architecture, containerization with Docker, and Kubernetes orchestration. Reduced infrastructure costs by 40% while improving performance.',
    tags: ['Azure', 'Docker', 'Kubernetes', 'Enterprise'],
    metrics: [
      { label: 'Apps Migrated', value: '12' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Downtime', value: '0 hours' }
    ],
    github: 'https://github.com/mariocdev/enterprise-migration',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=500&fit=crop',
    corporate: true,
    featured: false
  },
  {
    id: 'corp-mlops',
    title: 'MLOps Platform',
    description: 'Built comprehensive MLOps platform for data science team. Automated model training, validation, and deployment pipelines. Integrated with Azure ML Services for production inference and monitoring.',
    tags: ['Azure ML', 'Python', '.NET', 'ML Pipeline'],
    metrics: [
      { label: 'Training Time', value: '2.5 hours' },
      { label: 'Models in Prod', value: '18' },
      { label: 'Deployment Success', value: '99.8%' }
    ],
    github: 'https://github.com/mariocdev/mlops-platform',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8b5a4899145e0a7f71e6b27f53?w=800&h=500&fit=crop',
    corporate: true,
    featured: false
  },
  {
    id: 'corp-realtime',
    title: 'Real-Time Collaboration Engine',
    description: 'Developed real-time collaboration platform supporting 100K+ concurrent users. Implemented WebSocket infrastructure with SignalR, distributed state management, and conflict resolution algorithms.',
    tags: ['SignalR', 'C#', 'Real-Time', 'Scalability'],
    metrics: [
      { label: 'Concurrent Users', value: '100K+' },
      { label: 'Message Latency', value: '<50ms' },
      { label: 'Uptime', value: '99.99%' }
    ],
    github: 'https://github.com/mariocdev/realtime-collab',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    corporate: true,
    featured: false
  }
]
