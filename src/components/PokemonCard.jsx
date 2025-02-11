import { useNavigate } from "react-router-dom";
import { Card, CardButton, PokemonImg } from "../styles/style";
import { useCardActions } from "../utils/usePokeCardManager";

const PokemonCard = ({ card, text }) => {
  const { img_url, id, korean_name } = card;
  const { addPokeCard, removePokeCard } = useCardActions();
  const navigate = useNavigate();

  // 쿼리스트링
  const handleDetail = () => {
    navigate(`/detail?pid=${id}`);
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
