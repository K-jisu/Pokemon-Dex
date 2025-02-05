import { PokemonContext } from "./context/PokemonContext";
import Router from "./shared/Router";
import "./styles/reset.css";
import { createGlobalStyle } from "styled-components";
import useCardManager from "./utils/useCardManager";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "pixelroborobo";
    src: url("/src/fonts/pixelroborobo.otf") format('truetype');
  }
  @font-face {
    font-family: "Silver";
    src: url("/src/fonts/Silver.ttf") format('truetype');
  }
  body{
    font-family: 'Silver', sans-serif;
    font-size: 30px;
    background-color: #ffac59;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const { data, addCard, removeCard } = useCardManager();

  return (
    <>
      <PokemonContext.Provider value={{ data, addCard, removeCard }}>
        <GlobalStyle />
        <Router />
      </PokemonContext.Provider>
    </>
  );
}

export default App;
