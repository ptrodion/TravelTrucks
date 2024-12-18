import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import globalStyle from './GlobalStyle.jsx';
import App from './App.jsx';
import store from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={globalStyle}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
