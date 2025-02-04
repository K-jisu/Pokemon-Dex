import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c1c2c1;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  padding-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const PocketBall = styled.img`
  width: 150px;
  height: auto;
`;

const H3 = styled.h3`
  font-size: 20px;
  margin: 20px;
`;

const Dashboard = () => {
  const { data, removeCard } = useContext(PokemonContext);

  const emptyPoketBall = Array.from({ length: 6 });

  return (
    <Header>
      <H3>나만의 포켓몬</H3>
      <CardContainer>
        {/* 맵을 돌기 전에 6번 돌아서 포켓볼 카드 보여주기  */}
        {emptyPoketBall.map((_, idx) => {
          if (data[idx]) {
            return (
              <PokemonCard
                key={data[idx].id}
                card={data[idx]}
                text="삭제"
                cardMethod={removeCard}
              />
            );
          } else {
            return (
              <PocketBall
                src="/src/assets/poketball_glossy.png"
                alt="poketball"
              />
            );
          }
        })}
      </CardContainer>
    </Header>
  );
};

export default Dashboard;
