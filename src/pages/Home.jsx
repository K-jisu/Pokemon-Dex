import React from "react";
import { GoToDexButton, HomeWrapper, PokemonLogo } from "../styles/style";

const Home = () => {
  return (
    <HomeWrapper>
      <PokemonLogo src="/pokemon-logo.png" alt="pokemon-logo" />
      <img src="/homepikachu.png" alt="pikachu" />
      <GoToDexButton to={"dex"}>포켓몬 도감 시작하기</GoToDexButton>
    </HomeWrapper>
  );
};

export default Home;
