// src/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  margin: 1.5rem 0;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 20px;      /* increased thickness */
  background: ${({ theme }) => theme.text}33;  /* 20% opacity */
  border-radius: 10px;
  overflow: hidden;
`;

const BarFiller = styled.div`
  height: 100%;
  width: ${({ level }) => level}%;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  transition: width 1s ease-in-out;
`;

export default function Skills({ skills }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {skills.map(({ name, level }) => (
        <BarContainer key={name}>
          <Label>
            <span>{name}</span>
            <span>level {level}</span>
          </Label>
          <BarBackground>
            <BarFiller level={visible ? level : 0} />
          </BarBackground>
        </BarContainer>
      ))}
    </div>
  );
}
