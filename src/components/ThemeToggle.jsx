// src/components/ThemeToggle.jsx
import { IconButton, Tooltip } from '@mui/material'
import { useThemeContext } from '../theme/ThemeContext'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext()

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle;
