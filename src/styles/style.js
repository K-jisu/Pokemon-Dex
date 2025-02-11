import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { typeColors } from "../data/TypeColor";

// --------------------- Home css
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 20px;
`;

export const GoToDexButton = styled(Link)`
  width: 220px;
  background-color: #f55151;
  border: none;
  border-radius: 8px;
  font-family: "Silver.ttf", sans-serif;
  font-size: 30px;
  padding-top: 12px;
  transition: 0.3s ease-out;
  color: black;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const pulse = keyframes`
  0% {
    transform: rotate(30deg) translate(165px, 30px) scale(1);
  }
  50% {
    transform: rotate(30deg) translate(165px, 30px) scale(1.1);
  }
  100% {
    transform: rotate(30deg) translate(165px, 30px) scale(1);
  }
`;

export const PokemonLogo = styled.img`
  width: 500px;
  height: auto;
  transform: rotate(30deg) translate(165px, 30px);
  animation: ${pulse} 2s ease-in-out infinite;
`;

// --------------------- Dex css
export const DexContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px;
`;

// --------------------- Dashboard css

export const Header = styled.header`
  width: 100%;
  height: 355px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 6px 1px 1px rgb(118 101 85 / 38%);
`;

export const DashboardCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const PocketBall = styled.img`
  width: 150px;
  height: auto;
`;

export const PikachuImg = styled.img`
  width: 222px;
  position: absolute;
  left: 90px;
  z-index: 0;
`;

// --------------------- PokemonList css
export const ListCardContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 8px 6px 1px 1px rgb(118 101 85 / 38%);
  border-radius: 8px;
  padding: 20px;
  gap: 15px;
`;

// --------------------- PokemonCard css

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 175px;
  height: 295px;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border: 1px solid #6c6c6c26;
  box-shadow: 3px 1px 1px 1px rgb(118 101 85 / 38%);
  z-index: 1;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonImg = styled.img`
  width: 180px;
  height: auto;
`;

export const CardButton = styled.button`
  width: 70px;
  background-color: #f55151;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  transition: 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

// --------------------- PokemonDetail css

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* 타입에 따라 색 변화 */
  background: ${({ $types }) =>
    $types.length > 1
      ? `linear-gradient(135deg, ${typeColors[$types[0]]}, ${
          typeColors[$types[1]]
        })`
      : typeColors[$types[0]] || "#C1C2C1"};
`;
export const DetailImg = styled.img`
  width: 300px;
  height: auto;
`;

export const DetailButton = styled.button`
  width: 100px;
  background-color: #ffdabb;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  transition: 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
