// src/theme/theme.js
import { createTheme } from '@mui/material/styles'

const commonTypography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '56px',
  },
  h2: {
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '48px',
  },
  h3: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '40px',
  },
  h4: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  },
  h5: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '28px',
  },
  h6: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '26px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '22px',
  },
  button: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#777',
    lineHeight: '20px',
  },
  overline: {
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '18px',
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: commonTypography,
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: commonTypography,
})
