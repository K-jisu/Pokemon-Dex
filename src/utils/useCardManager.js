import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import Swal from "sweetalert2";

const useCardManager = () => {
  const [data, setData] = useState(getLocalStorage("pocketMon") || []);

  const addCard = (card) => {
    if (data.length < 6) {
      setData((prev) => {
        if (prev.some((item) => item.id === card.id)) {
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "같은 포켓몬은 잡을 수 없습니다.",
            showConfirmButton: false,
            timer: 600,
          });
          return prev;
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "포켓몬을 잡았습니다!",
            showConfirmButton: false,
            timer: 600,
          });
          setLocalStorage("pocketMon", [...prev, card]);
          return [...prev, card];
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "포켓몬은 6개만 잡을 수 있습니다.",
        showConfirmButton: false,
        timer: 600,
      });
      return;
    }
  };

  const removeCard = (card) => {
    setData((prev) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "포켓몬을 놓아줬습니다.",
        showConfirmButton: false,
        timer: 600,
      });
      const filteredPocketmon = prev.filter((item) => item.id !== card.id);
      setLocalStorage("pocketMon", filteredPocketmon);
      return filteredPocketmon;
    });
  };

  return { data, addCard, removeCard };
};

export default useCardManager;
