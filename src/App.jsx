// src/App.jsx
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'
import BasicButtons from './samples/Buttons'
import TypographyShowcase from './assets/TypoGraphy/TypographyShowcase'
import Divider from '@mui/material/Divider';
import Header from './components/Header';
import ThemeSXExample from './assets/TypoGraphy/ThemeSXExample';
import Checkboxes from './samples/CheckBoxes';

function App() {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>MUI Theming Example</Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      {/* <Typography variant='h2' mt={5} mb={3}>Buttons Showcase</Typography>
      <BasicButtons />
      <Divider sx={{ my: 3 }} /> */}

      {/* <TypographyShowcase /> */}
      {/* <Header /> */}
      {/* <ThemeSXExample /> */}
      <Checkboxes />
    </Box>
  )
}

export default App
