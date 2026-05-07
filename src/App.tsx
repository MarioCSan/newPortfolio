import { HelmetProvider } from 'react-helmet-async'
import { AppProvider } from './context/AppContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { CorporateProjectsSection } from './components/CorporateProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { CertificatesSection } from './components/CertificatesSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import './styles/globals.css'

function AppContent() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <CorporateProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </HelmetProvider>
  )
}

export default App
