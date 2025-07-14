// src/components/layout/GridShowcase.jsx
import { Box, Typography, Grid, Paper } from '@mui/material'

const GridShowcase = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Grid System (Responsive)
      </Typography>

      {/* Grid container with 3 items */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>Grid Item 1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>Grid Item 2</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>Grid Item 3</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default GridShowcase
