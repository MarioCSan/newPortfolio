import { useAppContext } from '../context/AppContext'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { language, setLanguage, theme, setTheme } = useAppContext()

  return (
    <div className={styles.toggles}>
      {/* Language Toggle */}
      <div className={styles.toggleGroup}>
        <button
          className={`${styles.toggleBtn} ${language === 'es' ? styles.active : ''}`}
          onClick={() => setLanguage('es')}
          title="Español"
        >
          🇪🇸
        </button>
        <button
          className={`${styles.toggleBtn} ${language === 'en' ? styles.active : ''}`}
          onClick={() => setLanguage('en')}
          title="English"
        >
          🇬🇧
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        className={`${styles.themeBtn} ${theme === 'dark' ? styles.dark : ''}`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  )
}
