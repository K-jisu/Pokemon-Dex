import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCard, removeCard } from "../redux/slices/pokemonSlice";
import {
  canAddCardSwal,
  overSixCardSwal,
  removeCardSwal,
  sameCardSwal,
} from "../utils/swalModal";
import { Card, CardButton, PokemonImg } from "../styles/style";

const PokemonCard = ({ card, text }) => {
  const { img_url, id, korean_name } = card;
  const pokemonCards = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 쿼리스트링
  const handleDetail = () => {
    navigate(`/detail?pid=${id}`);
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
      <PokemonImg src={img_url} alt={korean_name} />
      <h4>{korean_name}</h4>
      <p>No.{String(id).padStart(3, "0")}</p>
      {text === "추가" ? (
        <CardButton
          onClick={(e) => {
            e.stopPropagation();
            return addPokeCard(card);
          }}
        >
          {text}
        </CardButton>
      ) : (
        <CardButton
          onClick={(e) => {
            e.stopPropagation();
            return removePokeCard(card);
          }}
        >
          {text}
        </CardButton>
      )}
    </Card>
  );
};

export default PokemonCard;
