import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import globalStyle from './GlobalStyle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={globalStyle}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
