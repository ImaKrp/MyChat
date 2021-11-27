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

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.form`
  width: 34rem;
  background-color: var(--dark-gray);
  animation: ${showContainer} 0.5s;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.4rem;
  align-items: center;
  color: var(--white);

  h4 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }
  h5 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
  }

  @media (max-width: 412px) and (max-height: 824px) {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  
`;

export const Input = styled.input`
  padding: 0.9rem 1.2rem 1.1rem;
  background-color: var(--input);
  border-radius: 10rem;
  color: var(--white);
  width: 100%;
  font-size: 1.4rem;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  height: 8.4rem;

  label {
    margin-left: 0.7rem;
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  span {
    margin-left: 0.7rem;
    font-size: 1.2rem;
    animation: ${opacity} 0.5s;
    color: var(--error);
  }
`;

export const Submit = styled.button`
  padding: 1rem 2.4rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 0.3rem;
  margin-top: 1rem;
  background-color: var(--highlight);
  color: var(--dim-gray);
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
