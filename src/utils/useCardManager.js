import { useState } from "react";

const useCardManager = () => {
  const [data, setData] = useState([]);

  const addCard = (card) => {
    if (data.length < 6) {
      setData((prev) => [...prev, card]);
    } else {
      alert("포켓몬은 6개만 담을 수 있습니다.");
      return;
    }
  };

  const removeCard = () => {};

  return { data, addCard };
};

export default useCardManager;
