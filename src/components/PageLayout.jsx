// src/components/layout/PageLayout.jsx
import { Box, Container, Typography } from '@mui/material'

const PageLayout = ({ title, children, maxWidth = 'md' }) => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth={maxWidth}>
        {title && (
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
        )}

        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

export default PageLayout
