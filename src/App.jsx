import Router from "./shared/Router";
import "./styles/reset.css";
import { createGlobalStyle } from "styled-components";
import PokemonProvider from "./context/PokemonProvider";

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
  return (
    <>
      <PokemonProvider>
        <GlobalStyle />
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
