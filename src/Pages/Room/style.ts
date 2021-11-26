import styled, { keyframes } from "styled-components";

const showContainer = keyframes`
  0% {
    transform: scale(1.3);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 34rem;
  background-color: var(--dark-gray);
  animation: ${showContainer} 0.5s;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.4rem;
`;
