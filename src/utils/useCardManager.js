import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./localStorage";

const useCardManager = () => {
  const [data, setData] = useState(getLocalStorage("pocketMon") || []);

  const addCard = (card) => {
    if (data.length >= 6) return "cardOver6";
    if (data.some((item) => item.id === card.id)) return "sameCard";
    const newData = [...data, card];
    setLocalStorage("pokeMon", newData);
    setData(newData);
  };

  const removeCard = (card) => {
    const newdata = data.filter((item) => item.id !== card.id);
    setLocalStorage("pokeMon", newdata);
    setData(newdata);
  };

  return { data, addCard, removeCard };
};

export default useCardManager;
