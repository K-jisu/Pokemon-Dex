import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { createGlobalStyle } from "styled-components";

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
  const [data, setData] = useState([]);
  // console.log(data)
  return (
    <>
      <GlobalStyle />
      <DexContainer>
        <Dashboard data={data} setData={setData} />
        <PokemonList data = {data} setData={setData} />
      </DexContainer>
    </>
  );
};

export default Dex;
