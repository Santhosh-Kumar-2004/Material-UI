import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function BasicButtons() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>Disabled</Button>
                <Button variant="outlined" href="#outlined-buttons">Link</Button>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>

        </>
    );
}
