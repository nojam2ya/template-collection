import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/reset.css';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import commonQueryClient from '@/infra/query/commonQueryClient.ts';
import { ToastContainer } from 'react-toastify';
import { commonToastConfig } from '@infra/toast/config.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from '@infra/theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={commonQueryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer {...commonToastConfig} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
