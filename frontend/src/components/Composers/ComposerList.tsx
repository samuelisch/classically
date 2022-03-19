import { useEffect, useState } from "react";
import styled from "styled-components";
import Composer from "./Composer";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllComposers } from "../../reducers/composersSlice";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const ComposerList = () => {
  const dispatch = useAppDispatch()
  const [loaded, setLoaded] = useState(false);
  const { composerList, status } = useAppSelector((state) => state.composers);

  useEffect(() => {
    if (status !== "loaded") {
      dispatch(fetchAllComposers());
    }
  }, []);

  useEffect(() => {
    if (status === "loaded") {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [status]);

  const allComposers = composerList.map((composer: any) => {
    return (
      <Composer
        key={composer.id}
        id={composer.id}
        birth={composer.birth}
        death={composer.death}
        name={composer.name}
        completeName={composer.complete_name}
        epoch={composer.epoch}
        portrait={composer.portrait}
      />
    );
  });

  return (
    <StyledContainer>
      <h1>Composer List</h1>
      {loaded ? <StyledList>{allComposers}</StyledList> : <h1>Loading ...</h1>}
    </StyledContainer>
  );
};

export default ComposerList;
