import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.25rem;
`;

export function ThemeToggle({ themeName, setTheme }) {
  const isLight = themeName === 'light';
  return (
    <ToggleButton
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <FiMoon /> : <FiSun />}
    </ToggleButton>
  );
}
