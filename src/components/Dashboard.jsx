import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c1c2c1;
  border-radius: 8px;
  text-align: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 100px;
`;

const Dashboard = ({ data, removeCard }) => {
  return (
    <Header>
      <h3>나만의 포켓몬</h3>
      <CardContainer>
        {data.map((card) => {
          return (
            <PokemonCard
              key={card.id}
              card={card}
              cardMethod={removeCard}
              text="삭제"
            />
          );
        })}
      </CardContainer>
    </Header>
  );
};

export default Dashboard;
