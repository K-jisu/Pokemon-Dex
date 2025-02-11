import React from "react";
import { GoToDexButton, HomeWrapper, PokemonLogo } from "../styles/style";

const Home = () => {
  return (
    <HomeWrapper>
      <PokemonLogo src="/src/assets/pokemon-logo.png" alt="pokemon-logo" />
      <img src="/src/assets/homepikachu.png" alt="pikachu" />
      <GoToDexButton to={"dex"}>포켓몬 도감 시작하기</GoToDexButton>
    </HomeWrapper>
  );
};

export default Home;
