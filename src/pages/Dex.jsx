import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { createGlobalStyle } from "styled-components";
import useCardManager from "../utils/useCardManager";

const DexContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px;
`;

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #FFAC59;
  }
`;

const Dex = () => {
  const { data, addCard } = useCardManager();

  return (
    <>
      <GlobalStyle />
      <DexContainer>
        <Dashboard data={data}  />
        <PokemonList data={data}  addCard={addCard} />
      </DexContainer>
    </>
  );
};

export default Dex;
