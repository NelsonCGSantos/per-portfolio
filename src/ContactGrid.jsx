import React from 'react';
import styled from 'styled-components';
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiFileText,
  FiTwitter,
  FiBookOpen,
  FiCpu,
  FiStar,
  FiLifeBuoy,
} from 'react-icons/fi';

const gridItems = [
  { label: 'LinkedIn', icon: <FiLinkedin size={32} />, link: 'https://linkedin.com/in/your-username' },
  { label: 'GitHub',   icon: <FiGithub   size={32} />, link: 'https://github.com/your-username' },
  { label: 'Email',    icon: <FiMail     size={32} />, link: 'mailto:you@example.com' },
  { label: 'Resume',   icon: <FiFileText size={32} />, link: '/resume.pdf' },
  { label: 'Blog',     icon: <FiBookOpen size={32} />, link: 'https://dev.to/your-username' },
  { label: 'Twitter',  icon: <FiTwitter  size={32} />, link: 'https://twitter.com/your-username' },
  { label: 'Source',   icon: <FiCpu      size={32} />, link: 'https://github.com/your-username/persona-portfolio' },
  { label: 'Star Me',  icon: <FiStar     size={32} />, link: 'https://github.com/your-username/persona-portfolio/stargazers' },
  { label: 'Support',  icon: <FiLifeBuoy size={32} />, link: 'https://buymeacoffee.com/your-username' },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  justify-items: center;
  align-items: center;
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Label = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

export default function ContactGrid() {
  return (
    <Grid>
      {gridItems.map(({ label, icon, link }) => (
        <Item key={label} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
          <Label>{label}</Label>
        </Item>
      ))}
    </Grid>
  );
}
