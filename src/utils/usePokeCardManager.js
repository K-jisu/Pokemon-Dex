import { useDispatch, useSelector } from "react-redux";
import {
  canAddCardSwal,
  overSixCardSwal,
  removeCardSwal,
  sameCardSwal,
} from "./swalModal";
import { addCard, removeCard } from "../redux/slices/pokemonSlice";

export const useCardActions = () => {
  const pokemonCards = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

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

  return { addPokeCard, removePokeCard };
};
