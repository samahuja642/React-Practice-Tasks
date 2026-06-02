import type { ColorSystemOptions } from '@mui/material/styles';

export const palette:Record<'light'|'dark',ColorSystemOptions> = {
    light: {
        palette:{
            mode: 'light',
            primary: { main: '#3990FF', dark: '#02367D' },
            background: { default: '#ffffff', paper: '#f7f7f7' },
            text: { primary: '#111111' },
        }
    },
    dark: {
        palette:{
            mode: 'dark',
            primary: { main: '#5090D3', dark: '#132F4C' },
            background: { default: '#0a0a0a', paper: '#161616' },
            text: { primary: '#ffffff' },
        }
    }
} as const;