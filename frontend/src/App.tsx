import React, { useEffect } from "react";
import { fetchAllComposers } from "./reducers/composersSlice";
import { useAppDispatch } from "./reducers/hooks";
import styled, { createGlobalStyle } from "styled-components";

import Router from "./Router";
import Navbar from "./components/navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
    background: rgb(240, 240, 240);
    max-width: 1024px;
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
