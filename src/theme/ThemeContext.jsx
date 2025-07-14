// src/theme/ThemeContext.jsx
import React, { createContext, useMemo, useState, useContext } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
