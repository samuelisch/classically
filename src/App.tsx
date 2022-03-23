import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import spotifyCall from "./apiCalls/spotifyCall";
import { fetchAllComposers } from "./reducers/composersSlice";
import { useAppDispatch } from "./reducers/hooks";
import { fetchPopularComposers } from "./reducers/popularSlice";
import { mode } from './components/assets/utils'

import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
    background: ${mode.background};
    color: ${mode.color};
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    list-style: none;
  }
`;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    spotifyCall.getToken()
  }, [])

  // remove dispatch dump, add cleanup for api calls upon re-render
  // useContext for dark mode
  useEffect(() => {
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
