import { createGlobalStyle } from "styled-components";

import Router from "./Router";


const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
    background: rgb(240, 240, 240);
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
