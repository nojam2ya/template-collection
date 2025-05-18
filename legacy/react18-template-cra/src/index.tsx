import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from '@tanstack/react-query';
import commonQueryClient from './query/commonQueryClient';
import { ThemeProvider } from 'styled-components';
import { theme } from './infra/theme/theme';
import { ToastContainer } from 'react-toastify';
import { commonToastConfig } from './infra/toast/config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={commonQueryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer {...commonToastConfig} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
