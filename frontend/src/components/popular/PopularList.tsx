import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../reducers/hooks";
import Popular from "./Popular";

const StyledContainer = styled.div`
  h1 {
    padding: 5px;
  }
`

const PopularList = () => {
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
    <Popular
      key={composer.id} 
      id={composer.id}
      birth={composer.birth}
      death={composer.death}
      name={composer.name}
      complete_name={composer.complete_name}
      epoch={composer.epoch}
      portrait={composer.portrait}
    />
  ))

  return (
    <StyledContainer>
      <h1>Popular Composers</h1>
      {loaded ? (
        <>
          {allPopular}
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </StyledContainer>
  )
}

export default PopularList