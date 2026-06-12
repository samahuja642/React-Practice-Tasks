import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { ThemeProvider,CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { theme } from './theme/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>,
)
