export type Language = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      corporate: 'Corporativo',
      skills: 'Skills',
      certs: 'Certificados',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      headline: 'Construyendo backends robustos con .NET y Azure.',
      cta: 'Contactame',
      github: 'GitHub →',
      yearsExp: 'Años de Experiencia',
      projectsBuilt: 'Proyectos Construidos',
      uptime: 'Uptime Promedio'
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Desarrollador Backend & Cloud',
      values: 'Valores Clave',
      bio: 'Empecé mi carrera como desarrollador junior con curiosidad por entender cómo funcionaba todo. Con el tiempo, esa curiosidad se convirtió en experiencia trabajando en sistemas que procesan miles de transacciones diarias, evolucionando arquitecturas monolíticas hacia microservicios y resolviendo problemas complejos en producción. \n\n Lo que más me interesa del backend es diseñar sistemas que sigan funcionando cuando hay carga, fallos o requisitos cambiantes. Disfruto especialmente investigando problemas difíciles de reproducir, optimizando rendimiento y tomando decisiones arquitectónicas con impacto real en el negocio.\n\nTrabajo principalmente con .NET y Azure. Más allá de las tecnologías, me interesa entender los trade-offs detrás de cada decisión: consistencia vs disponibilidad, latencia vs throughput o complejidad operativa vs valor de negocio. Muchas veces, los problemas de escalabilidad no vienen del código, sino de decisiones arquitectónicas tomadas mucho antes.',
      scalability: 'Performance',
      scalabilityDesc: 'No me conformo con "funciona". Mido, perfilo y optimizo. Cada millisegundo es dinero.',
      performance: 'Arquitectura que Escala',
      performanceDesc: 'Desde 1K hasta 1M usuarios sin reescribir. Sistemas que crecen sin romper.',
      reliability: '99.99% Uptime es el Mínimo',
      reliabilityDesc: 'Redundancia, circuit breakers, graceful degradation.',
      code: 'Código limpio, clave para la mantenibilidan',
      codeDesc: 'Escribo para la persona que mantiene esto en 3 años (probablemente yo).'
    },
    projects: {
      title: 'Trabajo Destacado',
      subtitle: 'Selección de sistemas y arquitecturas construidas con tecnologías modernas.',
      featured: 'Destacado',
      viewGithub: 'Ver en GitHub →',
      more: 'Más Proyectos'
    },
    corporate: {
      title: 'Proyectos Corporativos',
      subtitle: 'Soluciones empresariales construidas para organizaciones grandes y requisitos complejos.'
    },
    skills: {
      title: 'Skills Técnicos',
      architecture: 'Escalabilidad Primero',
      performance: 'Performance',
      reliability: 'Confiabilidad & Uptime',
      code: 'Arquitectura Limpia',
      architectureDesc: 'Diseñando microservicios, sistemas distribuidos y arquitecturas cloud-native escalables.',
      performanceDesc: 'Optimizando para latencia, throughput y eficiencia de recursos. Profiling y benchmarking como práctica estándar.',
      reliabilityDesc: 'Construyendo sistemas enfocándose en observabilidad, monitoreo y recuperación automática.'
    },
    certs: {
      title: 'Certificaciones',
      subtitle: 'Certificaciones reconocidas internacionalmente que validan expertise en plataformas cloud y DevOps.',
      viewCred: 'Ver Credencial →',
      issued: 'Expedido',
      expires: 'Expira'
    },
    experience: {
      title: 'Experiencia'
    },
    cv: {
      title: 'Experiencia Laboral',
      name: 'Mario Canales Sánchez',
      jobTitle: 'Desarrollador Backend & Arquitecto Cloud',
      location: 'Madrid, España',
      bio: 'Desarrollador Backend especializado en .NET, Azure y sistemas distribuidos. Construyo arquitecturas escalables y de alto rendimiento que alimentan sistemas en producción.',
      skills: {
        backendCloud: 'Backend & Cloud',
        databases: 'Bases de Datos',
        frontend: 'Frontend',
        devops: 'DevOps & Herramientas'
      },
      jobs: [
        {
          title: 'Senior Backend developer',
          company: 'CEF.-UDIMA',
          period: 'Enero 2026 - Present',
          description: 'Led development of microservices architecture handling 10M+ daily requests. Optimized database queries reducing latency by 60%. Mentored 5 junior engineers.'
        },
        {
          title: 'Junior backend developer',
          company: 'Viajes El corte Inglés',
          period: 'Marzo 2024 - Diciembre 2025',
          description: 'Built distributed payment processing system in .NET. Implemented Azure DevOps CI/CD pipelines. Achieved 99.99% uptime SLA.'
        },
        {
          title: 'Junior Developer',
          company: 'Pepper Asset Services',
          period: 'Febrero 2022 - Febrero 2024',
          description: 'Developed REST APIs in ASP.NET Core. Created real-time dashboards with React. Implemented automated testing suite.'
        }, {
          title: 'Junior Fullstack Developer',
          company: 'Quality Compusoft',
          period: 'Julio 2021 - Diciembre 2021',
          description: 'Developed REST APIs in ASP.NET Core. Created real-time dashboards with React. Implemented automated testing suite.'
        }
      ]
    },
    projectsData: {

      'analytics-platform': {
        title: 'Plataforma de Análisis en Tiempo Real',
        description: 'Motor de análisis de streaming para telemetría de producto. Ingesta 4000+ eventos diarios, proporciona latencia de query sub-segundo. Construido con RabbitMQ, .NET, React, Postgresql y workers escritos en python.'
      },
      'Video-Travel-Manager': {
        title: 'Video Travel Manager',
        description: 'Una aplicación privada de tipo YouTube, autohospedada, para tus vídeos. Funciona totalmente sin conexión dentro de tu red doméstica y cuenta con una interfaz atractiva y adaptativa. Todavía no me siento lo suficientemente seguro.'
      },
      'payment-processor': {
        title: 'Procesador de Pagos en Tiempo Real',
        description: 'Sistema de procesamiento de pagos event-driven manejando millones de transacciones diarias. Construido con Azure Service Bus, CosmosDB y ASP.NET Core. Deployments sin downtime con estrategia blue-green.'
      },
      'api-gateway': {
        title: 'API Gateway con Service-Mesh',
        description: 'API gateway personalizado con rate limiting, circuit breakers y enrutamiento de requests integrados. Maneja 50K conexiones concurrentes. Características de transformación de request/response y caching.'
      },
      'monitoring-system': {
        title: 'Sistema de Monitoreo Distribuido',
        description: 'Plataforma de observabilidad para microservicios. Recolecta métricas, logs y traces con overhead mínimo. Dashboards personalizados para análisis de performance y alerting.'
      },
      'database-sharding': {
        title: 'Sharding Inteligente de Base de Datos',
        description: 'Estrategia de sharding automático para SQL Server. Distribuye datos entre clusters manteniendo consistencia transaccional. Reduce latencia de queries un 70%.'
      },
      // 'corp-migration': {
      //   title: 'Migración Enterprise a Cloud',
      //   description: 'Lideré migración de aplicación monolítica legacy a Azure cloud. Implementé arquitectura de microservicios, containerización con Docker y orquestación Kubernetes. Reduje costos de infraestructura un 40% mejorando performance.'
      // },
      // 'corp-mlops': {
      //   title: 'Plataforma MLOps',
      //   description: 'Construí plataforma MLOps completa para equipo de data science. Automaticé pipelines de entrenamiento, validación y despliegue de modelos. Integración con Azure ML Services para inferencia y monitoreo en producción.'
      // },
      'gestion-fundae': {
        title: 'Gestión Fundae',
        description: 'Desarrollé la API para la gestión de expedientes de cursos subvencionados por el Estado. Implemnte un buscador de cursos que permite filtrar más de 1500 cursos en menos de 0,5 segundos. También implemente la generación de expedientes y el envio por correo. Aplique los principios SOLID para garantizar la estabilidad de los módulos nuevos.'
      },
      metrics: {
        throughput: 'Throughput',
        latency: 'Latencia',
        uptime: 'Uptime',
        dailyVolume: 'Volumen Diario',
        processingTime: 'Tiempo de Procesamiento',
        successRate: 'Tasa de Éxito',
        eventsDay: 'Eventos/Día',
        queryLatency: 'Latencia de Query',
        compression: 'Compresión',
        concurrentConns: 'Conexiones Concurrentes',
        gatewayLatency: 'Latencia Gateway',
        availability: 'Disponibilidad',
        dataPoints: 'Puntos de Datos/s',
        retention: 'Retención',
        overhead: 'Overhead',
        shards: 'Shards',
        dataSize: 'Tamaño de Datos',
        latencyReduction: 'Reducción de Latencia',
        appsMigrated: 'Apps Migradas',
        costReduction: 'Reducción de Costos',
        downtime: 'Downtime',
        trainingTime: 'Tiempo de Entrenamiento',
        modelsInProd: 'Modelos en Prod',
        deploymentSuccess: 'Éxito de Despliegue',
        concurrentUsers: '',
        messageLatency: 'Latencia de Mensajes'
      }
    },
    footer: {
      getInTouch: 'Ponte en Contacto',
      touchMessage: 'Siéntete libre de contactarme para colaboraciones u oportunidades.',
      follow: 'Sígueme',
      copyright: 'Construido con React + TypeScript.'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      corporate: 'Corporate',
      skills: 'Skills',
      certs: 'Certs',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      headline: 'Logic is beautiful. Building robust backends with .NET and Azure.',
      cta: 'Get in Touch',
      github: 'GitHub →',
      yearsExp: 'Years Experience',
      projectsBuilt: 'Projects Built',
      uptime: 'Uptime Average'
    },
    about: {
      title: 'About Me',
      subtitle: 'Backend Engineer & Cloud Architect',
      values: 'Core Values',
      bio: 'I\'ve been building scalable, high-performance systems for 10+ years. My expertise spans .NET, Azure, and distributed architectures that handle millions of transactions daily.\n\nI believe in the principle that "logic is beautiful" — clean code, robust architecture, and measurable performance are not just technical requirements, they\'re an art form. I\'m passionate about solving complex problems through thoughtful system design and continuous optimization.\n\nCurrently, I focus on building cloud-native solutions, optimizing microservices architectures, and mentoring engineering teams. I\'ve led migrations of legacy systems to cloud platforms, architected real-time collaboration engines handling 100K+ concurrent users, and implemented monitoring solutions that provide observability at scale.',
      scalability: 'Scalability First',
      scalabilityDesc: 'Designing systems that grow with demand, from thousands to millions of users.',
      performance: 'Performance Obsessed',
      performanceDesc: 'Every millisecond matters. Profiling, optimization, and benchmarking are standard practice.',
      reliability: 'Reliability & Uptime',
      reliabilityDesc: 'Building systems that stay up. High availability and graceful degradation are non-negotiable.',
      code: 'Clean Architecture',
      codeDesc: 'Code that is readable, testable, and maintainable. Technical debt is design debt.'
    },
    projects: {
      title: 'Featured Work',
      subtitle: 'A selection of production systems and architectures built with modern technologies.',
      featured: 'Featured',
      viewGithub: 'View on GitHub →',
      more: 'More Projects'
    },
    corporate: {
      title: 'Corporate Projects',
      subtitle: 'Enterprise solutions built for large-scale organizations and complex business requirements.'
    },
    skills: {
      title: 'Technical Skills',
      architecture: 'Scalability First',
      performance: 'Performance Obsessed',
      reliability: 'Reliability & Uptime',
      code: 'Clean Architecture',
      architectureDesc: 'Designing microservices, distributed systems, and cloud-native architectures that scale to millions of users.',
      performanceDesc: 'Optimizing for latency, throughput, and resource efficiency. Profiling and benchmarking as standard practice.',
      reliabilityDesc: 'Building systems with 99.99% uptime. Focusing on observability, monitoring, and automatic recovery.'
    },
    certs: {
      title: 'Certifications',
      subtitle: 'Industry-recognized certifications validating technical expertise across cloud platforms and DevOps.',
      viewCred: 'View Credential →',
      issued: 'Issued',
      expires: 'Expires'
    },
    experience: {
      title: 'Experience'
    },
    cv: {
      title: 'Work Experience',
      name: 'Mario Canales Sánchez',
      jobTitle: 'Backend Engineer & Cloud Architect',
      location: 'Madrid, Spain',
      bio: 'Backend-focused engineer with deep expertise in .NET, Azure, and distributed systems. I build scalable, high-throughput architectures that power production systems.',
      skills: {
        backendCloud: 'Backend & Cloud',
        databases: 'Databases',
        frontend: 'Frontend',
        devops: 'DevOps & Tools'
      },
      jobs: [
        {
          title: 'Senior Backend Engineer',
          company: 'Tech Innovation Labs',
          period: '2022 - Present',
          description: 'Led development of microservices architecture handling 10M+ daily requests. Optimized database queries reducing latency by 60%. Mentored 5 junior engineers.'
        },
        {
          title: 'Full Stack Engineer',
          company: 'CloudScale Systems',
          period: '2020 - 2022',
          description: 'Built distributed payment processing system in .NET. Implemented Azure DevOps CI/CD pipelines. Achieved 99.99% uptime SLA.'
        },
        {
          title: 'Junior Developer',
          company: 'StartupXYZ',
          period: '2018 - 2020',
          description: 'Developed REST APIs in ASP.NET Core. Created real-time dashboards with React. Implemented automated testing suite.'
        }
      ]
    },
    projectsData: {

      'analytics-platform': {
        title: 'Real-Time Analytics Platform',
        description: 'Streaming analytics engine for product telemetry. Ingests 1B+ events daily, provides sub-second query latency. Built with Kafka, ClickHouse, and .NET workers.'
      },
      'Video-Travel-Manager': {
        title: 'Video Travel Manager',
        description: 'A self-hosted, private YouTube-like application for your videos. Run it entirely offline within your home network with a beautiful, responsive interface.'
      },
      'payment-processor': {
        title: 'Real-Time Payment Processor',
        description: 'Event-driven payment processing system handling millions of transactions daily. Built with Azure Service Bus, CosmosDB, and ASP.NET Core. Zero-downtime deployments with blue-green strategy.'
      },
      'api-gateway': {
        title: 'Service-Mesh API Gateway',
        description: 'Custom API gateway with built-in rate limiting, circuit breakers, and request routing. Handles 50K concurrent connections. Features request/response transformation and caching.'
      },
      'monitoring-system': {
        title: 'Distributed Monitoring System',
        description: 'Observability platform for microservices. Collects metrics, logs, and traces with minimal overhead. Custom dashboards for performance analysis and alerting.'
      },
      'database-sharding': {
        title: 'Intelligent Database Sharding',
        description: 'Automatic sharding strategy for SQL Server. Distributes data across clusters while maintaining transactional consistency. Reduces query latency by 70%.'
      },
      // 'corp-migration': {
      //   title: 'Enterprise Cloud Migration',
      //   description: 'Led migration of legacy monolithic application to Azure cloud. Implemented microservices architecture, containerization with Docker, and Kubernetes orchestration. Reduced infrastructure costs by 40% while improving performance.'
      // },
      // 'corp-mlops': {
      //   title: 'MLOps Platform',
      //   description: 'Built comprehensive MLOps platform for data science team. Automated model training, validation, and deployment pipelines. Integrated with Azure ML Services for production inference and monitoring.'
      // },
      'gestion-fundae': {
        title: 'Gestión Fundae',
        description: 'I developed the API for managing records of courses subsidised by the Spanish government. I implemented a course search engine that allows users to filter through more than 1,500 courses in under 0.5 seconds using various databases. I also implemented the generation of records and their dispatch by post. I applied the SOLID principles to ensure the stability of the new modules.'
      },
      metrics: {
        throughput: 'Throughput',
        latency: 'Latency',
        uptime: 'Uptime',
        dailyVolume: 'Daily Volume',
        processingTime: 'Processing Time',
        successRate: 'Success Rate',
        eventsDay: 'Events/Day',
        queryLatency: 'Query Latency',
        compression: 'Compression',
        concurrentConns: 'Concurrent Conns',
        gatewayLatency: 'Gateway Latency',
        availability: 'Availability',
        dataPoints: 'Data Points/s',
        retention: 'Retention',
        overhead: 'Overhead',
        shards: 'Shards',
        dataSize: 'Data Size',
        latencyReduction: 'Latency Reduction',
        appsMigrated: 'Apps Migrated',
        costReduction: 'Cost Reduction',
        downtime: 'Downtime',
        trainingTime: 'Training Time',
        modelsInProd: 'Models in Prod',
        deploymentSuccess: 'Deployment Success',
        concurrentUsers: '',
        messageLatency: 'Message Latency'
      }
    },
    footer: {
      getInTouch: 'Get in Touch',
      touchMessage: 'Feel free to reach out for collaborations or opportunities.',
      follow: 'Follow',
      copyright: 'Built with React + TypeScript.'
    }
  }
}
