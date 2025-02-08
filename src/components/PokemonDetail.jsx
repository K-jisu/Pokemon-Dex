import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import { typeColors } from "../data/TypeColor";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../redux/slices/pokemonSlice";
import {
  canAddCardSwal,
  overSixCardSwal,
  removeCardSwal,
  sameCardSwal,
} from "../utils/swalModal";

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
  const pid = searchParams.get("pid");
  const card = MOCK_DATA.find((item) => item.id === Number(pid));
  const { img_url, korean_name, types, description } = card;
  const navigate = useNavigate();
  const pokemonCards = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  const addPokeCard = (card) => {
    // 6개 이상 추가할 때
    if (pokemonCards.length > 5) {
      return overSixCardSwal();
      // 같은 포켓몬을 잡을 때
    } else if (pokemonCards.some((item) => item.id === card.id)) {
      return sameCardSwal();
    } else {
      canAddCardSwal();
      return dispatch(addCard(card));
    }
  };

  const removePokeCard = (card) => {
    removeCardSwal();
    dispatch(removeCard(card));
  };

  return (
    <Body $types={types}>
      <Img src={img_url} alt={korean_name} />
      <h3>{korean_name}</h3>
      <p>타입 : {types.join(", ")}</p>
      <p>{description}</p>
      {pokemonCards.some((item) => item.id === Number(pid)) ? (
        <Button onClick={() => removePokeCard(card)}>삭제하기</Button>
      ) : (
        <Button onClick={() => addPokeCard(card)}>추가하기</Button>
      )}
      <Button onClick={goBack}>뒤로가기</Button>
    </Body>
  );
};

export default PokemonDetail;
