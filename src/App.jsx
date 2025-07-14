// src/App.jsx
import { AppBar, Toolbar, Typography, Box, Container, Rating } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'
import SendIcon from '@mui/icons-material/Send'
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
import RadioButtonsGroup from './samples/RadioButtons'
import ErrorRadios from './samples/ErrorRadios'
import BoxShowcase from './assets/BoxShowcase'
import FlexboxShowcase from './assets/FlexboxShowcase'
import GridShowcase from './assets/GridShowcase'
import Dashboard from './components/Dashboard'
import BasicRating from './samples/RatingComp'
import RadioGroupRating from './samples/RatingFaces'

function App() {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>MUI Learning Example</Typography>
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

      {/* <ButtonShowcase /> */}
      {/* <Divider sx={{ my: 3 }} /> */}
      {/* <FloatingActionButtons /> */}
      {/* <FloatingActionButtonZoom /> */}

      {/* <AppButton /> */}

      {/* <AppButton icon={<SendIcon />} color="secondary">
        Send Message
      </AppButton>

      <AppButton loading>
        Submitting...
      </AppButton>

      <AppButton variant="outlined" onClick={() => alert('Clicked')}>
        Outlined Action
      </AppButton> */}

      {/* <RadioButtonsGroup /> */}
      {/* <ErrorRadios /> */}

      {/* <BoxShowcase /> */}
      {/* <FlexboxShowcase /> */}
      {/* <GridShowcase /> */}
      {/* <Dashboard /> */}

      <BasicRating />
      <RadioGroupRating />
    </Box>
  )
}

export default App
