import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import PersonaCard from './PersonaCard';
import {
  Header,
  MenuButton,
  Title,
  Main,
  SectionWrapper,
  ProjectsGrid,
} from './App.styles';


const projects = [
  {
    id: 'tldr',
    title: 'TLDR Chrome Extension',
    description: 'A Chrome extension that summarizes any page using the ChatGPT API.',
    link: 'https://github.com/ClintasaurusRex/tldr',
  },
  {
    id: 'jungle',
    title: 'Jungle',
    description: 'Jungle is a Ruby on Rails 6.1 mini e-commerce application designed to offer users a seamless shopping experience for home plants',
    link: 'https://github.com/NelsonCGSantos/jungle-rails',
  },
  {
    id: 'Photolabs',
    title: 'Photolabs',
    description: 'PhotoLabs is a React-based single-page application (SPA) designed to provide users with an interactive photo viewing experience',
    link: 'https://github.com/NelsonCGSantos/photolabs',
  },
  {
    id: 'PasswordKeeper',
    title: 'SafePass',
    description: 'Password manager, targeted for company usage, powered by Javascript',
    link: 'https://github.com/schang9m/PasswordKeepR',
  },
  {
    id: 'SpeerNotes',
    title: 'SNotes',
    description: 'A secure, scalable note-taking API with user authentication, CRUD operations, note sharing, and full-text search.',
    link: 'https://github.com/NelsonCGSantos/SNotes',
  },
];

export default function App({ themeName, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('About');
  const menu = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <Header>
        <MenuButton onClick={() => setSidebarOpen(o => !o)}>☰</MenuButton>
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
          <SectionWrapper>
            📝 <strong>About / History</strong> content goes here.
          </SectionWrapper>
        )}

        {active === 'Projects' && (
          <ProjectsGrid>
            {projects.map(p => (
              <PersonaCard
                key={p.id}
                title={p.title}
                description={p.description}
                link={p.link}
              />
            ))}
          </ProjectsGrid>
        )}

        {active === 'Skills' && (
          <SectionWrapper>
            📊 <strong>Skills XP Bars</strong> go here.
          </SectionWrapper>
        )}

        {active === 'Contact' && (
          <SectionWrapper>
            📬 <strong>Contact / Confidant Grid</strong> goes here.
          </SectionWrapper>
        )}
      </Main>
    </>
  );
}
