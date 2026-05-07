import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SynthContextType {
  isSynth: boolean
  toggleSynth: () => void
}

const SynthContext = createContext<SynthContextType | undefined>(undefined)

export function SynthProvider({ children }: { children: ReactNode }) {
  const [isSynth, setIsSynth] = useState(() => {
    const saved = localStorage.getItem('synthMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('synthMode', JSON.stringify(isSynth))
    document.documentElement.setAttribute('data-synth', isSynth ? 'true' : 'false')
  }, [isSynth])

  const toggleSynth = () => setIsSynth(!isSynth)

  return (
    <SynthContext.Provider value={{ isSynth, toggleSynth }}>
      {children}
    </SynthContext.Provider>
  )
}

export function useSynth() {
  const context = useContext(SynthContext)
  if (context === undefined) {
    throw new Error('useSynth must be used within SynthProvider')
  }
  return context
}
