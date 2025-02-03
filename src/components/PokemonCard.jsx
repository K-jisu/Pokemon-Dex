import React from "react";
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

const PokemonCard = ({ card, data, setData }) => {
  const addCard = () => {
    if (data.length < 6) {
      setData((prev) => [...prev, card]);
    } else {
      alert("포켓몬은 6개만 담을 수 있습니다.");
      return;
    }
  };

  return (
    <Card key={card.id}>
      <img src={card.img_url} alt={card.korean_name} />
      <h4>{card.korean_name}</h4>
      <p>No.{card.id}</p>
      <button onClick={addCard}>추가</button>
    </Card>
  );
};

export default PokemonCard;
