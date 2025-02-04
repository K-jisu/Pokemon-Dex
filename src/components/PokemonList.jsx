import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #c1c2c1;
  border-radius: 8px;
  padding: 20px;
  gap: 15px;
`;

const PokemonList = ({ data, setData, addCard }) => {
  return (
    <CardContainer>
      {MOCK_DATA.map((card) => {
        return (
          <PokemonCard
            key={card.id}
            card={card}
            data={data}
            setData={setData}
            cardMethod={addCard}
            text="추가"
          />
        );
      })}
    </CardContainer>
  );
};

export default PokemonList;
