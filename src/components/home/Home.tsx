import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContextWrapper";

import ViewedComposers from "./ViewedComposers";
import ViewedWorks from "./ViewedWorks";
import RandomWorks from "./RandomWorks";

const StyledContainer = styled.div`
  height: 100%;
  background: ${(props) => props.theme.background};
  transition: background 0.1s;
  color: ${(props) => props.theme.color};
  padding: 20px;
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledContainer theme={theme}>
      <ViewedWorks />
      <ViewedComposers />
      <RandomWorks />
    </StyledContainer>
  );
};

export default Home;
