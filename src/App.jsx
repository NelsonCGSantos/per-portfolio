import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import PersonaCard from './PersonaCard';
import Skills from './Skills';
import ContactGrid from './ContactGrid';
import Timeline from './Timeline';
import {
  Header,
  MenuButton,
  Title,
  Main,
  SectionWrapper,
  ProjectsGrid,
} from './App.styles';

const aboutData = [
  { period: '2016–2019', content: 'Head eSports Coach for League of Legends teams—building leadership and teamwork.' },
  { period: '2019–2024', content: 'Operations Manager roles & completed full-stack bootcamp at Lighthouse Labs.' },
  { period: 'Sept 2024', content: 'Graduated Lighthouse Labs Web Development Bootcamp.' },
  { period: 'Oct 2024–Present', content: 'Building web apps and Chrome extensions with React & Node.js.' },
];


const skillsData = [
  { name: 'JavaScript',    level: 100 },
  { name: 'React',         level:  95 },
  { name: 'Node.js',       level:  90 },
  { name: 'TypeScript',    level:  85 },
  { name: 'HTML & CSS',    level:  90 },
  { name: 'Git & GitHub',  level:  80 },
  { name: 'Python',        level:  75 },
  { name: 'Ruby on Rails', level:  70 },
  { name: 'PHP',           level:  60 },
];

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
    description: 'Jungle is a Rails 6.1 mini e‑commerce app for home plants.',
    link: 'https://github.com/NelsonCGSantos/jungle-rails',
  },
  {
    id: 'photolabs',
    title: 'Photolabs',
    description: 'React SPA for interactive photo viewing.',
    link: 'https://github.com/NelsonCGSantos/photolabs',
  },
  {
    id: 'safepass',
    title: 'SafePass',
    description: 'Company-grade password manager in JavaScript.',
    link: 'https://github.com/schang9m/PasswordKeepR',
  },
  {
    id: 'snotes',
    title: 'SNotes',
    description: 'Secure note‑taking API with auth and search.',
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
            <Timeline events={aboutData} />
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
            <Skills skills={skillsData} />
          </SectionWrapper>
        )}

        {active === 'Contact' && (
          <SectionWrapper>
             <ContactGrid />
          </SectionWrapper>
        )}
      </Main>
    </>
  );
}
