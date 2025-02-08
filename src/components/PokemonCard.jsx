import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addCard, removeCard } from "../redux/slices/pokemonSlice";
import {
  canAddCardSwal,
  overSixCardSwal,
  removeCardSwal,
  sameCardSwal,
} from "../utils/swalModal";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 175px;
  height: 295px;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border: 1px solid #6c6c6c26;
  box-shadow: 3px 1px 1px 1px rgb(118 101 85 / 38%);
  z-index: 1;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 180px;
  height: auto;
`;

const Button = styled.button`
  width: 70px;
  background-color: #f55151;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  transition: 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonCard = ({ card, text }) => {
  const pokemonCards = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 쿼리스트링
  const handleDetail = () => {
    navigate(`/detail?pid=${card.id}`);
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
    <Card onClick={handleDetail}>
      <Img src={card.img_url} alt={card.korean_name} />
      <h4>{card.korean_name}</h4>
      <p>No.{String(card.id).padStart(3, "0")}</p>
      {text === "추가" ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            return addPokeCard(card);
          }}
        >
          {text}
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            return removePokeCard(card);
          }}
        >
          {text}
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;
