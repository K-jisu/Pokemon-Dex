import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
import {
  DashboardCardContainer,
  Header,
  PikachuImg,
  PocketBall,
} from "../styles/style";

const Dashboard = () => {
  const data = useSelector((state) => state.pokemon);

  // 포켓볼 담을 빈 배열 6개 준비
  const emptyPoketBall = Array.from({ length: 6 });

  return (
    <Header>
      <DashboardCardContainer>
        <PikachuImg src="/pikachu.png" alt="" />
        {/* 빈배열의 인덱스의 데이터의 값이 있으면 카드 보여주고 없으면 포켓볼 보여주고 */}
        {emptyPoketBall.map((_, idx) => {
          if (data[idx]) {
            return (
              <PokemonCard key={data[idx].id} card={data[idx]} text="삭제" />
            );
          } else {
            return <PocketBall src="/src/assets/poketball_glossy.png" alt="poketball" />;
          }
        })}
      </DashboardCardContainer>
    </Header>
  );
};

export default Dashboard;
