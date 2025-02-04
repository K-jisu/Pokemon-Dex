import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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

const PokemonCard = ({ card, cardMethod, text }) => {
  return (
    <Link to={`/dex/${card.id}`}>
      <Card>
        <img src={card.img_url} alt={card.korean_name} />
        <h4>{card.korean_name}</h4>
        <p>No.{card.id}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            return cardMethod(card);
          }}
        >
          {text}
        </button>
      </Card>
    </Link>
  );
};

export default PokemonCard;
