// src/components/layout/FlexboxShowcase.jsx
import { Box, Typography, Paper } from '@mui/material'

const FlexboxShowcase = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Flexbox Layout with MUI
      </Typography>

      {/* Horizontal row with spacing */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mt: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            px: 3,
            py: 2,
            borderRadius: '8px',
          }}
        >
          Box 1
        </Box>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            px: 3,
            py: 2,
            borderRadius: '8px',
          }}
        >
          Box 2
        </Box>
        <Box
          sx={{
            backgroundColor: 'success.main',
            color: 'white',
            px: 3,
            py: 2,
            borderRadius: '8px',
          }}
        >
          Box 3
        </Box>
      </Box>

      {/* Centered layout */}
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px',
          backgroundColor: 'grey.100',
        }}
      >
        <Typography>Centered Content (Flex)</Typography>
      </Paper>
    </Box>
  )
}

export default FlexboxShowcase
