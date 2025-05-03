import styled from 'styled-components';

export const Header = styled.header`
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

export const MenuButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0 1rem;
  flex-grow: 1;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
`;

export const Main = styled.main`
  padding-top: 60px; /* push below header */
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '240px' : '0')};
  transition: margin-left 0.3s ease;
  min-height: calc(100vh - 60px);
`;

export const SectionWrapper = styled.div`
  padding: 2rem;
`;

export const ProjectsGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
