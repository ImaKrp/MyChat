import styled, { keyframes } from "styled-components";

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const innerLoader = keyframes`
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
`;

const opacity = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 1;
  }
`;

export const Loader = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.4rem solid #fff;
  animation: ${loader} 2s infinite ease;
`;

export const InnerLoader = styled.div`
  width: 100%;
  background-color: #fff;
  animation: ${innerLoader} 2s infinite ease-in;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  animation: ${opacity} 2s infinite ease-in;
`;

export const Status = styled.span`
  color: #fff;
  font-size: 2rem;
`;
