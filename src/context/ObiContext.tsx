import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ObiContextType {
  isObi: boolean
  toggleObi: () => void
}

const ObiContext = createContext<ObiContextType | undefined>(undefined)

export function ObiProvider({ children }: { children: ReactNode }) {
  const [isObi, setIsObi] = useState(() => {
    const saved = localStorage.getItem('obiMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('obiMode', JSON.stringify(isObi))
    document.documentElement.setAttribute('data-obi', isObi ? 'true' : 'false')
  }, [isObi])

  const toggleObi = () => setIsObi(!isObi)

  return (
    <ObiContext.Provider value={{ isObi, toggleObi }}>
      {children}
    </ObiContext.Provider>
  )
}

export function useObi() {
  const context = useContext(ObiContext)
  if (context === undefined) {
    throw new Error('useObi must be used within ObiProvider')
  }
  return context
}
