# Imágenes Locales

Este directorio contiene todas las imágenes locales del portafolio.

## Estructura recomendada

```
images/
├── projects/           # Imágenes de proyectos
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
├── certificates/       # Imágenes de certificados
│   ├── azure.png
│   ├── aws.png
│   └── ...
├── about/             # Imágenes de la sección about
│   └── profile.jpg
└── corporate/         # Imágenes de proyectos corporativos
    ├── corporate1.jpg
    └── ...
```

## Cómo usarlas

### 1. En componentes (rutas relativas)
```typescript
// En ProjectCard.tsx
<img src="/images/projects/project1.jpg" alt="Project 1" />

// En CertificateCard.tsx
<img src="/images/certificates/azure.png" alt="Azure Certification" />

// En AboutSection.tsx
<img src="/images/about/profile.jpg" alt="Profile" />
```

### 2. En archivos de datos con importes
```typescript
// En src/data/projects.ts
import project1 from '/images/projects/project1.jpg'

export const projects = [
  {
    id: 1,
    title: 'Distributed Cache Layer',
    image: project1,
    // ... resto de datos
  }
]
```

### 3. En CSS
```css
/* En un archivo .css o .module.css */
.backgroundImage {
  background-image: url('/images/about/profile.jpg');
  background-size: cover;
}
```

## Notas importantes

- Usa rutas que comienzan con `/images/` (sin `public/` en la ruta)
- Vite automáticamente optimiza las imágenes durante el build
- Para máximo performance, usa formatos modernos como WebP
- Mantén un nombre consistente y descriptivo para las imágenes
