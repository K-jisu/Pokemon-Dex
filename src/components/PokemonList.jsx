import { useContext } from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 8px 6px 1px 1px rgb(118 101 85 / 38%);

  border-radius: 8px;
  padding: 20px;
  gap: 15px;
`;

const PokemonList = () => {
  const { addCard } = useContext(PokemonContext);
  return (
    <CardContainer>
      {MOCK_DATA.map((card) => {
        return (
          <PokemonCard
            key={card.id}
            card={card}
            text="추가"
            cardMethod={addCard}
          />
        );
      })}
    </CardContainer>
  );
};

export default PokemonList;
