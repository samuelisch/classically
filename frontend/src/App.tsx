import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { fetchEverything } from "./reducers/dumpSlice";
import { useAppDispatch } from "./reducers/hooks";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEverything());
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
