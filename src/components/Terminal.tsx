import { useState, useEffect, useRef } from 'react'
import { useSynth } from '../context/SynthContext'
import { useBarbie } from '../context/BarbieContext'
import { useObi } from '../context/ObiContext'
import { useAppContext } from '../context/AppContext'
import { terminalCommands } from '../data/terminalCommands'
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
  const { language, setTheme } = useAppContext()
  const { isSynth, toggleSynth } = useSynth()
  const { isBarbie, toggleBarbie } = useBarbie()
  const { isObi, toggleObi } = useObi()
  const terminalCmds = terminalCommands[language]

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
      const displayOutput = lastCommand.displayOutput || []
      if (displayOutput.length < lastCommand.output.length) {
        const timeout = setTimeout(() => {
          const newCommands = [...commands]
          const lastCmd = newCommands[newCommands.length - 1]
          if (lastCmd.displayOutput === undefined) {
            lastCmd.displayOutput = []
          }
          lastCmd.displayOutput.push(lastCmd.output[lastCmd.displayOutput.length])
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
    const args = trimmedCmd.split(' ')
    const baseCmd = args[0]

    if (baseCmd === 'clear') {
      setCommands([])
      setInput('')
      return
    }

    if (baseCmd === 'synth' || baseCmd === 'neon') {
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

    if (baseCmd === 'base' || baseCmd === 'reset') {
      setTheme('light')
      if (isSynth) toggleSynth()
      if (isBarbie) toggleBarbie()
      if (isObi) toggleObi()
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

    if (baseCmd === 'themes') {
      const themeArg = args[1]?.toLowerCase()
      let output: string[] = []

      if (!themeArg) {
        output = terminalCmds.themes || []
      } else if (themeArg === '1' || themeArg === 'light') {
        setTheme('light')
        if (isSynth) toggleSynth()
        if (isBarbie) toggleBarbie()
        if (isObi) toggleObi()
        output = ['Switched to light theme']
      } else if (themeArg === '2' || themeArg === 'dark') {
        setTheme('dark')
        if (isSynth) toggleSynth()
        if (isBarbie) toggleBarbie()
        if (isObi) toggleObi()
        output = ['Switched to dark theme']
      } else if (themeArg === '3' || themeArg === 'synth') {
        if (isBarbie) toggleBarbie()
        if (isObi) toggleObi()
        toggleSynth()
        output = ['Switched to synthwave theme']
      } else if (themeArg === '4' || themeArg === 'barbie') {
        if (isSynth) toggleSynth()
        if (isObi) toggleObi()
        toggleBarbie()
        output = ['Switched to Barbie mode 💖']
      } else if (themeArg === '5' || themeArg === 'obi') {
        if (isSynth) toggleSynth()
        if (isBarbie) toggleBarbie()
        toggleObi()
        output = ['Switched to Obi-Wan theme ⚔️']
      } else {
        output = ['✗ Unknown theme. Type "themes" for options']
      }

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

    const output = (terminalCmds as unknown as Record<string, string[]>)[baseCmd] || [
      `$ command not found: ${baseCmd}`,
      `> type "help" for available commands`,
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
