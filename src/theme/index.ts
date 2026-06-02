import { createTheme } from '@mui/material/styles';
import { palette } from './palette';

export const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    colorSchemes: {
        light: palette.light,
        dark: palette.dark,
    },
    shape: {
        borderRadius: '8px',
    }
});