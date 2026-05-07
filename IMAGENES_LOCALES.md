# Guía: Usar Imágenes Locales en el Portafolio

## Paso 1: Colocar tus imágenes
Coloca las imágenes en la carpeta `/public/images/` organizadas por categoría:

```
public/images/
├── projects/
│   ├── distributed-cache.jpg
│   ├── payment-processor.jpg
│   ├── analytics-platform.jpg
│   ├── api-gateway.jpg
│   ├── monitoring-system.jpg
│   └── database-sharding.jpg
├── corporate/
│   ├── enterprise-migration.jpg
│   ├── mlops-platform.jpg
│   └── realtime-collab.jpg
├── certificates/
│   ├── azure.png
│   ├── aws.png
│   └── ...
└── about/
    └── profile.jpg
```

## Paso 2: Actualizar los datos

### Ejemplo: Cambiar imágenes de proyectos (src/data/projects.ts)

**Antes (URLs remotas):**
```typescript
{
  id: 'distributed-cache',
  title: 'Distributed Cache Layer',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
  // ...
}
```

**Después (imágenes locales):**
```typescript
{
  id: 'distributed-cache',
  title: 'Distributed Cache Layer',
  image: '/images/projects/distributed-cache.jpg',
  // ...
}
```

### Ejemplo completo - Todos los proyectos actualizados

```typescript
export const projects: Project[] = [
  {
    id: 'distributed-cache',
    title: 'Distributed Cache Layer',
    description: 'High-performance caching system for microservices architecture...',
    tags: ['.NET 9', 'Redis', 'Scalability', 'Azure'],
    metrics: [
      { label: 'Throughput', value: '50K req/s' },
      { label: 'Latency', value: '<5ms p99' },
      { label: 'Uptime', value: '99.99%' }
    ],
    github: 'https://github.com/mariocdev/distributed-cache',
    image: '/images/projects/distributed-cache.jpg',  // ← Cambio aquí
    featured: true
  },
  // ... resto de proyectos con mismo cambio
]
```

### Ejemplo: Cambiar imagen de certificados (src/data/certificates.ts)

```typescript
// En el array de certificates, cambiar:
image: 'https://...' 

// Por:
image: '/images/certificates/azure.png'
```

### Ejemplo: Cambiar imagen de perfil (src/data/about.ts)

```typescript
// Antes:
export const about = {
  image: 'https://...',
  // ...
}

// Después:
export const about = {
  image: '/images/about/profile.jpg',
  // ...
}
```

## Paso 3: En componentes (opcional)

Si necesitas referenciar imágenes directamente en componentes:

```typescript
// En cualquier componente
<img src="/images/projects/distributed-cache.jpg" alt="Distributed Cache" />
```

## Notas

- **Rutas**: Siempre comienzan con `/images/` (sin la carpeta `public/`)
- **Formato**: JPG o PNG funcionan bien. Considera WebP para mejor performance
- **Tamaño**: Mantén imágenes optimizadas (~800x500px es bueno para proyectos)
- **Build**: Vite automáticamente optimiza las imágenes durante el build
- **Nombres**: Usa nombres descriptivos y en minúsculas con guiones

## Pasos rápidos

1. Crea la carpeta: `mkdir -p public/images/{projects,certificates,corporate,about}`
2. Coloca tus imágenes en las carpetas correspondientes
3. Actualiza las rutas en `src/data/` archivos
4. Listo! El build automáticamente copia las imágenes a la carpeta `dist/`
