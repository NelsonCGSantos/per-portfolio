// src/App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import PersonaCard from './PersonaCard';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 1001;
`;

const MenuButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0 1rem;
  flex-grow: 1;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
`;

const Main = styled.main`
  padding-top: 60px; /* push below header */
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '240px' : '0')};
  transition: margin-left 0.3s ease;
  min-height: calc(100vh - 60px);
`;

const ProjectsGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

export default function App({ themeName, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('About');
  const menu = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <Header>
        <MenuButton onClick={() => setSidebarOpen(o => !o)}>
          ☰
        </MenuButton>
        <Title>Nelson Santos</Title>
        <ThemeToggle themeName={themeName} setTheme={setTheme} />
      </Header>

      <Sidebar
        open={sidebarOpen}
        items={menu}
        onSelect={label => {
          setActive(label);
          setSidebarOpen(false);
        }}
      />

      <Main sidebarOpen={sidebarOpen}>
        {active === 'About' && (
          <div style={{ padding: '2rem' }}>
            📝 <strong>About / History</strong> content goes here.
          </div>
        )}

        {active === 'Projects' && (
          <ProjectsGrid>
            <PersonaCard
              title="TLDR Chrome Extension"
              description="A Chrome extension that summarizes any page using the ChatGPT API."
              stack={['React', 'Styled-Components', 'OpenAI']}
              link="https://github.com/your-username/tldr-extension"
            />
            <PersonaCard
              title="Pirate Portfolio"
              description="Interactive 3D portfolio built with React Three Fiber."
              stack={['React', 'Three.js', 'Vite']}
              link="https://github.com/your-username/pirate-portfolio"
            />
            <PersonaCard
              title="SpeerNotes API"
              description="Secure notes API with JWT auth, built in Node.js + PostgreSQL."
              stack={['Node.js', 'Express', 'PostgreSQL']}
              link="https://github.com/your-username/speerNotes-api"
            />
            <PersonaCard
              title="Nuit Blanche Site"
              description="Fundraising microsite for an art festival, built in Vue.js."
              stack={['Vue', 'Vuetify', 'Netlify']}
              link="https://github.com/your-username/nuit-blanche-site"
            />
          </ProjectsGrid>
        )}

        {active === 'Skills' && (
          <div style={{ padding: '2rem' }}>
            📊 <strong>Skills XP Bars</strong> go here (we’ll animate these next).
          </div>
        )}

        {active === 'Contact' && (
          <div style={{ padding: '2rem' }}>
            📬 <strong>Contact / Confidant Grid</strong> goes here.
          </div>
        )}
      </Main>
    </>
  );
}
