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
  featured: boolean
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
    featured: false
  }
]
