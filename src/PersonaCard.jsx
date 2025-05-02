import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  perspective: 1000px;
  width: 280px;
  height: 180px;
  margin: 1rem;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardFront = styled(CardFace)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardBack = styled(CardFace)`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transform: rotateY(180deg);
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  font-size: 0.9rem;
  
  a {
    display: inline-block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function PersonaCard({ 
  title, 
  description, 
  stack = [], 
  link 
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(f => !f)}>
      <CardInner flipped={flipped}>
        <CardFront>{title}</CardFront>
        <CardBack>
          <p>{description}</p>
          {stack.length > 0 && (
            <p style={{ marginTop: '0.5rem' }}>
              {stack.join(' · ')}
            </p>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View project
            </a>
          )}
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}
