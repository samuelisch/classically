import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../reducers/hooks";
import { ThemeContext } from "../../ThemeContextWrapper";
import Popular from "./Popular";

const StyledContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background 0.1s;

  h1 {
    padding: 5px;
  }
`;

const PopularList = () => {
  const { theme } = useContext(ThemeContext);
  const [loaded, setLoaded] = useState(false);
  const { popularList, status } = useAppSelector((state) => state.popular);

  useEffect(() => {
    if (status === "loaded") {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [status]);

  const allPopular = popularList.map((composer: any) => (
    <Popular key={composer.id} composer={composer} />
  ));

  return (
    <StyledContainer theme={theme}>
      <h1>Popular Composers</h1>
      {loaded ? <>{allPopular}</> : <h1>Loading ...</h1>}
    </StyledContainer>
  );
};

export default PopularList;
