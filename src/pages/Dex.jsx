import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const DexContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px;
`;

const Dex = () => {
  return (
    <>
      <DexContainer>
        <Dashboard />
        <PokemonList />
      </DexContainer>
    </>
  );
};

export default Dex;
