// src/components/Header.jsx
import { Box, Typography, Button, Stack } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        textAlign: 'center',
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        Welcome to MUI World
      </Typography>

      <Typography variant="subtitle1" sx={{ fontSize: '18px', mb: 4 }}>
        Learn Material UI with clean, real-world React code.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary">
          Get Started
        </Button>
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
      </Stack>
    </Box>
  )
}

export default Header
