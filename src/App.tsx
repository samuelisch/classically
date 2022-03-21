import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import spotifyCall from "./apiCalls/spotifyCall";
import { fetchAllComposers } from "./reducers/composersSlice";
import { fetchEverything } from "./reducers/dumpSlice";
import { useAppDispatch } from "./reducers/hooks";
import { fetchPopularComposers } from "./reducers/popularSlice";

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

  const [token, setToken] = useState('');

  useEffect(() => {
    spotifyCall
      .login()
      .then(token => {
        console.log(token);
      })
  }, [])

  useEffect(() => {
    dispatch(fetchEverything());
    dispatch(fetchAllComposers());
    dispatch(fetchPopularComposers());
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
