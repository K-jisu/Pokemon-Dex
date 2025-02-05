import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./localStorage";

const useCardManager = () => {
  const [data, setData] = useState(getLocalStorage("pocketMon") || []);

  const addCard = (card) => {
    if (data.length < 6) {
      setData((prev) => {
        if (prev.some((item) => item.id === card.id)) {
          alert("같은 포켓몬은 잡을 수 없습니다.");
          return prev;
        } else {
          setLocalStorage("pocketMon", [...prev, card]);
          return [...prev, card];
        }
      });
    } else {
      alert("포켓몬은 6개만 잡을 수 있습니다.");
      return;
    }
  };

  const removeCard = (card) => {
    setData((prev) => {
      const filteredPocketmon = prev.filter((item) => item.id !== card.id);
      setLocalStorage("pocketMon", filteredPocketmon);
      return filteredPocketmon;
    });
  };

  return { data, addCard, removeCard };
};

export default useCardManager;
