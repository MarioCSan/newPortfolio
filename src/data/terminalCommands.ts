import { Language } from './translations'

export interface TerminalCommands {
  help: string[]
  about: string[]
  skills: string[]
  projects: string[]
  contact: string[]
  ls: string[]
  whoami: string[]
  themes: string[]
}

export const terminalCommands: Record<Language, TerminalCommands> = {
  es: {
    help: [
      '> Comandos disponibles:',
      '  about    - Sobre Mario',
      '  skills   - Skills técnicos',
      '  projects - Proyectos destacados',
      '  contact  - Información de contacto',
      '  themes   - Cambiar tema 🎨',
      '  synth    - Activar modo synthwave ✨',
      '  base     - Volver al tema base',
      '  clear    - Limpiar terminal',
      '  ls       - Listar comandos',
      '  whoami   - Usuario actual',
    ],
    about: [
      '> Mario Canales Sánchez',
      '> Ingeniero Backend & Arquitecto Cloud',
      '> Construyendo sistemas robustos y escalables con .NET y Azure',
      '> 10+ años de experiencia',
      '> La lógica es hermosa ✨',
    ],
    skills: [
      '> Backend & Cloud: .NET 8/9, C#, Azure Services, Docker, Kubernetes',
      '> Bases de datos: SQL Server, PostgreSQL, CosmosDB, Redis',
      '> Frontend: React, TypeScript, Next.js, Tailwind CSS',
      '> DevOps: CI/CD, GitHub Actions, Terraform, Azure DevOps',
    ],
    projects: [
      '> Cache Distribuido - 50K req/s throughput',
      '> Procesador de Pagos en Tiempo Real - 2M transacciones diarias',
      '> Plataforma de Análisis - 1B+ eventos diarios',
      '> API Gateway con Service-Mesh - 50K conexiones concurrentes',
    ],
    contact: [
      '> Email: canalessanchezmario@gmail.com',
      '> GitHub: github.com/mariocdev',
      '> LinkedIn: linkedin.com/in/mario-canales',
    ],
    ls: [
      'about',
      'skills',
      'projects',
      'contact',
      'themes',
      'synth',
      'base',
      'help',
      'clear',
      'whoami',
    ],
    whoami: [
      '$ whoami',
      'mario@portfolio:~$',
    ],
    themes: [
      '> Temas disponibles:',
      '  1) light   - Tema claro (blanco & azul)',
      '  2) dark    - Tema oscuro (gris & azul)',
      '  3) synth   - Modo synthwave (magenta & cyan)',
      '  4) barbie  - Modo Barbie (rosa & magenta) 💖',
      '  5) obi     - Obi-Wan Kenobi (azul & oro) ⚔️',
      '',
      '> Uso: themes [número o nombre]',
      '> Ejemplo: themes 5 o themes obi',
    ],
  },
  en: {
    help: [
      '> Available commands:',
      '  about    - Learn about Mario',
      '  skills   - Technical skills',
      '  projects - Featured projects',
      '  contact  - Contact information',
      '  themes   - Change theme 🎨',
      '  synth    - Toggle synthwave mode ✨',
      '  base     - Return to base theme',
      '  clear    - Clear terminal',
      '  ls       - List commands',
      '  whoami   - Current user',
    ],
    about: [
      '> Mario Canales Sánchez',
      '> Backend Engineer & Cloud Architect',
      '> Building robust, scalable systems with .NET and Azure',
      '> 10+ years of experience',
      '> Logic is beautiful ✨',
    ],
    skills: [
      '> Backend & Cloud: .NET 8/9, C#, Azure Services, Docker, Kubernetes',
      '> Databases: SQL Server, PostgreSQL, CosmosDB, Redis',
      '> Frontend: React, TypeScript, Next.js, Tailwind CSS',
      '> DevOps: CI/CD, GitHub Actions, Terraform, Azure DevOps',
    ],
    projects: [
      '> Distributed Cache Layer - 50K req/s throughput',
      '> Real-Time Payment Processor - 2M daily transactions',
      '> Analytics Platform - 1B+ events daily',
      '> Service-Mesh API Gateway - 50K concurrent connections',
    ],
    contact: [
      '> Email: canalessanchezmario@gmail.com',
      '> GitHub: github.com/mariocdev',
      '> LinkedIn: linkedin.com/in/mario-canales',
    ],
    ls: [
      'about',
      'skills',
      'projects',
      'contact',
      'themes',
      'synth',
      'base',
      'help',
      'clear',
      'whoami',
    ],
    whoami: [
      '$ whoami',
      'mario@portfolio:~$',
    ],
    themes: [
      '> Available themes:',
      '  1) light   - Light theme (white & blue)',
      '  2) dark    - Dark theme (gray & blue)',
      '  3) synth   - Synthwave mode (magenta & cyan)',
      '  4) barbie  - Barbie mode (pink & magenta) 💖',
      '  5) obi     - Obi-Wan Kenobi (blue & gold) ⚔️',
      '',
      '> Usage: themes [number or name]',
      '> Example: themes 5 or themes obi',
    ],
  },
}
