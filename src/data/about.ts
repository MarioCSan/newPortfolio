export interface About {
  name: string
  title: string
  bio: string
  profileImage: string
  coreValues: {
    title: string
    description: string
  }[]
}

export const about: About = {
  name: 'Mario Canales Sánchez',
  title: 'Backend Engineer & Cloud Architect',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  bio: `Empecé mi carrera como developer junior queriendo entenderlo todo. Hoy, después de más de una década, sigo siendo igual de curioso pero con cicatrices de producción. He construido sistemas que procesan millones de transacciones diarias, escalado arquitecturas de monolitos a microservicios, y resolvido problemas que "según las métricas, no deberían existir".

Lo que me fascina del backend no es escribir código bonito (aunque también importa), sino diseñar sistemas que funcionan bajo presión. Esos momentos a las 3AM cuando descubres un race condition que lleva 6 meses en producción sin que nadie lo note. O cuando optimizas una query y reduces latencia de 500ms a 15ms. Eso es la adrenalina de ingeniería que me motiva.

Trabajo principalmente con .NET y Azure, pero he aprendido que las herramientas son solo vehículos. Lo importante es comprender trade-offs: consistency vs availability, latency vs throughput, operational complexity vs business value. En mi experiencia, el 80% de los problemas de scaling no son técnicos, son arquitectónicos.`,
  coreValues: [
    {
      title: 'Obsesión por el Performance',
      description: 'No me conformo con "funciona". Mido, perfilo y optimizo. Cada millisegundo es dinero.'
    },
    {
      title: 'Arquitectura que Escala',
      description: 'Desde 1K hasta 1M usuarios sin reescribir. Sistemas que crecen sin romper.'
    },
    {
      title: '99.99% Uptime es el Mínimo',
      description: 'Redundancia, circuit breakers, graceful degradation. El downtime es inaceptable.'
    },
    {
      title: 'Code es Comunicación',
      description: 'Escribo para la persona que mantiene esto en 3 años (probablemente yo).'
    }
  ]
}
