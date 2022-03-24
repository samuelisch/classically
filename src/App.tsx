import { useContext, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import spotifyCall from "./apiCalls/spotifyCall";
import { fetchAllComposers } from "./reducers/composersSlice";
import { useAppDispatch } from "./reducers/hooks";
import { fetchPopularComposers } from "./reducers/popularSlice";
import Router from "./Router";
import { ThemeContext } from "./ThemeContextWrapper";

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    list-style: none;
  }
`;

const StyledContainer = styled.div`
  background: ${props => props.theme.background};
`

const App = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    spotifyCall.getToken()
  }, [])

  useEffect(() => {
    dispatch(fetchAllComposers());
    dispatch(fetchPopularComposers());
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <StyledContainer theme={theme}>
        <Router />
      </StyledContainer>
    </>
  );
};

export default App;
