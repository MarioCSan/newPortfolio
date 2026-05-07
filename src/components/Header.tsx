import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslation()

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.corporate, href: '#corporate-projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.certs, href: '#certificates' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: 'mailto:canalessanchezmario@gmail.com' }
  ]

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h3>Mario Canales</h3>
          </div>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {mobileMenuOpen && (
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
