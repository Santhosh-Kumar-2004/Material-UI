import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row" mt={10}>
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
        </Stack>
    );
}
