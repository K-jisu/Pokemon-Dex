import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const PokemonDetail = () => {
  const params = useParams();
  const { img_url, korean_name, types, id, description } = MOCK_DATA.find(
    (item) => item.id === Number(params.pid)
  );
  console.log(types);

  return (
    <Body>
      <img src={img_url} alt={korean_name} />
      <h3>{korean_name}</h3>
      <p>타입 : {types}</p>
      <p>{description}</p>
      <Link to={"/dex"}>
        <button>뒤로가기</button>
      </Link>
    </Body>
  );
};

export default PokemonDetail;
