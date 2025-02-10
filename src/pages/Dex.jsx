import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexContainer } from "../styles/style";

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
