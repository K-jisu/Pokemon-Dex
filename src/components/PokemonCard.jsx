import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 220px;
  height: 320px;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 180px;
  height: auto;
`;

const Button = styled.button`
  width: 70px;
  background-color: #f55151;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonCard = ({ card, text, cardMethod }) => {
  const navigate = useNavigate();

  // 쿼리스트링
  const handleDetail = () => {
    navigate(`/detail?pid=${card.id}`);
  };

  return (
    <Card onClick={handleDetail}>
      <Img src={card.img_url} alt={card.korean_name} />
      <h4>{card.korean_name}</h4>
      <p>No.{String(card.id).padStart(3, "0")}</p>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          return cardMethod(card);
        }}
      >
        {text}
      </Button>
    </Card>
  );
};

export default PokemonCard;
