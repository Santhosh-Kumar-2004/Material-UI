import { Box, Typography, Divider } from '@mui/material'

const TypographyShowcase = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Typography Showcase
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h1" gutterBottom>H1 Heading</Typography>
      <Typography variant="h2" gutterBottom>H2 Heading</Typography>
      <Typography variant="h3" gutterBottom>H3 Heading</Typography>
      <Typography variant="h4" gutterBottom>H4 Heading</Typography>
      <Typography variant="h5" gutterBottom>H5 Heading</Typography>
      <Typography variant="h6" gutterBottom>H6 Heading</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="subtitle1" gutterBottom>Subtitle 1</Typography>
      <Typography variant="subtitle2" gutterBottom>Subtitle 2</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" gutterBottom>This is body1 - regular paragraph text.</Typography>
      <Typography variant="body2" gutterBottom>This is body2 - smaller paragraph text.</Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="button" display="block" gutterBottom>Button Text</Typography>
      <Typography variant="caption" display="block" gutterBottom>Caption Text</Typography>
      <Typography variant="overline" display="block" gutterBottom>Overline Text</Typography>
    </Box>
  )
}

export default TypographyShowcase
