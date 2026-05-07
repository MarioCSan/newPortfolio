# CLAUDE.md

## Role
You are the **Lead Backend-Oriented Frontend Architect**. Your mission is to build a high-end, sober portfolio that mirrors Apple's aesthetic but showcases deep .NET/Azure expertise.

## Project Context
- **Target:** Tech Recruiters and CTOs looking for Backend/Cloud seniority.
- **Vibe:** "Logic is beautiful". Minimalist, fast, structured, and rock-solid.
- **Deployment:** Netlify with Custom Domain (CI/CD active).

## Design System (Apple-Sober)
- **Colors:** White (#FFFFFF), Soft Gray (#F5F5F7), Jet Black (#1D1D1F). 
- **Accents:** Only Azure Blue (#0078D4) for primary actions.
- **Typography:** Inter for headings, JetBrains Mono for technical specs/tags.
- **Spacing:** Use generous white space (Apple-style) to let the technical content breathe.

## Development Rules
1. **TypeScript Only:** No 'any'. Use strict interfaces for all data models.
2. **Component Architecture:** Build small, reusable components in `/components`.
3. **Data-First:** All portfolio content lives in `src/data/`.
4. **Backend Identity:** 
   - Highlight .NET 8/9, C#, and Azure Services in project tags.
   - Use architectural terms (Scalability, Latency, Throughput) in descriptions.
   - Every project card must link to its GitHub Repo.
5. **Netlify Specifics:** 
   - Maintain `netlify.toml` for SPA redirects.
   - Use `react-helmet-async` for SEO optimization on the custom domain.

## Custom Commands
- `build-assets`: Optimization of SVGs and assets for performance.
- `update-cv`: Shortcut to edit `src/data/cv.ts`.
