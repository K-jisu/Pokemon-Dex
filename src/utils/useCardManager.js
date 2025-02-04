import { useState } from "react";

const useCardManager = () => {
  const [data, setData] = useState([]);

  const addCard = (card) => {
    if (data.length < 6) {
      setData((prev) => {
        if (prev.some((item) => item.id === card.id)) {
          alert("같은 포켓몬은 잡을 수 없습니다.");
          return prev;
        } else {
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
      return prev.filter((item) => item.id !== card.id);
    });
  };

  return { data, addCard, removeCard };
};

export default useCardManager;
