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
  width: 220px;
  height: 320px;
  justify-content: center;
  gap: 15px;
`;

const Img = styled.img`
  width: 180px;
  height: auto;
`;

const PokemonCard = ({ card, text, cardMethod }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail?pid=${card.id}`);
  };

  return (
    <Card onClick={handleDetail}>
      <Img src={card.img_url} alt={card.korean_name} />
      <h4>{card.korean_name}</h4>
      <p>No.{card.id}</p>
      <button
        onClick={(e) => {
          // e.preventDefault();
          e.stopPropagation();
          return cardMethod(card);
        }}
      >
        {text}
      </button>
    </Card>
  );
};

export default PokemonCard;
