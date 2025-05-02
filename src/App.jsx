import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem;
  background: ${({ theme }) => theme.accent};
  text-align: center;
`;

export default function App({ themeName, setTheme }) {
  return (
    <div>
      <Header>
        Persona-Style Portfolio — Theme: {themeName.toUpperCase()}
      </Header>
      <ThemeToggle themeName={themeName} setTheme={setTheme} />
    </div>
  );
}
