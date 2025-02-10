import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 20px;
`;

const Button = styled(Link)`
  width: 220px;
  background-color: #f55151;
  border: none;
  border-radius: 8px;
  font-family: "Silver", sans-serif;
  font-size: 30px;
  padding-top: 12px;
  transition: 0.3s ease-out;
  color: black;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const pulse = keyframes`
  0% {
    transform: rotate(30deg) translate(165px, 30px) scale(1);
  }
  50% {
    transform: rotate(30deg) translate(165px, 30px) scale(1.1);
  }
  100% {
    transform: rotate(30deg) translate(165px, 30px) scale(1);
  }
`;

const PokemonLogo = styled.img`
  width: 500px;
  height: auto;
  transform: rotate(30deg) translate(165px, 30px);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <PokemonLogo src="/pokemon-logo.png" alt="pokemon-logo" />
      <img src="/homepikachu.png" alt="pikachu" />
      <Button to={"dex"}>포켓몬 도감 시작하기</Button>
    </HomeWrapper>
  );
};

export default Home;
