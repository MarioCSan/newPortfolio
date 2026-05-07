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
      headline: 'La lógica es hermosa. Construyendo backends robustos con .NET y Azure.',
      cta: 'Contactame',
      github: 'GitHub →',
      yearsExp: 'Años de Experiencia',
      projectsBuilt: 'Proyectos Construidos',
      uptime: 'Uptime Promedio'
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Ingeniero Backend & Arquitecto Cloud',
      values: 'Valores Clave',
      bio: 'Empecé mi carrera como developer junior queriendo entenderlo todo. Hoy, después de más de una década, sigo siendo igual de curioso pero con cicatrices de producción. He construido sistemas que procesan millones de transacciones diarias, escalado arquitecturas de monolitos a microservicios, y resolvido problemas que "según las métricas, no deberían existir".\n\nLo que me fascina del backend no es escribir código bonito (aunque también importa), sino diseñar sistemas que funcionan bajo presión. Esos momentos a las 3AM cuando descubres un race condition que lleva 6 meses en producción sin que nadie lo note. O cuando optimizas una query y reduces latencia de 500ms a 15ms. Eso es la adrenalina de ingeniería que me motiva.\n\nTrabajo principalmente con .NET y Azure, pero he aprendido que las herramientas son solo vehículos. Lo importante es comprender trade-offs: consistency vs availability, latency vs throughput, operational complexity vs business value. En mi experiencia, el 80% de los problemas de scaling no son técnicos, son arquitectónicos.',
      scalability: 'Obsesión por el Performance',
      scalabilityDesc: 'No me conformo con "funciona". Mido, perfilo y optimizo. Cada millisegundo es dinero.',
      performance: 'Arquitectura que Escala',
      performanceDesc: 'Desde 1K hasta 1M usuarios sin reescribir. Sistemas que crecen sin romper.',
      reliability: '99.99% Uptime es el Mínimo',
      reliabilityDesc: 'Redundancia, circuit breakers, graceful degradation. El downtime es inaceptable.',
      code: 'Code es Comunicación',
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
      performance: 'Obsesión por Performance',
      reliability: 'Confiabilidad & Uptime',
      code: 'Arquitectura Limpia',
      architectureDesc: 'Diseñando microservicios, sistemas distribuidos y arquitecturas cloud-native que escalan a millones de usuarios.',
      performanceDesc: 'Optimizando para latencia, throughput y eficiencia de recursos. Profiling y benchmarking como práctica estándar.',
      reliabilityDesc: 'Construyendo sistemas con 99.99% uptime. Enfocándose en observabilidad, monitoreo y recuperación automática.'
    },
    certs: {
      title: 'Certificaciones',
      subtitle: 'Certificaciones reconocidas internacionalmente que validan expertise en plataformas cloud y DevOps.',
      viewCred: 'Ver Credencial →'
    },
    experience: {
      title: 'Experiencia',
      issued: 'Expedido',
      expires: 'Expira'
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
      subtitle: 'A selection of production systems and architectures built with modern technologies.'
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
      code: 'Clean Architecture'
    },
    certs: {
      title: 'Certifications',
      subtitle: 'Industry-recognized certifications validating technical expertise across cloud platforms and DevOps.',
      viewCred: 'View Credential →'
    },
    experience: {
      title: 'Experience',
      issued: 'Issued',
      expires: 'Expires'
    },
    footer: {
      getInTouch: 'Get in Touch',
      touchMessage: 'Feel free to reach out for collaborations or opportunities.',
      follow: 'Follow',
      copyright: 'Built with React + TypeScript.'
    }
  }
}
