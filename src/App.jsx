// src/App.jsx
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'
import BasicButtons from './samples/Buttons'
import TypographyShowcase from './assets/TypoGraphy/TypographyShowcase'
import Divider from '@mui/material/Divider';
import Header from './components/Header';
import ThemeSXExample from './assets/TypoGraphy/ThemeSXExample';
import Checkboxes from './samples/CheckBoxes';
import ButtonShowcase from './assets/ButtonShowcase';
import FloatingActionButtons from './samples/ActionFloatingButton';
import FloatingActionButtonZoom from './samples/FloatingButtonAnime';
import AppButton from './components/AppButton';

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
      {/* <Checkboxes /> */}
      {/* <Divider sx={{ my: 3 }} /> */}

      <ButtonShowcase />
      {/* <Divider sx={{ my: 3 }} /> */}
      {/* <FloatingActionButtons /> */}
      {/* <FloatingActionButtonZoom /> */}

      <AppButton />
    </Box>
  )
}

export default App
