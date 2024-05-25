import { useState } from 'react';

import {
    Box,
    Divider,
    CssBaseline,
    createTheme,
    ThemeProvider,
} from '@mui/material';

import FAQ from './components/faq';
import Hero from './components/hero';
import getLPTheme from './getLptTheme';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Features from './components/features';
import AppAppBar from './components/appAppbar';
import Highlights from './components/highLights';
import Testimonials from './components/testimonials';
import LogoCollection from './components/logoCollection';

import { Show } from './components/show';

const getDefaultTheme = () => {
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)').media;
    return /dark/i?.test(mediaQuery) ? 'dark' : 'light' ?? 'light';
}

const sections = [
    {
        id: 'features',
        name: 'Features',
        title: 'Product Features',
        component: <Features />,
    },
    // {
    //     id: 'testimonials',
    //     name: 'Testimonials',
    //     title: 'Testimonials',
    //     component: <Testimonials />,
    // },
    {
        id: 'highlights',
        name: 'Highlights',
        title: 'Highlights',
        component: <Highlights />,
    },
    {
        id: 'pricing',
        name: 'Pricing',
        title: 'Pricing',
        component: <Pricing />,
    },
    {
        id: 'faq',
        name: 'FAQ',
        title: 'Frequently Asked Questions',
        component: <FAQ />,
    },
]

const scrollToSection = (sectionId) => {
    const offset = 44;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        const targetScroll = sectionElement.offsetTop - offset;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth',
        });
    }
};

export default function LandingPage() {
    const [mode, setMode] = useState(getDefaultTheme());

    const LPtheme = createTheme(getLPTheme(mode));
    const toggleColorMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <AppAppBar
                mode={mode}
                sections={sections}
                scrollToSection={scrollToSection}
                toggleColorMode={toggleColorMode}
            />

            <Hero />
            <Box sx={{ bgcolor: 'background.default' }}>
                <LogoCollection />
                {sections.map((section, index) => {
                    const isLastPosition = index + 1 === sections.length
                    return <div key={index}>
                        {section.component}
                        <Show when={!isLastPosition}><Divider /></Show>
                    </div>
                })}
                <Footer
                    sections={sections}
                    scrollToSection={scrollToSection}
                />
            </Box>
        </ThemeProvider>
    );
}