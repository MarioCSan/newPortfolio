import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface BarbieContextType {
  isBarbie: boolean
  toggleBarbie: () => void
}

const BarbieContext = createContext<BarbieContextType | undefined>(undefined)

export function BarbieProvider({ children }: { children: ReactNode }) {
  const [isBarbie, setIsBarbie] = useState(() => {
    const saved = localStorage.getItem('barbieMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('barbieMode', JSON.stringify(isBarbie))
    document.documentElement.setAttribute('data-barbie', isBarbie ? 'true' : 'false')
  }, [isBarbie])

  const toggleBarbie = () => setIsBarbie(!isBarbie)

  return (
    <BarbieContext.Provider value={{ isBarbie, toggleBarbie }}>
      {children}
    </BarbieContext.Provider>
  )
}

export function useBarbie() {
  const context = useContext(BarbieContext)
  if (context === undefined) {
    throw new Error('useBarbie must be used within BarbieProvider')
  }
  return context
}
