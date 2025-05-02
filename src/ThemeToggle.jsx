import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme, active }) => (active ? theme.primary : theme.accent)};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
`;

export function ThemeToggle({ themeName, setTheme }) {
  return (
    <Wrapper>
      {['p5', 'p4', 'p3'].map((name) => (
        <Button
          key={name}
          active={themeName === name}
          onClick={() => setTheme(name)}
        >
          {name.toUpperCase()}
        </Button>
      ))}
    </Wrapper>
  );
}
