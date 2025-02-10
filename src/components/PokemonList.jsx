import MOCK_DATA from "../data/MOCK_DATA";
import { ListCardContainer } from "../styles/style";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <ListCardContainer>
      {MOCK_DATA.map((card) => {
        return <PokemonCard key={card.id} card={card} text="추가" />;
      })}
    </ListCardContainer>
  );
};

export default PokemonList;
