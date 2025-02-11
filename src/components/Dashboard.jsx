import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const Header = styled.header`
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const PocketBall = styled.img`
  width: 150px;
  height: auto;
`;

const PikachuImg = styled.img`
  width: 222px;
  position: absolute;
  left: 90px;
  z-index: 0;
`;

const Dashboard = () => {
  const data = useSelector((state) => state.pokemon);

  // 포켓볼 담을 빈 배열 6개 준비
  const emptyPoketBall = Array.from({ length: 6 });

  return (
    <Header>
      <CardContainer>
        <PikachuImg src="/pikachu.png" alt="" />
        {/* 빈배열의 인덱스의 데이터의 값이 있으면 카드 보여주고 없으면 포켓볼 보여주고 */}
        {emptyPoketBall.map((_, idx) => {
          if (data[idx]) {
            return (
              <PokemonCard key={data[idx].id} card={data[idx]} text="삭제" />
            );
          } else {
            return <PocketBall src="/poketball_glossy.png" alt="poketball" />;
          }
        })}
      </CardContainer>
    </Header>
  );
};

export default Dashboard;
