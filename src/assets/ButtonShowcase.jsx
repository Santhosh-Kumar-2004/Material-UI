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
                    <IconButton color="error" sx={{ width: '200px' }}>
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
                    sx={{ width: '200px' }}
                >
                    Send Message
                </LoadingButton>
            </Stack>

            {/* Buttons with Icons */}
            <Typography variant="h6" gutterBottom mt={4}>
                Buttons with Icons
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                >
                    Send
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<DeleteIcon />}
                >
                    Delete
                </Button>

                <Button
                    variant="text"
                    color="success"
                    startIcon={<SendIcon />}
                    endIcon={<DeleteIcon />}
                    sx={{ textTransform: 'none' }}
                >
                    Double Icon
                </Button>
            </Stack>

            {/* Custom Button Styling with sx */}
            <Typography variant="h6" gutterBottom  mt={4}>
                Custom Styled Buttons
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ff7043', // deep orange
                        color: '#fff',
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                        '&:hover': {
                            backgroundColor: '#f4511e',
                        },
                    }}
                >
                    Custom Orange
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        borderColor: 'secondary.main',
                        color: 'secondary.main',
                        fontWeight: 600,
                        px: 3,
                        '&:hover': {
                            backgroundColor: 'secondary.light',
                            color: 'black'
                        },
                    }}
                >
                    Outlined Secondary
                </Button>
            </Stack>


        </Box>
    )
}

export default ButtonShowcase
