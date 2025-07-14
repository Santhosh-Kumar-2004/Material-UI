import { Box, Typography, Paper } from '@mui/material'

const ThemeSXExample = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Theme-Aware Styling with sx
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: 'background.paper',
          color: 'text.primary',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          boxShadow: 3,
        }}
      >
        <Typography variant="body1">
          This box is styled using the <code>sx</code> prop with theme values like:
          <ul>
            <li><strong>background.paper</strong> (theme background)</li>
            <li><strong>text.primary</strong> (theme text color)</li>
            <li><strong>spacing</strong> from theme (via <code>p: 3</code>)</li>
            <li><strong>divider</strong> color for border</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  )
}

export default ThemeSXExample
