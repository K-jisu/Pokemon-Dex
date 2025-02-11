import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";
import { useSelector } from "react-redux";
import { Body, DetailButton, DetailImg } from "../styles/style";
import { useCardActions } from "../utils/usePokeCardManager";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("pid");
  const card = MOCK_DATA.find((item) => item.id === Number(pid));
  const { img_url, korean_name, types, description } = card;
  const pokemonCards = useSelector((state) => state.pokemon);
  const { addPokeCard, removePokeCard } = useCardActions();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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
