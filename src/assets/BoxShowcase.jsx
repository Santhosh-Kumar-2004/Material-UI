// src/components/layout/BoxShowcase.jsx
import { Box, Typography, Paper } from '@mui/material'

const BoxShowcase = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Box Layout Examples
      </Typography>

      {/* Basic Box with padding, background, and width */}
      <Box
        sx={{
          p: 3,
          my: 2,
          backgroundColor: 'primary.light',
          color: 'white',
          width: '300px',
          borderRadius: '8px',
        }}
      >
        This is a Box with padding, custom width, and background.
      </Box>

      {/* Nested Box inside Paper */}
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Box inside Paper</Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            backgroundColor: 'secondary.main',
            color: '#fff',
            borderRadius: '6px',
          }}
        >
          This inner Box handles styling & spacing cleanly.
        </Box>
      </Paper>
    </Box>
  )
}

export default BoxShowcase
