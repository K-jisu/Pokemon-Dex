import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 150px;
  height: 250px;
  justify-content: center;
  gap: 15px;
`;

const PokemonCard = ({ card, text, cardMethod }) => {
  const { data, addCard, removeCard } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail?pid=${card.id}`);
  };

  return (
    <Card onClick={handleDetail}>
      <img src={card.img_url} alt={card.korean_name} />
      <h4>{card.korean_name}</h4>
      <p>No.{card.id}</p>
      {data.some((item) => item.id === card.id) ? (
        <button
          onClick={(e) => {
            // e.preventDefault();
            e.stopPropagation();
            return removeCard(card);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={(e) => {
            // e.preventDefault();
            e.stopPropagation();
            return addCard(card);
          }}
        >
          추가
        </button>
      )}
    </Card>
  );
};

export default PokemonCard;
