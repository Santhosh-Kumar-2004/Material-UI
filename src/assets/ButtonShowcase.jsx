// src/components/ButtonShowcase.jsx
import { Box, Typography, Button, IconButton, Stack, Tooltip } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'

const ButtonShowcase = () => {
  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Button Types
      </Typography>

      <Stack spacing={3}>
        {/* Default Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </Stack>

        {/* IconButton with Tooltip */}
        <Tooltip title="Delete">
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        {/* Loading Button */}
        <LoadingButton
          variant="contained"
          loading={loading}
          onClick={handleLoading}
          loadingPosition="start"
          startIcon={<SendIcon />}
        >
          Send Message
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default ButtonShowcase
