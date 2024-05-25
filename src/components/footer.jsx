import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">Sitemark&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer({
    sections = [],
    scrollToSection
}) {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                py: { xs: 8, sm: 0 },
                gap: { xs: 4, sm: 4 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '100%' }
                        }}
                    >
                        {/* <Typography variant="body2" fontWeight={600}>
                            Product
                        </Typography> */}
                        <div style={{ height: 300 }}>
                            <iframe
                                id="gmap_canvas"
                                width='100%' height='100%'
                                style={{ border: 'none' }}
                                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=5&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </Box>
                </Box>
                <Box
                    sx={{
                        gap: 1,
                        flexDirection: 'column',
                        display: { xs: 'none', sm: 'flex' },
                    }}
                >

                    <Typography variant="body2" fontWeight={600}>
                        Product
                    </Typography>
                    {sections.map((section, id) => {
                        return <Link
                            key={id}
                            color='text.secondary'
                            style={{ cursor: 'pointer' }}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.name}
                        </Link>
                    })}
                </Box>
                <Box
                    sx={{
                        gap: 1,
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Company
                    </Typography>
                    <Link color="text.secondary" href="#">
                        About us
                    </Link>
                    <Link color="text.secondary" href="#">
                        Careers
                    </Link>
                    <Link color="text.secondary" href="#">
                        Press
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms
                    </Link>
                    <Link color="text.secondary" href="#">
                        Privacy
                    </Link>
                    <Link color="text.secondary" href="#">
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    pt: { xs: 4, sm: 4 },
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <Link color="text.secondary" href="#">
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href="#">
                        Terms of Service
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    useFlexGap
                    spacing={1}
                    direction="row"
                    justifyContent="left"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="GitHub"
                        href="https://github.com/cartory"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="X"
                        href="https://twitter.com"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}