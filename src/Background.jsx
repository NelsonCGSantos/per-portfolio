import styled, { keyframes } from 'styled-components';

const gradientAnim = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.background}
  );
  background-size: 600% 600%;
  animation: ${gradientAnim} 15s ease infinite;
  z-index: -1;
`;

export default Background;
