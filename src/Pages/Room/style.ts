import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fromLeft = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fromRight = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

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
  width: 98rem;
  height: 70rem;
  background-color: var(--chat-bg);
  animation: ${showContainer} 0.5s;
  position: relative;

  @media (max-width: 610px) and (max-height: 824px) and (orientation: portrait) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  background-color: var(--header-gray);
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`;

export const Footer = styled.form`
  width: 100%;
  height: 6.2rem;
  background-color: var(--footer-gray);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 1.7rem;
`;

export const MessageBox = styled.div`
  width: 100%;
  height: calc(100% - 6.2rem);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 7.2rem 9% 0 9%;
`;

export const Return = styled(Link)`
  width: 3rem;
  height: 3rem;
  color: var(--header-icon);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: 2rem;

  svg {
    width: 2.2rem;
    height: 1.8rem;
  }

  &:hover {
    background-color: var(--darker-detail-gray);
  }
`;

export const RoomInfo = styled.div`
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;

  h6 {
    font-size: 1.6rem;
    color: var(--white);
  }

  span {
    font-size: 1.3rem;
    color: var(--white60);
    margin-left: 0.3rem;
  }
`;

export const Input = styled.input`
  padding: 0.9rem 1.2rem 1.1rem;
  background-color: var(--input);
  border-radius: 10rem;
  color: var(--white);
  width: 82%;
  font-size: 1.4rem;
`;

export const Send = styled.button`
  width: 3.9rem;
  height: 3.9rem;
  color: var(--icon);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: 2rem;

  &:hover {
    background-color: var(--darker-detail-gray);
  }
`;

export const IncomingMessage = styled.div`
  color: var(--white);
  background-color: var(--incoming-message);
  padding: 0.6rem 3.7rem 0.8rem 0.9rem;
  width: fit-content;
  max-width: 50rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  margin-bottom: 0.3rem;
  word-wrap: break-word;
  animation: ${fromLeft} 0.5s;
  position: relative;

  span {
    color: var(--white60);
    margin-left: 6px;
    font-size: 1.1rem;
    height: 1.5rem;
    position: absolute;
    right: 4px;
    bottom: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -0.8rem;
    top: 0;
    width: 0;
    height: 0;
    border-top: 10px solid var(--incoming-message);
    border-left: 14px solid transparent;
  }

  @media (max-width: 610px) {
    max-width: 100%;
  }
`;

export const OutgoingMessage = styled(IncomingMessage)`
  background-color: var(--outgoing-message);
  margin-left: auto;
  animation: ${fromRight} 0.5s;

  &::after {
    content: "";
    position: absolute;
    left: unset;
    right: -0.8rem;
    top: 0;
    width: 0;
    height: 0;
    border-top: 10px solid var(--outgoing-message);
    border-left: 14px solid transparent;
    transform: scaleX(-1);
  }
`;
