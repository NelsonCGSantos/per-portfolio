import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themes } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bg};
    color:      ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;

function Root() {
  const [themeName, setThemeName] = useState('p5');
  return (
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyle />
      <App themeName={themeName} setTheme={setThemeName} />
    </ThemeProvider>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<Root />);
