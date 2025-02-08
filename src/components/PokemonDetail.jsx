import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import { typeColors } from "../data/TypeColor";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* 타입에 따라 색 변화 */
  background: ${({ $types }) =>
    $types.length > 1
      ? `linear-gradient(135deg, ${typeColors[$types[0]]}, ${
          typeColors[$types[1]]
        })`
      : typeColors[$types[0]] || "#C1C2C1"};
`;
const Img = styled.img`
  width: 300px;
  height: auto;
`;

const Button = styled.button`
  width: 100px;
  background-color: #ffdabb;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data, addCard, removeCard } = useContext(PokemonContext);
  const pid = searchParams.get("pid");
  const card = MOCK_DATA.find((item) => item.id === Number(pid));
  const { img_url, korean_name, types, id, description } = card;

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Body $types={types}>
      <Img src={img_url} alt={korean_name} />
      <h3>{korean_name}</h3>
      <p>타입 : {types.join(", ")}</p>
      <p>{description}</p>
      {data.some((item) => item.id === Number(pid)) ? (
        <Button onClick={() => removeCard(card)}>삭제하기</Button>
      ) : (
        <Button onClick={() => addCard(card)}>추가하기</Button>
      )}
      <Button onClick={goBack}>뒤로가기</Button>
    </Body>
  );
};

export default PokemonDetail;
