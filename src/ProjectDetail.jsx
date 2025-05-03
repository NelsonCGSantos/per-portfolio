import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`padding: 2rem;`;
const BackLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;
`;

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if (!project) return <Wrapper>Not found. <BackLink to="/">Go home</BackLink></Wrapper>;
  return (
    <Wrapper>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <p><BackLink to="/">← Back to home</BackLink></p>
    </Wrapper>
  );
}
