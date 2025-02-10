import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../redux/slices/pokemonSlice";
import {
  canAddCardSwal,
  overSixCardSwal,
  removeCardSwal,
  sameCardSwal,
} from "../utils/swalModal";
import { Body, DetailButton, DetailImg } from "../styles/style";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("pid");
  const card = MOCK_DATA.find((item) => item.id === Number(pid));
  const { img_url, korean_name, types, description } = card;
  const navigate = useNavigate();
  const pokemonCards = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

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
      <DetailImg src={img_url} alt={korean_name} />
      <h3>{korean_name}</h3>
      <p>타입 : {types.join(", ")}</p>
      <p>{description}</p>
      {pokemonCards.some((item) => item.id === Number(pid)) ? (
        <DetailButton onClick={() => removePokeCard(card)}>
          삭제하기
        </DetailButton>
      ) : (
        <DetailButton onClick={() => addPokeCard(card)}>추가하기</DetailButton>
      )}
      <DetailButton onClick={goBack}>뒤로가기</DetailButton>
    </Body>
  );
};

export default PokemonDetail;
