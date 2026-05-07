import { useState, useEffect, useRef } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { useSynth } from '../context/SynthContext'
import styles from './Terminal.module.css'

interface Command {
  input: string
  output: string[]
  displayOutput?: string[]
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [commands, setCommands] = useState<Command[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const t = useTranslation()
  const { isSynth, toggleSynth } = useSynth()

  const commandHelp: { [key: string]: string[] } = {
    help: [
      '> Available commands:',
      '  about    - Learn about Mario',
      '  skills   - Technical skills',
      '  projects - Featured projects',
      '  contact  - Contact information',
      '  synth    - Toggle synthwave mode ✨',
      '  base     - Return to base theme',
      '  clear    - Clear terminal',
      '  ls       - List commands',
      '  whoami   - Current user',
    ],
    about: [
      '> Mario Canales Sánchez',
      '> Backend Engineer & Cloud Architect',
      '> Building robust, scalable systems with .NET and Azure',
      '> 10+ years of experience',
      '> Logic is beautiful ✨',
    ],
    skills: [
      '> Backend & Cloud: .NET 8/9, C#, Azure Services, Docker, Kubernetes',
      '> Databases: SQL Server, PostgreSQL, CosmosDB, Redis',
      '> Frontend: React, TypeScript, Next.js, Tailwind CSS',
      '> DevOps: CI/CD, GitHub Actions, Terraform, Azure DevOps',
    ],
    projects: [
      '> Distributed Cache Layer - 50K req/s throughput',
      '> Real-Time Payment Processor - 2M daily transactions',
      '> Analytics Platform - 1B+ events daily',
      '> Service-Mesh API Gateway - 50K concurrent connections',
    ],
    contact: [
      '> Email: canalessanchezmario@gmail.com',
      '> GitHub: github.com/mariocdev',
      '> LinkedIn: linkedin.com/in/mario-canales',
    ],
    ls: [
      'about',
      'skills',
      'projects',
      'contact',
      'synth',
      'base',
      'help',
      'clear',
      'whoami',
    ],
    whoami: [
      '$ whoami',
      'mario@portfolio:~$',
    ],
    clear: [],
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (commands.length > 0) {
      const lastCommand = commands[commands.length - 1]
      if (lastCommand.displayOutput && lastCommand.displayOutput.length < lastCommand.output.length) {
        const timeout = setTimeout(() => {
          const newCommands = [...commands]
          newCommands[newCommands.length - 1].displayOutput?.push(lastCommand.output[lastCommand.displayOutput.length])
          setCommands([...newCommands])
        }, 50)
        return () => clearTimeout(timeout)
      }
    }
  }, [commands])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [commands])

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === 'clear') {
      setCommands([])
      setInput('')
      return
    }

    if (trimmedCmd === 'synth') {
      toggleSynth()
      const output = isSynth
        ? ['✨ Synthwave mode deactivated ✨']
        : ['✨ Synthwave mode activated ✨', '> Entering the neon dimension...']
      const newCommand: Command = {
        input: cmd,
        output,
        displayOutput: [],
      }
      setCommands([...commands, newCommand])
      setHistory([...history, cmd])
      setHistoryIndex(-1)
      setInput('')
      return
    }

    if (trimmedCmd === 'base') {
      if (isSynth) {
        toggleSynth()
      }
      const output = ['✨ Returning to base theme ✨']
      const newCommand: Command = {
        input: cmd,
        output,
        displayOutput: [],
      }
      setCommands([...commands, newCommand])
      setHistory([...history, cmd])
      setHistoryIndex(-1)
      setInput('')
      return
    }

    const output = commandHelp[trimmedCmd] || [
      `$ command not found: ${trimmedCmd}`,
      '> type "help" for available commands',
    ]

    const newCommand: Command = {
      input: cmd,
      output: output,
      displayOutput: [],
    }

    setCommands([...commands, newCommand])
    setHistory([...history, cmd])
    setHistoryIndex(-1)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(newIndex)
      setInput(history[history.length - 1 - newIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(newIndex)
      setInput(newIndex === -1 ? '' : history[history.length - 1 - newIndex])
    }
  }

  if (!isOpen) {
    return (
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(true)}
        title="Ctrl+K - Open Terminal (Easter Egg)"
      >
        &gt;_
      </button>
    )
  }

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.terminal} onClick={(e) => {
        e.stopPropagation()
        inputRef.current?.focus()
      }}>
        <div className={styles.header}>
          <h3>mario@portfolio:~$</h3>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            title="Esc or click to close"
          >
            ✕
          </button>
        </div>

        <div className={styles.output} ref={outputRef}>
          <div className={styles.welcome}>
            <div>Welcome to Mario's Terminal</div>
            <div>Type "help" for available commands (Ctrl+K to close)</div>
            <br />
          </div>

          {commands.map((cmd, idx) => (
            <div key={idx} className={styles.command}>
              <div className={styles.input}>$ {cmd.input}</div>
              {(cmd.displayOutput || cmd.output).map((line, lineIdx) => (
                <div key={lineIdx} className={styles.line}>
                  {line}
                </div>
              ))}
            </div>
          ))}

          <div className={styles.inputLine}>
            <span className={styles.prompt}>$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
