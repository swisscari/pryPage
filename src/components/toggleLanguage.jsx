import { useState } from 'react';

import {
    Box,
    Menu,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material'

import LanguageIcon from '@mui/icons-material/Language';

export function ToggleLanguage({ }) {
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)
    const handleClose = () => setAnchorEl(null)
    const handleClick = e => setAnchorEl(e.currentTarget)

    return (
        <Box sx={{ maxWidth: '32px' }}>
            <Tooltip title="Language">
                <Button
                    size="small"
                    variant="text"
                    onClick={handleClick}
                    aria-label="button to toggle theme"
                    sx={{ minWidth: '32px', height: '32px', p: '4px' }}
                >
                    <LanguageIcon fontSize='small' />
                </Button>
            </Tooltip>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>French</MenuItem>
                <MenuItem onClick={handleClose}>Deutsch</MenuItem>
                <MenuItem onClick={handleClose}>Espaniol</MenuItem>
            </Menu>
        </Box>
    );
}