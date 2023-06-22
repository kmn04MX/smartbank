import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components"; /* Se necesita encapsular todos los componentes que van heredar los colores o estilis dependiendo del tema, por eso se encapula la aplicacón en todo el themeprovide */
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherThema from "./Components/SwitcherThema";
import { useState } from "react";



console.log(temaClaro, temaOscuro);

function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () =>{
    setTema((tema) => !tema);
  }
  return (
    <>
    <ThemeProvider theme={tema ? temaClaro: temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherThema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
    </>
  );
}

export default App;
