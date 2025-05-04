import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themes } from './theme';
import { BrowserRouter } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color:      ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;

function Root() {
  const [themeName, setThemeName] = useState('light');
  return (
    <BrowserRouter>
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyle />
      <App themeName={themeName} setTheme={setThemeName} />
    </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<Root />);
