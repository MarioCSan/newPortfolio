import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { CorporateProjectsSection } from './components/CorporateProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { CertificatesSection } from './components/CertificatesSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import './styles/globals.css'

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
          <CorporateProjectsSection />
          <SkillsSection />
          <CertificatesSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
