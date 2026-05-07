import { useAppContext } from '../context/AppContext'
import { translations } from '../data/translations'

export function useTranslation() {
  const { language } = useAppContext()
  return translations[language]
}

export function useLanguage() {
  const { language, setLanguage } = useAppContext()
  return { language, setLanguage }
}
