export interface CVData {
  name: string
  title: string
  email: string
  location: string
  bio: string
  headline: string
  skills: {
    category: string
    items: string[]
  }[]
  experience: {
    title: string
    company: string
    period: string
    description: string
  }[]
}

export const cv: CVData = {
  name: 'Mario Canales Sánchez',
  title: 'Backend Engineer & Cloud Architect',
  email: 'canalessanchezmario@gmail.com',
  location: 'Madrid, Spain',
  bio: 'Backend-focused engineer with deep expertise in .NET, Azure, and distributed systems. I build scalable, high-throughput architectures that power production systems.',
  headline: 'Logic is beautiful. Building robust backends with .NET and Azure.',
  skills: [
    {
      category: 'Backend & Cloud',
      items: ['.NET 8/9', 'C#', 'Azure Services', 'Docker', 'Microservices']
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'CosmosDB', 'Azure BLOBs', 'Entity Framework']
    },
    {
      category: 'Frontend',
      items: ['React', 'Javascript']
    },
    {
      category: 'DevOps & Tools',
      items: ['CI/CD', 'Git', 'Azure DevOps']
    }
  ],
  experience: [
    {
      title: 'Senior Backend developer',
      company: 'CEF.-UDIMA',
      period: '2026 - Present',
      description: 'Led development of microservices architecture handling 10M+ daily requests. Optimized database queries reducing latency by 60%. Mentored 5 junior engineers.'
    },
    {
      title: 'Junior backend developer',
      company: 'Viajes El corte Ingles Travel Group',
      period: '2023 - 2025',
      description: 'Built distributed payment processing system in .NET. Implemented Azure DevOps CI/CD pipelines. Achieved 99.99% uptime SLA.'
    },
    {
      title: 'Junior Developer',
      company: 'Pepper Asset Services',
      period: '2022 - 2023',
      description: 'Developed REST APIs in ASP.NET Core. Created real-time dashboards with React. Implemented automated testing suite.'
    },{
      title: 'Junior Fullstack Developer',
      company: 'Pepper Asset Services',
      period: '2021 - 2022',
      description: 'Developed REST APIs in ASP.NET Core. Created real-time dashboards with React. Implemented automated testing suite.'
    }
  ]
}
