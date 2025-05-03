import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  padding-left: 2rem;
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.primary};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Circle = styled.div`
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  top: 4px;
`;

const Period = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  margin-left: 2.5rem;
  color: ${({ theme }) => theme.text};
`;

export default function Timeline({ events }) {
  return (
    <TimelineContainer>
      {events.map(({ period, content }, i) => (
        <TimelineItem key={i}>
          <Circle />
          <Content>
            <Period>{period}</Period>
            <div>{content}</div>
          </Content>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}
