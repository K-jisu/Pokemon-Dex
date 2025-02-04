import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled, { createGlobalStyle } from "styled-components";
import useCardManager from "../utils/useCardManager";
import { PokemonContext } from "../context/PokemonContext";

const DexContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px;
`;

const Dex = () => {
  const { data, addCard, removeCard } = useCardManager();

  return (
    <>
      {/* <GlobalStyle /> */}
      <PokemonContext.Provider
        value={{
          data,
          addCard,
          removeCard,
        }}
      >
        <DexContainer>
          <Dashboard />
          <PokemonList />
        </DexContainer>
      </PokemonContext.Provider>
    </>
  );
};

export default Dex;
