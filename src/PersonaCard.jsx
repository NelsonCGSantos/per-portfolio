import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  perspective: 1000px;
  width: 400px;
  height: 250px;
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
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
`;

const CardFront = styled(CardFace)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardBack = styled(CardFace)`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transform: rotateY(180deg);
  font-size: 1rem;

  a {
    margin-top: 1rem;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function PersonaCard({ title, description, link }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(f => !f)}>
      <CardInner flipped={flipped}>
        <CardFront>{title}</CardFront>
        <CardBack>
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
          >
            View on GitHub Pages →
          </a>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}
