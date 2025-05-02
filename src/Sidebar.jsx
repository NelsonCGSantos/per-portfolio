import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 240px;
  background: ${({ theme }) => theme.primary};
  transform: translateX(${({ open }) => (open ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`

export function Sidebar({ open, items, onSelect }) {
    return (
      <SidebarContainer open={open}>
        {items.map((label) => (
          <MenuItem
            key={label}
            onClick={() => onSelect(label)}
          >
            {label}
          </MenuItem>
        ))}
      </SidebarContainer>
    )
  }