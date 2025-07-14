// src/App.jsx
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'
import BasicButtons from './samples/Buttons'

function App() {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Theming Example
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <BasicButtons />
      
    </Box>
  )
}

export default App
