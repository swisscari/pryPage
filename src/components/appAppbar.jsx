import { useState } from 'react';

import {
    Box,
    Drawer,
    Button,
    AppBar,
    Toolbar,
    Divider,
    MenuItem,
    Container,
    Typography,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

import ToggleColorMode from './toggleColorMode';
import { ToggleLanguage } from './toggleLanguage';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

function AppAppBar({
    mode,
    sections = [],
    toggleColorMode,
    scrollToSection,
}) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const handleSection = (sectionId) => {
        scrollToSection(sectionId)
        setOpen(false)
    }

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    mt: 2,
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <img
                                src={
                                    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                                }
                                style={logoStyle}
                                alt="logo of sitemark"
                            />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {sections.map((section, index) => {
                                    return <MenuItem
                                        key={index}
                                        sx={{ py: '6px', px: '12px' }}
                                        onClick={() => handleSection(section.id)}
                                    >
                                        <Typography variant="body2" color="text.primary">
                                            {section.name}
                                        </Typography>
                                    </MenuItem>
                                })}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode
                                mode={mode}
                                toggleColorMode={toggleColorMode}
                            />
                            <ToggleLanguage />
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        p: 2,
                                        flexGrow: 1,
                                        minWidth: '60dvw',
                                        backgroundColor: 'background.paper',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'start',
                                            flexDirection: 'row-reverse',
                                        }}
                                    >
                                        <ToggleLanguage />
                                        <ToggleColorMode
                                            mode={mode}
                                            toggleColorMode={toggleColorMode}
                                        />
                                    </Box>
                                    {sections.map((section, index) => {
                                        return <MenuItem
                                            key={index}
                                            onClick={() => handleSection(section.id)}
                                        >{section.name}
                                        </MenuItem>
                                    })}
                                    <Divider />
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;